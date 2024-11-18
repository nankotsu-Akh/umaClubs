class CharactersKindInfoObj {
    constructor(id,name,nickname,releseDate,skills,dataBaseLink) {
        this.ID = 0;
        this.Name = "";
        this.Nickname = "";
        this.ReleseDate = {Year:0,Month:0,Day:0,Date:""};
        this.Skills = "";
        this.DataBaseLink = "";

        switch(arguments.length) {
        case 6:
            this.DataBaseLink = dataBaseLink;
        case 5:
            this.Skills = skills;
        case 4:
            this.ReleseDate = releseDate;
        case 3:
            this.Nickname = nickname;
        case 2:
            this.Name = name;
        case 1:
            this.ID = id;
            break;
        default:
            break;
        }
    }
}
class CharacterSizeParmObj {
    constructor(bast,west,hip,foots) {
        this.Bast = 0;
        this.West = 0;
        this.Hip = 0;
        this.Foots = {L:0,R:0};

        switch(arguments.length) {
        case 4:
            this.Foots = foots;
        case 3:
            this.Hip =  hip;
        case 2:
            this.West =  west;
        case 1:
            this.Bast = bast;
            break;
        default:
            break;
        }
    }
}
class CharactersInfoObj {
    constructor(birthDay,height,weight,size) {
        this.BirthDay = {Month:0, Day:0};
        this.Height = 0;
        this.Weight = "";
        this.Size = new CharacterSizeParmObj();

        switch(arguments.length) {
        case 4:
            this.Size = size;
        case 3:
            this.Weight = weight;
        case 2:
            this.Height = height;
        case 1:
            this.BirthDay = birthDay;
            break;
        default:
            break;
        }
    }
}
class CharactersObj {
    constructor(id,name,nickname,charVo,imgSrc,orgLink,dataBaseLink,charInfo,kind) {
        this.ID = 0;
        this.Name = ["", ""];
        this.Nickname = "";
        this.CharVo = "";
        this.ImgSrc = [];
        this.OrgLink = WebSitePablicLink;
        this.DataBaseLink = "https://xn--gck1f423k.xn--1bvt37a.tools/characters";
        this.CharInfo = new CharactersInfoObj();
        this.Kind = [];

        switch(arguments.length) {
        case 9:
            this.Kind = kind;
        case 8:
            this.CharInfo = charInfo;
        case 7:
            this.DataBaseLink = dataBaseLink;
        case 6:
            this.OrgLink = orgLink;
        case 5:
            this.ImgSrc = imgSrc;
        case 4:
            this.CharVo = charVo;
        case 3:
            this.Nickname = nickname;
        case 2:
            this.Name = name;
        case 1:
            this.ID = id;
            break;
        default:
            break;
        }
    }
}

const WebSitePablicLink = "https://umamusume.jp/character"

// 公式サイトの順番を参照
const Characters = [
    new CharactersObj(
        1,["スペシャルウィーク", "SpecialWeek"],"スぺ","和氣あず未",[],WebSitePablicLink + "/specialweek","https://xn--gck1f423k.xn--1bvt37a.tools/characters/specialweek",
        new CharactersInfoObj({Month: 5, Day: 2},158,"微減（レース前で緊張気味）",
            new CharacterSizeParmObj(81,56,81,{L:0,R:0})),
        [
            new CharactersKindInfoObj(1,"スペシャルドリーマー","通常スぺ",{Year:2021,Month:2,Day:24,Date:""},"シューティングスター","https://xn--gck1f423k.xn--1bvt37a.tools/cards/100101"),
            new CharactersKindInfoObj(2,"ほっぴん♪ビタミンハート","水着スぺ",{Year:2021,Month:7,Day:29,Date:""},"","https://xn--gck1f423k.xn--1bvt37a.tools/cards/100102"),
            new CharactersKindInfoObj(3,"","総大将スぺ",{Year:0,Month:0,Day:0,Date:""},"","https://xn--gck1f423k.xn--1bvt37a.tools/cards/100103")
        ]
    ),
    new CharactersObj(2,["サイレンススズカ", ""],"","",[],WebSitePablicLink,"",{},[
        new CharactersKindInfoObj(1,"","通常",{Year:0,Month:0,Day:0,Date:""},"",""),
        new CharactersKindInfoObj(2,"","",{Year:0,Month:0,Day:0,Date:""},"",""),
    ]),
    new CharactersObj(3,["トウカイテイオー", ""]),
    new CharactersObj(4,["マルゼンスキー", ""],"","",[],WebSitePablicLink,"",{},[
        new CharactersKindInfoObj(1,"","通常",{Year:0,Month:0,Day:0,Date:""},"",""),
        new CharactersKindInfoObj(2,"","",{Year:0,Month:0,Day:0,Date:""},"",""),
    ]),
    new CharactersObj(5,["フジキセキ", ""]),
    new CharactersObj(6,["オグリキャップ", ""],"","",[],WebSitePablicLink,"",{},[
        new CharactersKindInfoObj(1,"","通常",{Year:0,Month:0,Day:0,Date:""},"",""),
        new CharactersKindInfoObj(2,"","",{Year:0,Month:0,Day:0,Date:""},"",""),
    ]),
    new CharactersObj(7,["ゴールドシップ", ""]),
    new CharactersObj(8,["ウォッカ", ""]),
    new CharactersObj(9,["ダイワスカーレット", ""]),
    new CharactersObj(10,["タイキシャトル", ""],"","",[],WebSitePablicLink,"",{},[
        new CharactersKindInfoObj(1,"","通常",{Year:0,Month:0,Day:0,Date:""},"",""),
        new CharactersKindInfoObj(2,"","",{Year:0,Month:0,Day:0,Date:""},"",""),
    ]),
    new CharactersObj(11,["グラスワンダー", ""]),
    new CharactersObj(12,["ヒシアマゾン", ""]),
    new CharactersObj(13,["メジロマックイーン", ""]),
    new CharactersObj(14,["エルコンドルパサー", ""],"","",[],WebSitePablicLink,"",{},[
        new CharactersKindInfoObj(1,"","通常",{Year:0,Month:0,Day:0,Date:""},"",""),
        new CharactersKindInfoObj(2,"","",{Year:0,Month:0,Day:0,Date:""},"",""),
    ]),
    new CharactersObj(15,["テイエムオペラオー", ""],"","",[],WebSitePablicLink,"",{},[
        new CharactersKindInfoObj(1,"","通常",{Year:0,Month:0,Day:0,Date:""},"",""),
        new CharactersKindInfoObj(2,"","",{Year:0,Month:0,Day:0,Date:""},"",""),
    ]),
    new CharactersObj(16,["ナリタブライアン", ""]),
    new CharactersObj(17,["シンボリルドルフ", ""]),
    new CharactersObj(18,["エアグルーヴ", ""],"","",[],WebSitePablicLink,"",{},[
        new CharactersKindInfoObj(1,"","通常",{Year:0,Month:0,Day:0,Date:""},"",""),
        new CharactersKindInfoObj(2,"","",{Year:0,Month:0,Day:0,Date:""},"",""),
    ]),
    new CharactersObj(19,["アグネスデジタル", ""],"","",[],WebSitePablicLink,"",{},[
        new CharactersKindInfoObj(1,"","通常",{Year:0,Month:0,Day:0,Date:""},"",""),
        new CharactersKindInfoObj(2,"","",{Year:0,Month:0,Day:0,Date:""},"",""),
    ]),
    new CharactersObj(20,["セイウンスカイ", ""],"","",[],WebSitePablicLink,"",{},[
        new CharactersKindInfoObj(1,"","通常",{Year:0,Month:0,Day:0,Date:""},"",""),
        new CharactersKindInfoObj(2,"","",{Year:0,Month:0,Day:0,Date:""},"",""),
    ]),
    new CharactersObj(21,["タマモクロス", ""]),
    new CharactersObj(22,["ファインモーション", ""],"","",[],WebSitePablicLink,"",{},[
        new CharactersKindInfoObj(1,"","通常",{Year:0,Month:0,Day:0,Date:""},"",""),
        new CharactersKindInfoObj(2,"","",{Year:0,Month:0,Day:0,Date:""},"",""),
    ]),
    new CharactersObj(23,["ビワハヤヒデ", ""],"","",[],WebSitePablicLink,"",{},[
        new CharactersKindInfoObj(1,"","通常",{Year:0,Month:0,Day:0,Date:""},"",""),
        new CharactersKindInfoObj(2,"","",{Year:0,Month:0,Day:0,Date:""},"",""),
    ]),
    new CharactersObj(24,["マヤノトップガン", ""]),
    new CharactersObj(25,["マンハッタンカフェ", ""]),
    new CharactersObj(26,["ミホノブルボン", ""]),
    new CharactersObj(27,["メジロライアン", ""]),
    new CharactersObj(28,["ヒシアケボノ", ""]),
    new CharactersObj(29,["ユキノビジン", ""]),
    new CharactersObj(30,["ライスシャワー", ""],"","",[],WebSitePablicLink,"",{},[
        new CharactersKindInfoObj(1,"","通常",{Year:0,Month:0,Day:0,Date:""},"",""),
        new CharactersKindInfoObj(2,"","",{Year:0,Month:0,Day:0,Date:""},"",""),
    ]),
    new CharactersObj(31,["アイネスフウジン", ""]),
    new CharactersObj(32,["アグネスタキオン", ""],"","",[],WebSitePablicLink,"",{},[
        new CharactersKindInfoObj(1,"","通常",{Year:0,Month:0,Day:0,Date:""},"",""),
        new CharactersKindInfoObj(2,"","",{Year:0,Month:0,Day:0,Date:""},"",""),
        new CharactersKindInfoObj(3,"","",{Year:0,Month:0,Day:0,Date:""},"",""),
    ]),
    new CharactersObj(33,["アドマイヤベガ", ""],"","",[],WebSitePablicLink,"",{},[
        new CharactersKindInfoObj(1,"","通常",{Year:0,Month:0,Day:0,Date:""},"",""),
    ]),
    new CharactersObj(34,["イナリワン", ""]),
    new CharactersObj(35,["ウイニングチケット", ""]),
    new CharactersObj(36,["エアシャカール", ""],"","",[],WebSitePablicLink,"",{},[
        new CharactersKindInfoObj(1,"","通常",{Year:0,Month:0,Day:0,Date:""},"",""),
        new CharactersKindInfoObj(2,"","",{Year:0,Month:0,Day:0,Date:""},"",""),
    ]),
    new CharactersObj(37,["エイシンフラッシュ", ""]),
    new CharactersObj(38,["カレンチャン", ""]),
    new CharactersObj(39,["カワカミプリンセス", ""]),
    new CharactersObj(40,["ゴールドシチー", ""]),
    new CharactersObj(41,["サクラバクシンオー", ""]),
    new CharactersObj(42,["シーキングザパール", ""]),
    new CharactersObj(43,["シンコウウインディ", ""]),
    new CharactersObj(44,["スイープトウショウ", ""],"","",[],WebSitePablicLink,"",{},[
        new CharactersKindInfoObj(1,"","通常",{Year:0,Month:0,Day:0,Date:""},"",""),
        new CharactersKindInfoObj(2,"","",{Year:0,Month:0,Day:0,Date:""},"",""),
    ]),
    new CharactersObj(45,["スーパークリーク", ""],"","",[],WebSitePablicLink,"",{},[
        new CharactersKindInfoObj(1,"","通常",{Year:0,Month:0,Day:0,Date:""},"",""),
        new CharactersKindInfoObj(2,"","",{Year:0,Month:0,Day:0,Date:""},"",""),
    ]),
    new CharactersObj(46,["スマートファルコン", ""],"","",[],WebSitePablicLink,"",{},[
        new CharactersKindInfoObj(1,"","通常",{Year:0,Month:0,Day:0,Date:""},"",""),
        new CharactersKindInfoObj(2,"","",{Year:0,Month:0,Day:0,Date:""},"",""),
    ]),
    new CharactersObj(47,["ゼンノロブロイ", ""],"","",[],WebSitePablicLink,"",{},[
        new CharactersKindInfoObj(1,"","通常",{Year:0,Month:0,Day:0,Date:""},"",""),
        new CharactersKindInfoObj(2,"","",{Year:0,Month:0,Day:0,Date:""},"",""),
    ]),
    new CharactersObj(48,["トーセンジョーダン", ""],"","",[],WebSitePablicLink,"",{},[
        new CharactersKindInfoObj(1,"","通常",{Year:0,Month:0,Day:0,Date:""},"",""),
        new CharactersKindInfoObj(2,"","",{Year:0,Month:0,Day:0,Date:""},"",""),
    ]),
    new CharactersObj(49,["ナカヤマフェスタ", ""]),
    new CharactersObj(50,["ナリタタイシン", ""],"","",[],WebSitePablicLink,"",{},[
        new CharactersKindInfoObj(1,"","通常",{Year:0,Month:0,Day:0,Date:""},"",""),
        new CharactersKindInfoObj(2,"","",{Year:0,Month:0,Day:0,Date:""},"",""),
    ]),
    new CharactersObj(51,["ニシノフラワー", ""]),
    new CharactersObj(52,["ハルウララ", ""],"","",[],WebSitePablicLink,"",{},[
        new CharactersKindInfoObj(1,"","通常",{Year:0,Month:0,Day:0,Date:""},"",""),
        new CharactersKindInfoObj(2,"","",{Year:0,Month:0,Day:0,Date:""},"",""),
    ]),
    new CharactersObj(53,["バンブーメモリー", ""],"","",[],WebSitePablicLink,"",{},[
        new CharactersKindInfoObj(1,"","通常",{Year:0,Month:0,Day:0,Date:""},"",""),
        new CharactersKindInfoObj(2,"","",{Year:0,Month:0,Day:0,Date:""},"",""),
    ]),
    new CharactersObj(54,["ビコーペガサス", ""]),
    new CharactersObj(55,["マーベラスサンデー", ""]),
    new CharactersObj(56,["フクキタル", ""],"","",[],WebSitePablicLink,"",{},[
        new CharactersKindInfoObj(1,"","通常",{Year:0,Month:0,Day:0,Date:""},"",""),
        new CharactersKindInfoObj(2,"","",{Year:0,Month:0,Day:0,Date:""},"",""),
    ]),
    new CharactersObj(57,["ミスターシービー", ""],"","",[],WebSitePablicLink,"",{},[
        new CharactersKindInfoObj(1,"","通常",{Year:0,Month:0,Day:0,Date:""},"",""),
    ]),
    new CharactersObj(58,["メイショウドトウ", ""],"","",[],WebSitePablicLink,"",{},[
        new CharactersKindInfoObj(1,"","通常",{Year:0,Month:0,Day:0,Date:""},"",""),
        new CharactersKindInfoObj(2,"","",{Year:0,Month:0,Day:0,Date:""},"",""),
    ]),
    new CharactersObj(59,["メジロドーベル", ""]),
    new CharactersObj(60,["ナイスネイチャ", ""]),
    new CharactersObj(61,["キングヘイロー", ""],"","",[],WebSitePablicLink,"",{},[
        new CharactersKindInfoObj(1,"","通常",{Year:0,Month:0,Day:0,Date:""},"",""),
        new CharactersKindInfoObj(2,"","",{Year:0,Month:0,Day:0,Date:""},"",""),
    ]),
    new CharactersObj(62,["マチカネタンホイザ", ""]),
    new CharactersObj(63,["イクノディクタス", ""]),
    new CharactersObj(64,["メジロパーマー", ""],"","",[],WebSitePablicLink,"",{},[
        new CharactersKindInfoObj(1,"","通常",{Year:0,Month:0,Day:0,Date:""},"",""),
        new CharactersKindInfoObj(2,"","",{Year:0,Month:0,Day:0,Date:""},"",""),
    ]),
    new CharactersObj(65,["ダイタクヘリオス", ""],"","",[],WebSitePablicLink,"",{},[
        new CharactersKindInfoObj(1,"","通常",{Year:0,Month:0,Day:0,Date:""},"",""),
    ]),
    new CharactersObj(66,["ツインターボ", ""],"","",[],WebSitePablicLink,"",{},[
        new CharactersKindInfoObj(1,"","通常",{Year:0,Month:0,Day:0,Date:""},"",""),
    ]),
    new CharactersObj(67,["サトノダイヤモンド", ""]),
    new CharactersObj(68,["キタサンブラック", ""]),
    new CharactersObj(69,["サクラチヨノオー", ""]),
    new CharactersObj(70,["シリウスシンボリ", ""]),
    new CharactersObj(71,["メジロアルダン", ""]),
    new CharactersObj(72,["ヤエノムテキ", ""],"","",[],WebSitePablicLink,"",{},[
        new CharactersKindInfoObj(1,"","通常",{Year:0,Month:0,Day:0,Date:""},"",""),
        new CharactersKindInfoObj(2,"","",{Year:0,Month:0,Day:0,Date:""},"",""),
    ]),
    new CharactersObj(73,["ツルマルツヨシ", ""]),
    new CharactersObj(74,["メジロブライト", ""],"","",[],WebSitePablicLink,"",{},[
        new CharactersKindInfoObj(1,"","通常",{Year:0,Month:0,Day:0,Date:""},"",""),
        new CharactersKindInfoObj(2,"","",{Year:0,Month:0,Day:0,Date:""},"",""),
    ]),
    new CharactersObj(75,["デアリングタクト", ""]),
    new CharactersObj(76,["サクラローレル", ""],"","",[],WebSitePablicLink,"",{},[
        new CharactersKindInfoObj(1,"","通常",{Year:0,Month:0,Day:0,Date:""},"",""),
    ]),
    new CharactersObj(77,["ナリタトップロード", ""],"","",[],WebSitePablicLink,"",{},[
        new CharactersKindInfoObj(1,"","通常",{Year:0,Month:0,Day:0,Date:""},"",""),
    ]),
    new CharactersObj(78,["ヤマニンゼファー", ""]),
    new CharactersObj(79,["フリオーソ", ""]),
    new CharactersObj(80,["トランセンド", ""]),
    new CharactersObj(81,["エスポワールシチー", ""]),
    new CharactersObj(82,["ノースフライト", ""]),
    new CharactersObj(83,["シンボリクリスエス", ""],"","",[],WebSitePablicLink,"",{},[
        new CharactersKindInfoObj(1,"","通常",{Year:0,Month:0,Day:0,Date:""},"",""),
    ]),
    new CharactersObj(84,["タニノギムレット", ""],"","",[],WebSitePablicLink,"",{},[
        new CharactersKindInfoObj(1,"","通常",{Year:0,Month:0,Day:0,Date:""},"",""),
    ]),
    new CharactersObj(85,["ダイイチルビー", ""]),
    new CharactersObj(86,["メジロラモーヌ", ""],"","",[],WebSitePablicLink,"",{},[
        new CharactersKindInfoObj(1,"","通常",{Year:0,Month:0,Day:0,Date:""},"",""),
    ]),
    new CharactersObj(87,["アストンマーチャン", ""],"","",[],WebSitePablicLink,"",{},[
        new CharactersKindInfoObj(1,"","通常",{Year:0,Month:0,Day:0,Date:""},"",""),
    ]),
    new CharactersObj(88,["サトノクラウン", ""]),
    new CharactersObj(89,["シュヴァルグラン", ""]),
    new CharactersObj(90,["ヴィルシーナ", ""]),
    new CharactersObj(91,["ヴィブロス", ""]),
    new CharactersObj(92,["ダンツフレーム", ""]),
    new CharactersObj(93,["ケイエスミラクル", ""]),
    new CharactersObj(94,["ジャングルポケット", ""]),
    new CharactersObj(95,["ビリーヴ", ""]),
    new CharactersObj(96,["ノーリーズン", ""]),
    new CharactersObj(97,["スティルインラブ", ""]),
    new CharactersObj(98,["コパノリッキー", ""],"","",[],WebSitePablicLink,"",{},[
        new CharactersKindInfoObj(1,"","通常",{Year:0,Month:0,Day:0,Date:""},"",""),
    ]),
    new CharactersObj(99,["ホッコータルマエ", ""]),
    new CharactersObj(100,["ワンダーアキュート", ""],"","",[],WebSitePablicLink,"",{},[
        new CharactersKindInfoObj(1,"","通常",{Year:0,Month:0,Day:0,Date:""},"",""),
    ]),
    new CharactersObj(101,["サムソンビッグ", ""]),
    new CharactersObj(102,["サウンズオブアース", ""],"","",[],WebSitePablicLink,"",{},[
        new CharactersKindInfoObj(1,"","通常",{Year:0,Month:0,Day:0,Date:""},"",""),
    ]),
    new CharactersObj(103,["ロイスアンドロイス", ""]),
    new CharactersObj(104,["カツラギエース", ""],"","",[],WebSitePablicLink,"",{},[
        new CharactersKindInfoObj(1,"","通常",{Year:0,Month:0,Day:0,Date:""},"",""),
    ]),
    new CharactersObj(105,["ネオユニヴァース", ""],"","",[],WebSitePablicLink,"",{},[
        new CharactersKindInfoObj(1,"","通常",{Year:0,Month:0,Day:0,Date:""},"",""),
    ]),
    new CharactersObj(106,["ヒシミラクル", ""]),
    new CharactersObj(107,["タップダンスシチー", ""]),
    new CharactersObj(108,["ドゥラメンテ", ""]),
    new CharactersObj(109,["ラインクラフト", ""]),
    new CharactersObj(110,["シーザリオ", ""]),
    new CharactersObj(111,["エアメサイア", ""]),
    new CharactersObj(112,["デアリングハート", ""]),
    new CharactersObj(113,["フサイチパンドラ", ""]),
    new CharactersObj(114,["ブエナビスタ", ""]),
    new CharactersObj(115,["オルフェーヴル", ""]),
    new CharactersObj(116,["ジェンティルドンナ", ""],"","",[],WebSitePablicLink,"",{},[
        new CharactersKindInfoObj(1,"","通常",{Year:0,Month:0,Day:0,Date:""},"",""),
    ]),
    new CharactersObj(117,["ウインバリアシオン", ""]),
    new CharactersObj(118,["ドリームジャーニー", ""],"","",[],WebSitePablicLink,"",{},[
        new CharactersKindInfoObj(1,"","通常",{Year:0,Month:0,Day:0,Date:""},"",""),
    ]),
    new CharactersObj(119,["カルストンライトオ", ""]),
    new CharactersObj(120,["デュランダル", ""]),
    new CharactersObj(121,["バブルガムフェロー", ""]),
    new CharactersObj(122,["ハッピーミーク	", ""]),
    new CharactersObj(123,["ビターグラッセ	", ""]),
    new CharactersObj(124,["リトルココン	", ""]),
    new CharactersObj(125,["ヴェニュスパーク	", ""]),
    new CharactersObj(126,["リガントーナ", ""]),
    new CharactersObj(127,["ソノンエルフィー", ""]),
    new CharactersObj(128,["駿川たづな", ""]),
    new CharactersObj(129,["秋川やよい", ""]),
    new CharactersObj(130,["乙名史悦子", ""]),
    new CharactersObj(131,["桐生院葵", ""]),
    new CharactersObj(132,["安心沢刺々美", ""]),
    new CharactersObj(133,["樫本理子", ""]),
    new CharactersObj(134,["ライトハロー", ""]),
    new CharactersObj(135,["ダーレーアラビアン	", ""]),
    new CharactersObj(136,["ゴドルフィンバルブ	", ""]),
    new CharactersObj(137,["バイアリーターク	", ""]),
    new CharactersObj(138,["佐岳メイ", ""]),
    new CharactersObj(139,["都留岐涼花", ""]),
    new CharactersObj(140,["赤坂美聡", ""]),
    new CharactersObj(141,["細江純子", ""])
];