const players = [
 {id:"yui-hasegawa",image:"images/hasegawa.png",name:"長谷川 唯",reading:"はせがわ ゆい",roman:"YUI HASEGAWA",position:"MF",league:"日本代表・海外",team:"マンチェスター・シティ",tag:"ゲームメイク",description:"正確なパスと判断力で試合を組み立てるミッドフィールダー。",story:"日テレ・ベレーザの育成組織で成長し、国内で経験を積んだ後、海外クラブでプレー。視野の広さと判断力を武器に、世界の舞台で進化を続ける。",source:"https://www.mancity.com/players/yui-hasegawa",sourceLabel:"マンチェスター・シティ公式プロフィール"},
 {id:"hana-takahashi",image:"images/takahashi-hana.png",name:"高橋 はな",reading:"たかはし はな",roman:"HANA TAKAHASHI",position:"DF",league:"WEリーグ",team:"三菱重工浦和レッズレディース",tag:"守備の要",description:"対人守備や空中戦など、最終ラインでの働きに注目。",story:"守備の局面でチームを支えるディフェンダー。代表活動やクラブでの経験など、プレーの歩みは公式プロフィール・インタビューで確認して紹介する。",source:"https://weleague.jp/",sourceLabel:"WEリーグ公式サイト"},
 {id:"yone-nishio",image:"images/nishio-hanon.png",name:"西尾 葉音",reading:"にしお はのん",roman:"HANON NISHIO",position:"FW",league:"WEリーグ",team:"RB大宮アルディージャWOMEN",tag:"アタッカー",description:"前線での動きや攻撃参加に注目したい選手。",story:"攻撃の局面でチームに勢いをもたらすアタッカー。経歴やプレーの特徴は、所属クラブの公式情報を確認したうえで更新する。",source:"https://weleague.jp/clubs/",sourceLabel:"WEリーグ公式・クラブ一覧"},
 {id:"yuki-seno",image:"images/seno-yuki.png",name:"瀬野 有希",reading:"せの ゆき",roman:"YUKI SENO",position:"MF",league:"WEリーグ",team:"ちふれASエルフェン埼玉",tag:"ミッドフィールダー",description:"中盤での展開力や連係に注目。",story:"中盤でチームの攻守をつなぐ選手。具体的なエピソードは、本人インタビューやクラブ発信の情報をもとに追加する。",source:"https://weleague.jp/clubs/",sourceLabel:"WEリーグ公式・クラブ一覧"},
 {id:"chihiro-yamaguchi",name:"山口 千尋",reading:"やまぐち ちひろ",roman:"CHIHIRO YAMAGUCHI",position:"MF",league:"WEリーグ",team:"ジェフ千葉レディース",tag:"中盤",description:"中盤でのプレーと成長の歩みを紹介。",story:"チームの中盤を担うプレーヤー。プロフィールの詳細やこれまでの歩みは、クラブ公式情報で確認してから掲載する。",source:"https://weleague.jp/clubs/",sourceLabel:"WEリーグ公式・クラブ一覧"},
 {id:"miharu-mashiro",image:"images/shinjo-miharu.png",name:"眞城 美春",reading:"ましろ みはる",roman:"MIHARU MASHIRO",position:"MF",league:"WEリーグ",team:"日テレ・東京ヴェルディベレーザ",tag:"若手注目株",description:"これからの成長にも注目したいミッドフィールダー。",story:"次世代の女子サッカーを担う選手の一人として注目。年齢や経歴などの情報は更新頻度が高いため、公式プロフィールで確認して掲載する。",source:"https://weleague.jp/clubs/",sourceLabel:"WEリーグ公式・クラブ一覧"},
 {id:"ai-sasai",name:"笹井 一愛",reading:"ささい ちなり",roman:"CHINARI SASAI",position:"FW",league:"WEリーグ",team:"ノジマステラ神奈川相模原",tag:"フォワード",description:"攻撃での持ち味や得点への関わりに注目。",story:"前線でのプレーに注目したいフォワード。具体的なエピソードは公式インタビューやクラブ発信の情報から確認し、随時追加する。",source:"https://weleague.jp/clubs/",sourceLabel:"WEリーグ公式・クラブ一覧"},
 {id:"sayaka-mitani",name:"三谷 沙也加",reading:"みたに さやか",roman:"SAYAKA MITANI",position:"MF",league:"WEリーグ",team:"AC長野パルセイロ・レディース",tag:"チャンスメイク",description:"地域クラブでの活躍とプレーの特徴を紹介。",story:"クラブでの経験を積み重ねてきたプレーヤー。プロフィールやエピソードは公式資料と照合して編集する。",source:"https://weleague.jp/clubs/",sourceLabel:"WEリーグ公式・クラブ一覧"},
 {id:"naomi-kawasumi",name:"川澄 奈穂美",reading:"かわすみ なほみ",roman:"NAOMI KAWASUMI",position:"FW",league:"WEリーグ",team:"アルビレックス新潟レディース",tag:"経験豊富",description:"豊富な経験を持つアタッカー。",story:"国内外での経験を重ねてきた選手。キャリアの節目や本人の言葉を紹介する際は、公式インタビューなどの一次資料を出典として付ける。",source:"https://weleague.jp/clubs/",sourceLabel:"WEリーグ公式・クラブ一覧"},
 {id:"natsumi-tago",name:"田子 夏海",reading:"たご なつみ",roman:"NATSUMI TAGO",position:"FW",league:"WEリーグ",team:"セレッソ大阪ヤンマーレディース",tag:"アタッカー",description:"攻撃面でのプレーや成長の過程に注目。",story:"前線での活躍に注目したい選手。所属やプロフィールの最新情報はクラブ公式ページで確認してから掲載する。",source:"https://weleague.jp/clubs/",sourceLabel:"WEリーグ公式・クラブ一覧"},
 {id:"yui-narumiya",name:"成宮 唯",reading:"なるみや ゆい",roman:"YUI NARUMIYA",position:"MF",league:"WEリーグ",team:"INAC神戸レオネッサ",tag:"攻撃的MF",description:"創造性のあるプレーや攻撃参加に注目。",story:"攻撃の組み立てやチャンスメイクで注目される選手。プレーの特徴やキャリアを紹介する際は、クラブ公式情報を確認して記載する。",source:"https://weleague.jp/clubs/",sourceLabel:"WEリーグ公式・クラブ一覧"},
 {id:"yoshino-nakashima",image:"images/nakajima-yoshino.png",name:"中嶋 淑乃",reading:"なかしま よしの",roman:"YOSHINO NAKASHIMA",position:"FW",league:"WEリーグ",team:"サンフレッチェ広島レジーナ",tag:"スピード",description:"スピードを生かした攻撃参加に注目。",story:"攻撃の局面で持ち味を発揮するアタッカー。代表歴などの具体的な情報はJFAやクラブの公式プロフィールを出典として確認する。",source:"https://weleague.jp/clubs/",sourceLabel:"WEリーグ公式・クラブ一覧"},
 {id:"yukari-kinga",name:"近賀 ゆかり",reading:"きんが ゆかり",roman:"YUKARI KINGA",position:"DF",league:"なでしこリーグ1部",team:"サンプル登録・要確認",tag:"ディフェンダー",description:"経験豊かな選手の歩みを調べるためのサンプル枠。",story:"このカードはサイトの表示例です。現在の所属先や現役登録状況を確認し、公開前に正しいデータへ更新してください。",source:"https://www.nadeshikoleague.jp/club/",sourceLabel:"なでしこリーグ公式・チーム一覧"},
 {id: "momoko-tanikawa",name: "谷川 萌々子",reading: "たにかわ ももこ",roman: "MOMOKO TANIKAWA",position: "MF",league: "日本代表・海外",team: "FCバイエルン・ミュンヘン",tag: "ミッドフィールダー",description: "高い技術と攻撃センスを持つミッドフィールダー。",story: "日本代表でも活躍するミッドフィールダー。クラブでのプレーや代表活動を通じた成長に注目。所属や経歴の最新情報は、公式プロフィールを確認して掲載する。",source: "https://www.jfa.jp/",sourceLabel: "日本サッカー協会（JFA）公式サイト",birthday: "2005年5月7日",height: "168cm",birthplace: "愛知県名古屋市"},
 {id: "runa-sumiya",name: "角谷 瑠菜",reading: "すみや るな",roman: "RUNA SUMIYA",position: "MF",league: "WEリーグ",team: "ジェフユナイテッド市原・千葉レディース",tag: "ミッドフィールダー",description: "スピードとドリブルを武器とするミッドフィールダー。",story: "ジェフユナイテッド市原・千葉レディースでプレー。クラブ公式プロフィールでは、得意なプレーとしてドリブルが紹介されている。U-17日本女子代表にも選出された選手。",source: "https://jefunited.co.jp/teams/detail/8370",sourceLabel: "ジェフユナイテッド市原・千葉公式プロフィール",birthday: "2009年5月9日",height: "163cm",birthplace: "千葉県",number: "13",image: ""},
 {id: "maika-hamano",name: "浜野 まいか",reading: "はまの まいか",roman: "MAIKA HAMANO",position: "MF",league: "日本代表・海外",team: "チェルシーFCウィメン",tag: "攻撃的MF",description: "高い攻撃力と得点感覚を持ち、前線で存在感を発揮する日本代表選手。",story: "大阪府出身。セレッソ大阪堺レディース、INAC神戸レオネッサを経て、2023年にチェルシーへ加入。スウェーデンのハンマルビーIFやイングランドのトッテナム・ホットスパーへの期限付き移籍も経験。日本代表として国際舞台でも活躍する。",source: "https://www.chelseafc.com/en/teams/profile/maika-hamano",sourceLabel: "チェルシーFC公式プロフィール",birthday: "2004年5月9日",height: "167cm",birthplace: "大阪府",number: "23"},
 {id: "aoba-fujino",name: "藤野 あおば",reading: "ふじの あおば",roman: "AOBA FUJINO",position: "FW",league: "日本代表・海外",team: "マンチェスター・シティWFC",tag: "スピード・攻撃力",description: "スピードとドリブル、鋭いシュートを武器にゴールを狙うアタッカー。",story: "東京都町田市出身。日テレ・東京ヴェルディベレーザで活躍し、2024年にイングランドのマンチェスター・シティへ移籍。2023年のFIFA女子ワールドカップでは、コスタリカ戦で得点を記録。日本代表の攻撃を担う選手の一人として、ドリブルやシュート、チャンスメイクに注目したい。",source: "https://www.mancity.com/players/aoba-fujino",sourceLabel: "マンチェスター・シティ公式プロフィール",birthday: "2004年1月27日",height: "162cm",birthplace: "東京都町田市",number: "20"},
 {id: "risa-shimizu",name: "清水 梨紗",reading: "しみず りさ",roman: "RISA SHIMIZU",position: "DF",league: "日本代表・海外",team: "リバプールFCウィメン",tag: "右サイドバック",description: "守備の安定感と攻撃参加を兼ね備えた、日本代表のディフェンダー。",story: "兵庫県神戸市出身。日テレ・東京ヴェルディベレーザで活躍した後、イングランドへ渡り、ウェストハム・ユナイテッド、マンチェスター・シティを経てリバプールでプレー。右サイドバックを主戦場とし、豊富な運動量と正確な技術を生かした攻守両面のプレーが持ち味。東京オリンピックや女子ワールドカップなど、国際大会でも経験を積んできた。",source: "https://www.liverpoolfc.com/",sourceLabel: "リバプールFC公式サイト",birthday: "1996年6月15日",height: "160cm",birthplace: "兵庫県神戸市",number: "2"},
 {id: "hikaru-kitagawa",name: "北川 ひかる",reading: "きたがわ ひかる",roman: "HIKARU KITAGAWA",position: "DF",league: "日本代表・海外",team: "エヴァートンFC・ウィメン",tag: "左サイドバック",description: "左足のキックと攻撃参加を武器に、守備と攻撃の両面でチームに貢献する日本代表ディフェンダー。",story: "石川県出身。JFAアカデミー福島で育ち、浦和レッズレディース、アルビレックス新潟レディース、INAC神戸レオネッサでプレー。その後、スウェーデンのBKヘッケンを経て、イングランドのエヴァートンFC・ウィメンへ移籍した。左足の技術を生かしたクロスや攻撃参加が持ち味で、パリ2024オリンピックにも出場した日本代表選手。",source: "https://hikaru-kitagawa.bitfan.id/contents/menu/53558",sourceLabel: "北川ひかるオフィシャルファンクラブ・プロフィール",birthday: "1997年5月10日",height: "164cm",birthplace: "石川県",number: "13"},
 {id: "manaka-matsukubo",name: "松窪 真心",reading: "まつくぼ まなか",roman: "MANAKA MATSUKUBO",position: "FW",league: "日本代表・海外",team: "チェルシーFCウィメン",tag: "スピード・得点力",description: "俊敏性とスピードを生かした突破、ゴール前での得点力が魅力の日本代表アタッカー。",story: "鹿児島県出身。JFAアカデミー福島で育ち、マイナビ仙台レディースでWEリーグデビュー。その後、アメリカのノースカロライナ・カレッジで経験を積み、2025年にはNWSLの年間最優秀MFに選出された。2026年にはイングランドのチェルシーFCウィメンへ完全移籍。スピードを生かした背後への抜け出しや積極的な守備、ゴール前での勝負強さに注目したい。",source: "https://www.chelseafc.com/",sourceLabel: "チェルシーFC公式サイト",birthday: "2004年7月28日",height: "155cm",birthplace: "鹿児島県",number: "29"},
];


// 2026年10月・なでしこジャパン招集メンバー（JFA公式発表を基準に登録）
const nationalTeamRoster = [
 {id:"nadeshiko-ayaka-yamashita",name:"山下 杏也加",reading:"やました あやか",roman:"AYAKA YAMASHITA",position:"GK",league:"日本代表・海外",team:"マンチェスター・シティWFC",tag:"ゴールキーパー",description:"シュートストップとゴール前での判断に注目したい日本代表GK。",story:"なでしこジャパンのゴールを守るゴールキーパー。最新の所属・プロフィール情報は公式発表をもとに更新します。",source:"https://www.jfa.jp/nadeshikojapan/20261013/member.html",sourceLabel:"JFA公式・招集メンバー"},
 {id:"nadeshiko-akane-okuma",name:"大熊 茜",reading:"おおくま あかね",roman:"AKANE OKUMA",position:"GK",league:"日本代表・海外",team:"アストン・ヴィラWFC",tag:"ゴールキーパー",description:"代表活動での経験を重ねるゴールキーパー。",story:"なでしこジャパンに選出されたGK。所属情報はJFAの招集メンバー発表を基準にしています。",source:"https://www.jfa.jp/nadeshikojapan/20261013/member.html",sourceLabel:"JFA公式・招集メンバー"},
 {id:"nadeshiko-shu-ohba",name:"大場 朱羽",reading:"おおば しゅう",roman:"SHU OHBA",position:"GK",league:"日本代表・海外",team:"レンジャーズFC",tag:"ゴールキーパー",description:"国際舞台での成長に注目したいゴールキーパー。",story:"欧州遠征で追加招集されたGK。招集状況や所属は公式情報を確認して更新します。",source:"https://www.jfa.jp/nadeshikojapan/20261013/member.html",sourceLabel:"JFA公式・招集メンバー"},
 {id:"nadeshiko-hikaru-kitagawa",name:"北川 ひかる",reading:"きたがわ ひかる",roman:"HIKARU KITAGAWA",position:"DF",league:"日本代表・海外",team:"エヴァートンFC・ウィメン",tag:"左サイドバック",description:"左足のキックと攻撃参加を生かすディフェンダー。",story:"左サイドからの攻撃参加と正確なキックが持ち味。",source:"https://www.jfa.jp/nadeshikojapan/20261013/member.html",sourceLabel:"JFA公式・招集メンバー"},
 {id:"nadeshiko-hana-takahashi",name:"高橋 はな",reading:"たかはし はな",roman:"HANA TAKAHASHI",position:"DF",league:"日本代表・海外",team:"三菱重工浦和レッズレディース",tag:"センターバック",description:"対人守備や空中戦、最終ラインでの統率に注目。",story:"クラブと代表の両方で守備を支えるディフェンダー。",source:"https://www.jfa.jp/nadeshikojapan/20261013/member.html",sourceLabel:"JFA公式・招集メンバー"},
 {id:"nadeshiko-yuzuki-yamamoto",name:"山本 柚月",reading:"やまもと ゆづき",roman:"YUZUKI YAMAMOTO",position:"DF",league:"日本代表・海外",team:"デンバー・サミットFC",tag:"ディフェンダー",description:"サイドでの攻守両面の働きに注目したい選手。",story:"海外クラブでプレーする日本代表DF。",source:"https://www.jfa.jp/nadeshikojapan/20261013/member.html",sourceLabel:"JFA公式・招集メンバー"},
 {id:"nadeshiko-rion-ishikawa",name:"石川 璃音",reading:"いしかわ りおん",roman:"RION ISHIKAWA",position:"DF",league:"日本代表・海外",team:"エヴァートンFC・ウィメン",tag:"ディフェンダー",description:"最終ラインでの対応力とビルドアップに注目。",story:"クラブと日本代表で経験を積むディフェンダー。",source:"https://www.jfa.jp/nadeshikojapan/20261013/member.html",sourceLabel:"JFA公式・招集メンバー"},
 {id:"nadeshiko-uno-shiragaki",name:"白垣 うの",reading:"しらがき うの",roman:"UNO SHIRAGAKI",position:"DF",league:"日本代表・海外",team:"ノースカロライナ・カレッジ",tag:"ディフェンダー",description:"対人守備や守備ラインでの連係に注目。",story:"海外で経験を積む日本代表ディフェンダー。",source:"https://www.jfa.jp/nadeshikojapan/20261013/member.html",sourceLabel:"JFA公式・招集メンバー"},
 {id:"nadeshiko-toko-koga",name:"古賀 塔子",reading:"こが とうこ",roman:"TOKO KOGA",position:"DF",league:"日本代表・海外",team:"トッテナム・ホットスパー",tag:"ディフェンダー",description:"対人対応と落ち着いた守備に注目したいDF。",story:"若くして国際経験を重ねるディフェンダー。",source:"https://www.jfa.jp/nadeshikojapan/20261013/member.html",sourceLabel:"JFA公式・招集メンバー"},
 {id:"nadeshiko-kiko-seike",name:"清家 貴子",reading:"せいけ きこ",roman:"KIKO SEIKE",position:"MF",league:"日本代表・海外",team:"ブライトン・アンド・ホーヴ・アルビオンWFC",tag:"攻撃参加",description:"スピードを生かした突破とゴール前への進出に注目。",story:"攻撃的なポジションで存在感を発揮する日本代表選手。",source:"https://www.jfa.jp/nadeshikojapan/20261013/member.html",sourceLabel:"JFA公式・招集メンバー"},
 {id:"nadeshiko-yui-hasegawa",name:"長谷川 唯",reading:"はせがわ ゆい",roman:"YUI HASEGAWA",position:"MF",league:"日本代表・海外",team:"マンチェスター・シティWFC",tag:"ゲームメイク",description:"視野の広さとパスで試合を組み立てる司令塔。",story:"中盤でボールを動かし、攻守のリズムを作るミッドフィールダー。",source:"https://www.jfa.jp/nadeshikojapan/20261013/member.html",sourceLabel:"JFA公式・招集メンバー"},
 {id:"nadeshiko-narumi-miura",name:"三浦 成美",reading:"みうら なるみ",roman:"NARUMI MIURA",position:"MF",league:"日本代表・海外",team:"ユタ・ロイヤルズ",tag:"中盤のつなぎ役",description:"中盤でのボール奪取とパスワークに注目。",story:"中盤の連係を支える日本代表ミッドフィールダー。",source:"https://www.jfa.jp/nadeshikojapan/20261013/member.html",sourceLabel:"JFA公式・招集メンバー"},
 {id:"nadeshiko-honoka-hayashi",name:"林 穂之香",reading:"はやし ほのか",roman:"HONOKA HAYASHI",position:"MF",league:"日本代表・海外",team:"エヴァートンFC・ウィメン",tag:"ミッドフィールダー",description:"中盤での守備とボール循環を支える選手。",story:"豊富な運動量で中盤を支える日本代表MF。",source:"https://www.jfa.jp/nadeshikojapan/20261013/member.html",sourceLabel:"JFA公式・招集メンバー"},
 {id:"nadeshiko-fuka-nagano",name:"長野 風花",reading:"ながの ふうか",roman:"FUKA NAGANO",position:"MF",league:"日本代表・海外",team:"リヴァプールFCウィメン",tag:"ボランチ",description:"中盤での展開力とボール奪取に注目。",story:"攻守の切り替えやパスで中盤を支える選手。",source:"https://www.jfa.jp/nadeshikojapan/20261013/member.html",sourceLabel:"JFA公式・招集メンバー"},
 {id:"nadeshiko-reina-chiba",name:"千葉 玲海菜",reading:"ちば れみな",roman:"REMINA CHIBA",position:"MF",league:"日本代表・海外",team:"ユヴェントス",tag:"攻撃参加",description:"前線への飛び出しや攻撃での積極性に注目。",story:"海外クラブでプレーする日本代表選手。",source:"https://www.jfa.jp/nadeshikojapan/20261013/member.html",sourceLabel:"JFA公式・招集メンバー"},
 {id:"nadeshiko-hinata-miyazawa",name:"宮澤 ひなた",reading:"みやざわ ひなた",roman:"HINATA MIYAZAWA",position:"MF",league:"日本代表・海外",team:"マンチェスター・ユナイテッド",tag:"攻撃的MF",description:"ゴール前への飛び出しと得点感覚に注目。",story:"攻撃の局面でゴールに迫る日本代表選手。",source:"https://www.jfa.jp/nadeshikojapan/20261013/member.html",sourceLabel:"JFA公式・招集メンバー"},
 {id:"nadeshiko-aoba-fujino",name:"藤野 あおば",reading:"ふじの あおば",roman:"AOBA FUJINO",position:"MF",league:"日本代表・海外",team:"マンチェスター・シティWFC",tag:"ドリブル突破",description:"ドリブルや鋭いシュートで攻撃に変化をつける。",story:"サイドからの仕掛けとゴールに向かう積極性が持ち味。",source:"https://www.jfa.jp/nadeshikojapan/20261013/member.html",sourceLabel:"JFA公式・招集メンバー"},
 {id:"nadeshiko-maika-hamano",name:"浜野 まいか",reading:"はまの まいか",roman:"MAIKA HAMANO",position:"MF",league:"日本代表・海外",team:"チェルシーFCウィメン",tag:"攻撃的MF",description:"技術と攻撃センスでチャンスを生み出す。",story:"前線での連係やゴールに向かうプレーに注目。",source:"https://www.jfa.jp/nadeshikojapan/20261013/member.html",sourceLabel:"JFA公式・招集メンバー"},
 {id:"nadeshiko-momoko-tanikawa",name:"谷川 萌々子",reading:"たにかわ ももこ",roman:"MOMOKO TANIKAWA",position:"MF",league:"日本代表・海外",team:"FCバイエルン・ミュンヘン",tag:"ミッドフィールダー",description:"高い技術と攻撃センスを持つミッドフィールダー。",story:"中盤から攻撃に関わり、得点機会を作るプレーに注目。",source:"https://www.jfa.jp/nadeshikojapan/20261013/member.html",sourceLabel:"JFA公式・招集メンバー"},
 {id:"nadeshiko-maya-hijikata",name:"土方 麻椰",reading:"ひじかた まや",roman:"MAYA HIJIKATA",position:"FW",league:"日本代表・海外",team:"アストン・ヴィラWFC",tag:"フォワード",description:"前線での動き出しとゴール前でのプレーに注目。",story:"欧州遠征で追加招集されたフォワード。",source:"https://www.jfa.jp/nadeshikojapan/20261013/member.html",sourceLabel:"JFA公式・招集メンバー"},
 {id:"nadeshiko-fuka-tsunoda",name:"角田 楓佳",reading:"つのだ ふうか",roman:"FUKA TSUNODA",position:"MF",league:"日本代表・海外",team:"クリスタル・パレス",tag:"ミッドフィールダー",description:"中盤での連係やボール運びに注目したい選手。",story:"欧州遠征で追加招集されたミッドフィールダー。",source:"https://www.jfa.jp/nadeshikojapan/20261013/member.html",sourceLabel:"JFA公式・招集メンバー"},
 {id:"nadeshiko-yui-narumiya",name:"成宮 唯",reading:"なるみや ゆい",roman:"YUI NARUMIYA",position:"MF",league:"日本代表・海外",team:"INAC神戸レオネッサ",tag:"攻撃的MF",description:"攻撃の組み立てやチャンスメイクに注目。",story:"招集変更により代表メンバーに加わったミッドフィールダー。",source:"https://www.jfa.jp/nadeshikojapan/20261013/member.html",sourceLabel:"JFA公式・招集メンバー"},
 {id:"nadeshiko-mei-shimada",name:"島田 芽依",reading:"しまだ めい",roman:"MEI SHIMADA",position:"FW",league:"日本代表・海外",team:"ヴェルダー・ブレーメン",tag:"フォワード",description:"前線での運動量とゴールに向かうプレーに注目。",story:"なでしこジャパンに初招集されたフォワード。",source:"https://www.jfa.jp/nadeshikojapan/20261013/member.html",sourceLabel:"JFA公式・招集メンバー"},
 {id:"u17-riruha-wakatsuki",name:"若月 りる葉",reading:"わかつき りるは",roman:"RIRUHA WAKATSUKI",position:"GK",league:"U-17日本女子代表",team:"JFAアカデミー福島",tag:"ゴールキーパー",description:"U-17日本女子代表のゴールを守るGK。",story:"FIFA U-17女子ワールドカップ モロッコ2026の招集メンバー。試合でのシュートストップや守備の連係に注目したい選手。",source:"https://www.jfa.jp/national_team/u17w_2026/u17_womensworldcup2026/member.html",sourceLabel:"JFA公式・U-17女子W杯招集メンバー"},
 {id:"u17-mikan-yamanaka",name:"山中 実栞",reading:"やまなか みかん",roman:"MIKAN YAMANAKA",position:"GK",league:"U-17日本女子代表",team:"藤枝順心高",tag:"ゴールキーパー",description:"藤枝順心高に所属するU-17日本女子代表GK。",story:"FIFA U-17女子ワールドカップ モロッコ2026の招集メンバー。ゴール前での判断やセービングに注目。",source:"https://www.jfa.jp/national_team/u17w_2026/u17_womensworldcup2026/member.html",sourceLabel:"JFA公式・U-17女子W杯招集メンバー"},
 {id:"u17-kou-kadowaki",name:"加登脇 心羽",reading:"かどわき こう",roman:"KOU KADOWAKI",position:"GK",league:"U-17日本女子代表",team:"日テレ・東京ヴェルディメニーナ",tag:"ゴールキーパー",description:"メニーナ所属のU-17日本女子代表GK。",story:"FIFA U-17女子ワールドカップ モロッコ2026の招集メンバー。GK陣の連係や試合中の判断に注目したい選手。",source:"https://www.jfa.jp/national_team/u17w_2026/u17_womensworldcup2026/member.html",sourceLabel:"JFA公式・U-17女子W杯招集メンバー"},
 {id:"u17-kotone-sato",name:"佐藤 寿音",reading:"さとう ことね",roman:"KOTONE SATO",position:"DF",league:"U-17日本女子代表",team:"VONDS市原FCレディース",tag:"ディフェンダー",description:"最終ラインで守備を支えるU-17日本女子代表DF。",story:"FIFA U-17女子ワールドカップ モロッコ2026の招集メンバー。対人守備や最終ラインでの連係に注目。",source:"https://www.jfa.jp/national_team/u17w_2026/u17_womensworldcup2026/member.html",sourceLabel:"JFA公式・U-17女子W杯招集メンバー"},
 {id:"u17-wara-shimizu",name:"清水 和楽",reading:"しみず わら",roman:"WARA SHIMIZU",position:"DF",league:"U-17日本女子代表",team:"ノジマステラ神奈川相模原ドゥーエ",tag:"ディフェンダー",description:"守備での対応力が期待されるU-17日本女子代表DF。",story:"FIFA U-17女子ワールドカップ モロッコ2026の招集メンバー。相手の攻撃への対応やビルドアップに注目したい選手。",source:"https://www.jfa.jp/national_team/u17w_2026/u17_womensworldcup2026/member.html",sourceLabel:"JFA公式・U-17女子W杯招集メンバー"},
 {id:"u17-sayana-oshita",name:"大下 紗也奈",reading:"おおした さやな",roman:"SAYANA OSHITA",position:"DF",league:"U-17日本女子代表",team:"柳ヶ浦高",tag:"ディフェンダー",description:"柳ヶ浦高に所属するU-17日本女子代表DF。",story:"FIFA U-17女子ワールドカップ モロッコ2026の招集メンバー。守備のポジショニングやチームでの連係に注目。",source:"https://www.jfa.jp/national_team/u17w_2026/u17_womensworldcup2026/member.html",sourceLabel:"JFA公式・U-17女子W杯招集メンバー"},
 {id:"u17-honoka-yotsumoto",name:"四本 帆夏",reading:"よつもと ほのか",roman:"HONOKA YOTSUMOTO",position:"DF",league:"U-17日本女子代表",team:"セレッソ大阪ヤンマーレディース",tag:"ディフェンダー",description:"セレッソ大阪ヤンマーレディース所属のU-17代表DF。",story:"FIFA U-17女子ワールドカップ モロッコ2026の招集メンバー。守備対応と攻撃の起点となるパスに注目したい選手。",source:"https://www.jfa.jp/national_team/u17w_2026/u17_womensworldcup2026/member.html",sourceLabel:"JFA公式・U-17女子W杯招集メンバー"},
 {id:"u17-himari-nishi",name:"西 ひまり",reading:"にし ひまり",roman:"HIMARI NISHI",position:"DF",league:"U-17日本女子代表",team:"JFAアカデミー福島",tag:"ディフェンダー",description:"追加招集でU-17日本女子代表に加わったDF。",story:"JFA公式発表で10月6日に追加招集されたFIFA U-17女子ワールドカップ モロッコ2026のメンバー。",source:"https://www.jfa.jp/national_team/u17w_2026/u17_womensworldcup2026/member.html",sourceLabel:"JFA公式・U-17女子W杯招集メンバー"},
 {id:"u17-anri-ito",name:"伊藤 杏莉",reading:"いとう あんり",roman:"ANRI ITO",position:"DF",league:"U-17日本女子代表",team:"JFAアカデミー福島",tag:"ディフェンダー",description:"JFAアカデミー福島に所属するU-17日本女子代表DF。",story:"FIFA U-17女子ワールドカップ モロッコ2026の招集メンバー。守備の連係やボールを前進させるプレーに注目。",source:"https://www.jfa.jp/national_team/u17w_2026/u17_womensworldcup2026/member.html",sourceLabel:"JFA公式・U-17女子W杯招集メンバー"},
 {id:"u17-sana-morota",name:"諸田 彩渚",reading:"もろた さな",roman:"SANA MOROTA",position:"DF",league:"U-17日本女子代表",team:"日テレ・東京ヴェルディメニーナ",tag:"ディフェンダー",description:"メニーナ所属のU-17日本女子代表DF。",story:"FIFA U-17女子ワールドカップ モロッコ2026の招集メンバー。相手の攻撃を止める守備対応やラインコントロールに注目。",source:"https://www.jfa.jp/national_team/u17w_2026/u17_womensworldcup2026/member.html",sourceLabel:"JFA公式・U-17女子W杯招集メンバー"},
 {id:"u17-yuka-kishida",name:"岸田 優花",reading:"きしだ ゆうか",roman:"YUKA KISHIDA",position:"MF",league:"U-17日本女子代表",team:"INAC神戸レオンチーナ",tag:"ミッドフィールダー",description:"中盤で攻守をつなぐU-17日本女子代表MF。",story:"FIFA U-17女子ワールドカップ モロッコ2026の招集メンバー。ボールを動かす判断や中盤での連係に注目したい選手。",source:"https://www.jfa.jp/national_team/u17w_2026/u17_womensworldcup2026/member.html",sourceLabel:"JFA公式・U-17女子W杯招集メンバー"},
 {id:"u17-alice-ota",name:"大田 ありす",reading:"おおた ありす",roman:"ALICE OTA",position:"MF",league:"U-17日本女子代表",team:"INAC神戸レオンチーナ",tag:"ミッドフィールダー",description:"中盤での連係や攻撃参加に注目したいMF。",story:"FIFA U-17女子ワールドカップ モロッコ2026の招集メンバー。中盤でのボール運びや攻撃への関わりに注目。",source:"https://www.jfa.jp/national_team/u17w_2026/u17_womensworldcup2026/member.html",sourceLabel:"JFA公式・U-17女子W杯招集メンバー"},
 {id:"u17-harura-matsushita",name:"松下 遥蘭",reading:"まつした はるら",roman:"HARURA MATSUSHITA",position:"MF",league:"U-17日本女子代表",team:"JFAアカデミー福島",tag:"ミッドフィールダー",description:"JFAアカデミー福島所属のU-17日本女子代表MF。",story:"FIFA U-17女子ワールドカップ モロッコ2026の招集メンバー。パスワークや攻守の切り替えに注目したい選手。",source:"https://www.jfa.jp/national_team/u17w_2026/u17_womensworldcup2026/member.html",sourceLabel:"JFA公式・U-17女子W杯招集メンバー"},
 {id:"u17-keiko-kitajima",name:"北島 景子",reading:"きたじま けいこ",roman:"KEIKO KITAJIMA",position:"MF",league:"U-17日本女子代表",team:"JFAアカデミー福島",tag:"ミッドフィールダー",description:"中盤のプレーでチームを支えるU-17日本女子代表MF。",story:"FIFA U-17女子ワールドカップ モロッコ2026の招集メンバー。ボール奪取や味方を生かすパスに注目。",source:"https://www.jfa.jp/national_team/u17w_2026/u17_womensworldcup2026/member.html",sourceLabel:"JFA公式・U-17女子W杯招集メンバー"},
 {id:"u17-nanami-kurita",name:"栗田 七海",reading:"くりた ななみ",roman:"NANAMI KURITA",position:"MF",league:"U-17日本女子代表",team:"日テレ・東京ヴェルディメニーナ",tag:"ミッドフィールダー",description:"メニーナ所属のU-17日本女子代表MF。",story:"FIFA U-17女子ワールドカップ モロッコ2026の招集メンバー。中盤での展開や攻撃参加に注目したい選手。",source:"https://www.jfa.jp/national_team/u17w_2026/u17_womensworldcup2026/member.html",sourceLabel:"JFA公式・U-17女子W杯招集メンバー"},
 {id:"u17-fuki-ito",name:"伊藤 風葵",reading:"いとう ふき",roman:"FUKI ITO",position:"MF",league:"U-17日本女子代表",team:"日テレ・東京ヴェルディメニーナ",tag:"ミッドフィールダー",description:"攻撃の組み立てに関わるU-17日本女子代表MF。",story:"FIFA U-17女子ワールドカップ モロッコ2026の招集メンバー。中盤から前線への配球や攻撃の連係に注目。",source:"https://www.jfa.jp/national_team/u17w_2026/u17_womensworldcup2026/member.html",sourceLabel:"JFA公式・U-17女子W杯招集メンバー"},
 {id:"u17-asuka-tanaka",name:"田中 愛純香",reading:"たなか あすか",roman:"ASUKA TANAKA",position:"MF",league:"U-17日本女子代表",team:"JFAアカデミー福島",tag:"ミッドフィールダー",description:"JFAアカデミー福島所属のU-17日本女子代表MF。",story:"FIFA U-17女子ワールドカップ モロッコ2026の招集メンバー。中盤での判断や味方との連係に注目したい選手。",source:"https://www.jfa.jp/national_team/u17w_2026/u17_womensworldcup2026/member.html",sourceLabel:"JFA公式・U-17女子W杯招集メンバー"},
 {id:"u17-mashiro-yamaji",name:"山路 真白",reading:"やまじ ましろ",roman:"MASHIRO YAMAJI",position:"MF",league:"U-17日本女子代表",team:"JFAアカデミー福島",tag:"ミッドフィールダー",description:"中盤での連係とボール運びに注目したい選手。",story:"FIFA U-17女子ワールドカップ モロッコ2026の招集メンバー。チームの攻守をつなぐプレーに注目。",source:"https://www.jfa.jp/national_team/u17w_2026/u17_womensworldcup2026/member.html",sourceLabel:"JFA公式・U-17女子W杯招集メンバー"},
 {id:"u17-mei-hanashiro",name:"花城 恵唯",reading:"はなしろ めい",roman:"MEI HANASHIRO",position:"FW",league:"U-17日本女子代表",team:"JFAアカデミー福島",tag:"フォワード",description:"ゴール前のアイデアと得点力が持ち味のアタッカー。",story:"JFA公式プロフィールでは、スピードやゴール前でのアイデアが特徴として紹介されている。FIFA U-17女子ワールドカップ モロッコ2026の招集メンバー。",source:"https://www.jfa.jp/national_team/u17w_2026/member/HANASHIRO_Mei.html",sourceLabel:"JFA公式・花城恵唯プロフィール"},
 {id:"u17-runa-sumiya",name:"角谷 瑠菜",reading:"すみや るな",roman:"RUNA SUMIYA",position:"MF",league:"U-17日本女子代表",team:"ジェフユナイテッド市原・千葉レディースU-18",tag:"ミッドフィールダー",description:"ドリブルを武器とするU-17日本女子代表MF。",story:"ジェフユナイテッド市原・千葉レディースU-18に所属。FIFA U-17女子ワールドカップ モロッコ2026の招集メンバーとして、ドリブルや中盤での攻撃参加に注目したい選手。",source:"https://www.jfa.jp/national_team/u17w_2026/u17_womensworldcup2026/member.html",sourceLabel:"JFA公式・U-17女子W杯招集メンバー"},
 {id:"u17-rara-higuchi",name:"樋口 らら",reading:"ひぐち らら",roman:"RARA HIGUCHI",position:"FW",league:"U-17日本女子代表",team:"マイナビ仙台レディースユース",tag:"フォワード",description:"マイナビ仙台レディースユース所属のU-17日本女子代表FW。",story:"FIFA U-17女子ワールドカップ モロッコ2026の招集メンバー。前線での動き出しやゴールに向かうプレーに注目したい選手。",source:"https://www.jfa.jp/national_team/u17w_2026/u17_womensworldcup2026/member.html",sourceLabel:"JFA公式・U-17女子W杯招集メンバー"}
];



// 2026/27 ジェフ千葉公式データと、2026年なでしこリーグ各チーム選手一覧を追加
// 生年月日・ポジション・背番号はクラブ公式の新体制発表を参照。
const additionalVerifiedPlayers = [
 {id:"roster-added-001",name:"清水 美紅",position:"GK",league:"WEリーグ",team:"ジェフユナイテッド市原・千葉レディース",number:"1",birthday:"2002年8月27日",source:"https://jefunited.co.jp/news/detail/5242",sourceLabel:"ジェフユナイテッド市原・千葉公式・2026/27新体制"},
 {id:"roster-added-002",name:"足立 梓",position:"DF",league:"WEリーグ",team:"ジェフユナイテッド市原・千葉レディース",number:"2",birthday:"2007年11月1日",source:"https://jefunited.co.jp/news/detail/5242",sourceLabel:"ジェフユナイテッド市原・千葉公式・2026/27新体制"},
 {id:"roster-added-003",name:"石田 菜々海",position:"DF",league:"WEリーグ",team:"ジェフユナイテッド市原・千葉レディース",number:"3",birthday:"1998年9月8日",source:"https://jefunited.co.jp/news/detail/5242",sourceLabel:"ジェフユナイテッド市原・千葉公式・2026/27新体制"},
 {id:"roster-added-004",name:"林 香奈絵",position:"DF",league:"WEリーグ",team:"ジェフユナイテッド市原・千葉レディース",number:"4",birthday:"1994年2月27日",source:"https://jefunited.co.jp/news/detail/5242",sourceLabel:"ジェフユナイテッド市原・千葉公式・2026/27新体制"},
 {id:"roster-added-005",name:"田中 真理子",position:"DF",league:"WEリーグ",team:"ジェフユナイテッド市原・千葉レディース",number:"5",birthday:"1993年1月10日",source:"https://jefunited.co.jp/news/detail/5242",sourceLabel:"ジェフユナイテッド市原・千葉公式・2026/27新体制"},
 {id:"roster-added-006",name:"蓮輪 真琴",position:"DF",league:"WEリーグ",team:"ジェフユナイテッド市原・千葉レディース",number:"6",birthday:"1999年4月6日",source:"https://jefunited.co.jp/news/detail/5242",sourceLabel:"ジェフユナイテッド市原・千葉公式・2026/27新体制"},
 {id:"roster-added-007",name:"木村 彩那",position:"MF",league:"WEリーグ",team:"ジェフユナイテッド市原・千葉レディース",number:"7",birthday:"2003年12月17日",source:"https://jefunited.co.jp/news/detail/5242",sourceLabel:"ジェフユナイテッド市原・千葉公式・2026/27新体制"},
 {id:"roster-added-008",name:"小林 ひなた",position:"MF",league:"WEリーグ",team:"ジェフユナイテッド市原・千葉レディース",number:"8",birthday:"2001年2月13日",source:"https://jefunited.co.jp/news/detail/5242",sourceLabel:"ジェフユナイテッド市原・千葉公式・2026/27新体制"},
 {id:"roster-added-009",name:"井上 綾香",position:"FW",league:"WEリーグ",team:"ジェフユナイテッド市原・千葉レディース",number:"9",birthday:"1995年1月15日",source:"https://jefunited.co.jp/news/detail/5242",sourceLabel:"ジェフユナイテッド市原・千葉公式・2026/27新体制"},
 {id:"roster-added-010",name:"小川 由姫",position:"FW",league:"WEリーグ",team:"ジェフユナイテッド市原・千葉レディース",number:"10",birthday:"2004年11月4日",source:"https://jefunited.co.jp/news/detail/5242",sourceLabel:"ジェフユナイテッド市原・千葉公式・2026/27新体制"},
 {id:"roster-added-011",name:"根津 里莉日",position:"FW",league:"WEリーグ",team:"ジェフユナイテッド市原・千葉レディース",number:"11",birthday:"2007年7月10日",source:"https://jefunited.co.jp/news/detail/5242",sourceLabel:"ジェフユナイテッド市原・千葉公式・2026/27新体制"},
 {id:"roster-added-012",name:"角谷 瑠菜",position:"MF",league:"WEリーグ",team:"ジェフユナイテッド市原・千葉レディース",number:"13",birthday:"2009年5月9日",source:"https://jefunited.co.jp/news/detail/5242",sourceLabel:"ジェフユナイテッド市原・千葉公式・2026/27新体制"},
 {id:"roster-added-013",name:"植本 愛実",position:"MF",league:"WEリーグ",team:"ジェフユナイテッド市原・千葉レディース",number:"14",birthday:"2006年6月30日",source:"https://jefunited.co.jp/news/detail/5242",sourceLabel:"ジェフユナイテッド市原・千葉公式・2026/27新体制"},
 {id:"roster-added-014",name:"平井 杏幸",position:"FW",league:"WEリーグ",team:"ジェフユナイテッド市原・千葉レディース",number:"15",birthday:"2001年5月15日",source:"https://jefunited.co.jp/news/detail/5242",sourceLabel:"ジェフユナイテッド市原・千葉公式・2026/27新体制"},
 {id:"roster-added-015",name:"山口 千尋",position:"MF",league:"WEリーグ",team:"ジェフユナイテッド市原・千葉レディース",number:"17",birthday:"1996年6月10日",height:"158cm",birthplace:"長崎県",source:"https://jefunited.co.jp/news/detail/5242",sourceLabel:"ジェフユナイテッド市原・千葉公式・2026/27新体制"},
 {id:"roster-added-016",name:"稲山 美優",position:"MF",league:"WEリーグ",team:"ジェフユナイテッド市原・千葉レディース",number:"18",birthday:"2003年8月6日",source:"https://jefunited.co.jp/news/detail/5201",sourceLabel:"ジェフユナイテッド市原・千葉公式・契約更新情報"},
 {id:"roster-added-017",name:"正野 瑠菜",position:"FW",league:"WEリーグ",team:"ジェフユナイテッド市原・千葉レディース",number:"20",birthday:"2004年4月22日",source:"https://jefunited.co.jp/news/detail/5242",sourceLabel:"ジェフユナイテッド市原・千葉公式・2026/27新体制"},
 {id:"roster-added-018",name:"増田 咲良",position:"MF",league:"WEリーグ",team:"ジェフユナイテッド市原・千葉レディース",number:"25",birthday:"2005年5月31日",source:"https://jefunited.co.jp/news/detail/5242",sourceLabel:"ジェフユナイテッド市原・千葉公式・2026/27新体制"},
 {id:"roster-added-019",name:"朝倉 陽菜",position:"DF",league:"WEリーグ",team:"ジェフユナイテッド市原・千葉レディース",number:"27",birthday:"2002年9月26日",source:"https://jefunited.co.jp/news/detail/5242",sourceLabel:"ジェフユナイテッド市原・千葉公式・2026/27新体制"},
 {id:"roster-added-020",name:"足立 楓",position:"GK",league:"WEリーグ",team:"ジェフユナイテッド市原・千葉レディース",number:"30",birthday:"2007年11月1日",source:"https://jefunited.co.jp/news/detail/5242",sourceLabel:"ジェフユナイテッド市原・千葉公式・2026/27新体制"},
 {id:"roster-added-021",name:"木崎 あみ",position:"GK",league:"WEリーグ",team:"ジェフユナイテッド市原・千葉レディース",number:"33",birthday:"2002年10月20日",source:"https://jefunited.co.jp/news/detail/5242",sourceLabel:"ジェフユナイテッド市原・千葉公式・2026/27新体制"},
 {id:"roster-added-022",name:"小林 莉々子",position:"FW",league:"WEリーグ",team:"ジェフユナイテッド市原・千葉レディース",number:"50",birthday:"2003年2月1日",source:"https://jefunited.co.jp/news/detail/5242",sourceLabel:"ジェフユナイテッド市原・千葉公式・2026/27新体制"},
 {id:"roster-added-023",name:"北沢 明未",position:"FW",league:"WEリーグ",team:"ジェフユナイテッド市原・千葉レディース",number:"84",birthday:"2004年1月12日",source:"https://jefunited.co.jp/news/detail/5242",sourceLabel:"ジェフユナイテッド市原・千葉公式・2026/27新体制"},
 {id:"roster-added-024",name:"鈴木 菫",position:"DF",league:"WEリーグ",team:"ジェフユナイテッド市原・千葉レディース",number:"99",birthday:"2004年1月24日",source:"https://jefunited.co.jp/news/detail/5242",sourceLabel:"ジェフユナイテッド市原・千葉公式・2026/27新体制"},
 {id:"roster-added-025",name:"横山野ノ香",position:"GK",league:"なでしこリーグ1部",team:"朝日インテック・ラブリッジ名古屋",number:"1",birthday:"2000年8月26日",source:"https://nadeshiko.finash.jp/teams/34/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-026",name:"流川桐佳",position:"GK",league:"なでしこリーグ1部",team:"朝日インテック・ラブリッジ名古屋",number:"16",birthday:"2004年1月6日",source:"https://nadeshiko.finash.jp/teams/34/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-027",name:"栗田若菜",position:"GK",league:"なでしこリーグ1部",team:"朝日インテック・ラブリッジ名古屋",number:"34",birthday:"2008年6月13日",source:"https://nadeshiko.finash.jp/teams/34/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-028",name:"夏目歩実",position:"DF",league:"なでしこリーグ1部",team:"朝日インテック・ラブリッジ名古屋",number:"2",birthday:"2002年2月15日",source:"https://nadeshiko.finash.jp/teams/34/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-029",name:"森口莉子",position:"DF",league:"なでしこリーグ1部",team:"朝日インテック・ラブリッジ名古屋",number:"3",birthday:"2002年8月31日",source:"https://nadeshiko.finash.jp/teams/34/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-030",name:"橘麗衣",position:"DF",league:"なでしこリーグ1部",team:"朝日インテック・ラブリッジ名古屋",number:"10",birthday:"1993年5月25日",source:"https://nadeshiko.finash.jp/teams/34/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-031",name:"堀内意",position:"DF",league:"なでしこリーグ1部",team:"朝日インテック・ラブリッジ名古屋",number:"17",birthday:"2003年12月5日",source:"https://nadeshiko.finash.jp/teams/34/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-032",name:"宮本仁奈",position:"DF",league:"なでしこリーグ1部",team:"朝日インテック・ラブリッジ名古屋",number:"18",birthday:"2002年4月2日",source:"https://nadeshiko.finash.jp/teams/34/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-033",name:"松本和笑",position:"DF",league:"なでしこリーグ1部",team:"朝日インテック・ラブリッジ名古屋",number:"23",birthday:"2003年11月14日",source:"https://nadeshiko.finash.jp/teams/34/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-034",name:"角田菜々子",position:"DF",league:"なでしこリーグ1部",team:"朝日インテック・ラブリッジ名古屋",number:"24",birthday:"2001年10月11日",source:"https://nadeshiko.finash.jp/teams/34/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-035",name:"河合野乃子",position:"DF",league:"なでしこリーグ1部",team:"朝日インテック・ラブリッジ名古屋",number:"25",birthday:"2002年5月5日",source:"https://nadeshiko.finash.jp/teams/34/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-036",name:"大倉光藍",position:"DF",league:"なでしこリーグ1部",team:"朝日インテック・ラブリッジ名古屋",number:"32",birthday:"2008年11月10日",source:"https://nadeshiko.finash.jp/teams/34/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-037",name:"逸見桃子",position:"MF",league:"なでしこリーグ1部",team:"朝日インテック・ラブリッジ名古屋",number:"4",birthday:"1997年3月25日",source:"https://nadeshiko.finash.jp/teams/34/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-038",name:"安部由希子",position:"MF",league:"なでしこリーグ1部",team:"朝日インテック・ラブリッジ名古屋",number:"5",birthday:"1997年1月4日",source:"https://nadeshiko.finash.jp/teams/34/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-039",name:"大淵日和",position:"MF",league:"なでしこリーグ1部",team:"朝日インテック・ラブリッジ名古屋",number:"6",birthday:"2004年5月5日",source:"https://nadeshiko.finash.jp/teams/34/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-040",name:"加藤ゆあ",position:"MF",league:"なでしこリーグ1部",team:"朝日インテック・ラブリッジ名古屋",number:"7",birthday:"2000年3月21日",source:"https://nadeshiko.finash.jp/teams/34/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-041",name:"渕上野乃佳",position:"MF",league:"なでしこリーグ1部",team:"朝日インテック・ラブリッジ名古屋",number:"8",birthday:"2003年1月20日",source:"https://nadeshiko.finash.jp/teams/34/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-042",name:"藤原愛里",position:"MF",league:"なでしこリーグ1部",team:"朝日インテック・ラブリッジ名古屋",number:"11",birthday:"2001年9月4日",source:"https://nadeshiko.finash.jp/teams/34/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-043",name:"上田真子",position:"MF",league:"なでしこリーグ1部",team:"朝日インテック・ラブリッジ名古屋",number:"14",birthday:"2001年7月18日",source:"https://nadeshiko.finash.jp/teams/34/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-044",name:"中村友香",position:"MF",league:"なでしこリーグ1部",team:"朝日インテック・ラブリッジ名古屋",number:"15",birthday:"2000年1月24日",source:"https://nadeshiko.finash.jp/teams/34/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-045",name:"増永朱里",position:"MF",league:"なでしこリーグ1部",team:"朝日インテック・ラブリッジ名古屋",number:"20",birthday:"2001年5月20日",source:"https://nadeshiko.finash.jp/teams/34/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-046",name:"大場柚季",position:"MF",league:"なでしこリーグ1部",team:"朝日インテック・ラブリッジ名古屋",number:"21",birthday:"2004年1月3日",source:"https://nadeshiko.finash.jp/teams/34/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-047",name:"川添凛音",position:"MF",league:"なでしこリーグ1部",team:"朝日インテック・ラブリッジ名古屋",number:"22",birthday:"2008年2月2日",source:"https://nadeshiko.finash.jp/teams/34/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-048",name:"長谷原彩音",position:"MF",league:"なでしこリーグ1部",team:"朝日インテック・ラブリッジ名古屋",number:"26",birthday:"2002年5月30日",source:"https://nadeshiko.finash.jp/teams/34/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-049",name:"永田晶子",position:"MF",league:"なでしこリーグ1部",team:"朝日インテック・ラブリッジ名古屋",number:"28",birthday:"2001年12月27日",source:"https://nadeshiko.finash.jp/teams/34/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-050",name:"成田倖彩",position:"MF",league:"なでしこリーグ1部",team:"朝日インテック・ラブリッジ名古屋",number:"30",birthday:"2009年10月6日",source:"https://nadeshiko.finash.jp/teams/34/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-051",name:"大宮那月",position:"MF",league:"なでしこリーグ1部",team:"朝日インテック・ラブリッジ名古屋",number:"31",birthday:"2011年9月3日",source:"https://nadeshiko.finash.jp/teams/34/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-052",name:"水野亜美",position:"FW",league:"なでしこリーグ1部",team:"朝日インテック・ラブリッジ名古屋",number:"9",birthday:"1998年6月5日",source:"https://nadeshiko.finash.jp/teams/34/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-053",name:"仁木愛実",position:"FW",league:"なでしこリーグ1部",team:"朝日インテック・ラブリッジ名古屋",number:"13",birthday:"2002年1月19日",source:"https://nadeshiko.finash.jp/teams/34/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-054",name:"田中亜依",position:"FW",league:"なでしこリーグ1部",team:"朝日インテック・ラブリッジ名古屋",number:"35",birthday:"2010年8月5日",source:"https://nadeshiko.finash.jp/teams/34/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-055",name:"福元美穂",position:"GK",league:"なでしこリーグ1部",team:"岡山湯郷Belle",number:"1",birthday:"1983年10月2日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-056",name:"上野理佐",position:"GK",league:"なでしこリーグ1部",team:"岡山湯郷Belle",number:"31",birthday:"2006年4月10日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-057",name:"三田一紗代",position:"GK",league:"なでしこリーグ1部",team:"岡山湯郷Belle",number:"34",birthday:"1993年3月16日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-058",name:"楠心花",position:"GK",league:"なでしこリーグ1部",team:"岡山湯郷Belle",number:"41",birthday:"2008年3月1日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-059",name:"戸梶有野里",position:"GK",league:"なでしこリーグ1部",team:"岡山湯郷Belle",number:"51",birthday:"1997年1月5日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-060",name:"森宙舞",position:"DF",league:"なでしこリーグ1部",team:"岡山湯郷Belle",number:"2",birthday:"2003年12月8日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-061",name:"今野瞳",position:"DF",league:"なでしこリーグ1部",team:"岡山湯郷Belle",number:"4",birthday:"1998年9月22日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-062",name:"平中響乃",position:"DF",league:"なでしこリーグ1部",team:"岡山湯郷Belle",number:"16",birthday:"2003年7月11日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-063",name:"村上夏奈瀬",position:"DF",league:"なでしこリーグ1部",team:"岡山湯郷Belle",number:"18",birthday:"2001年8月9日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-064",name:"岸波優妃",position:"DF",league:"なでしこリーグ1部",team:"岡山湯郷Belle",number:"20",birthday:"2003年8月11日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-065",name:"柏原凪沙",position:"DF",league:"なでしこリーグ1部",team:"岡山湯郷Belle",number:"26",birthday:"2006年4月23日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-066",name:"成田夢愛",position:"DF",league:"なでしこリーグ1部",team:"岡山湯郷Belle",number:"27",birthday:"2006年6月14日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-067",name:"藤本日菜",position:"DF",league:"なでしこリーグ1部",team:"岡山湯郷Belle",number:"29",birthday:"2004年1月25日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-068",name:"小峠明日香",position:"DF",league:"なでしこリーグ1部",team:"岡山湯郷Belle",number:"35",birthday:"2003年5月28日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-069",name:"菅田想菜",position:"DF",league:"なでしこリーグ1部",team:"岡山湯郷Belle",number:"36",birthday:"2007年4月27日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-070",name:"吉田琉衣",position:"DF",league:"なでしこリーグ1部",team:"岡山湯郷Belle",number:"39",birthday:"2006年2月6日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-071",name:"梶山朋恵",position:"MF",league:"なでしこリーグ1部",team:"岡山湯郷Belle",number:"3",birthday:"2003年9月14日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-072",name:"大島彩香",position:"MF",league:"なでしこリーグ1部",team:"岡山湯郷Belle",number:"5",birthday:"1997年11月19日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-073",name:"小松未奈",position:"MF",league:"なでしこリーグ1部",team:"岡山湯郷Belle",number:"6",birthday:"1993年5月9日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-074",name:"山下沙耶香",position:"MF",league:"なでしこリーグ1部",team:"岡山湯郷Belle",number:"7",birthday:"1998年11月12日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-075",name:"南山千明",position:"MF",league:"なでしこリーグ1部",team:"岡山湯郷Belle",number:"8",birthday:"1985年10月16日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-076",name:"中野琴音",position:"MF",league:"なでしこリーグ1部",team:"岡山湯郷Belle",number:"10",birthday:"2004年5月13日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-077",name:"西郡茉優",position:"MF",league:"なでしこリーグ1部",team:"岡山湯郷Belle",number:"11",birthday:"2003年12月19日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-078",name:"秋元美雨",position:"MF",league:"なでしこリーグ1部",team:"岡山湯郷Belle",number:"13",birthday:"2000年1月26日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-079",name:"山本早織",position:"MF",league:"なでしこリーグ1部",team:"岡山湯郷Belle",number:"15",birthday:"1996年11月23日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-080",name:"新谷楓華",position:"MF",league:"なでしこリーグ1部",team:"岡山湯郷Belle",number:"17",birthday:"2004年9月3日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-081",name:"沖田有由",position:"MF",league:"なでしこリーグ1部",team:"岡山湯郷Belle",number:"19",birthday:"2002年6月11日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-082",name:"香椎彩香",position:"MF",league:"なでしこリーグ1部",team:"岡山湯郷Belle",number:"25",birthday:"2004年2月12日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-083",name:"雪山琴未",position:"MF",league:"なでしこリーグ1部",team:"岡山湯郷Belle",number:"28",birthday:"2004年1月15日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-084",name:"松崎こころ",position:"MF",league:"なでしこリーグ1部",team:"岡山湯郷Belle",number:"30",birthday:"2003年8月14日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-085",name:"田代つばめ",position:"MF",league:"なでしこリーグ1部",team:"岡山湯郷Belle",number:"32",birthday:"2003年9月16日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-086",name:"山田美緒和",position:"MF",league:"なでしこリーグ1部",team:"岡山湯郷Belle",number:"37",birthday:"1996年6月27日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-087",name:"上田佳奈",position:"MF",league:"なでしこリーグ1部",team:"岡山湯郷Belle",number:"38",birthday:"2001年6月29日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-088",name:"井上穂乃香",position:"MF",league:"なでしこリーグ1部",team:"岡山湯郷Belle",number:"44",birthday:"2009年1月20日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-089",name:"栫井美和子",position:"FW",league:"なでしこリーグ1部",team:"岡山湯郷Belle",number:"9",birthday:"2005年1月6日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-090",name:"塩谷瑠南",position:"FW",league:"なでしこリーグ1部",team:"岡山湯郷Belle",number:"14",birthday:"1999年9月16日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-091",name:"寺尾星奈",position:"FW",league:"なでしこリーグ1部",team:"岡山湯郷Belle",number:"21",birthday:"2001年6月17日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-092",name:"片山真鞠",position:"FW",league:"なでしこリーグ1部",team:"岡山湯郷Belle",number:"22",birthday:"2002年10月11日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-093",name:"国吉花吏埜",position:"FW",league:"なでしこリーグ1部",team:"岡山湯郷Belle",number:"23",birthday:"2006年1月23日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-094",name:"岸波美采",position:"FW",league:"なでしこリーグ1部",team:"岡山湯郷Belle",number:"24",birthday:"2006年10月19日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-095",name:"澤田法味",position:"GK",league:"なでしこリーグ2部",team:"大和シルフィード",number:"1",birthday:"1986年3月13日",source:"https://nadeshiko.finash.jp/teams/29/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-096",name:"山﨑彩永",position:"GK",league:"なでしこリーグ2部",team:"大和シルフィード",number:"16",birthday:"2006年12月18日",source:"https://nadeshiko.finash.jp/teams/29/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-097",name:"竹本愛",position:"GK",league:"なでしこリーグ2部",team:"大和シルフィード",number:"21",birthday:"2002年7月6日",source:"https://nadeshiko.finash.jp/teams/29/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-098",name:"村上奈央",position:"DF",league:"なでしこリーグ2部",team:"大和シルフィード",number:"2",birthday:"2001年3月20日",source:"https://nadeshiko.finash.jp/teams/29/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-099",name:"安東麻耶",position:"DF",league:"なでしこリーグ2部",team:"大和シルフィード",number:"3",birthday:"1996年6月15日",source:"https://nadeshiko.finash.jp/teams/29/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-100",name:"中舘郁帆",position:"DF",league:"なでしこリーグ2部",team:"大和シルフィード",number:"4",birthday:"2000年7月8日",source:"https://nadeshiko.finash.jp/teams/29/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-101",name:"豊村佳音",position:"DF",league:"なでしこリーグ2部",team:"大和シルフィード",number:"15",birthday:"2003年6月21日",source:"https://nadeshiko.finash.jp/teams/29/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-102",name:"外林花音",position:"DF",league:"なでしこリーグ2部",team:"大和シルフィード",number:"19",birthday:"2003年5月12日",source:"https://nadeshiko.finash.jp/teams/29/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-103",name:"鈴木彩心",position:"DF",league:"なでしこリーグ2部",team:"大和シルフィード",number:"24",birthday:"2002年7月1日",source:"https://nadeshiko.finash.jp/teams/29/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-104",name:"小川彩乃",position:"DF",league:"なでしこリーグ2部",team:"大和シルフィード",number:"26",birthday:"2000年11月16日",source:"https://nadeshiko.finash.jp/teams/29/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-105",name:"小林凜",position:"DF",league:"なでしこリーグ2部",team:"大和シルフィード",number:"27",birthday:"2003年8月11日",source:"https://nadeshiko.finash.jp/teams/29/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-106",name:"瀬川美空",position:"DF",league:"なでしこリーグ2部",team:"大和シルフィード",number:"33",birthday:"2008年9月29日",source:"https://nadeshiko.finash.jp/teams/29/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-107",name:"伊勢はな",position:"DF",league:"なでしこリーグ2部",team:"大和シルフィード",number:"35",birthday:"2007年6月22日",source:"https://nadeshiko.finash.jp/teams/29/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-108",name:"山本玲",position:"MF",league:"なでしこリーグ2部",team:"大和シルフィード",number:"5",birthday:"2003年12月22日",source:"https://nadeshiko.finash.jp/teams/29/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-109",name:"黒澤琴音",position:"MF",league:"なでしこリーグ2部",team:"大和シルフィード",number:"6",birthday:"2001年10月27日",source:"https://nadeshiko.finash.jp/teams/29/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-110",name:"高梨夕花",position:"MF",league:"なでしこリーグ2部",team:"大和シルフィード",number:"7",birthday:"2002年9月10日",source:"https://nadeshiko.finash.jp/teams/29/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-111",name:"松浦渚",position:"MF",league:"なでしこリーグ2部",team:"大和シルフィード",number:"9",birthday:"1994年4月20日",source:"https://nadeshiko.finash.jp/teams/29/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-112",name:"堀良江",position:"MF",league:"なでしこリーグ2部",team:"大和シルフィード",number:"11",birthday:"1988年11月2日",source:"https://nadeshiko.finash.jp/teams/29/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-113",name:"宮波小雪",position:"MF",league:"なでしこリーグ2部",team:"大和シルフィード",number:"13",birthday:"2003年11月13日",source:"https://nadeshiko.finash.jp/teams/29/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-114",name:"梶井鈴音",position:"MF",league:"なでしこリーグ2部",team:"大和シルフィード",number:"14",birthday:"2000年11月28日",source:"https://nadeshiko.finash.jp/teams/29/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-115",name:"鶴岡優月",position:"MF",league:"なでしこリーグ2部",team:"大和シルフィード",number:"17",birthday:"2003年9月28日",source:"https://nadeshiko.finash.jp/teams/29/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-116",name:"芳賀朱鳳",position:"MF",league:"なでしこリーグ2部",team:"大和シルフィード",number:"23",birthday:"2001年11月11日",source:"https://nadeshiko.finash.jp/teams/29/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-117",name:"平國瑞希",position:"MF",league:"なでしこリーグ2部",team:"大和シルフィード",number:"28",birthday:"1995年8月16日",source:"https://nadeshiko.finash.jp/teams/29/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-118",name:"田中優音",position:"MF",league:"なでしこリーグ2部",team:"大和シルフィード",number:"29",birthday:"2005年2月11日",source:"https://nadeshiko.finash.jp/teams/29/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-119",name:"上辻佑実",position:"MF",league:"なでしこリーグ2部",team:"大和シルフィード",number:"34",birthday:"1987年11月30日",source:"https://nadeshiko.finash.jp/teams/29/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-120",name:"源間葉月",position:"MF",league:"なでしこリーグ2部",team:"大和シルフィード",number:"36",birthday:"1998年10月28日",source:"https://nadeshiko.finash.jp/teams/29/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-121",name:"山本菜桜美",position:"FW",league:"なでしこリーグ2部",team:"大和シルフィード",number:"8",birthday:"1991年3月31日",source:"https://nadeshiko.finash.jp/teams/29/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-122",name:"幸嶋里佳",position:"FW",league:"なでしこリーグ2部",team:"大和シルフィード",number:"18",birthday:"1998年7月10日",source:"https://nadeshiko.finash.jp/teams/29/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-123",name:"相原結衣",position:"FW",league:"なでしこリーグ2部",team:"大和シルフィード",number:"20",birthday:"2005年12月31日",source:"https://nadeshiko.finash.jp/teams/29/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-124",name:"保原ひな",position:"FW",league:"なでしこリーグ2部",team:"大和シルフィード",number:"22",birthday:"2004年6月3日",source:"https://nadeshiko.finash.jp/teams/29/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-125",name:"安田聖羅",position:"FW",league:"なでしこリーグ2部",team:"大和シルフィード",number:"25",birthday:"2002年6月21日",source:"https://nadeshiko.finash.jp/teams/29/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-126",name:"浜田遥",position:"FW",league:"なでしこリーグ2部",team:"大和シルフィード",number:"30",birthday:"1993年1月26日",source:"https://nadeshiko.finash.jp/teams/29/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-127",name:"Davis Alma",position:"FW",league:"なでしこリーグ2部",team:"大和シルフィード",number:"37",birthday:"2003年7月20日",source:"https://nadeshiko.finash.jp/teams/29/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-128",name:"原田実歩",position:"GK",league:"なでしこリーグ1部",team:"ASハリマアルビオン",number:"1",birthday:"1994年8月2日",source:"https://nadeshiko.finash.jp/teams/17/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-129",name:"草苅希羽",position:"GK",league:"なでしこリーグ1部",team:"ASハリマアルビオン",number:"21",birthday:"2004年2月7日",source:"https://nadeshiko.finash.jp/teams/17/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-130",name:"小暮千晶",position:"GK",league:"なでしこリーグ1部",team:"ASハリマアルビオン",number:"41",birthday:"1999年3月12日",source:"https://nadeshiko.finash.jp/teams/17/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-131",name:"児玉耀",position:"DF",league:"なでしこリーグ1部",team:"ASハリマアルビオン",number:"2",birthday:"2002年9月14日",source:"https://nadeshiko.finash.jp/teams/17/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-132",name:"佐武ほのか",position:"DF",league:"なでしこリーグ1部",team:"ASハリマアルビオン",number:"3",birthday:"2003年5月28日",source:"https://nadeshiko.finash.jp/teams/17/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-133",name:"阪中澪",position:"DF",league:"なでしこリーグ1部",team:"ASハリマアルビオン",number:"4",birthday:"1996年8月21日",source:"https://nadeshiko.finash.jp/teams/17/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-134",name:"小島美玖",position:"DF",league:"なでしこリーグ1部",team:"ASハリマアルビオン",number:"5",birthday:"1996年8月30日",source:"https://nadeshiko.finash.jp/teams/17/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-135",name:"佐々木美悠",position:"DF",league:"なでしこリーグ1部",team:"ASハリマアルビオン",number:"6",birthday:"2001年11月13日",source:"https://nadeshiko.finash.jp/teams/17/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-136",name:"高松芹羽",position:"DF",league:"なでしこリーグ1部",team:"ASハリマアルビオン",number:"19",birthday:"2006年5月11日",source:"https://nadeshiko.finash.jp/teams/17/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-137",name:"山口歌子",position:"DF",league:"なでしこリーグ1部",team:"ASハリマアルビオン",number:"20",birthday:"2002年6月19日",source:"https://nadeshiko.finash.jp/teams/17/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-138",name:"朝山瑞希",position:"DF",league:"なでしこリーグ1部",team:"ASハリマアルビオン",number:"22",birthday:"2006年5月22日",source:"https://nadeshiko.finash.jp/teams/17/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-139",name:"村田かえで",position:"DF",league:"なでしこリーグ1部",team:"ASハリマアルビオン",number:"24",birthday:"2003年12月26日",source:"https://nadeshiko.finash.jp/teams/17/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-140",name:"三冨りりか",position:"MF",league:"なでしこリーグ1部",team:"ASハリマアルビオン",number:"7",birthday:"2006年1月18日",source:"https://nadeshiko.finash.jp/teams/17/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-141",name:"小池快",position:"MF",league:"なでしこリーグ1部",team:"ASハリマアルビオン",number:"8",birthday:"1994年2月18日",source:"https://nadeshiko.finash.jp/teams/17/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-142",name:"正野可菜子",position:"MF",league:"なでしこリーグ1部",team:"ASハリマアルビオン",number:"14",birthday:"1994年2月6日",source:"https://nadeshiko.finash.jp/teams/17/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-143",name:"大原和夏",position:"MF",league:"なでしこリーグ1部",team:"ASハリマアルビオン",number:"15",birthday:"2002年6月28日",source:"https://nadeshiko.finash.jp/teams/17/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-144",name:"左子五月",position:"MF",league:"なでしこリーグ1部",team:"ASハリマアルビオン",number:"16",birthday:"1997年5月31日",source:"https://nadeshiko.finash.jp/teams/17/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-145",name:"唐橋万結",position:"MF",league:"なでしこリーグ1部",team:"ASハリマアルビオン",number:"17",birthday:"1999年8月4日",source:"https://nadeshiko.finash.jp/teams/17/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-146",name:"阿部文音",position:"MF",league:"なでしこリーグ1部",team:"ASハリマアルビオン",number:"18",birthday:"2002年11月19日",source:"https://nadeshiko.finash.jp/teams/17/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-147",name:"鷹野あかり",position:"MF",league:"なでしこリーグ1部",team:"ASハリマアルビオン",number:"25",birthday:"2007年9月22日",source:"https://nadeshiko.finash.jp/teams/17/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-148",name:"藤原安佑",position:"MF",league:"なでしこリーグ1部",team:"ASハリマアルビオン",number:"26",birthday:"2000年2月14日",source:"https://nadeshiko.finash.jp/teams/17/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-149",name:"川﨑咲耶",position:"FW",league:"なでしこリーグ1部",team:"ASハリマアルビオン",number:"9",birthday:"1996年6月7日",source:"https://nadeshiko.finash.jp/teams/17/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-150",name:"千葉園子",position:"FW",league:"なでしこリーグ1部",team:"ASハリマアルビオン",number:"10",birthday:"1993年6月15日",source:"https://nadeshiko.finash.jp/teams/17/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-151",name:"南條里緒",position:"FW",league:"なでしこリーグ1部",team:"ASハリマアルビオン",number:"11",birthday:"1997年4月9日",source:"https://nadeshiko.finash.jp/teams/17/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-152",name:"今蔵綾乃",position:"FW",league:"なでしこリーグ1部",team:"ASハリマアルビオン",number:"13",birthday:"2001年10月23日",source:"https://nadeshiko.finash.jp/teams/17/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-153",name:"井上麗叶",position:"FW",league:"なでしこリーグ1部",team:"ASハリマアルビオン",number:"23",birthday:"2003年6月15日",source:"https://nadeshiko.finash.jp/teams/17/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-154",name:"椎野彩香",position:"FW",league:"なでしこリーグ1部",team:"ASハリマアルビオン",number:"33",birthday:"1999年4月23日",source:"https://nadeshiko.finash.jp/teams/17/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-155",name:"米満布貴",position:"GK",league:"なでしこリーグ2部",team:"南葛SC WINGS",number:"1",birthday:"2003年2月13日",source:"https://nadeshiko.finash.jp/teams/56/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-156",name:"福田まい",position:"GK",league:"なでしこリーグ2部",team:"南葛SC WINGS",number:"21",birthday:"1998年5月20日",source:"https://nadeshiko.finash.jp/teams/56/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-157",name:"五十嵐憂美",position:"GK",league:"なでしこリーグ2部",team:"南葛SC WINGS",number:"31",birthday:"2006年9月7日",source:"https://nadeshiko.finash.jp/teams/56/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-158",name:"中山友菜",position:"DF",league:"なでしこリーグ2部",team:"南葛SC WINGS",number:"2",birthday:"2001年12月19日",source:"https://nadeshiko.finash.jp/teams/56/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-159",name:"人見のどか",position:"DF",league:"なでしこリーグ2部",team:"南葛SC WINGS",number:"4",birthday:"1997年5月27日",source:"https://nadeshiko.finash.jp/teams/56/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-160",name:"松本歩音",position:"DF",league:"なでしこリーグ2部",team:"南葛SC WINGS",number:"13",birthday:"2001年5月10日",source:"https://nadeshiko.finash.jp/teams/56/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-161",name:"呉娟花",position:"DF",league:"なでしこリーグ2部",team:"南葛SC WINGS",number:"18",birthday:"2004年4月28日",source:"https://nadeshiko.finash.jp/teams/56/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-162",name:"町田実香",position:"DF",league:"なでしこリーグ2部",team:"南葛SC WINGS",number:"20",birthday:"2005年7月16日",source:"https://nadeshiko.finash.jp/teams/56/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-163",name:"松久保明梨",position:"DF",league:"なでしこリーグ2部",team:"南葛SC WINGS",number:"23",birthday:"1996年8月25日",source:"https://nadeshiko.finash.jp/teams/56/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-164",name:"町田朱里",position:"DF",league:"なでしこリーグ2部",team:"南葛SC WINGS",number:"27",birthday:"1993年12月2日",source:"https://nadeshiko.finash.jp/teams/56/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-165",name:"中村ひかる",position:"DF",league:"なでしこリーグ2部",team:"南葛SC WINGS",number:"28",birthday:"1996年11月28日",source:"https://nadeshiko.finash.jp/teams/56/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-166",name:"高野彩音",position:"DF",league:"なでしこリーグ2部",team:"南葛SC WINGS",number:"33",birthday:"2007年2月10日",source:"https://nadeshiko.finash.jp/teams/56/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-167",name:"リュウスジョン",position:"MF",league:"なでしこリーグ2部",team:"南葛SC WINGS",number:"6",birthday:"2002年5月23日",source:"https://nadeshiko.finash.jp/teams/56/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-168",name:"菅野永遠",position:"MF",league:"なでしこリーグ2部",team:"南葛SC WINGS",number:"8",birthday:"1998年5月13日",source:"https://nadeshiko.finash.jp/teams/56/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-169",name:"会沢日花里",position:"MF",league:"なでしこリーグ2部",team:"南葛SC WINGS",number:"11",birthday:"2000年3月5日",source:"https://nadeshiko.finash.jp/teams/56/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-170",name:"中原藍",position:"MF",league:"なでしこリーグ2部",team:"南葛SC WINGS",number:"16",birthday:"1999年11月22日",source:"https://nadeshiko.finash.jp/teams/56/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-171",name:"小西由利恵",position:"MF",league:"なでしこリーグ2部",team:"南葛SC WINGS",number:"19",birthday:"1999年12月29日",source:"https://nadeshiko.finash.jp/teams/56/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-172",name:"井上眞椰",position:"MF",league:"なでしこリーグ2部",team:"南葛SC WINGS",number:"22",birthday:"2000年11月22日",source:"https://nadeshiko.finash.jp/teams/56/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-173",name:"金香那",position:"MF",league:"なでしこリーグ2部",team:"南葛SC WINGS",number:"26",birthday:"2006年1月27日",source:"https://nadeshiko.finash.jp/teams/56/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-174",name:"高橋虹々",position:"MF",league:"なでしこリーグ2部",team:"南葛SC WINGS",number:"29",birthday:"2006年7月11日",source:"https://nadeshiko.finash.jp/teams/56/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-175",name:"下山莉子",position:"MF",league:"なでしこリーグ2部",team:"南葛SC WINGS",number:"34",birthday:"1998年8月31日",source:"https://nadeshiko.finash.jp/teams/56/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-176",name:"石倉花純",position:"FW",league:"なでしこリーグ2部",team:"南葛SC WINGS",number:"7",birthday:"2001年7月21日",source:"https://nadeshiko.finash.jp/teams/56/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-177",name:"高橋菜々香",position:"FW",league:"なでしこリーグ2部",team:"南葛SC WINGS",number:"9",birthday:"2002年11月22日",source:"https://nadeshiko.finash.jp/teams/56/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-178",name:"槻木澤眞彩",position:"FW",league:"なでしこリーグ2部",team:"南葛SC WINGS",number:"14",birthday:"2003年4月7日",source:"https://nadeshiko.finash.jp/teams/56/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-179",name:"大坪菜",position:"FW",league:"なでしこリーグ2部",team:"南葛SC WINGS",number:"15",birthday:"1997年5月20日",source:"https://nadeshiko.finash.jp/teams/56/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-180",name:"渡辺渚々美",position:"FW",league:"なでしこリーグ2部",team:"南葛SC WINGS",number:"17",birthday:"2003年10月7日",source:"https://nadeshiko.finash.jp/teams/56/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-181",name:"堀井綾乃",position:"FW",league:"なでしこリーグ2部",team:"南葛SC WINGS",number:"24",birthday:"2001年11月28日",source:"https://nadeshiko.finash.jp/teams/56/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-182",name:"金香姫",position:"FW",league:"なでしこリーグ2部",team:"南葛SC WINGS",number:"25",birthday:"2006年1月27日",source:"https://nadeshiko.finash.jp/teams/56/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-183",name:"柴山史菜",position:"FW",league:"なでしこリーグ2部",team:"南葛SC WINGS",number:"30",birthday:"2000年4月13日",source:"https://nadeshiko.finash.jp/teams/56/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"roster-added-184",name:"横山 野ノ香",position:"GK",league:"なでしこリーグ1部",team:"朝日インテック・ラブリッジ名古屋",number:"1",birthday:"2000年8月26日",tag:"GK・選手プロフィール",description:"2026シーズンの登録情報を掲載。ポジション・背番号・誕生日は参照元の選手一覧に基づいています。",source:"https://nadeshiko.finash.jp/teams/34/2026/players",sourceLabel:"FINASH・2026年所属選手一覧"},
 {id:"roster-added-185",name:"流川 桐佳",position:"GK",league:"なでしこリーグ1部",team:"朝日インテック・ラブリッジ名古屋",number:"16",birthday:"2004年1月6日",tag:"GK・選手プロフィール",description:"2026シーズンの登録情報を掲載。ポジション・背番号・誕生日は参照元の選手一覧に基づいています。",source:"https://nadeshiko.finash.jp/teams/34/2026/players",sourceLabel:"FINASH・2026年所属選手一覧"},
 {id:"roster-added-186",name:"栗田 若菜",position:"GK",league:"なでしこリーグ1部",team:"朝日インテック・ラブリッジ名古屋",number:"34",birthday:"2008年6月13日",tag:"GK・選手プロフィール",description:"2026シーズンの登録情報を掲載。ポジション・背番号・誕生日は参照元の選手一覧に基づいています。",source:"https://nadeshiko.finash.jp/teams/34/2026/players",sourceLabel:"FINASH・2026年所属選手一覧"},
 {id:"roster-added-187",name:"夏目 歩実",position:"DF",league:"なでしこリーグ1部",team:"朝日インテック・ラブリッジ名古屋",number:"2",birthday:"2002年2月15日",tag:"DF・選手プロフィール",description:"2026シーズンの登録情報を掲載。ポジション・背番号・誕生日は参照元の選手一覧に基づいています。",source:"https://nadeshiko.finash.jp/teams/34/2026/players",sourceLabel:"FINASH・2026年所属選手一覧"},
 {id:"roster-added-188",name:"森口 莉子",position:"DF",league:"なでしこリーグ1部",team:"朝日インテック・ラブリッジ名古屋",number:"3",birthday:"2002年8月31日",tag:"DF・選手プロフィール",description:"2026シーズンの登録情報を掲載。ポジション・背番号・誕生日は参照元の選手一覧に基づいています。",source:"https://nadeshiko.finash.jp/teams/34/2026/players",sourceLabel:"FINASH・2026年所属選手一覧"},
 {id:"roster-added-189",name:"橘 麗衣",position:"DF",league:"なでしこリーグ1部",team:"朝日インテック・ラブリッジ名古屋",number:"10",birthday:"1993年5月25日",tag:"DF・選手プロフィール",description:"2026シーズンの登録情報を掲載。ポジション・背番号・誕生日は参照元の選手一覧に基づいています。",source:"https://nadeshiko.finash.jp/teams/34/2026/players",sourceLabel:"FINASH・2026年所属選手一覧"},
 {id:"roster-added-190",name:"堀内 意",position:"DF",league:"なでしこリーグ1部",team:"朝日インテック・ラブリッジ名古屋",number:"17",birthday:"2003年12月5日",tag:"DF・選手プロフィール",description:"2026シーズンの登録情報を掲載。ポジション・背番号・誕生日は参照元の選手一覧に基づいています。",source:"https://nadeshiko.finash.jp/teams/34/2026/players",sourceLabel:"FINASH・2026年所属選手一覧"},
 {id:"roster-added-191",name:"宮本 仁奈",position:"DF",league:"なでしこリーグ1部",team:"朝日インテック・ラブリッジ名古屋",number:"18",birthday:"2002年4月2日",tag:"DF・選手プロフィール",description:"2026シーズンの登録情報を掲載。ポジション・背番号・誕生日は参照元の選手一覧に基づいています。",source:"https://nadeshiko.finash.jp/teams/34/2026/players",sourceLabel:"FINASH・2026年所属選手一覧"},
 {id:"roster-added-192",name:"松本 和笑",position:"DF",league:"なでしこリーグ1部",team:"朝日インテック・ラブリッジ名古屋",number:"23",birthday:"2003年11月14日",tag:"DF・選手プロフィール",description:"2026シーズンの登録情報を掲載。ポジション・背番号・誕生日は参照元の選手一覧に基づいています。",source:"https://nadeshiko.finash.jp/teams/34/2026/players",sourceLabel:"FINASH・2026年所属選手一覧"},
 {id:"roster-added-193",name:"角田 菜々子",position:"DF",league:"なでしこリーグ1部",team:"朝日インテック・ラブリッジ名古屋",number:"24",birthday:"2001年10月11日",tag:"DF・選手プロフィール",description:"2026シーズンの登録情報を掲載。ポジション・背番号・誕生日は参照元の選手一覧に基づいています。",source:"https://nadeshiko.finash.jp/teams/34/2026/players",sourceLabel:"FINASH・2026年所属選手一覧"},
 {id:"roster-added-194",name:"河合 野乃子",position:"DF",league:"なでしこリーグ1部",team:"朝日インテック・ラブリッジ名古屋",number:"25",birthday:"2002年5月5日",tag:"DF・選手プロフィール",description:"2026シーズンの登録情報を掲載。ポジション・背番号・誕生日は参照元の選手一覧に基づいています。",source:"https://nadeshiko.finash.jp/teams/34/2026/players",sourceLabel:"FINASH・2026年所属選手一覧"},
 {id:"roster-added-195",name:"大倉 光藍",position:"DF",league:"なでしこリーグ1部",team:"朝日インテック・ラブリッジ名古屋",number:"32",birthday:"2008年11月10日",tag:"DF・選手プロフィール",description:"2026シーズンの登録情報を掲載。ポジション・背番号・誕生日は参照元の選手一覧に基づいています。",source:"https://nadeshiko.finash.jp/teams/34/2026/players",sourceLabel:"FINASH・2026年所属選手一覧"},
 {id:"roster-added-196",name:"逸見 桃子",position:"MF",league:"なでしこリーグ1部",team:"朝日インテック・ラブリッジ名古屋",number:"4",birthday:"1997年3月25日",tag:"MF・選手プロフィール",description:"2026シーズンの登録情報を掲載。ポジション・背番号・誕生日は参照元の選手一覧に基づいています。",source:"https://nadeshiko.finash.jp/teams/34/2026/players",sourceLabel:"FINASH・2026年所属選手一覧"},
 {id:"roster-added-197",name:"安部 由希子",position:"MF",league:"なでしこリーグ1部",team:"朝日インテック・ラブリッジ名古屋",number:"5",birthday:"1997年1月4日",tag:"MF・選手プロフィール",description:"2026シーズンの登録情報を掲載。ポジション・背番号・誕生日は参照元の選手一覧に基づいています。",source:"https://nadeshiko.finash.jp/teams/34/2026/players",sourceLabel:"FINASH・2026年所属選手一覧"},
 {id:"roster-added-198",name:"大淵 日和",position:"MF",league:"なでしこリーグ1部",team:"朝日インテック・ラブリッジ名古屋",number:"6",birthday:"2004年5月5日",tag:"MF・選手プロフィール",description:"2026シーズンの登録情報を掲載。ポジション・背番号・誕生日は参照元の選手一覧に基づいています。",source:"https://nadeshiko.finash.jp/teams/34/2026/players",sourceLabel:"FINASH・2026年所属選手一覧"},
 {id:"roster-added-199",name:"加藤 ゆあ",position:"MF",league:"なでしこリーグ1部",team:"朝日インテック・ラブリッジ名古屋",number:"7",birthday:"2000年3月21日",tag:"MF・選手プロフィール",description:"2026シーズンの登録情報を掲載。ポジション・背番号・誕生日は参照元の選手一覧に基づいています。",source:"https://nadeshiko.finash.jp/teams/34/2026/players",sourceLabel:"FINASH・2026年所属選手一覧"},
 {id:"roster-added-200",name:"渕上 野乃佳",position:"MF",league:"なでしこリーグ1部",team:"朝日インテック・ラブリッジ名古屋",number:"8",birthday:"2003年1月20日",tag:"MF・選手プロフィール",description:"2026シーズンの登録情報を掲載。ポジション・背番号・誕生日は参照元の選手一覧に基づいています。",source:"https://nadeshiko.finash.jp/teams/34/2026/players",sourceLabel:"FINASH・2026年所属選手一覧"},
 {id:"roster-added-201",name:"藤原 愛里",position:"MF",league:"なでしこリーグ1部",team:"朝日インテック・ラブリッジ名古屋",number:"11",birthday:"2001年9月4日",tag:"MF・選手プロフィール",description:"2026シーズンの登録情報を掲載。ポジション・背番号・誕生日は参照元の選手一覧に基づいています。",source:"https://nadeshiko.finash.jp/teams/34/2026/players",sourceLabel:"FINASH・2026年所属選手一覧"},
 {id:"roster-added-202",name:"上田 真子",position:"MF",league:"なでしこリーグ1部",team:"朝日インテック・ラブリッジ名古屋",number:"14",birthday:"2001年7月18日",tag:"MF・選手プロフィール",description:"2026シーズンの登録情報を掲載。ポジション・背番号・誕生日は参照元の選手一覧に基づいています。",source:"https://nadeshiko.finash.jp/teams/34/2026/players",sourceLabel:"FINASH・2026年所属選手一覧"},
 {id:"roster-added-203",name:"中村 友香",position:"MF",league:"なでしこリーグ1部",team:"朝日インテック・ラブリッジ名古屋",number:"15",birthday:"2000年1月24日",tag:"MF・選手プロフィール",description:"2026シーズンの登録情報を掲載。ポジション・背番号・誕生日は参照元の選手一覧に基づいています。",source:"https://nadeshiko.finash.jp/teams/34/2026/players",sourceLabel:"FINASH・2026年所属選手一覧"},
 {id:"roster-added-204",name:"増永 朱里",position:"MF",league:"なでしこリーグ1部",team:"朝日インテック・ラブリッジ名古屋",number:"20",birthday:"2001年5月20日",tag:"MF・選手プロフィール",description:"2026シーズンの登録情報を掲載。ポジション・背番号・誕生日は参照元の選手一覧に基づいています。",source:"https://nadeshiko.finash.jp/teams/34/2026/players",sourceLabel:"FINASH・2026年所属選手一覧"},
 {id:"roster-added-205",name:"大場 柚季",position:"MF",league:"なでしこリーグ1部",team:"朝日インテック・ラブリッジ名古屋",number:"21",birthday:"2004年1月3日",tag:"MF・選手プロフィール",description:"2026シーズンの登録情報を掲載。ポジション・背番号・誕生日は参照元の選手一覧に基づいています。",source:"https://nadeshiko.finash.jp/teams/34/2026/players",sourceLabel:"FINASH・2026年所属選手一覧"},
 {id:"roster-added-206",name:"川添 凛音",position:"MF",league:"なでしこリーグ1部",team:"朝日インテック・ラブリッジ名古屋",number:"22",birthday:"2008年2月2日",tag:"MF・選手プロフィール",description:"2026シーズンの登録情報を掲載。ポジション・背番号・誕生日は参照元の選手一覧に基づいています。",source:"https://nadeshiko.finash.jp/teams/34/2026/players",sourceLabel:"FINASH・2026年所属選手一覧"},
 {id:"roster-added-207",name:"長谷原 彩音",position:"MF",league:"なでしこリーグ1部",team:"朝日インテック・ラブリッジ名古屋",number:"26",birthday:"2002年5月30日",tag:"MF・選手プロフィール",description:"2026シーズンの登録情報を掲載。ポジション・背番号・誕生日は参照元の選手一覧に基づいています。",source:"https://nadeshiko.finash.jp/teams/34/2026/players",sourceLabel:"FINASH・2026年所属選手一覧"},
 {id:"roster-added-208",name:"永田 晶子",position:"MF",league:"なでしこリーグ1部",team:"朝日インテック・ラブリッジ名古屋",number:"28",birthday:"2001年12月27日",tag:"MF・選手プロフィール",description:"2026シーズンの登録情報を掲載。ポジション・背番号・誕生日は参照元の選手一覧に基づいています。",source:"https://nadeshiko.finash.jp/teams/34/2026/players",sourceLabel:"FINASH・2026年所属選手一覧"},
 {id:"roster-added-209",name:"成田 倖彩",position:"MF",league:"なでしこリーグ1部",team:"朝日インテック・ラブリッジ名古屋",number:"30",birthday:"2009年10月6日",tag:"MF・選手プロフィール",description:"2026シーズンの登録情報を掲載。ポジション・背番号・誕生日は参照元の選手一覧に基づいています。",source:"https://nadeshiko.finash.jp/teams/34/2026/players",sourceLabel:"FINASH・2026年所属選手一覧"},
 {id:"roster-added-210",name:"大宮 那月",position:"MF",league:"なでしこリーグ1部",team:"朝日インテック・ラブリッジ名古屋",number:"31",birthday:"2011年9月3日",tag:"MF・選手プロフィール",description:"2026シーズンの登録情報を掲載。ポジション・背番号・誕生日は参照元の選手一覧に基づいています。",source:"https://nadeshiko.finash.jp/teams/34/2026/players",sourceLabel:"FINASH・2026年所属選手一覧"},
 {id:"roster-added-211",name:"水野 亜美",position:"FW",league:"なでしこリーグ1部",team:"朝日インテック・ラブリッジ名古屋",number:"9",birthday:"1998年6月5日",tag:"FW・選手プロフィール",description:"2026シーズンの登録情報を掲載。ポジション・背番号・誕生日は参照元の選手一覧に基づいています。",source:"https://nadeshiko.finash.jp/teams/34/2026/players",sourceLabel:"FINASH・2026年所属選手一覧"},
 {id:"roster-added-212",name:"仁木 愛実",position:"FW",league:"なでしこリーグ1部",team:"朝日インテック・ラブリッジ名古屋",number:"13",birthday:"2002年1月19日",tag:"FW・選手プロフィール",description:"2026シーズンの登録情報を掲載。ポジション・背番号・誕生日は参照元の選手一覧に基づいています。",source:"https://nadeshiko.finash.jp/teams/34/2026/players",sourceLabel:"FINASH・2026年所属選手一覧"},
 {id:"roster-added-213",name:"田中 亜依",position:"FW",league:"なでしこリーグ1部",team:"朝日インテック・ラブリッジ名古屋",number:"35",birthday:"2010年8月5日",tag:"FW・選手プロフィール",description:"2026シーズンの登録情報を掲載。ポジション・背番号・誕生日は参照元の選手一覧に基づいています。",source:"https://nadeshiko.finash.jp/teams/34/2026/players",sourceLabel:"FINASH・2026年所属選手一覧"},
 {id:"roster-added-214",name:"澤田 法味",position:"GK",league:"なでしこリーグ2部",team:"大和シルフィード",number:"1",birthday:"1986年3月13日",tag:"GK・選手プロフィール",description:"2026シーズンの登録情報を掲載。ポジション・背番号・誕生日は参照元の選手一覧に基づいています。",source:"https://nadeshiko.finash.jp/teams/29/2026/players",sourceLabel:"FINASH・2026年所属選手一覧"},
 {id:"roster-added-215",name:"山﨑 彩永",position:"GK",league:"なでしこリーグ2部",team:"大和シルフィード",number:"16",birthday:"2006年12月18日",tag:"GK・選手プロフィール",description:"2026シーズンの登録情報を掲載。ポジション・背番号・誕生日は参照元の選手一覧に基づいています。",source:"https://nadeshiko.finash.jp/teams/29/2026/players",sourceLabel:"FINASH・2026年所属選手一覧"},
 {id:"roster-added-216",name:"竹本 愛",position:"GK",league:"なでしこリーグ2部",team:"大和シルフィード",number:"21",birthday:"2002年7月6日",tag:"GK・選手プロフィール",description:"2026シーズンの登録情報を掲載。ポジション・背番号・誕生日は参照元の選手一覧に基づいています。",source:"https://nadeshiko.finash.jp/teams/29/2026/players",sourceLabel:"FINASH・2026年所属選手一覧"},
 {id:"roster-added-217",name:"村上 奈央",position:"DF",league:"なでしこリーグ2部",team:"大和シルフィード",number:"2",birthday:"2001年3月20日",tag:"DF・選手プロフィール",description:"2026シーズンの登録情報を掲載。ポジション・背番号・誕生日は参照元の選手一覧に基づいています。",source:"https://nadeshiko.finash.jp/teams/29/2026/players",sourceLabel:"FINASH・2026年所属選手一覧"},
 {id:"roster-added-218",name:"安東 麻耶",position:"DF",league:"なでしこリーグ2部",team:"大和シルフィード",number:"3",birthday:"1996年6月15日",tag:"DF・選手プロフィール",description:"2026シーズンの登録情報を掲載。ポジション・背番号・誕生日は参照元の選手一覧に基づいています。",source:"https://nadeshiko.finash.jp/teams/29/2026/players",sourceLabel:"FINASH・2026年所属選手一覧"},
 {id:"roster-added-219",name:"中舘 郁帆",position:"DF",league:"なでしこリーグ2部",team:"大和シルフィード",number:"4",birthday:"2000年7月8日",tag:"DF・選手プロフィール",description:"2026シーズンの登録情報を掲載。ポジション・背番号・誕生日は参照元の選手一覧に基づいています。",source:"https://nadeshiko.finash.jp/teams/29/2026/players",sourceLabel:"FINASH・2026年所属選手一覧"},
 {id:"roster-added-220",name:"豊村 佳音",position:"DF",league:"なでしこリーグ2部",team:"大和シルフィード",number:"15",birthday:"2003年6月21日",tag:"DF・選手プロフィール",description:"2026シーズンの登録情報を掲載。ポジション・背番号・誕生日は参照元の選手一覧に基づいています。",source:"https://nadeshiko.finash.jp/teams/29/2026/players",sourceLabel:"FINASH・2026年所属選手一覧"},
 {id:"roster-added-221",name:"外林 花音",position:"DF",league:"なでしこリーグ2部",team:"大和シルフィード",number:"19",birthday:"2003年5月12日",tag:"DF・選手プロフィール",description:"2026シーズンの登録情報を掲載。ポジション・背番号・誕生日は参照元の選手一覧に基づいています。",source:"https://nadeshiko.finash.jp/teams/29/2026/players",sourceLabel:"FINASH・2026年所属選手一覧"},
 {id:"roster-added-222",name:"鈴木 彩心",position:"DF",league:"なでしこリーグ2部",team:"大和シルフィード",number:"24",birthday:"2002年7月1日",tag:"DF・選手プロフィール",description:"2026シーズンの登録情報を掲載。ポジション・背番号・誕生日は参照元の選手一覧に基づいています。",source:"https://nadeshiko.finash.jp/teams/29/2026/players",sourceLabel:"FINASH・2026年所属選手一覧"},
 {id:"roster-added-223",name:"小川 彩乃",position:"DF",league:"なでしこリーグ2部",team:"大和シルフィード",number:"26",birthday:"2000年11月16日",tag:"DF・選手プロフィール",description:"2026シーズンの登録情報を掲載。ポジション・背番号・誕生日は参照元の選手一覧に基づいています。",source:"https://nadeshiko.finash.jp/teams/29/2026/players",sourceLabel:"FINASH・2026年所属選手一覧"},
 {id:"roster-added-224",name:"小林 凜",position:"DF",league:"なでしこリーグ2部",team:"大和シルフィード",number:"27",birthday:"2003年8月11日",tag:"DF・選手プロフィール",description:"2026シーズンの登録情報を掲載。ポジション・背番号・誕生日は参照元の選手一覧に基づいています。",source:"https://nadeshiko.finash.jp/teams/29/2026/players",sourceLabel:"FINASH・2026年所属選手一覧"},
 {id:"roster-added-225",name:"瀬川 美空",position:"DF",league:"なでしこリーグ2部",team:"大和シルフィード",number:"33",birthday:"2008年9月29日",tag:"DF・選手プロフィール",description:"2026シーズンの登録情報を掲載。ポジション・背番号・誕生日は参照元の選手一覧に基づいています。",source:"https://nadeshiko.finash.jp/teams/29/2026/players",sourceLabel:"FINASH・2026年所属選手一覧"},
 {id:"roster-added-226",name:"伊勢 はな",position:"DF",league:"なでしこリーグ2部",team:"大和シルフィード",number:"35",birthday:"2007年6月22日",tag:"DF・選手プロフィール",description:"2026シーズンの登録情報を掲載。ポジション・背番号・誕生日は参照元の選手一覧に基づいています。",source:"https://nadeshiko.finash.jp/teams/29/2026/players",sourceLabel:"FINASH・2026年所属選手一覧"},
 {id:"roster-added-227",name:"山本 玲",position:"MF",league:"なでしこリーグ2部",team:"大和シルフィード",number:"5",birthday:"2003年12月22日",tag:"MF・選手プロフィール",description:"2026シーズンの登録情報を掲載。ポジション・背番号・誕生日は参照元の選手一覧に基づいています。",source:"https://nadeshiko.finash.jp/teams/29/2026/players",sourceLabel:"FINASH・2026年所属選手一覧"},
 {id:"roster-added-228",name:"黒澤 琴音",position:"MF",league:"なでしこリーグ2部",team:"大和シルフィード",number:"6",birthday:"2001年10月27日",tag:"MF・選手プロフィール",description:"2026シーズンの登録情報を掲載。ポジション・背番号・誕生日は参照元の選手一覧に基づいています。",source:"https://nadeshiko.finash.jp/teams/29/2026/players",sourceLabel:"FINASH・2026年所属選手一覧"},
 {id:"roster-added-229",name:"高梨 夕花",position:"MF",league:"なでしこリーグ2部",team:"大和シルフィード",number:"7",birthday:"2002年9月10日",tag:"MF・選手プロフィール",description:"2026シーズンの登録情報を掲載。ポジション・背番号・誕生日は参照元の選手一覧に基づいています。",source:"https://nadeshiko.finash.jp/teams/29/2026/players",sourceLabel:"FINASH・2026年所属選手一覧"},
 {id:"roster-added-230",name:"松浦 渚",position:"MF",league:"なでしこリーグ2部",team:"大和シルフィード",number:"9",birthday:"1994年4月20日",tag:"MF・選手プロフィール",description:"2026シーズンの登録情報を掲載。ポジション・背番号・誕生日は参照元の選手一覧に基づいています。",source:"https://nadeshiko.finash.jp/teams/29/2026/players",sourceLabel:"FINASH・2026年所属選手一覧"},
 {id:"roster-added-231",name:"堀 良江",position:"MF",league:"なでしこリーグ2部",team:"大和シルフィード",number:"11",birthday:"1988年11月2日",tag:"MF・選手プロフィール",description:"2026シーズンの登録情報を掲載。ポジション・背番号・誕生日は参照元の選手一覧に基づいています。",source:"https://nadeshiko.finash.jp/teams/29/2026/players",sourceLabel:"FINASH・2026年所属選手一覧"},
 {id:"roster-added-232",name:"宮波 小雪",position:"MF",league:"なでしこリーグ2部",team:"大和シルフィード",number:"13",birthday:"2003年11月13日",tag:"MF・選手プロフィール",description:"2026シーズンの登録情報を掲載。ポジション・背番号・誕生日は参照元の選手一覧に基づいています。",source:"https://nadeshiko.finash.jp/teams/29/2026/players",sourceLabel:"FINASH・2026年所属選手一覧"},
 {id:"roster-added-233",name:"梶井 鈴音",position:"MF",league:"なでしこリーグ2部",team:"大和シルフィード",number:"14",birthday:"2000年11月28日",tag:"MF・選手プロフィール",description:"2026シーズンの登録情報を掲載。ポジション・背番号・誕生日は参照元の選手一覧に基づいています。",source:"https://nadeshiko.finash.jp/teams/29/2026/players",sourceLabel:"FINASH・2026年所属選手一覧"},
 {id:"roster-added-234",name:"鶴岡 優月",position:"MF",league:"なでしこリーグ2部",team:"大和シルフィード",number:"17",birthday:"2003年9月28日",tag:"MF・選手プロフィール",description:"2026シーズンの登録情報を掲載。ポジション・背番号・誕生日は参照元の選手一覧に基づいています。",source:"https://nadeshiko.finash.jp/teams/29/2026/players",sourceLabel:"FINASH・2026年所属選手一覧"},
 {id:"roster-added-235",name:"芳賀 朱鳳",position:"MF",league:"なでしこリーグ2部",team:"大和シルフィード",number:"23",birthday:"2001年11月11日",tag:"MF・選手プロフィール",description:"2026シーズンの登録情報を掲載。ポジション・背番号・誕生日は参照元の選手一覧に基づいています。",source:"https://nadeshiko.finash.jp/teams/29/2026/players",sourceLabel:"FINASH・2026年所属選手一覧"},
 {id:"roster-added-236",name:"平國 瑞希",position:"MF",league:"なでしこリーグ2部",team:"大和シルフィード",number:"28",birthday:"1995年8月16日",tag:"MF・選手プロフィール",description:"2026シーズンの登録情報を掲載。ポジション・背番号・誕生日は参照元の選手一覧に基づいています。",source:"https://nadeshiko.finash.jp/teams/29/2026/players",sourceLabel:"FINASH・2026年所属選手一覧"},
 {id:"roster-added-237",name:"田中 優音",position:"MF",league:"なでしこリーグ2部",team:"大和シルフィード",number:"29",birthday:"2005年2月11日",tag:"MF・選手プロフィール",description:"2026シーズンの登録情報を掲載。ポジション・背番号・誕生日は参照元の選手一覧に基づいています。",source:"https://nadeshiko.finash.jp/teams/29/2026/players",sourceLabel:"FINASH・2026年所属選手一覧"},
 {id:"roster-added-238",name:"上辻 佑実",position:"MF",league:"なでしこリーグ2部",team:"大和シルフィード",number:"34",birthday:"1987年11月30日",tag:"MF・選手プロフィール",description:"2026シーズンの登録情報を掲載。ポジション・背番号・誕生日は参照元の選手一覧に基づいています。",source:"https://nadeshiko.finash.jp/teams/29/2026/players",sourceLabel:"FINASH・2026年所属選手一覧"},
 {id:"roster-added-239",name:"源間 葉月",position:"MF",league:"なでしこリーグ2部",team:"大和シルフィード",number:"36",birthday:"1998年10月28日",tag:"MF・選手プロフィール",description:"2026シーズンの登録情報を掲載。ポジション・背番号・誕生日は参照元の選手一覧に基づいています。",source:"https://nadeshiko.finash.jp/teams/29/2026/players",sourceLabel:"FINASH・2026年所属選手一覧"},
 {id:"roster-added-240",name:"山本 菜桜美",position:"FW",league:"なでしこリーグ2部",team:"大和シルフィード",number:"8",birthday:"1991年3月31日",tag:"FW・選手プロフィール",description:"2026シーズンの登録情報を掲載。ポジション・背番号・誕生日は参照元の選手一覧に基づいています。",source:"https://nadeshiko.finash.jp/teams/29/2026/players",sourceLabel:"FINASH・2026年所属選手一覧"},
 {id:"roster-added-241",name:"幸嶋 里佳",position:"FW",league:"なでしこリーグ2部",team:"大和シルフィード",number:"18",birthday:"1998年7月10日",tag:"FW・選手プロフィール",description:"2026シーズンの登録情報を掲載。ポジション・背番号・誕生日は参照元の選手一覧に基づいています。",source:"https://nadeshiko.finash.jp/teams/29/2026/players",sourceLabel:"FINASH・2026年所属選手一覧"},
 {id:"roster-added-242",name:"相原 結衣",position:"FW",league:"なでしこリーグ2部",team:"大和シルフィード",number:"20",birthday:"2005年12月31日",tag:"FW・選手プロフィール",description:"2026シーズンの登録情報を掲載。ポジション・背番号・誕生日は参照元の選手一覧に基づいています。",source:"https://nadeshiko.finash.jp/teams/29/2026/players",sourceLabel:"FINASH・2026年所属選手一覧"},
 {id:"roster-added-243",name:"保原 ひな",position:"FW",league:"なでしこリーグ2部",team:"大和シルフィード",number:"22",birthday:"2004年6月3日",tag:"FW・選手プロフィール",description:"2026シーズンの登録情報を掲載。ポジション・背番号・誕生日は参照元の選手一覧に基づいています。",source:"https://nadeshiko.finash.jp/teams/29/2026/players",sourceLabel:"FINASH・2026年所属選手一覧"},
 {id:"roster-added-244",name:"安田 聖羅",position:"FW",league:"なでしこリーグ2部",team:"大和シルフィード",number:"25",birthday:"2002年6月21日",tag:"FW・選手プロフィール",description:"2026シーズンの登録情報を掲載。ポジション・背番号・誕生日は参照元の選手一覧に基づいています。",source:"https://nadeshiko.finash.jp/teams/29/2026/players",sourceLabel:"FINASH・2026年所属選手一覧"},
 {id:"roster-added-245",name:"浜田 遥",position:"FW",league:"なでしこリーグ2部",team:"大和シルフィード",number:"30",birthday:"1993年1月26日",tag:"FW・選手プロフィール",description:"2026シーズンの登録情報を掲載。ポジション・背番号・誕生日は参照元の選手一覧に基づいています。",source:"https://nadeshiko.finash.jp/teams/29/2026/players",sourceLabel:"FINASH・2026年所属選手一覧"},
 {id:"roster-added-246",name:"Davis Alma",position:"FW",league:"なでしこリーグ2部",team:"大和シルフィード",number:"37",birthday:"2003年7月20日",tag:"FW・選手プロフィール",description:"2026シーズンの登録情報を掲載。ポジション・背番号・誕生日は参照元の選手一覧に基づいています。",source:"https://nadeshiko.finash.jp/teams/29/2026/players",sourceLabel:"FINASH・2026年所属選手一覧"},
 {id:"added-nadeshiko1-001",name:"原田実歩",position:"GK",league:"なでしこリーグ1部",team:"ＡＳハリマアルビオン",number:"1",birthday:"1994年8月2日",source:"https://nadeshiko.finash.jp/teams/17/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-nadeshiko1-002",name:"草苅希羽",position:"GK",league:"なでしこリーグ1部",team:"ＡＳハリマアルビオン",number:"21",birthday:"2004年2月7日",source:"https://nadeshiko.finash.jp/teams/17/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-nadeshiko1-003",name:"小暮千晶",position:"GK",league:"なでしこリーグ1部",team:"ＡＳハリマアルビオン",number:"41",birthday:"1999年3月12日",source:"https://nadeshiko.finash.jp/teams/17/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-nadeshiko1-004",name:"児玉耀",position:"DF",league:"なでしこリーグ1部",team:"ＡＳハリマアルビオン",number:"2",birthday:"2002年9月14日",source:"https://nadeshiko.finash.jp/teams/17/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-nadeshiko1-005",name:"佐武ほのか",position:"DF",league:"なでしこリーグ1部",team:"ＡＳハリマアルビオン",number:"3",birthday:"2003年5月28日",source:"https://nadeshiko.finash.jp/teams/17/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-nadeshiko1-006",name:"阪中澪",position:"DF",league:"なでしこリーグ1部",team:"ＡＳハリマアルビオン",number:"4",birthday:"1996年8月21日",source:"https://nadeshiko.finash.jp/teams/17/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-nadeshiko1-007",name:"小島美玖",position:"DF",league:"なでしこリーグ1部",team:"ＡＳハリマアルビオン",number:"5",birthday:"1996年8月30日",source:"https://nadeshiko.finash.jp/teams/17/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-nadeshiko1-008",name:"佐々木美悠",position:"DF",league:"なでしこリーグ1部",team:"ＡＳハリマアルビオン",number:"6",birthday:"2001年11月13日",source:"https://nadeshiko.finash.jp/teams/17/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-nadeshiko1-009",name:"高松芹羽",position:"DF",league:"なでしこリーグ1部",team:"ＡＳハリマアルビオン",number:"19",birthday:"2006年5月11日",source:"https://nadeshiko.finash.jp/teams/17/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-nadeshiko1-010",name:"山口歌子",position:"DF",league:"なでしこリーグ1部",team:"ＡＳハリマアルビオン",number:"20",birthday:"2002年6月19日",source:"https://nadeshiko.finash.jp/teams/17/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-nadeshiko1-011",name:"朝山瑞希",position:"DF",league:"なでしこリーグ1部",team:"ＡＳハリマアルビオン",number:"22",birthday:"2006年5月22日",source:"https://nadeshiko.finash.jp/teams/17/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-nadeshiko1-012",name:"村田かえで",position:"DF",league:"なでしこリーグ1部",team:"ＡＳハリマアルビオン",number:"24",birthday:"2003年12月26日",source:"https://nadeshiko.finash.jp/teams/17/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-nadeshiko1-013",name:"三冨りりか",position:"MF",league:"なでしこリーグ1部",team:"ＡＳハリマアルビオン",number:"7",birthday:"2006年1月18日",source:"https://nadeshiko.finash.jp/teams/17/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-nadeshiko1-014",name:"小池快",position:"MF",league:"なでしこリーグ1部",team:"ＡＳハリマアルビオン",number:"8",birthday:"1994年2月18日",source:"https://nadeshiko.finash.jp/teams/17/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-nadeshiko1-015",name:"正野可菜子",position:"MF",league:"なでしこリーグ1部",team:"ＡＳハリマアルビオン",number:"14",birthday:"1994年2月6日",source:"https://nadeshiko.finash.jp/teams/17/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-nadeshiko1-016",name:"大原和夏",position:"MF",league:"なでしこリーグ1部",team:"ＡＳハリマアルビオン",number:"15",birthday:"2002年6月28日",source:"https://nadeshiko.finash.jp/teams/17/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-nadeshiko1-017",name:"左子五月",position:"MF",league:"なでしこリーグ1部",team:"ＡＳハリマアルビオン",number:"16",birthday:"1997年5月31日",source:"https://nadeshiko.finash.jp/teams/17/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-nadeshiko1-018",name:"唐橋万結",position:"MF",league:"なでしこリーグ1部",team:"ＡＳハリマアルビオン",number:"17",birthday:"1999年8月4日",source:"https://nadeshiko.finash.jp/teams/17/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-nadeshiko1-019",name:"阿部文音",position:"MF",league:"なでしこリーグ1部",team:"ＡＳハリマアルビオン",number:"18",birthday:"2002年11月19日",source:"https://nadeshiko.finash.jp/teams/17/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-nadeshiko1-020",name:"鷹野あかり",position:"MF",league:"なでしこリーグ1部",team:"ＡＳハリマアルビオン",number:"25",birthday:"2007年9月22日",source:"https://nadeshiko.finash.jp/teams/17/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-nadeshiko1-021",name:"藤原安佑",position:"MF",league:"なでしこリーグ1部",team:"ＡＳハリマアルビオン",number:"26",birthday:"2000年2月14日",source:"https://nadeshiko.finash.jp/teams/17/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-nadeshiko1-022",name:"川﨑咲耶",position:"FW",league:"なでしこリーグ1部",team:"ＡＳハリマアルビオン",number:"9",birthday:"1996年6月7日",source:"https://nadeshiko.finash.jp/teams/17/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-nadeshiko1-023",name:"千葉園子",position:"FW",league:"なでしこリーグ1部",team:"ＡＳハリマアルビオン",number:"10",birthday:"1993年6月15日",source:"https://nadeshiko.finash.jp/teams/17/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-nadeshiko1-024",name:"南條里緒",position:"FW",league:"なでしこリーグ1部",team:"ＡＳハリマアルビオン",number:"11",birthday:"1997年4月9日",source:"https://nadeshiko.finash.jp/teams/17/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-nadeshiko1-025",name:"今蔵綾乃",position:"FW",league:"なでしこリーグ1部",team:"ＡＳハリマアルビオン",number:"13",birthday:"2001年10月23日",source:"https://nadeshiko.finash.jp/teams/17/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-nadeshiko1-026",name:"井上麗叶",position:"FW",league:"なでしこリーグ1部",team:"ＡＳハリマアルビオン",number:"23",birthday:"2003年6月15日",source:"https://nadeshiko.finash.jp/teams/17/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-nadeshiko1-027",name:"椎野彩香",position:"FW",league:"なでしこリーグ1部",team:"ＡＳハリマアルビオン",number:"33",birthday:"1999年4月23日",source:"https://nadeshiko.finash.jp/teams/17/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-ehime-001",name:"藤田萌歌",position:"GK",league:"なでしこリーグ1部",team:"愛媛ＦＣレディース",number:"1",birthday:"2003年5月23日",source:"https://nadeshiko.finash.jp/teams/14/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-ehime-002",name:"小松里弥",position:"GK",league:"なでしこリーグ1部",team:"愛媛ＦＣレディース",number:"21",birthday:"1996年9月5日",source:"https://nadeshiko.finash.jp/teams/14/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-ehime-003",name:"山内れな",position:"GK",league:"なでしこリーグ1部",team:"愛媛ＦＣレディース",number:"33",birthday:"2008年12月11日",source:"https://nadeshiko.finash.jp/teams/14/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-ehime-004",name:"松村菜美",position:"DF",league:"なでしこリーグ1部",team:"愛媛ＦＣレディース",number:"2",birthday:"2001年8月26日",source:"https://nadeshiko.finash.jp/teams/14/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-ehime-005",name:"大八木朱音",position:"DF",league:"なでしこリーグ1部",team:"愛媛ＦＣレディース",number:"3",birthday:"2003年5月21日",source:"https://nadeshiko.finash.jp/teams/14/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-ehime-006",name:"毛利美佑",position:"DF",league:"なでしこリーグ1部",team:"愛媛ＦＣレディース",number:"4",birthday:"2000年4月12日",source:"https://nadeshiko.finash.jp/teams/14/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-ehime-007",name:"西村紀音",position:"DF",league:"なでしこリーグ1部",team:"愛媛ＦＣレディース",number:"5",birthday:"2003年4月21日",source:"https://nadeshiko.finash.jp/teams/14/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-ehime-008",name:"丸山ちさと",position:"DF",league:"なでしこリーグ1部",team:"愛媛ＦＣレディース",number:"13",birthday:"1999年6月15日",source:"https://nadeshiko.finash.jp/teams/14/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-ehime-009",name:"前田花依",position:"DF",league:"なでしこリーグ1部",team:"愛媛ＦＣレディース",number:"24",birthday:"2003年9月26日",source:"https://nadeshiko.finash.jp/teams/14/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-ehime-010",name:"足立寧々",position:"DF",league:"なでしこリーグ1部",team:"愛媛ＦＣレディース",number:"25",birthday:"2004年4月20日",source:"https://nadeshiko.finash.jp/teams/14/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-ehime-011",name:"兵頭來良",position:"MF",league:"なでしこリーグ1部",team:"愛媛ＦＣレディース",number:"6",birthday:"2003年11月4日",source:"https://nadeshiko.finash.jp/teams/14/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-ehime-012",name:"深澤里沙",position:"MF",league:"なでしこリーグ1部",team:"愛媛ＦＣレディース",number:"8",birthday:"1986年5月10日",source:"https://nadeshiko.finash.jp/teams/14/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-ehime-013",name:"小島和希子",position:"MF",league:"なでしこリーグ1部",team:"愛媛ＦＣレディース",number:"11",birthday:"1995年4月26日",source:"https://nadeshiko.finash.jp/teams/14/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-ehime-014",name:"近藤彩優子",position:"MF",league:"なでしこリーグ1部",team:"愛媛ＦＣレディース",number:"14",birthday:"2000年1月15日",source:"https://nadeshiko.finash.jp/teams/14/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-ehime-015",name:"榎谷岬",position:"MF",league:"なでしこリーグ1部",team:"愛媛ＦＣレディース",number:"15",birthday:"1993年12月2日",source:"https://nadeshiko.finash.jp/teams/14/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-ehime-016",name:"野口珠里",position:"MF",league:"なでしこリーグ1部",team:"愛媛ＦＣレディース",number:"16",birthday:"2001年9月21日",source:"https://nadeshiko.finash.jp/teams/14/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-ehime-017",name:"黒岩沙羽",position:"MF",league:"なでしこリーグ1部",team:"愛媛ＦＣレディース",number:"19",birthday:"2005年4月10日",source:"https://nadeshiko.finash.jp/teams/14/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-ehime-018",name:"川崎和奏",position:"MF",league:"なでしこリーグ1部",team:"愛媛ＦＣレディース",number:"20",birthday:"2008年3月6日",source:"https://nadeshiko.finash.jp/teams/14/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-ehime-019",name:"溝上可夏",position:"MF",league:"なでしこリーグ1部",team:"愛媛ＦＣレディース",number:"22",birthday:"2001年9月5日",source:"https://nadeshiko.finash.jp/teams/14/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-ehime-020",name:"保坂優那",position:"MF",league:"なでしこリーグ1部",team:"愛媛ＦＣレディース",number:"23",birthday:"2002年9月18日",source:"https://nadeshiko.finash.jp/teams/14/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-ehime-021",name:"安齋結花",position:"MF",league:"なでしこリーグ1部",team:"愛媛ＦＣレディース",number:"29",birthday:"1996年10月14日",source:"https://nadeshiko.finash.jp/teams/14/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-ehime-022",name:"田上歩実",position:"MF",league:"なでしこリーグ1部",team:"愛媛ＦＣレディース",number:"30",birthday:"2003年10月6日",source:"https://nadeshiko.finash.jp/teams/14/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-ehime-023",name:"平塚万貴",position:"MF",league:"なでしこリーグ1部",team:"愛媛ＦＣレディース",number:"32",birthday:"1998年8月11日",source:"https://nadeshiko.finash.jp/teams/14/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-ehime-024",name:"谷口清夏",position:"FW",league:"なでしこリーグ1部",team:"愛媛ＦＣレディース",number:"9",birthday:"2000年7月21日",source:"https://nadeshiko.finash.jp/teams/14/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-ehime-025",name:"安田美泉",position:"FW",league:"なでしこリーグ1部",team:"愛媛ＦＣレディース",number:"17",birthday:"2007年2月22日",source:"https://nadeshiko.finash.jp/teams/14/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-ehime-026",name:"髙尾真莉奈",position:"FW",league:"なでしこリーグ1部",team:"愛媛ＦＣレディース",number:"18",birthday:"2002年8月30日",source:"https://nadeshiko.finash.jp/teams/14/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-ehime-027",name:"桜井由衣香",position:"FW",league:"なでしこリーグ1部",team:"愛媛ＦＣレディース",number:"26",birthday:"1997年1月2日",source:"https://nadeshiko.finash.jp/teams/14/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-ehime-028",name:"福岡来都",position:"FW",league:"なでしこリーグ1部",team:"愛媛ＦＣレディース",number:"27",birthday:"2011年1月25日",source:"https://nadeshiko.finash.jp/teams/14/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-bunnys-001",name:"松本紗和",position:"GK",league:"なでしこリーグ2部",team:"バニーズ群馬ＦＣホワイトスター",number:"1",birthday:"1998年10月11日",source:"https://nadeshiko.finash.jp/teams/42/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-bunnys-002",name:"高橋杏奈",position:"GK",league:"なでしこリーグ2部",team:"バニーズ群馬ＦＣホワイトスター",number:"16",birthday:"2000年11月30日",source:"https://nadeshiko.finash.jp/teams/42/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-bunnys-003",name:"古賀あかね",position:"GK",league:"なでしこリーグ2部",team:"バニーズ群馬ＦＣホワイトスター",number:"21",birthday:"2003年5月20日",source:"https://nadeshiko.finash.jp/teams/42/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-bunnys-004",name:"望月ありさ",position:"GK",league:"なでしこリーグ2部",team:"バニーズ群馬ＦＣホワイトスター",number:"32",birthday:"1994年4月15日",source:"https://nadeshiko.finash.jp/teams/42/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-bunnys-005",name:"諏訪ゆいか",position:"DF",league:"なでしこリーグ2部",team:"バニーズ群馬ＦＣホワイトスター",number:"2",birthday:"2003年6月25日",source:"https://nadeshiko.finash.jp/teams/42/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-bunnys-006",name:"関口真由",position:"DF",league:"なでしこリーグ2部",team:"バニーズ群馬ＦＣホワイトスター",number:"4",birthday:"1994年7月20日",source:"https://nadeshiko.finash.jp/teams/42/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-bunnys-007",name:"山田優衣",position:"DF",league:"なでしこリーグ2部",team:"バニーズ群馬ＦＣホワイトスター",number:"5",birthday:"2000年10月21日",source:"https://nadeshiko.finash.jp/teams/42/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-bunnys-008",name:"島田麟",position:"DF",league:"なでしこリーグ2部",team:"バニーズ群馬ＦＣホワイトスター",number:"15",birthday:"2002年4月12日",source:"https://nadeshiko.finash.jp/teams/42/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-bunnys-009",name:"山根明莉",position:"DF",league:"なでしこリーグ2部",team:"バニーズ群馬ＦＣホワイトスター",number:"22",birthday:"2003年12月5日",source:"https://nadeshiko.finash.jp/teams/42/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-bunnys-010",name:"小田部珠涼",position:"DF",league:"なでしこリーグ2部",team:"バニーズ群馬ＦＣホワイトスター",number:"23",birthday:"2003年6月20日",source:"https://nadeshiko.finash.jp/teams/42/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-bunnys-011",name:"NAM Seungeun",position:"DF",league:"なでしこリーグ2部",team:"バニーズ群馬ＦＣホワイトスター",number:"24",birthday:"2006年1月10日",source:"https://nadeshiko.finash.jp/teams/42/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-bunnys-012",name:"加藤真実",position:"DF",league:"なでしこリーグ2部",team:"バニーズ群馬ＦＣホワイトスター",number:"25",birthday:"2006年6月4日",source:"https://nadeshiko.finash.jp/teams/42/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-bunnys-013",name:"林明歩",position:"MF",league:"なでしこリーグ2部",team:"バニーズ群馬ＦＣホワイトスター",number:"6",birthday:"2003年10月20日",source:"https://nadeshiko.finash.jp/teams/42/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-bunnys-014",name:"高塚綾音",position:"MF",league:"なでしこリーグ2部",team:"バニーズ群馬ＦＣホワイトスター",number:"7",birthday:"1994年11月2日",source:"https://nadeshiko.finash.jp/teams/42/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-bunnys-015",name:"大久保舞",position:"MF",league:"なでしこリーグ2部",team:"バニーズ群馬ＦＣホワイトスター",number:"8",birthday:"1996年9月3日",source:"https://nadeshiko.finash.jp/teams/42/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-bunnys-016",name:"木龍七瀬",position:"MF",league:"なでしこリーグ2部",team:"バニーズ群馬ＦＣホワイトスター",number:"9",birthday:"1989年10月31日",source:"https://nadeshiko.finash.jp/teams/42/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-bunnys-017",name:"木村華恋",position:"MF",league:"なでしこリーグ2部",team:"バニーズ群馬ＦＣホワイトスター",number:"11",birthday:"2002年9月15日",source:"https://nadeshiko.finash.jp/teams/42/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-bunnys-018",name:"八尋香菜子",position:"MF",league:"なでしこリーグ2部",team:"バニーズ群馬ＦＣホワイトスター",number:"13",birthday:"2004年12月28日",source:"https://nadeshiko.finash.jp/teams/42/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-bunnys-019",name:"間庭遥香",position:"MF",league:"なでしこリーグ2部",team:"バニーズ群馬ＦＣホワイトスター",number:"14",birthday:"2002年7月14日",source:"https://nadeshiko.finash.jp/teams/42/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-bunnys-020",name:"猪又月菜",position:"MF",league:"なでしこリーグ2部",team:"バニーズ群馬ＦＣホワイトスター",number:"17",birthday:"2003年4月18日",source:"https://nadeshiko.finash.jp/teams/42/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-bunnys-021",name:"森三紘",position:"MF",league:"なでしこリーグ2部",team:"バニーズ群馬ＦＣホワイトスター",number:"20",birthday:"2004年3月26日",source:"https://nadeshiko.finash.jp/teams/42/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-bunnys-022",name:"尹頭炅",position:"FW",league:"なでしこリーグ2部",team:"バニーズ群馬ＦＣホワイトスター",number:"3",birthday:"1998年9月7日",source:"https://nadeshiko.finash.jp/teams/42/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-bunnys-023",name:"松尾美月",position:"FW",league:"なでしこリーグ2部",team:"バニーズ群馬ＦＣホワイトスター",number:"10",birthday:"2003年1月14日",source:"https://nadeshiko.finash.jp/teams/42/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-bunnys-024",name:"登美知佳",position:"FW",league:"なでしこリーグ2部",team:"バニーズ群馬ＦＣホワイトスター",number:"18",birthday:"2003年4月18日",source:"https://nadeshiko.finash.jp/teams/42/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-bunnys-025",name:"鎌田くるみ",position:"FW",league:"なでしこリーグ2部",team:"バニーズ群馬ＦＣホワイトスター",number:"19",birthday:"2004年3月25日",source:"https://nadeshiko.finash.jp/teams/42/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-nankatsu-001",name:"米満布貴",position:"GK",league:"なでしこリーグ2部",team:"南葛ＳＣ ＷＩＮＧＳ",number:"1",birthday:"2003年2月13日",source:"https://nadeshiko.finash.jp/teams/56/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-nankatsu-002",name:"福田まい",position:"GK",league:"なでしこリーグ2部",team:"南葛ＳＣ ＷＩＮＧＳ",number:"21",birthday:"1998年5月20日",source:"https://nadeshiko.finash.jp/teams/56/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-nankatsu-003",name:"五十嵐憂美",position:"GK",league:"なでしこリーグ2部",team:"南葛ＳＣ ＷＩＮＧＳ",number:"31",birthday:"2006年9月7日",source:"https://nadeshiko.finash.jp/teams/56/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-nankatsu-004",name:"中山友菜",position:"DF",league:"なでしこリーグ2部",team:"南葛ＳＣ ＷＩＮＧＳ",number:"2",birthday:"2001年12月19日",source:"https://nadeshiko.finash.jp/teams/56/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-nankatsu-005",name:"人見のどか",position:"DF",league:"なでしこリーグ2部",team:"南葛ＳＣ ＷＩＮＧＳ",number:"4",birthday:"1997年5月27日",source:"https://nadeshiko.finash.jp/teams/56/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-nankatsu-006",name:"松本歩音",position:"DF",league:"なでしこリーグ2部",team:"南葛ＳＣ ＷＩＮＧＳ",number:"13",birthday:"2001年5月10日",source:"https://nadeshiko.finash.jp/teams/56/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-nankatsu-007",name:"呉娟花",position:"DF",league:"なでしこリーグ2部",team:"南葛ＳＣ ＷＩＮＧＳ",number:"18",birthday:"2004年4月28日",source:"https://nadeshiko.finash.jp/teams/56/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-nankatsu-008",name:"町田実香",position:"DF",league:"なでしこリーグ2部",team:"南葛ＳＣ ＷＩＮＧＳ",number:"20",birthday:"2005年7月16日",source:"https://nadeshiko.finash.jp/teams/56/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-nankatsu-009",name:"松久保明梨",position:"DF",league:"なでしこリーグ2部",team:"南葛ＳＣ ＷＩＮＧＳ",number:"23",birthday:"1996年8月25日",source:"https://nadeshiko.finash.jp/teams/56/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-nankatsu-010",name:"町田朱里",position:"DF",league:"なでしこリーグ2部",team:"南葛ＳＣ ＷＩＮＧＳ",number:"27",birthday:"1993年12月2日",source:"https://nadeshiko.finash.jp/teams/56/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-nankatsu-011",name:"中村ひかる",position:"DF",league:"なでしこリーグ2部",team:"南葛ＳＣ ＷＩＮＧＳ",number:"28",birthday:"1996年11月28日",source:"https://nadeshiko.finash.jp/teams/56/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-nankatsu-012",name:"高野彩音",position:"DF",league:"なでしこリーグ2部",team:"南葛ＳＣ ＷＩＮＧＳ",number:"33",birthday:"2007年2月10日",source:"https://nadeshiko.finash.jp/teams/56/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-nankatsu-013",name:"リュウスジョン",position:"MF",league:"なでしこリーグ2部",team:"南葛ＳＣ ＷＩＮＧＳ",number:"6",birthday:"2002年5月23日",source:"https://nadeshiko.finash.jp/teams/56/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-nankatsu-014",name:"菅野永遠",position:"MF",league:"なでしこリーグ2部",team:"南葛ＳＣ ＷＩＮＧＳ",number:"8",birthday:"1998年5月13日",source:"https://nadeshiko.finash.jp/teams/56/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-nankatsu-015",name:"会沢日花里",position:"MF",league:"なでしこリーグ2部",team:"南葛ＳＣ ＷＩＮＧＳ",number:"11",birthday:"2000年3月5日",source:"https://nadeshiko.finash.jp/teams/56/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-nankatsu-016",name:"中原藍",position:"MF",league:"なでしこリーグ2部",team:"南葛ＳＣ ＷＩＮＧＳ",number:"16",birthday:"1999年11月22日",source:"https://nadeshiko.finash.jp/teams/56/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-nankatsu-017",name:"小西由利恵",position:"MF",league:"なでしこリーグ2部",team:"南葛ＳＣ ＷＩＮＧＳ",number:"19",birthday:"1999年12月29日",source:"https://nadeshiko.finash.jp/teams/56/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-nankatsu-018",name:"井上眞椰",position:"MF",league:"なでしこリーグ2部",team:"南葛ＳＣ ＷＩＮＧＳ",number:"22",birthday:"2000年11月22日",source:"https://nadeshiko.finash.jp/teams/56/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-nankatsu-019",name:"金香那",position:"MF",league:"なでしこリーグ2部",team:"南葛ＳＣ ＷＩＮＧＳ",number:"26",birthday:"2006年1月27日",source:"https://nadeshiko.finash.jp/teams/56/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-nankatsu-020",name:"高橋虹々",position:"MF",league:"なでしこリーグ2部",team:"南葛ＳＣ ＷＩＮＧＳ",number:"29",birthday:"2006年7月11日",source:"https://nadeshiko.finash.jp/teams/56/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-nankatsu-021",name:"下山莉子",position:"MF",league:"なでしこリーグ2部",team:"南葛ＳＣ ＷＩＮＧＳ",number:"34",birthday:"1998年8月31日",source:"https://nadeshiko.finash.jp/teams/56/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-nankatsu-022",name:"石倉花純",position:"FW",league:"なでしこリーグ2部",team:"南葛ＳＣ ＷＩＮＧＳ",number:"7",birthday:"2001年7月21日",source:"https://nadeshiko.finash.jp/teams/56/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-nankatsu-023",name:"高橋菜々香",position:"FW",league:"なでしこリーグ2部",team:"南葛ＳＣ ＷＩＮＧＳ",number:"9",birthday:"2002年11月22日",source:"https://nadeshiko.finash.jp/teams/56/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-nankatsu-024",name:"槻木澤眞彩",position:"FW",league:"なでしこリーグ2部",team:"南葛ＳＣ ＷＩＮＧＳ",number:"14",birthday:"2003年4月7日",source:"https://nadeshiko.finash.jp/teams/56/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-nankatsu-025",name:"大坪菜",position:"FW",league:"なでしこリーグ2部",team:"南葛ＳＣ ＷＩＮＧＳ",number:"15",birthday:"1997年5月20日",source:"https://nadeshiko.finash.jp/teams/56/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-nankatsu-026",name:"渡辺渚々美",position:"FW",league:"なでしこリーグ2部",team:"南葛ＳＣ ＷＩＮＧＳ",number:"17",birthday:"2003年10月7日",source:"https://nadeshiko.finash.jp/teams/56/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-nankatsu-027",name:"堀井綾乃",position:"FW",league:"なでしこリーグ2部",team:"南葛ＳＣ ＷＩＮＧＳ",number:"24",birthday:"2001年11月28日",source:"https://nadeshiko.finash.jp/teams/56/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-nankatsu-028",name:"金香姫",position:"FW",league:"なでしこリーグ2部",team:"南葛ＳＣ ＷＩＮＧＳ",number:"25",birthday:"2006年1月27日",source:"https://nadeshiko.finash.jp/teams/56/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-nankatsu-029",name:"柴山史菜",position:"FW",league:"なでしこリーグ2部",team:"南葛ＳＣ ＷＩＮＧＳ",number:"30",birthday:"2000年4月13日",source:"https://nadeshiko.finash.jp/teams/56/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-diosa-001",name:"西村清花",position:"GK",league:"なでしこリーグ2部",team:"ディオッサ出雲ＦＣ",number:"1",birthday:"1998年4月10日",source:"https://nadeshiko.finash.jp/teams/51/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-diosa-002",name:"尾添有紗",position:"GK",league:"なでしこリーグ2部",team:"ディオッサ出雲ＦＣ",number:"21",birthday:"2003年4月21日",source:"https://nadeshiko.finash.jp/teams/51/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-diosa-003",name:"金織玲七",position:"GK",league:"なでしこリーグ2部",team:"ディオッサ出雲ＦＣ",number:"31",birthday:"2009年5月2日",source:"https://nadeshiko.finash.jp/teams/51/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-diosa-004",name:"渡部那月",position:"DF",league:"なでしこリーグ2部",team:"ディオッサ出雲ＦＣ",number:"2",birthday:"1996年8月7日",source:"https://nadeshiko.finash.jp/teams/51/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-diosa-005",name:"オモロジェバ英里香",position:"DF",league:"なでしこリーグ2部",team:"ディオッサ出雲ＦＣ",number:"3",birthday:"2003年3月4日",source:"https://nadeshiko.finash.jp/teams/51/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-diosa-006",name:"安藤真桜",position:"DF",league:"なでしこリーグ2部",team:"ディオッサ出雲ＦＣ",number:"5",birthday:"2004年4月3日",source:"https://nadeshiko.finash.jp/teams/51/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-diosa-007",name:"友近真那",position:"DF",league:"なでしこリーグ2部",team:"ディオッサ出雲ＦＣ",number:"8",birthday:"1995年3月10日",source:"https://nadeshiko.finash.jp/teams/51/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-diosa-008",name:"島内日菜子",position:"DF",league:"なでしこリーグ2部",team:"ディオッサ出雲ＦＣ",number:"17",birthday:"2003年1月18日",source:"https://nadeshiko.finash.jp/teams/51/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-diosa-009",name:"徳本華暖",position:"DF",league:"なでしこリーグ2部",team:"ディオッサ出雲ＦＣ",number:"22",birthday:"2003年9月3日",source:"https://nadeshiko.finash.jp/teams/51/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-diosa-010",name:"野村彩衣",position:"DF",league:"なでしこリーグ2部",team:"ディオッサ出雲ＦＣ",number:"23",birthday:"2002年3月28日",source:"https://nadeshiko.finash.jp/teams/51/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-diosa-011",name:"竹下七海",position:"DF",league:"なでしこリーグ2部",team:"ディオッサ出雲ＦＣ",number:"32",birthday:"2009年1月5日",source:"https://nadeshiko.finash.jp/teams/51/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-diosa-012",name:"高木菜望",position:"DF",league:"なでしこリーグ2部",team:"ディオッサ出雲ＦＣ",number:"33",birthday:"2011年4月13日",source:"https://nadeshiko.finash.jp/teams/51/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-diosa-013",name:"伊藤明里",position:"MF",league:"なでしこリーグ2部",team:"ディオッサ出雲ＦＣ",number:"4",birthday:"2001年7月10日",source:"https://nadeshiko.finash.jp/teams/51/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-diosa-014",name:"伊勢さつき",position:"MF",league:"なでしこリーグ2部",team:"ディオッサ出雲ＦＣ",number:"6",birthday:"2002年5月28日",source:"https://nadeshiko.finash.jp/teams/51/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-diosa-015",name:"原美埜里",position:"MF",league:"なでしこリーグ2部",team:"ディオッサ出雲ＦＣ",number:"10",birthday:"2005年9月26日",source:"https://nadeshiko.finash.jp/teams/51/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-diosa-016",name:"打越怜",position:"MF",league:"なでしこリーグ2部",team:"ディオッサ出雲ＦＣ",number:"13",birthday:"2002年12月6日",source:"https://nadeshiko.finash.jp/teams/51/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-diosa-017",name:"恒石亜弓",position:"MF",league:"なでしこリーグ2部",team:"ディオッサ出雲ＦＣ",number:"14",birthday:"2001年6月5日",source:"https://nadeshiko.finash.jp/teams/51/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-diosa-018",name:"佐藤萌里",position:"MF",league:"なでしこリーグ2部",team:"ディオッサ出雲ＦＣ",number:"15",birthday:"2002年4月23日",source:"https://nadeshiko.finash.jp/teams/51/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-diosa-019",name:"相浦幸桜",position:"MF",league:"なでしこリーグ2部",team:"ディオッサ出雲ＦＣ",number:"16",birthday:"2004年9月18日",source:"https://nadeshiko.finash.jp/teams/51/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-diosa-020",name:"福井真歩",position:"MF",league:"なでしこリーグ2部",team:"ディオッサ出雲ＦＣ",number:"18",birthday:"2002年12月19日",source:"https://nadeshiko.finash.jp/teams/51/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-diosa-021",name:"平良文果",position:"MF",league:"なでしこリーグ2部",team:"ディオッサ出雲ＦＣ",number:"19",birthday:"2002年11月30日",source:"https://nadeshiko.finash.jp/teams/51/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-diosa-022",name:"山本早織",position:"MF",league:"なでしこリーグ2部",team:"ディオッサ出雲ＦＣ",number:"25",birthday:"1996年11月23日",source:"https://nadeshiko.finash.jp/teams/51/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-diosa-023",name:"柏原凪沙",position:"MF",league:"なでしこリーグ2部",team:"ディオッサ出雲ＦＣ",number:"29",birthday:"2006年4月23日",source:"https://nadeshiko.finash.jp/teams/51/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-diosa-024",name:"丸尾梨菜",position:"FW",league:"なでしこリーグ2部",team:"ディオッサ出雲ＦＣ",number:"7",birthday:"1997年4月24日",source:"https://nadeshiko.finash.jp/teams/51/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-diosa-025",name:"河村祐実",position:"FW",league:"なでしこリーグ2部",team:"ディオッサ出雲ＦＣ",number:"9",birthday:"2001年9月8日",source:"https://nadeshiko.finash.jp/teams/51/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-diosa-026",name:"宮武里奈",position:"FW",league:"なでしこリーグ2部",team:"ディオッサ出雲ＦＣ",number:"11",birthday:"2001年6月2日",source:"https://nadeshiko.finash.jp/teams/51/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-diosa-027",name:"都筑かんな",position:"FW",league:"なでしこリーグ2部",team:"ディオッサ出雲ＦＣ",number:"20",birthday:"2003年4月28日",source:"https://nadeshiko.finash.jp/teams/51/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-diosa-028",name:"松本悠愛",position:"FW",league:"なでしこリーグ2部",team:"ディオッサ出雲ＦＣ",number:"30",birthday:"2011年12月26日",source:"https://nadeshiko.finash.jp/teams/51/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-okayama-001",name:"福元美穂",position:"GK",league:"なでしこリーグ1部",team:"岡山湯郷Ｂｅｌｌｅ",number:"1",birthday:"1983年10月2日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-okayama-002",name:"上野理佐",position:"GK",league:"なでしこリーグ1部",team:"岡山湯郷Ｂｅｌｌｅ",number:"31",birthday:"2006年4月10日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-okayama-003",name:"三田一紗代",position:"GK",league:"なでしこリーグ1部",team:"岡山湯郷Ｂｅｌｌｅ",number:"34",birthday:"1993年3月16日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-okayama-004",name:"楠心花",position:"GK",league:"なでしこリーグ1部",team:"岡山湯郷Ｂｅｌｌｅ",number:"41",birthday:"2008年3月1日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-okayama-005",name:"戸梶有野里",position:"GK",league:"なでしこリーグ1部",team:"岡山湯郷Ｂｅｌｌｅ",number:"51",birthday:"1997年1月5日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-okayama-006",name:"森宙舞",position:"DF",league:"なでしこリーグ1部",team:"岡山湯郷Ｂｅｌｌｅ",number:"2",birthday:"2003年12月8日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-okayama-007",name:"今野瞳",position:"DF",league:"なでしこリーグ1部",team:"岡山湯郷Ｂｅｌｌｅ",number:"4",birthday:"1998年9月22日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-okayama-008",name:"平中響乃",position:"DF",league:"なでしこリーグ1部",team:"岡山湯郷Ｂｅｌｌｅ",number:"16",birthday:"2003年7月11日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-okayama-009",name:"村上夏奈瀬",position:"DF",league:"なでしこリーグ1部",team:"岡山湯郷Ｂｅｌｌｅ",number:"18",birthday:"2001年8月9日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-okayama-010",name:"岸波優妃",position:"DF",league:"なでしこリーグ1部",team:"岡山湯郷Ｂｅｌｌｅ",number:"20",birthday:"2003年8月11日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-okayama-011",name:"柏原凪沙",position:"DF",league:"なでしこリーグ1部",team:"岡山湯郷Ｂｅｌｌｅ",number:"26",birthday:"2006年4月23日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-okayama-012",name:"成田夢愛",position:"DF",league:"なでしこリーグ1部",team:"岡山湯郷Ｂｅｌｌｅ",number:"27",birthday:"2006年6月14日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-okayama-013",name:"藤本日菜",position:"DF",league:"なでしこリーグ1部",team:"岡山湯郷Ｂｅｌｌｅ",number:"29",birthday:"2004年1月25日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-okayama-014",name:"小峠明日香",position:"DF",league:"なでしこリーグ1部",team:"岡山湯郷Ｂｅｌｌｅ",number:"35",birthday:"2003年5月28日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-okayama-015",name:"菅田想菜",position:"DF",league:"なでしこリーグ1部",team:"岡山湯郷Ｂｅｌｌｅ",number:"36",birthday:"2007年4月27日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-okayama-016",name:"吉田琉衣",position:"DF",league:"なでしこリーグ1部",team:"岡山湯郷Ｂｅｌｌｅ",number:"39",birthday:"2006年2月6日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-okayama-017",name:"梶山朋恵",position:"MF",league:"なでしこリーグ1部",team:"岡山湯郷Ｂｅｌｌｅ",number:"3",birthday:"2003年9月14日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-okayama-018",name:"大島彩香",position:"MF",league:"なでしこリーグ1部",team:"岡山湯郷Ｂｅｌｌｅ",number:"5",birthday:"1997年11月19日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-okayama-019",name:"小松未奈",position:"MF",league:"なでしこリーグ1部",team:"岡山湯郷Ｂｅｌｌｅ",number:"6",birthday:"1993年5月9日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-okayama-020",name:"山下沙耶香",position:"MF",league:"なでしこリーグ1部",team:"岡山湯郷Ｂｅｌｌｅ",number:"7",birthday:"1998年11月12日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-okayama-021",name:"南山千明",position:"MF",league:"なでしこリーグ1部",team:"岡山湯郷Ｂｅｌｌｅ",number:"8",birthday:"1985年10月16日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-okayama-022",name:"中野琴音",position:"MF",league:"なでしこリーグ1部",team:"岡山湯郷Ｂｅｌｌｅ",number:"10",birthday:"2004年5月13日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-okayama-023",name:"西郡茉優",position:"MF",league:"なでしこリーグ1部",team:"岡山湯郷Ｂｅｌｌｅ",number:"11",birthday:"2003年12月19日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-okayama-024",name:"秋元美雨",position:"MF",league:"なでしこリーグ1部",team:"岡山湯郷Ｂｅｌｌｅ",number:"13",birthday:"2000年1月26日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-okayama-025",name:"山本早織",position:"MF",league:"なでしこリーグ1部",team:"岡山湯郷Ｂｅｌｌｅ",number:"15",birthday:"1996年11月23日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-okayama-026",name:"新谷楓華",position:"MF",league:"なでしこリーグ1部",team:"岡山湯郷Ｂｅｌｌｅ",number:"17",birthday:"2004年9月3日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-okayama-027",name:"沖田有由",position:"MF",league:"なでしこリーグ1部",team:"岡山湯郷Ｂｅｌｌｅ",number:"19",birthday:"2002年6月11日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-okayama-028",name:"香椎彩香",position:"MF",league:"なでしこリーグ1部",team:"岡山湯郷Ｂｅｌｌｅ",number:"25",birthday:"2004年2月12日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-okayama-029",name:"雪山琴未",position:"MF",league:"なでしこリーグ1部",team:"岡山湯郷Ｂｅｌｌｅ",number:"28",birthday:"2004年1月15日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-okayama-030",name:"松崎こころ",position:"MF",league:"なでしこリーグ1部",team:"岡山湯郷Ｂｅｌｌｅ",number:"30",birthday:"2003年8月14日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-okayama-031",name:"田代つばめ",position:"MF",league:"なでしこリーグ1部",team:"岡山湯郷Ｂｅｌｌｅ",number:"32",birthday:"2003年9月16日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-okayama-032",name:"山田美緒和",position:"MF",league:"なでしこリーグ1部",team:"岡山湯郷Ｂｅｌｌｅ",number:"37",birthday:"1996年6月27日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-okayama-033",name:"上田佳奈",position:"MF",league:"なでしこリーグ1部",team:"岡山湯郷Ｂｅｌｌｅ",number:"38",birthday:"2001年6月29日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-okayama-034",name:"井上穂乃香",position:"MF",league:"なでしこリーグ1部",team:"岡山湯郷Ｂｅｌｌｅ",number:"44",birthday:"2009年1月20日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-okayama-035",name:"栫井美和子",position:"FW",league:"なでしこリーグ1部",team:"岡山湯郷Ｂｅｌｌｅ",number:"9",birthday:"2005年1月6日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-okayama-036",name:"塩谷瑠南",position:"FW",league:"なでしこリーグ1部",team:"岡山湯郷Ｂｅｌｌｅ",number:"14",birthday:"1999年9月16日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-okayama-037",name:"寺尾星奈",position:"FW",league:"なでしこリーグ1部",team:"岡山湯郷Ｂｅｌｌｅ",number:"21",birthday:"2001年6月17日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-okayama-038",name:"片山真鞠",position:"FW",league:"なでしこリーグ1部",team:"岡山湯郷Ｂｅｌｌｅ",number:"22",birthday:"2002年10月11日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-okayama-039",name:"国吉花吏埜",position:"FW",league:"なでしこリーグ1部",team:"岡山湯郷Ｂｅｌｌｅ",number:"23",birthday:"2006年1月23日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-okayama-040",name:"岸波美采",position:"FW",league:"なでしこリーグ1部",team:"岡山湯郷Ｂｅｌｌｅ",number:"24",birthday:"2006年10月19日",source:"https://nadeshiko.finash.jp/teams/12/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-speranza-001",name:"津田明日翔",position:"GK",league:"なでしこリーグ2部",team:"スペランツァ大阪",number:"1",birthday:"2002年1月8日",source:"https://nadeshiko.finash.jp/teams/11/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-speranza-002",name:"秋元虹波",position:"GK",league:"なでしこリーグ2部",team:"スペランツァ大阪",number:"16",birthday:"2000年8月8日",source:"https://nadeshiko.finash.jp/teams/11/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-speranza-003",name:"一井美咲",position:"DF",league:"なでしこリーグ2部",team:"スペランツァ大阪",number:"4",birthday:"2003年7月21日",source:"https://nadeshiko.finash.jp/teams/11/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-speranza-004",name:"丸形梨恵",position:"DF",league:"なでしこリーグ2部",team:"スペランツァ大阪",number:"5",birthday:"1991年12月20日",source:"https://nadeshiko.finash.jp/teams/11/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-speranza-005",name:"豊村文香",position:"DF",league:"なでしこリーグ2部",team:"スペランツァ大阪",number:"14",birthday:"2001年6月7日",source:"https://nadeshiko.finash.jp/teams/11/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-speranza-006",name:"森文佳",position:"DF",league:"なでしこリーグ2部",team:"スペランツァ大阪",number:"15",birthday:"2002年12月24日",source:"https://nadeshiko.finash.jp/teams/11/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-speranza-007",name:"山田萌々花",position:"DF",league:"なでしこリーグ2部",team:"スペランツァ大阪",number:"19",birthday:"2003年3月2日",source:"https://nadeshiko.finash.jp/teams/11/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-speranza-008",name:"所千紗登",position:"DF",league:"なでしこリーグ2部",team:"スペランツァ大阪",number:"25",birthday:"1999年2月25日",source:"https://nadeshiko.finash.jp/teams/11/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-speranza-009",name:"前田咲来子",position:"DF",league:"なでしこリーグ2部",team:"スペランツァ大阪",number:"26",birthday:"2007年12月7日",source:"https://nadeshiko.finash.jp/teams/11/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-speranza-010",name:"行友梨花",position:"DF",league:"なでしこリーグ2部",team:"スペランツァ大阪",number:"27",birthday:"2007年6月15日",source:"https://nadeshiko.finash.jp/teams/11/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-speranza-011",name:"島村公美子",position:"DF",league:"なでしこリーグ2部",team:"スペランツァ大阪",number:"29",birthday:"1995年2月14日",source:"https://nadeshiko.finash.jp/teams/11/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-speranza-012",name:"三好華乃",position:"MF",league:"なでしこリーグ2部",team:"スペランツァ大阪",number:"3",birthday:"2003年9月18日",source:"https://nadeshiko.finash.jp/teams/11/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-speranza-013",name:"草場千寛",position:"MF",league:"なでしこリーグ2部",team:"スペランツァ大阪",number:"6",birthday:"2003年10月28日",source:"https://nadeshiko.finash.jp/teams/11/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-speranza-014",name:"吉尾香音",position:"MF",league:"なでしこリーグ2部",team:"スペランツァ大阪",number:"8",birthday:"2002年6月15日",source:"https://nadeshiko.finash.jp/teams/11/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-speranza-015",name:"中村友香",position:"MF",league:"なでしこリーグ2部",team:"スペランツァ大阪",number:"11",birthday:"2000年1月16日",source:"https://nadeshiko.finash.jp/teams/11/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-speranza-016",name:"舘奈凪海",position:"MF",league:"なでしこリーグ2部",team:"スペランツァ大阪",number:"17",birthday:"2002年6月26日",source:"https://nadeshiko.finash.jp/teams/11/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-speranza-017",name:"松本彩良",position:"MF",league:"なでしこリーグ2部",team:"スペランツァ大阪",number:"18",birthday:"2003年8月31日",source:"https://nadeshiko.finash.jp/teams/11/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-speranza-018",name:"福田陽菜",position:"MF",league:"なでしこリーグ2部",team:"スペランツァ大阪",number:"20",birthday:"2001年9月20日",source:"https://nadeshiko.finash.jp/teams/11/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-speranza-019",name:"原田和佳",position:"MF",league:"なでしこリーグ2部",team:"スペランツァ大阪",number:"22",birthday:"2002年9月7日",source:"https://nadeshiko.finash.jp/teams/11/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-speranza-020",name:"前田七海",position:"MF",league:"なでしこリーグ2部",team:"スペランツァ大阪",number:"23",birthday:"2003年11月28日",source:"https://nadeshiko.finash.jp/teams/11/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-speranza-021",name:"内田朱夏",position:"MF",league:"なでしこリーグ2部",team:"スペランツァ大阪",number:"24",birthday:"2001年7月14日",source:"https://nadeshiko.finash.jp/teams/11/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-speranza-022",name:"平岩依々菜",position:"FW",league:"なでしこリーグ2部",team:"スペランツァ大阪",number:"7",birthday:"2001年5月25日",source:"https://nadeshiko.finash.jp/teams/11/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-speranza-023",name:"渡谷祥乃",position:"FW",league:"なでしこリーグ2部",team:"スペランツァ大阪",number:"9",birthday:"1999年2月12日",source:"https://nadeshiko.finash.jp/teams/11/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-speranza-024",name:"高木琳",position:"FW",league:"なでしこリーグ2部",team:"スペランツァ大阪",number:"13",birthday:"2003年10月20日",source:"https://nadeshiko.finash.jp/teams/11/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-speranza-025",name:"栫井美和子",position:"FW",league:"なでしこリーグ2部",team:"スペランツァ大阪",number:"35",birthday:"2005年1月6日",source:"https://nadeshiko.finash.jp/teams/11/2026/players",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-orca-001",name:"米澤萌香",position:"GK",league:"なでしこリーグ1部",team:"オルカ鴨川ＦＣ",number:"1",source:"https://nadeshiko.finash.jp/teams/20",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-orca-002",name:"菊地優杏",position:"GK",league:"なでしこリーグ1部",team:"オルカ鴨川ＦＣ",number:"16",source:"https://nadeshiko.finash.jp/teams/20",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-orca-003",name:"力丸里保",position:"GK",league:"なでしこリーグ1部",team:"オルカ鴨川ＦＣ",number:"26",source:"https://nadeshiko.finash.jp/teams/20",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-orca-004",name:"天野実咲",position:"GK",league:"なでしこリーグ1部",team:"オルカ鴨川ＦＣ",number:"31",source:"https://nadeshiko.finash.jp/teams/20",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-orca-005",name:"吉田紫穂",position:"DF",league:"なでしこリーグ1部",team:"オルカ鴨川ＦＣ",number:"2",source:"https://nadeshiko.finash.jp/teams/20",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-orca-006",name:"月東優季乃",position:"DF",league:"なでしこリーグ1部",team:"オルカ鴨川ＦＣ",number:"3",source:"https://nadeshiko.finash.jp/teams/20",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-orca-007",name:"松尾菜月",position:"DF",league:"なでしこリーグ1部",team:"オルカ鴨川ＦＣ",number:"4",source:"https://nadeshiko.finash.jp/teams/20",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-orca-008",name:"浦部美月",position:"DF",league:"なでしこリーグ1部",team:"オルカ鴨川ＦＣ",number:"6",source:"https://nadeshiko.finash.jp/teams/20",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-sfida-001",name:"大塚美緒",position:"GK",league:"なでしこリーグ1部",team:"スフィーダ世田谷ＦＣ",number:"1",source:"https://nadeshiko.finash.jp/teams/15",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-sfida-002",name:"石川愛紘",position:"GK",league:"なでしこリーグ1部",team:"スフィーダ世田谷ＦＣ",number:"21",source:"https://nadeshiko.finash.jp/teams/15",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-sfida-003",name:"山内夏実",position:"GK",league:"なでしこリーグ1部",team:"スフィーダ世田谷ＦＣ",number:"22",source:"https://nadeshiko.finash.jp/teams/15",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-sfida-004",name:"根本彩夏",position:"DF",league:"なでしこリーグ1部",team:"スフィーダ世田谷ＦＣ",number:"2",source:"https://nadeshiko.finash.jp/teams/15",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-sfida-005",name:"小泉柚紀",position:"DF",league:"なでしこリーグ1部",team:"スフィーダ世田谷ＦＣ",number:"4",source:"https://nadeshiko.finash.jp/teams/15",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-sfida-006",name:"宇内彩来",position:"DF",league:"なでしこリーグ1部",team:"スフィーダ世田谷ＦＣ",number:"5",source:"https://nadeshiko.finash.jp/teams/15",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-sfida-007",name:"黒川愛奈",position:"DF",league:"なでしこリーグ1部",team:"スフィーダ世田谷ＦＣ",number:"6",source:"https://nadeshiko.finash.jp/teams/15",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-sfida-008",name:"渡邊那奈",position:"DF",league:"なでしこリーグ1部",team:"スフィーダ世田谷ＦＣ",number:"7",source:"https://nadeshiko.finash.jp/teams/15",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-via-001",name:"暁清流",position:"GK",league:"なでしこリーグ1部",team:"ヴィアマテラス宮崎",number:"1",source:"https://nadeshiko.finash.jp/teams/47",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-via-002",name:"馬場ひなの",position:"GK",league:"なでしこリーグ1部",team:"ヴィアマテラス宮崎",number:"15",source:"https://nadeshiko.finash.jp/teams/47",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-via-003",name:"寺田郁美",position:"GK",league:"なでしこリーグ1部",team:"ヴィアマテラス宮崎",number:"26",source:"https://nadeshiko.finash.jp/teams/47",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-via-004",name:"鈴木寛那",position:"GK",league:"なでしこリーグ1部",team:"ヴィアマテラス宮崎",number:"27",source:"https://nadeshiko.finash.jp/teams/47",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-via-005",name:"後藤優香",position:"GK",league:"なでしこリーグ1部",team:"ヴィアマテラス宮崎",number:"50",source:"https://nadeshiko.finash.jp/teams/47",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-via-006",name:"井上千里",position:"DF",league:"なでしこリーグ1部",team:"ヴィアマテラス宮崎",number:"2",source:"https://nadeshiko.finash.jp/teams/47",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-via-007",name:"國生乃愛",position:"DF",league:"なでしこリーグ1部",team:"ヴィアマテラス宮崎",number:"3",source:"https://nadeshiko.finash.jp/teams/47",sourceLabel:"2026年選手一覧・参照用"},
 {id:"added-via-008",name:"島田優依菜",position:"DF",league:"なでしこリーグ1部",team:"ヴィアマテラス宮崎",number:"5",source:"https://nadeshiko.finash.jp/teams/47",sourceLabel:"2026年選手一覧・参照用"}
];

// 既存カードがある選手は情報を更新し、未登録の招集選手はカードを追加します。
for (const rosterPlayer of [...nationalTeamRoster, ...additionalVerifiedPlayers]) {
 const existing = players.find(p => (p.name || "").replace(/[ 　]/g, "") === rosterPlayer.name.replace(/[ 　]/g, ""));
 if (existing) Object.assign(existing, rosterPlayer, {story: existing.story || rosterPlayer.story});
 else players.push(rosterPlayer);
}

const weTeams = [
 ["マイナビ仙台","WEリーグ","https://weleague.jp/clubs/"],["三菱重工浦和レッズレディース","WEリーグ","https://weleague.jp/clubs/"],
 ["RB大宮アルディージャWOMEN","WEリーグ","https://weleague.jp/clubs/"],["ちふれASエルフェン埼玉","WEリーグ","https://weleague.jp/clubs/"],
 ["ジェフ千葉レディース","WEリーグ","https://weleague.jp/clubs/"],["日テレ・東京ヴェルディベレーザ","WEリーグ","https://weleague.jp/clubs/"],
 ["ノジマステラ神奈川相模原","WEリーグ","https://weleague.jp/clubs/"],["AC長野パルセイロ・レディース","WEリーグ","https://weleague.jp/clubs/"],
 ["アルビレックス新潟レディース","WEリーグ","https://weleague.jp/clubs/"],["セレッソ大阪ヤンマーレディース","WEリーグ","https://weleague.jp/clubs/"],
 ["INAC神戸レオネッサ","WEリーグ","https://weleague.jp/clubs/"],["サンフレッチェ広島レジーナ","WEリーグ","https://weleague.jp/clubs/"]
];
const nadeshiko1 = ["VONDS市原FCレディース","オルカ鴨川FC","スフィーダ世田谷FC","日体大SMG横浜","ニッパツ横浜FCシーガルズ","静岡SSUボニータ","朝日インテック・ラブリッジ名古屋","伊賀FCくノ一三重","ASハリマアルビオン","岡山湯郷Belle","愛媛FCレディース","ヴィアマテラス宮崎"];
const nadeshiko2 = ["JFAアカデミー福島","バニーズ群馬FCホワイトスター","南葛SC WINGS","大和シルフィード","SEISA OSAレイア湘南FC","FCふじざくら山梨","ヴィアティン三重レディース","スペランツァ大阪","ディオッサ出雲FC","吉備国際大学Charme岡山高梁","ディアヴォロッソ広島","レノファ山口FCレディース"];
const teams = [
 ...weTeams.map(x=>({name:x[0],league:x[1],url:x[2]})),
 ...nadeshiko1.map(name=>({name,league:"なでしこリーグ1部",url:"https://www.nadeshikoleague.jp/club/"})),
 ...nadeshiko2.map(name=>({name,league:"なでしこリーグ2部",url:"https://www.nadeshikoleague.jp/club/"}))
];
const $ = s => document.querySelector(s);
const playerGrid = $("#player-grid"), teamGrid = $("#team-grid");
const favorites = new Set();
let activeLeague = "all", activeTeamLeague = "all";
// 選手一覧は1ページ12人ずつ表示します。
const PLAYERS_PER_PAGE = 12;
let currentPlayerPage = 1;
const initials = name => (name||"選手").replace(/[ 　]/g,"").slice(0,2);
// 全選手に共通の紹介画像（app.js と同じフォルダに配置）
const COMMON_PLAYER_IMAGE = "player-card-common.png";
function playerCard(p){
 const saved = favorites.has(p.id);
 return `<article class="player-card">
  <button class="favorite-btn ${saved?"saved":""}" data-favorite="${p.id}" aria-label="${saved?"お気に入りから削除":"お気に入りに追加"}">${saved?"♥":"♡"}</button>
  <button class="player-open" data-player="${p.id}" aria-label="${p.name}のプロフィールを開く">
   <div class="player-art"><span class="position-badge">${p.position}</span><img class="player-photo" src="${COMMON_PLAYER_IMAGE}" alt="${p.name}の紹介画像" loading="lazy"><span class="league-mark">${p.league==="日本代表・海外"?"NATIONAL TEAM":p.league==="WEリーグ"?"WE LEAGUE":"NADESHIKO"}</span></div>
   <div class="player-info"><p class="player-team">${p.team}</p><h3 class="player-name">${p.name}</h3><p class="player-en">${p.roman}</p><p class="player-description">${p.description}</p><div class="card-bottom"><span>${p.tag}</span><span>↗</span></div></div>
  </button>
 </article>`;
}
// 代表カテゴリーには、なでしこジャパンだけでなくU-17などの代表登録も含めます。
function isNationalTeamCategory(league){
  const value = String(league || "");
  return value === "日本代表・海外" || /日本代表|なでしこジャパン|U-\d+.*代表/.test(value);
}
function matchesLeagueCategory(playerLeague, category){
  if (category === "all") return true;
  if (category === "日本代表・海外") return isNationalTeamCategory(playerLeague);
  return playerLeague === category;
}
function filteredPlayers(){
  const normalize = value => String(value || "").normalize("NFKC").trim().toLocaleLowerCase("ja");
  const q = normalize($("#player-search").value);
  const pos = $("#position-filter").value;
  const team = $("#player-team-filter").value;

  return players.filter(p => {
    const matchesLeague = matchesLeagueCategory(p.league, activeLeague);
    const matchesPosition = pos === "all" || p.position === pos;
    const matchesTeam = team === "all" || p.team === team;
    const searchableText = normalize([
      p.name, p.reading, p.roman, p.team, p.league, p.position, p.tag
    ].join(" "));
    const matchesKeyword = !q || searchableText.includes(q);
    return matchesLeague && matchesPosition && matchesTeam && matchesKeyword;
  });
}
function populatePlayerTeamFilter(){
  const select = $("#player-team-filter");
  if (!select) return;
  const currentValue = select.value;
  const teamNames = [...new Set(
    players.filter(p => matchesLeagueCategory(p.league, activeLeague))
      .map(p => p.team).filter(team => team && team.trim())
  )].sort((a, b) => a.localeCompare(b, "ja"));
  const escapeHtml = value => String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
  select.innerHTML = '<option value="all">すべてのチーム</option>' +
    teamNames.map(team => `<option value="${escapeHtml(team)}">${escapeHtml(team)}</option>`).join("");
  if (teamNames.includes(currentValue)) select.value = currentValue;
  else select.value = "all";
}

function ensurePlayerPagination(){
  let nav = $("#player-pagination");
  if (!nav) {
    nav = document.createElement("nav");
    nav.id = "player-pagination";
    nav.className = "player-pagination";
    nav.setAttribute("aria-label", "選手一覧のページ切り替え");
    playerGrid.insertAdjacentElement("afterend", nav);
  }
  return nav;
}

function renderPlayerPagination(total, pageCount, startIndex, endIndex){
  const nav = ensurePlayerPagination();
  if (total === 0 || pageCount <= 1) {
    nav.innerHTML = total ? `<p class="pagination-summary">${startIndex + 1}〜${endIndex}人目を表示</p>` : "";
    nav.hidden = total === 0;
    return;
  }
  nav.hidden = false;
  const pageButton = (page, label, disabled = false, active = false) =>
    `<button type="button" class="page-btn${active ? " active" : ""}" data-page="${page}" ${disabled ? "disabled" : ""} ${active ? 'aria-current="page"' : ""}>${label}</button>`;
  let buttons = pageButton(currentPlayerPage - 1, "‹ 前へ", currentPlayerPage === 1);
  const pages = new Set([1, pageCount, currentPlayerPage - 1, currentPlayerPage, currentPlayerPage + 1]);
  let previous = 0;
  [...pages].filter(n => n >= 1 && n <= pageCount).sort((a,b) => a-b).forEach(page => {
    if (previous && page - previous > 1) buttons += '<span class="page-ellipsis" aria-hidden="true">…</span>';
    buttons += pageButton(page, String(page), false, page === currentPlayerPage);
    previous = page;
  });
  buttons += pageButton(currentPlayerPage + 1, "次へ ›", currentPlayerPage === pageCount);
  nav.innerHTML = `<p class="pagination-summary">${startIndex + 1}〜${endIndex}人目 / 全${total}人</p><div class="pagination-controls">${buttons}</div>`;
}

function renderPlayers(resetPage = false){
 const list = filteredPlayers();
 const pageCount = Math.max(1, Math.ceil(list.length / PLAYERS_PER_PAGE));
 if (resetPage) currentPlayerPage = 1;
 currentPlayerPage = Math.min(Math.max(1, currentPlayerPage), pageCount);
 const startIndex = (currentPlayerPage - 1) * PLAYERS_PER_PAGE;
 const pagePlayers = list.slice(startIndex, startIndex + PLAYERS_PER_PAGE);
 playerGrid.innerHTML = pagePlayers.map(playerCard).join("");
 $("#player-count").textContent = String(list.length).padStart(2,"0");
 $("#empty-state").hidden = list.length !== 0;
 renderPlayerPagination(list.length, pageCount, startIndex, Math.min(startIndex + pagePlayers.length, list.length));
 document.querySelectorAll("[data-league]").forEach(b=>b.classList.toggle("active",b.dataset.league===activeLeague));
 document.querySelectorAll("[data-position]").forEach(b=>b.classList.toggle("active",b.dataset.position===$("#position-filter").value));
}
function escapeHtml(value){
 return String(value ?? "").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\"/g,"&quot;").replace(/'/g,"&#39;");
}
function ensureTeamDialog(){
 let dialog=$("#team-dialog");
 if(dialog) return dialog;
 dialog=document.createElement("dialog");
 dialog.id="team-dialog";
 dialog.className="player-dialog team-dialog";
 dialog.setAttribute("aria-labelledby","team-dialog-title");
 dialog.innerHTML='<div class="dialog-shell"><button type="button" class="dialog-close" id="team-dialog-close" aria-label="閉じる">×</button><div id="team-dialog-content"></div></div>';
 document.body.appendChild(dialog);
 dialog.addEventListener("click",e=>{if(e.target===dialog)dialog.close();});
 $("#team-dialog-close").addEventListener("click",()=>dialog.close());
 return dialog;
}
function renderTeams(){
 const q=$("#team-search").value.trim().toLowerCase();
 const list=teams.filter(t=>(activeTeamLeague==="all"||t.league===activeTeamLeague)&&(!q||t.name.toLowerCase().includes(q)));
 teamGrid.innerHTML=list.map(t=>`<button type="button" class="team-card" data-team-open="${escapeHtml(t.name)}" aria-label="${escapeHtml(t.name)}のチーム詳細を開く"><span class="team-symbol">${escapeHtml(initials(t.name))}</span><p class="team-league">${escapeHtml(t.league)}</p><h3 class="team-name">${escapeHtml(t.name)}</h3><span class="team-arrow">所属選手を見る ↗</span></button>`).join("");
 $("#team-count").textContent=String(list.length).padStart(2,"0");
}
function openTeam(teamName){
 const team=teams.find(t=>t.name===teamName); if(!team)return;
 const roster=players.filter(p=>p.team===team.name);
 const rosterHtml=roster.length ? `<div class="team-roster">${roster.map(p=>`<button type="button" class="team-player-row" data-player="${escapeHtml(p.id)}"><span class="team-player-position">${escapeHtml(p.position)}</span><span class="team-player-copy"><strong>${escapeHtml(p.name)}</strong><small>${escapeHtml(p.tag||"")}</small></span><span class="team-player-arrow">プロフィール ↗</span></button>`).join("")}</div>` : '<p class="team-no-players">このチームに登録されている選手はまだありません。選手データの team 名をチーム図鑑のチーム名と一致させると、ここに表示されます。</p>';
 const dialog=ensureTeamDialog();
 $("#team-dialog-content").innerHTML=`<section class="team-detail"><p class="eyebrow">TEAM DIRECTORY</p><p class="team-detail-league">${escapeHtml(team.league)}</p><h2 id="team-dialog-title">${escapeHtml(team.name)}</h2><p class="team-detail-count">登録選手：${roster.length}人</p><h3>所属選手</h3>${rosterHtml}<a class="dialog-source team-official-link" href="${escapeHtml(team.url)}" target="_blank" rel="noopener noreferrer">公式サイト・チーム情報を見る ↗</a></section>`;
 if(typeof dialog.showModal==="function")dialog.showModal(); else alert(`${team.name}：登録選手 ${roster.length}人`);
}
function openPlayer(id){
 const teamDialog=$("#team-dialog"); if(teamDialog?.open)teamDialog.close();
 const p=players.find(x=>x.id===id); if(!p)return;
 $("#dialog-content").innerHTML=`<div class="dialog-hero"><div class="player-art"><img class="player-photo dialog-player-photo" src="${COMMON_PLAYER_IMAGE}" alt="${p.name}の紹介画像"></div><div class="dialog-hero-copy"><p class="eyebrow">PLAYER PROFILE / ${p.position}</p><h2 id="dialog-name">${p.name}</h2><p>${p.roman}</p><p>${p.team}</p></div></div><div class="dialog-body"><h3>プロフィール</h3><div class="dialog-meta"><span>${p.league}</span><span>${p.position}</span><span>${p.tag}</span></div><h3>選手エピソード</h3><p>${p.story}</p><a class="dialog-source" href="${p.source}" target="_blank" rel="noopener noreferrer">出典：${p.sourceLabel} ↗</a><div class="dialog-note">掲載前に選手の所属・経歴・エピソードを公式資料で確認してください。写真は利用許諾を確認できたものだけを掲載します。</div></div>`;
 const dialog=$("#player-dialog");
 if(typeof dialog.showModal==="function")dialog.showModal(); else alert(p.name+"\n"+p.story);
}

// 選手の誕生日表示：月別一覧と、直近の誕生日を表示します。
function parsePlayerBirthday(value){
 const match=String(value || "").match(/(\d{4})年(\d{1,2})月(\d{1,2})日/);
 if(!match) return null;
 const year=Number(match[1]), month=Number(match[2]), day=Number(match[3]);
 const date=new Date(year,month-1,day);
 if(date.getFullYear()!==year || date.getMonth()!==month-1 || date.getDate()!==day) return null;
 return {year,month,day};
}
function nextBirthdayDate(birthday, reference=new Date()){
 const today=new Date(reference.getFullYear(),reference.getMonth(),reference.getDate());
 let next=new Date(today.getFullYear(),birthday.month-1,birthday.day);
 if(next<today) next=new Date(today.getFullYear()+1,birthday.month-1,birthday.day);
 return next;
}
function daysUntilBirthday(birthday, reference=new Date()){
 const today=new Date(reference.getFullYear(),reference.getMonth(),reference.getDate());
 const next=nextBirthdayDate(birthday, today);
 return Math.round((next-today)/86400000);
}
function renderBirthdays(){
 const monthSelect=document.querySelector("#birthday-month-filter");
 const list=document.querySelector("#birthday-list");
 const upcoming=document.querySelector("#birthday-upcoming");
 const summary=document.querySelector("#birthday-summary");
 if(!monthSelect || !list || !upcoming || !summary) return;
 const now=new Date();
 if(monthSelect.dataset.initialized!=="true"){ monthSelect.value=String(now.getMonth()+1); monthSelect.dataset.initialized="true"; }
 const selectedMonth=Number(monthSelect.value) || now.getMonth()+1;
 const birthdayPlayers=players.map(player=>({player,birthday:parsePlayerBirthday(player.birthday)})).filter(item=>item.birthday);
 const monthPlayers=birthdayPlayers.filter(item=>item.birthday.month===selectedMonth).sort((a,b)=>a.birthday.day-b.birthday.day || a.player.name.localeCompare(b.player.name,"ja"));
 const monthLabel=`${selectedMonth}月`;
 summary.textContent=`${monthLabel}が誕生日の選手は ${monthPlayers.length}人 登録されています。`;
 list.innerHTML=monthPlayers.length ? monthPlayers.map(({player,birthday})=>{
   const days=daysUntilBirthday(birthday,now);
   const status=days===0?'<span class="birthday-status today">今日が誕生日！</span>':days<=7?`<span class="birthday-status soon">あと${days}日</span>`:'';
   return `<article class="birthday-card">
     <div class="birthday-card-date"><span>${birthday.month}月</span><strong>${birthday.day}</strong><small>DAY</small></div>
     <div class="birthday-card-main"><p class="birthday-card-league">${escapeHtml(player.league || "女子サッカー")}</p><h3>${escapeHtml(player.name)}</h3><p class="birthday-card-team">${escapeHtml(player.team || "所属未登録")}</p>${status}</div>
     <button type="button" class="birthday-profile-button" data-player="${escapeHtml(player.id)}">プロフィールを見る ↗</button>
   </article>`;
 }).join("") : '<p class="birthday-empty">この月に誕生日を迎える選手は、まだ登録されていません。選手データに誕生日を追加すると、ここに表示されます。</p>';
 const upcomingPlayers=birthdayPlayers.map(item=>({...item,days:daysUntilBirthday(item.birthday,now)})).sort((a,b)=>a.days-b.days || a.player.name.localeCompare(b.player.name,"ja")).slice(0,5);
 upcoming.innerHTML=upcomingPlayers.length ? upcomingPlayers.map(({player,birthday,days})=>`<button type="button" class="birthday-upcoming-item" data-player="${escapeHtml(player.id)}"><span class="birthday-upcoming-date">${birthday.month}/${birthday.day}</span><span class="birthday-upcoming-name">${escapeHtml(player.name)}<small>${escapeHtml(player.team || "所属未登録")}</small></span><strong>${days===0?"今日！":`あと${days}日`}</strong></button>`).join("") : '<p class="birthday-empty">誕生日データが登録されていません。</p>';
}

document.addEventListener("click",e=>{
 const pbtn=e.target.closest("[data-player]"); if(pbtn){openPlayer(pbtn.dataset.player);return;}
 const teamCard=e.target.closest("[data-team-open]"); if(teamCard){openTeam(teamCard.dataset.teamOpen);return;}
 const fav=e.target.closest("[data-favorite]"); if(fav){e.preventDefault();e.stopPropagation();const id=fav.dataset.favorite;favorites.has(id)?favorites.delete(id):favorites.add(id);renderPlayers();}
 const pageBtn=e.target.closest("[data-page]");if(pageBtn && !pageBtn.disabled){currentPlayerPage=Number(pageBtn.dataset.page);renderPlayers();playerGrid.scrollIntoView({behavior:"smooth",block:"start"});}
 const chip=e.target.closest("[data-league]");if(chip){activeLeague=chip.dataset.league;$("#league-filter").value=activeLeague;populatePlayerTeamFilter();renderPlayers(true);}
 const positionChip=e.target.closest("[data-position]");if(positionChip){$("#position-filter").value=positionChip.dataset.position;renderPlayers(true);}
 const teamBtn=e.target.closest("[data-team-league]");if(teamBtn){activeTeamLeague=teamBtn.dataset.teamLeague;document.querySelectorAll("[data-team-league]").forEach(b=>b.classList.toggle("active",b===teamBtn));renderTeams();}
});
$("#player-search").addEventListener("input",()=>renderPlayers(true));
$("#league-filter").addEventListener("change",e=>{activeLeague=e.target.value;populatePlayerTeamFilter();renderPlayers(true)});
$("#position-filter").addEventListener("change",()=>renderPlayers(true));
$("#player-team-filter").addEventListener("change",()=>renderPlayers(true));
$("#team-search").addEventListener("input",renderTeams);
$("#birthday-month-filter")?.addEventListener("change",renderBirthdays);
$("#reset-filters").addEventListener("click",()=>{$("#player-search").value="";$("#league-filter").value="all";$("#position-filter").value="all";$("#player-team-filter").value="all";activeLeague="all";populatePlayerTeamFilter();renderPlayers(true)});
$("#dialog-close").addEventListener("click",()=>$("#player-dialog").close());
$("#player-dialog").addEventListener("click",e=>{if(e.target===$("#player-dialog"))$("#player-dialog").close()});
// ページ切り替えの見た目（既存CSSを変更せず app.js 内で追加）
(function addPlayerPaginationStyles(){
 if(document.getElementById("player-pagination-styles")) return;
 const style=document.createElement("style"); style.id="player-pagination-styles";
 style.textContent=`.player-pagination{display:flex;flex-direction:column;align-items:center;gap:12px;margin:28px 0 18px}.pagination-summary{margin:0;color:#65738c;font-size:12px}.pagination-controls{display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:6px}.page-btn{min-width:36px;min-height:36px;padding:7px 10px;border:1px solid #cbd7eb;border-radius:8px;background:#fff;color:#263b5b;font:inherit;font-size:12px;cursor:pointer}.page-btn:hover:not(:disabled),.page-btn.active{background:#174f9b;border-color:#174f9b;color:#fff}.page-btn:disabled{opacity:.4;cursor:not-allowed}.page-ellipsis{padding:0 3px;color:#65738c}@media(max-width:520px){.pagination-controls{gap:4px}.page-btn{min-width:32px;min-height:34px;padding:6px 8px;font-size:11px}}`;
 document.head.appendChild(style);
})();
// チーム詳細・所属選手一覧の追加スタイル（HTML/CSSファイルは変更不要）
(function addTeamDirectoryStyles(){
 if(document.getElementById("team-directory-styles")) return;
 const style=document.createElement("style"); style.id="team-directory-styles";
 style.textContent=`.team-card{display:block;width:100%;text-align:left;cursor:pointer;font:inherit;color:inherit;background:var(--card-bg,#fff)}.team-card:hover{transform:translateY(-2px)}.team-dialog{width:min(720px,calc(100% - 28px));max-height:85vh;overflow:auto;border:0;border-radius:18px;padding:0;box-shadow:0 24px 80px #071a3650}.team-dialog::backdrop{background:#071a3680;backdrop-filter:blur(3px)}.team-dialog .dialog-shell{position:relative;padding:28px;max-height:85vh;overflow:auto}.team-dialog .dialog-close{position:sticky;top:0;float:right;z-index:2;width:38px;height:38px;border:0;border-radius:50%;background:#edf2fa;color:#17345e;font-size:26px;cursor:pointer}.team-detail{clear:both}.team-detail h2{margin:6px 0 8px;font-size:clamp(22px,4vw,32px);color:#17345e}.team-detail-league,.team-detail-count{color:#60718b;font-size:13px}.team-detail h3{margin:26px 0 12px;color:#17345e}.team-roster{display:grid;gap:8px}.team-player-row{display:flex;align-items:center;gap:12px;width:100%;padding:12px;border:1px solid #dbe4f1;border-radius:12px;background:#fff;color:#18365e;text-align:left;cursor:pointer}.team-player-row:hover{border-color:#3977c9;background:#f5f9ff}.team-player-position{display:grid;place-items:center;min-width:42px;height:42px;border-radius:10px;background:#e8f1ff;color:#174f9b;font-weight:700}.team-player-copy{display:flex;flex:1;flex-direction:column;gap:4px}.team-player-copy small{color:#6b7890}.team-player-arrow{font-size:12px;color:#315f9e}.team-no-players{padding:16px;border-radius:12px;background:#f4f7fb;color:#5e6d82;line-height:1.7}.team-official-link{display:inline-block;margin-top:20px}@media(max-width:520px){.team-dialog .dialog-shell{padding:18px}.team-player-row{gap:8px;padding:10px}.team-player-arrow{font-size:11px}}`;
 document.head.appendChild(style);
})();

populatePlayerTeamFilter();renderPlayers();renderTeams();renderBirthdays();
