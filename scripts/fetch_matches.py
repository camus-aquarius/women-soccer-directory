#!/usr/bin/env python3
"""Fetch upcoming women's league fixtures from official schedule pages into matches.json.

The scraper intentionally fails closed: if neither official source yields a parseable
upcoming fixture, it exits without overwriting the existing JSON file.
"""
from __future__ import annotations
import json, re, sys
from datetime import date, datetime, timedelta
from pathlib import Path
from urllib.parse import urljoin
from zoneinfo import ZoneInfo

import pandas as pd
import requests
import re
from urllib.parse import urljoin
from io import StringIO

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "matches.json"
JST = ZoneInfo("Asia/Tokyo")
TODAY = datetime.now(JST).date()
HORIZON = TODAY + timedelta(days=120)
HEADERS = {"User-Agent": "WomensFootballGuideScheduleBot/1.0 (fixture schedule; contact via repository issues)"}
WE_URL = "https://data.weleague.jp/SFMS01/search?competition_frame_ids=70&competition_ids=734&competition_years=2026"
NADESHIKO_URLS = [
    ("なでしこリーグ1部", "https://www.nadeshikoleague.jp/2026/nadeshiko1/"),
    ("なでしこリーグ2部", "https://www.nadeshikoleague.jp/2026/nadeshiko2/"),
]

TEAM_NAMES = {
    "ﾏｲ仙台": "マイナビ仙台レディース", "マイ仙台": "マイナビ仙台レディース",
    "浦和": "三菱重工浦和レッズレディース", "相模原": "ノジマステラ神奈川相模原",
    "東京NB": "日テレ・東京ヴェルディベレーザ", "AC長野": "AC長野パルセイロ・レディース",
    "Ｃ大阪": "セレッソ大阪ヤンマーレディース", "C大阪": "セレッソ大阪ヤンマーレディース",
    "千葉Ｌ": "ジェフ千葉レディース", "千葉L": "ジェフ千葉レディース",
    "大宮": "RB大宮アルディージャWOMEN", "EL埼玉": "ちふれASエルフェン埼玉",
    "広島": "サンフレッチェ広島レジーナ", "新潟Ｌ": "アルビレックス新潟レディース",
    "Ｉ神戸": "INAC神戸レオネッサ", "I神戸": "INAC神戸レオネッサ",
}


def text(value) -> str:
    if pd.isna(value): return ""
    return re.sub(r"\s+", " ", str(value)).strip()


def parse_date(value: str, default_year: int | None = None) -> date | None:
    value = text(value).replace("年", "/").replace("月", "/").replace("日", "")
    # 2026/11/7, 26/11/07, 2026-11-07
    m = re.search(r"(?<!\d)(20\d{2}|\d{2})[/-](\d{1,2})[/-](\d{1,2})", value)
    if m:
        y = int(m.group(1)); y = y if y >= 100 else 2000 + y
        try: return date(y, int(m.group(2)), int(m.group(3)))
        except ValueError: return None
    # 11/7 or 11月7日
    m = re.search(r"(?<!\d)(\d{1,2})[/-](\d{1,2})(?!\d)", value)
    if not m: m = re.search(r"(\d{1,2})/(\d{1,2})", value)
    if m:
        month, day = int(m.group(1)), int(m.group(2))
        year = default_year or TODAY.year
        if month < TODAY.month - 6: year += 1
        try: return date(year, month, day)
        except ValueError: return None
    return None


def normalize_team(value: str) -> str:
    value = text(value).replace("　", " ")
    value = re.sub(r"\s+", " ", value)
    return TEAM_NAMES.get(value, value)


def find_col(columns, patterns):
    for i, col in enumerate(columns):
        label = text(col).replace(" ", "")
        if any(re.search(p, label, re.I) for p in patterns): return i
    return None


def time_value(value: str) -> str:
    m = re.search(r"(?<!\d)(\d{1,2}):(\d{2})(?!\d)", text(value))
    return f"{int(m.group(1)):02d}:{m.group(2)}" if m else ""


def split_teams(value: str):
    value = text(value)
    # Schedule tables commonly use hyphen/en dash between home and away.
    parts = re.split(r"\s+(?:-|－|–|—|―|vs\.?|ＶＳ)\s+", value, maxsplit=1, flags=re.I)
    if len(parts) == 2:
        return normalize_team(parts[0]), normalize_team(parts[1])
    return "", ""


def records_from_tables(url: str, league: str, we_mode: bool):
    response = requests.get(url, headers=HEADERS, timeout=30)
    response.raise_for_status()

    response.encoding = (
        "utf-8" if "nadeshikoleague.jp" in url
        else (response.apparent_encoding or response.encoding)
    )

    # なでしこリーグのページ構造を調査
    if not we_mode:
        html = response.text

        print(f"DEBUG LEAGUE: {league}")
        print(f"DEBUG URL: {response.url}")
        print(f"DEBUG HTTP: {response.status_code}")
        print(f"DEBUG HTML length: {len(html)}")

        # JavaScriptファイル
        script_urls = re.findall(
            r"<script\b[^>]*?\bsrc\s*=\s*[\"']([^\"']+)",
            html,
            flags=re.IGNORECASE
        )

        print("DEBUG SCRIPT FILES:")
        for item in script_urls:
            print(" ", urljoin(response.url, item))

        # iframe
        iframe_urls = re.findall(
            r"<iframe\b[^>]*?\bsrc\s*=\s*[\"']([^\"']+)",
            html,
            flags=re.IGNORECASE
        )

        print("DEBUG IFRAMES:")
        for item in iframe_urls:
            print(" ", urljoin(response.url, item))

        # 日程データに関係する記述
        for keyword in ("match", "schedule", "json", "api", "日程"):
            hits = list(re.finditer(
                re.escape(keyword),
                html,
                flags=re.IGNORECASE
            ))

            print(f"DEBUG KEYWORD {keyword}: {len(hits)}")

            for hit in hits[:3]:
                snippet = re.sub(
                    r"\s+", " ",
                    html[max(0, hit.start() - 100):hit.start() + 200]
                )
                print("  ", snippet)
        
        # 日程表示用JavaScriptの中身を調査
        js_url = urljoin(
            response.url,
            "/system/js/nadeshiko_core_2026.js?_=20260324"
        )

        js_response = requests.get(
            js_url,
            headers=HEADERS,
            timeout=30
        )
        js_response.raise_for_status()
        js = js_response.text

        print(f"DEBUG CORE JS URL: {js_response.url}")
        print(f"DEBUG CORE JS HTTP: {js_response.status_code}")
        print(f"DEBUG CORE JS LENGTH: {len(js)}")

        for keyword in (
            "ajax", "fetch(", "XMLHttpRequest",
            "match", "schedule", ".json",
            ".html", "nadeshiko1", "nadeshiko2"
        ):
            hits = list(re.finditer(
                re.escape(keyword),
                js,
                flags=re.IGNORECASE
            ))

            print(f"DEBUG CORE JS {keyword}: {len(hits)}")

            for hit in hits[:2]:
                snippet = re.sub(
                    r"\s+", " ",
                    js[max(0, hit.start() - 150):hit.start() + 300]
                )
                print("  ", snippet)

    tables = pd.read_html(StringIO(response.text))

    records = []
    for table in tables:
        cols = [text(c) for c in table.columns]
        date_i = find_col(cols, [r"試合日", r"開催日", r"日付", r"年月日"])
        time_i = find_col(cols, [r"K/?O", r"キックオフ", r"開始時刻", r"時刻"])
        home_i = find_col(cols, [r"ホーム"])
        away_i = find_col(cols, [r"アウェイ", r"アウェー"])
        venue_i = find_col(cols, [r"スタジアム", r"会場"])
        card_i = find_col(cols, [r"対戦カード", r"対戦"])
        # WE's data table sometimes presents the team names in home/away columns.
        if date_i is None: date_i = 3 if we_mode and len(cols) >= 9 else None
        if date_i is None: continue
        for _, row in table.iterrows():
            vals = [text(v) for v in row.tolist()]
            if date_i >= len(vals): continue
            d = parse_date(vals[date_i], 2026 if not we_mode else None)
            if not d or d < TODAY or d > HORIZON: continue
            home = normalize_team(vals[home_i]) if home_i is not None and home_i < len(vals) else ""
            away = normalize_team(vals[away_i]) if away_i is not None and away_i < len(vals) else ""
            if (not home or not away) and card_i is not None and card_i < len(vals):
                home, away = split_teams(vals[card_i])
            # fallback for WE League Data Site known column layout
            if we_mode and (not home or not away) and len(vals) >= 8:
                home, away = normalize_team(vals[5]), normalize_team(vals[7])
            if not home or not away or home.lower() in {"home", "ホーム"} or away.lower() in {"away", "アウェイ"}: continue
            kick = time_value(vals[time_i]) if time_i is not None and time_i < len(vals) else ""
            venue = vals[venue_i] if venue_i is not None and venue_i < len(vals) else ""
            venue = "" if "未定" in venue or venue in {"-", "―", ""} else venue
            if venue in {"ユアスタ", "ユアテックスタジアム仙台"}: venue = "ユアテックスタジアム仙台"
            if venue == "ギオンス": venue = "相模原ギオンスタジアム"
            if venue == "長野Ｕ": venue = "長野Uスタジアム"
            if venue == "フクアリ": venue = "フクダ電子アリーナ"
            source = url
            records.append({
                "id": f"{d.isoformat()}-{re.sub(r'[^a-zA-Z0-9ぁ-んァ-ヶ一-龠]+','',home)[:18]}-{re.sub(r'[^a-zA-Z0-9ぁ-んァ-ヶ一-龠]+','',away)[:18]}",
                "date": d.isoformat(), "time": kick, "league": league,
                "home": home, "away": away, "venue": venue,
                "highlight": "公式日程に掲載された対戦カードです。両チームの直近の戦い方やメンバー情報を確認して観戦ポイントをチェックしましょう。",
                "source": source, "origin": "auto"
            })
    return records


def main():
    collected = []
    errors = []
    for league, url, we_mode in [("WEリーグ", WE_URL, True)] + [(name, url, False) for name, url in NADESHIKO_URLS]:
        try:
            rows = records_from_tables(url, league, we_mode)
            collected.extend(rows)
            print(f"{league}: {len(rows)} upcoming fixture(s)")
        except Exception as exc:
            errors.append(f"{league}: {exc}")
            print(f"WARNING {league}: {exc}", file=sys.stderr)
    # Do not replace a valid file with an empty result or a partial parse from a total source outage.
    unique = {}
    for m in collected: unique[(m["date"], m["home"], m["away"])] = m
    matches = sorted(unique.values(), key=lambda m: (m["date"], m["time"] or "23:59", m["league"]))
    if not matches:
        raise SystemExit("No upcoming fixtures parsed; existing matches.json was left unchanged. Check official page structure/source URLs.")
    payload = {
        "updatedAt": datetime.now(JST).isoformat(timespec="seconds"),
        "sourceStatus": {"WEリーグ": "ok" if not any(e.startswith("WEリーグ:") for e in errors) else "error",
                         "なでしこリーグ": "ok" if not any(e.startswith("なでしこリーグ") for e in errors) else "error"},
        "sources": [WE_URL] + [url for _, url in NADESHIKO_URLS],
        "matches": matches
    }
    OUT.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Wrote {len(matches)} fixtures to {OUT}")
    if errors:
        print("Some sources failed; verify sourceStatus in matches.json:", *errors, sep="\n", file=sys.stderr)

if __name__ == "__main__": main()
