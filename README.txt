女子サッカー選手名鑑サイト：注目試合の自動取得・JSON保存

このパッケージは、既存の index.html / style.css を維持し、app.js を差し替え、
matches.json と GitHub Actions のワークフロー・取得スクリプトを追加します。

【含まれるファイル】
- app.js : matches.json を読み込み、今週の注目試合へ反映
- matches.json : 公開用の試合データ。GitHub Actions が更新します
- scripts/fetch_matches.py : 公式リーグ日程ページから今後の試合を取得して JSON 化
- .github/workflows/update-matches.yml : 毎日12:17 JSTに実行する GitHub Actions

【導入手順】
1. サイトを管理している GitHub リポジトリを開きます。
2. 現在の app.js をバックアップします。
3. このパッケージの app.js で既存 app.js を置き換えます。
4. matches.json をリポジトリのルートに追加します。
5. scripts/fetch_matches.py を追加します。
6. .github/workflows/update-matches.yml を追加します。
7. 変更を commit/push します。
8. GitHub リポジトリの Settings > Actions > General で、Actions がリポジトリ内容を書き込める設定になっているか確認します。
9. Actions タブで「Update women's football fixtures」を開き、「Run workflow」を実行して初回確認します。
10. GitHub Pages で公開している場合、同じリポジトリの matches.json が静的サイトから読み込まれます。

【自動更新について】
- 定期実行は毎日12:17（日本時間）を予定しています。GitHub Actions のスケジュールは混雑等で遅れる場合があります。
- GitHub Actions は公式ページから WEリーグ、なでしこリーグ1部・2部の日程表を取得します。
- 取得結果は matches.json に保存し、差分がある場合だけ GitHub に自動コミットします。
- 公式サイトのHTML構造が変更された場合、取得処理の修正が必要です。
- 取得元のいずれかが失敗しても、もう一方で試合を取得できれば JSON を更新します。全ソースから試合が取得できない場合は、既存JSONを上書きしません。
- なでしこリーグの通常リーグ戦はシーズン終了後に未来の試合が0件になることがあります。試合がないことと取得失敗は別です。
- 試合の「見どころ」は自動取得した日程だけでは公式発表されないため、簡単な一般文を入れています。公式発表の内容として誤認させないでください。

【管理画面との関係】
- matches.json から来たデータは「自動取得」と表示され、ブラウザ内の管理画面からは削除できません。
- 管理画面から追加した試合は、そのブラウザの localStorage に保存されます。GitHub の matches.json には書き込まれません。
- ブラウザからの操作で GitHub に書き込むには、サーバー側の認証機構が別途必要です。このパッケージでは安全性のため GitHub トークンをブラウザに埋め込みません。
- JSON エクスポートは自動取得分と手動登録分の両方を含みます。

【取得元】
WEリーグ データサイト:
https://data.weleague.jp/SFMS01/search?competition_frame_ids=70&competition_ids=734&competition_years=2026

なでしこリーグ1部:
https://www.nadeshikoleague.jp/2026/info_nadeshiko1.html

なでしこリーグ2部:
https://www.nadeshikoleague.jp/2026/info_nadeshiko2.html

公開前に必ず公式サイトの最新日程と各サイトの利用条件を確認してください。
