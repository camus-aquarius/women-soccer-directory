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

// 既存カードがある選手は情報を更新し、未登録の招集選手はカードを追加します。
for (const rosterPlayer of nationalTeamRoster) {
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

// 今週の注目試合（公開前に公式日程で確認してください）
let featuredMatches = [
 {date:"2026-11-07",time:"14:00",league:"WEリーグ",home:"マイナビ仙台レディース",away:"三菱重工浦和レッズレディース",venue:"ユアテックスタジアム仙台",highlight:"中盤でのボール奪取から素早く攻める仙台と、連係したパスワークで主導権を握りたい浦和。先制点とサイドの攻防が見どころです。",source:"https://weleague.jp/hajimetewe/"},
 {date:"2026-11-07",time:"14:00",league:"WEリーグ",home:"ノジマステラ神奈川相模原",away:"日テレ・東京ヴェルディベレーザ",venue:"相模原ギオンスタジアム",highlight:"相模原の粘り強い守備と、ベレーザのテンポのよいパスワークがぶつかる一戦。ボールを奪った後の切り替えと、ゴール前での判断に注目です。",source:"https://weleague.jp/hajimetewe/"},
 {date:"2026-11-07",time:"14:00",league:"WEリーグ",home:"AC長野パルセイロ・レディース",away:"セレッソ大阪ヤンマーレディース",venue:"長野Uスタジアム",highlight:"ホームの長野がサポーターの後押しを受けてどこまで前から圧力をかけるか、C大阪が落ち着いて攻撃を組み立てられるかがポイントです。",source:"https://www.cerezo.jp/ladies/matches/"}
];
// 試合データはGitHub Actionsが更新する matches.json を優先し、手動追加分だけブラウザに保存します。
const MATCH_STORAGE_KEY = "womensFootballManualMatchesV2";
const fallbackMatches = featuredMatches.slice();
let automaticMatches = [];
let matchesJsonLoaded = false;
function getManualMatches(){
 try { const saved=JSON.parse(localStorage.getItem(MATCH_STORAGE_KEY)||"[]"); return Array.isArray(saved)?saved:[]; }
 catch(error){ console.warn("手動登録の試合データを読み込めませんでした",error); return []; }
}
function refreshFeaturedMatches(){
 const manual=getManualMatches();
 const merged=[...(matchesJsonLoaded ? automaticMatches : fallbackMatches)];
 for(const item of manual){ if(!merged.some(m=>m.date===item.date&&m.home===item.home&&m.away===item.away))merged.push(item); }
 featuredMatches=merged;
}
async function loadAutomaticMatches(){
 try {
  const response=await fetch(`matches.json?v=${Date.now()}`,{cache:"no-store"});
  if(!response.ok)throw new Error(`matches.json の取得に失敗しました (${response.status})`);
  const data=await response.json();
  if(!data||!Array.isArray(data.matches))throw new Error("matches.json の形式が正しくありません");
  automaticMatches=data.matches.filter(m=>m&&/^\d{4}-\d{2}-\d{2}$/.test(m.date)&&typeof m.home==="string"&&typeof m.away==="string").map(m=>({...m,origin:"auto"}));
  matchesJsonLoaded=true;
  refreshFeaturedMatches(); renderWeeklyHighlights(); renderMatchManagerItems();
 } catch(error){ console.warn("自動取得した試合データを読み込めませんでした。現在のデータを表示します。",error); }
}
const escapeMatchHTML = value => String(value ?? "").replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
function saveFeaturedMatches(){
 try { localStorage.setItem(MATCH_STORAGE_KEY, JSON.stringify(featuredMatches.filter(m=>m.origin!=="auto"))); return true; }
 catch (error) { alert("ブラウザに保存できませんでした。プライベートブラウズや保存容量をご確認ください。"); return false; }
}
function renderMatchManager(){
 const host = document.querySelector("#weekly-matches");
 if(!host || document.querySelector("#match-manager")) return;
 const panel=document.createElement("section"); panel.id="match-manager"; panel.className="match-manager";
 panel.innerHTML=`<button type="button" class="match-manager-toggle" id="match-manager-toggle" aria-expanded="false">⚙ 注目試合を管理する</button>
 <div class="match-manager-body" id="match-manager-body" hidden>
  <p class="match-manager-note">公式日程から自動取得した試合は matches.json から読み込みます。ここで追加した試合だけ、このブラウザに保存されます。自動取得データはGitHub Actionsが1日1回更新します。</p>
  <form id="match-manager-form" class="match-manager-form">
   <label>試合日<input name="date" type="date" required></label>
   <label>開始時刻<input name="time" type="time"></label>
   <label>リーグ<select name="league"><option>WEリーグ</option><option>なでしこリーグ1部</option><option>なでしこリーグ2部</option><option>日本代表</option><option>その他</option></select></label>
   <label>ホームチーム<input name="home" type="text" maxlength="80" required placeholder="例：AC長野パルセイロ・レディース"></label>
   <label>アウェイチーム<input name="away" type="text" maxlength="80" required placeholder="例：対戦チーム名"></label>
   <label>会場<input name="venue" type="text" maxlength="100" placeholder="会場未定の場合は空欄"></label>
   <label class="match-manager-wide">見どころ<textarea name="highlight" rows="3" maxlength="500" placeholder="注目ポイントを入力"></textarea></label>
   <label class="match-manager-wide">公式情報URL<input name="source" type="url" placeholder="https://..."></label>
   <button type="submit" class="match-manager-submit">試合を登録する</button>
  </form>
  <div class="match-manager-list"><h4>登録済みの試合</h4><div id="match-manager-items"></div></div>
  <div class="match-manager-tools"><button type="button" id="match-export">登録データを保存（JSON）</button><label class="match-import-label">JSONを読み込む<input type="file" id="match-import" accept="application/json,.json"></label></div>
 </div>`;
 host.insertAdjacentElement("afterend",panel);
 const toggle=panel.querySelector("#match-manager-toggle"), body=panel.querySelector("#match-manager-body");
 toggle.addEventListener("click",()=>{body.hidden=!body.hidden;toggle.setAttribute("aria-expanded",String(!body.hidden));});
 const form=panel.querySelector("#match-manager-form");
 form.addEventListener("submit",event=>{
  event.preventDefault(); const data=Object.fromEntries(new FormData(form).entries());
  if(data.source && !/^https?:\/\//i.test(data.source)){alert("公式情報URLは https:// または http:// から入力してください。");return;}
  featuredMatches.push({date:data.date,time:data.time,league:data.league,home:data.home.trim(),away:data.away.trim(),venue:data.venue.trim(),highlight:data.highlight.trim(),source:data.source.trim()});
  if(saveFeaturedMatches()){form.reset();renderMatchManagerItems();renderWeeklyHighlights();}
 });
 panel.querySelector("#match-manager-items").addEventListener("click",event=>{
  const button=event.target.closest("[data-match-remove]"); if(!button)return;
  const index=Number(button.dataset.matchRemove); if(!Number.isInteger(index)||index<0||index>=featuredMatches.length)return;
  if(featuredMatches[index].origin==="auto"){alert("自動取得した試合は管理画面から削除できません。公式日程が更新されると自動的に反映されます。");return;}
  if(!confirm("この手動登録の試合情報を削除しますか？"))return;
  featuredMatches.splice(index,1); if(saveFeaturedMatches()){renderMatchManagerItems();renderWeeklyHighlights();}
 });
 panel.querySelector("#match-export").addEventListener("click",()=>{
  const blob=new Blob([JSON.stringify({updatedAt:new Date().toISOString(),matches:featuredMatches},null,2)],{type:"application/json"});
  const url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download="featured-matches.json";a.click();URL.revokeObjectURL(url);
 });
 panel.querySelector("#match-import").addEventListener("change",async event=>{
  const file=event.target.files?.[0]; if(!file)return;
  try {
   const parsed=JSON.parse(await file.text());
   const rows=Array.isArray(parsed)?parsed:parsed.matches;
   if(!Array.isArray(rows)||!rows.every(m=>m&&/^\d{4}-\d{2}-\d{2}$/.test(m.date)&&typeof m.home==="string"&&typeof m.away==="string"))throw new Error("形式が正しくありません");
   if(!confirm(`${rows.length}件の試合データを手動登録分として読み込みますか？`))return;
   localStorage.setItem(MATCH_STORAGE_KEY,JSON.stringify(rows.map(m=>({...m,origin:"manual"})))); refreshFeaturedMatches(); if(saveFeaturedMatches()){renderMatchManagerItems();renderWeeklyHighlights();}
  } catch(error){alert("JSONを読み込めませんでした。エクスポートした注目試合データを選択してください。");}
  finally{event.target.value="";}
 });
 renderMatchManagerItems();
}
function renderMatchManagerItems(){
 const target=document.querySelector("#match-manager-items"); if(!target)return;
 if(!featuredMatches.length){target.innerHTML='<p class="match-manager-empty">登録済みの試合はありません。</p>';return;}
 target.innerHTML=featuredMatches.map((m,i)=>`<div class="match-manager-row"><span><strong>${escapeMatchHTML(m.date)}</strong>　${escapeMatchHTML(m.home)} vs ${escapeMatchHTML(m.away)} <small>${m.origin==="auto"?"自動取得":"手動登録"}</small></span><button type="button" data-match-remove="${i}" ${m.origin==="auto"?"disabled title=\"自動取得データはここでは削除できません\"":""} aria-label="${escapeMatchHTML(m.home)}対${escapeMatchHTML(m.away)}を削除">削除</button></div>`).join("");
}
(function addMatchManagerStyles(){
 if(document.querySelector("#match-manager-styles"))return;
 const style=document.createElement("style");style.id="match-manager-styles";
 style.textContent=`.match-manager{margin-top:16px;padding:14px;border:1px solid #dbe4f1;border-radius:14px;background:#f8faff}.match-manager-toggle,.match-manager-tools button,.match-import-label{border:1px solid #cbd8eb;border-radius:9px;background:#fff;color:#174f9b;padding:9px 13px;font:inherit;font-size:13px;font-weight:700;cursor:pointer}.match-manager-body{padding-top:14px}.match-manager-note,.match-manager-empty{font-size:12px;line-height:1.7;color:#68778e}.match-manager-form{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.match-manager-form label{display:flex;flex-direction:column;gap:5px;font-size:12px;font-weight:700;color:#314765}.match-manager-form input,.match-manager-form select,.match-manager-form textarea{box-sizing:border-box;width:100%;min-height:38px;padding:8px;border:1px solid #cbd8eb;border-radius:8px;background:#fff;color:#243b5b;font:inherit;font-size:13px}.match-manager-wide{grid-column:1/-1}.match-manager-submit{grid-column:1/-1;justify-self:start;border:0;border-radius:9px;background:#174f9b;color:#fff;padding:10px 16px;font:inherit;font-size:13px;font-weight:700;cursor:pointer}.match-manager-list{margin-top:18px}.match-manager-list h4{margin:0 0 8px;color:#243b5b}.match-manager-row{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:9px 0;border-top:1px solid #e1e8f2;font-size:12px;color:#314765}.match-manager-row button{flex:none;border:1px solid #e2b8b8;border-radius:7px;background:#fff;color:#a33;padding:5px 9px;cursor:pointer}.match-manager-tools{display:flex;flex-wrap:wrap;gap:8px;margin-top:14px}.match-import-label input{display:none}@media(max-width:560px){.match-manager-form{grid-template-columns:1fr}.match-manager-wide,.match-manager-submit{grid-column:auto}.match-manager-row{align-items:flex-start}.match-manager-row span{line-height:1.6}}`;
 document.head.appendChild(style);
})();

const pad2 = n => String(n).padStart(2,"0");
const localDateKey = date => `${date.getFullYear()}-${pad2(date.getMonth()+1)}-${pad2(date.getDate())}`;
function weekBounds(reference = new Date()){
 const start = new Date(reference.getFullYear(), reference.getMonth(), reference.getDate());
 const day = (start.getDay()+6)%7;
 start.setDate(start.getDate()-day);
 const end = new Date(start); end.setDate(start.getDate()+6);
 return {start,end};
}
function renderWeeklyHighlights(){
 const matchContainer = $("#weekly-matches");
 const birthdayContainer = $("#weekly-birthdays");
 if(!matchContainer || !birthdayContainer) return;
 const {start,end}=weekBounds();
 $("#weekly-date-range").textContent=`${start.getFullYear()}年${start.getMonth()+1}月${start.getDate()}日〜${end.getMonth()+1}月${end.getDate()}日`;
 const startKey=localDateKey(start), endKey=localDateKey(end);
 const matches=featuredMatches.filter(m=>m.date>=startKey && m.date<=endKey).sort((a,b)=>`${a.date} ${a.time}`.localeCompare(`${b.date} ${b.time}`));
 matchContainer.innerHTML=matches.length ? matches.slice(0,3).map(m=>{
   const d=new Date(`${m.date}T12:00:00`);
   const leagueLabel=m.league || "女子サッカー";
   return `<article class="weekly-item"><div class="weekly-item-date"><strong>${d.getMonth()+1}/${d.getDate()}</strong><span>${["日","月","火","水","木","金","土"][d.getDay()]}</span></div><div class="weekly-item-content"><p class="weekly-match-time">${m.time || "時間未定"}　${leagueLabel}</p><h4>${m.home}<span> vs </span>${m.away}</h4><p class="weekly-venue">${m.venue || "会場未定"}</p><p class="weekly-match-highlight"><strong>見どころ</strong>${m.highlight || "両チームの攻守の切り替えと、試合の流れを変えるプレーに注目です。"}</p></div></article>`;
 }).join("") : `
   <div class="weekly-empty-state">
     <p class="weekly-empty-title">今週の試合情報は、現在確認中です。</p>
     <p>試合日程が登録されていないため、誤った日時を表示しないようにしています。最新の日程は各リーグの公式情報をご確認ください。</p>
     <div class="weekly-official-links">
       <a href="https://weleague.jp/" target="_blank" rel="noopener noreferrer">WEリーグ公式サイト ↗</a>
       <a href="https://www.nadeshikoleague.jp/" target="_blank" rel="noopener noreferrer">なでしこリーグ公式サイト ↗</a>
     </div>
   </div>`;
 // 誕生日は「今月」を対象にし、注目試合の登録状況とは独立して表示する
 const birthdays=players.filter(p=>{
   if(!p.birthday) return false;
   const match=String(p.birthday).match(/(\d{1,2})年(\d{1,2})月(\d{1,2})日/);
   return match && Number(match[2])===new Date().getMonth()+1;
 }).sort((a,b)=>{
   const da=Number(String(a.birthday).match(/(\d{1,2})年(\d{1,2})月(\d{1,2})日/)[3]);
   const db=Number(String(b.birthday).match(/(\d{1,2})年(\d{1,2})月(\d{1,2})日/)[3]);
   return da-db || a.name.localeCompare(b.name,"ja");
 });
 birthdayContainer.innerHTML=birthdays.length ? birthdays.map(p=>{
   const match=String(p.birthday).match(/(\d{1,2})年(\d{1,2})月(\d{1,2})日/);
   return `<article class="weekly-item birthday-item"><div class="birthday-mark" aria-hidden="true">🎂</div><div class="weekly-item-content"><h4>${p.name}</h4><p>${Number(match[2])}月${Number(match[3])}日　${p.team}</p></div></article>`;
 }).join("") : '<p class="weekly-empty">今月が誕生日の選手は、誕生日データが登録されていません。</p>';

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

populatePlayerTeamFilter();renderPlayers();renderTeams();refreshFeaturedMatches();renderWeeklyHighlights();renderMatchManager();loadAutomaticMatches();
