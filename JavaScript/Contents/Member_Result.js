class RaceResultStatusObj {
    constructor(param, Aptitude, Skills) {
        this.Param = {"Speed":0, "Stamina":0, "Power":0, "Guts":0, "Intelligent":0};
        this.Aptitude = {"Feald":"", "Length":"", "Strategy":""};
        this.Skills = [];

        switch(arguments.length) {
        case 3:
            // 所持スキル
            this.Skills = Skills;
        case 2:
            // 適正
            this.Aptitude = Aptitude;
        case 1:
            // パラメータ
            this.Param = param;
            break;
        default:
            break;
        }
    }
}
class RaceResultObj {
    constructor(
        RaceGrpID, RaceID, Goal, Number, Favorite, Name, Runk,
        Strategy, Motivation, GoalTime, Corner, FurlongTime, GoalDef, TopDef, Parents,
        Status, support, Scenario, cultivateDate, cultivateRace, factor
    ) {
        // 値の初期化
        this.RaceGrpID = 0;
        this.RaceID = 0;
        this.Goal = 0;
        this.Number = 0;
        this.Favorite = 0;
        this.Name = "";
        this.Runk = [];
        this.Strategy = "";
        this.Motivation = "";
        this.GoalTime = 0;
        this.Corner = [];
        this.FurlongTime = 0;
        this.GoalDef = "";
        this.TopDef = 0;
        this.Parents = ["", ""];
        this.Status = new RaceResultStatusObj();
        this.Support = [];
        this.Scenario = "";
        this.CultivateDate = {"Year":0, "Month":0, "Day":0, "Hour":0, "Min":0};
        this.CultivateRace = [];
        this.Factor = [];

        // 引数に入力されている内容だけ値を登録
        switch(arguments.length) {
        case 21:
            // 因子情報
            this.Factor = factor;
        case 20:
            // 育成時出走レース
            this.CultivateRace = cultivateRace;
        case 19:
            // 育成日
            this.CultivateDate = cultivateDate;
        case 18:
            // 育成シナリオ
            this.Scenario = Scenario;
        case 17:
            // 育成サポカ編成
            this.Support = support;
        case 16:
            // ステータス情報
            this.Status = Status;
        case 15:
            // 親情報
            this.Parents = Parents;
        case 14:
            // トップとの着差
            this.TopDef = TopDef;
        case 13:
            this.GoalDef = GoalDef;
        case 12:
            // 3Fタイム
            this.FurlongTime = FurlongTime;
        case 11:
            // コーナー通過順位
            this.Corner = Corner;
        case 10:
            // ゴールタイム
            this.GoalTime = GoalTime;
        case 9:
            // やる気
            this.Motivation = Motivation;
        case 8:
            // 脚質
            this.Strategy = Strategy;
        case 7:
            // 育成ランク
            this.Runk = Runk;
        case 6:
            // キャラ名
            this.Name = Name;
        case 5:
            // 人気
            this.Favorite = Favorite;
        case 4:
            // ウマ番
            this.Number = Number;
        case 3:
            // 着順
            this.Goal = Goal;
        case 2:
            // 出走レースID
            this.RaceID = RaceID;
        case 1:
            // 出走レースグループID
            this.RaceGrpID = RaceGrpID;
            break;
        default:
            /* NOP */
            break;
        }
    }
};
class MemberResultObj {
    constructor(id, Name, TrainerID, result) {
        this.ID = 0;
        this.Name = ["", ""];
        this.TrainerID = 0;
        this.result = new RaceResultObj();

        switch(arguments.length){
        case 4:
            // 出走履歴情報
            this.result = result;
        case 3:
            // ゲーム内トレーナーID
            this.TrainerID = TrainerID;
        case 2:
            // トレーナー名
            this.Name = Name;
        case 1:
            // データID
            this.ID = id;
            break;
        default:
            break;
        }
    }

}

class ENUM {
    constructor(offset, value) {
        this.Values = {};
        let cnt = offset;
        value.forEach(el => {
            this.Values[el] = cnt;
            cnt++;
        });
    }
}

const SUGGO_MEMBER_ID_OFFSET = 0;
const RINRIN_MEMBER_ID_OFFSET = 100;
const CPU_MEMBER_ID_OFFSET = 1000;
const MembersIDOffset = [SUGGO_MEMBER_ID_OFFSET, RINRIN_MEMBER_ID_OFFSET, CPU_MEMBER_ID_OFFSET];

const ENUM_Members = new ENUM(SUGGO_MEMBER_ID_OFFSET+1, [
    "Vanilla",
    "Meuniere",
    "Gumashi",
    "Resiter",
    "REON",
    "Miyabi",
    "Haidara",
    "Katsusen",
    "Kurosatou",
    "Omachi",
    "Toa",
    "Nankotsu",
    "Mika",
    "Enma",
    "Sorao",
    "Node",
    "Ushiushi",
    "Seren",
    "takkun",
    "Nifunihu",
    "Shakatore",
    "Masa",
    "Poyodai",
    "Haruhaagepoyo",
    "Temi",
    "Yasu",
    "Kiriyutanpo",
    "_108",
    "Itsuki",
    "Hina",
    "BroMan",
    "Umashib",

    "MEMBERS_MAX",
]);
const ENUM_RINRIN = new ENUM(RINRIN_MEMBER_ID_OFFSET+1, [
    "Rinpatch",
    "Fujunbungaku",
    "Leon",
    "Souryu",
    "Asuku",
    "Karasu",
    "Hago",
    "Mizakura",
    "Natadecoco",
    "Disyupa",
    "Atashi",
    "Tokitsukaze",
    "Yakumo",
    "Omuret",
    "BonressBro",
    "Seshiru",
    "Dengen",
    "Samehada",
    "Takiza",
    "Tyoran",
    "Marumaru",
    "Goro",
 
    "MEMBERS_MAX",
]);
const ENUM_CPU = {
    "AjisaiGekko"       :0, // アジサイゲッコウ
    "TideAndFrow"       :1, // タイドアンドフロウ
    "LeafLeaf"          :2, // リーフリーフ
    "WeissManager"      :3, // ワイスマネージャー
    "PaladinSword"      :4, // パラディンソード
    "OboeRhythm"        :5, // オーボエリズム
    "OrangeScrunchie"   :6,    // オレンジシュシュ
    "Imperialis"        :7,     // インペリアルタリス
    "PuddingParfait"    :8, // プディングパルフェ
    "BeatingPulse"      :9,  // ビーティングパルス
    "JewelCalcite"      :10,  // ジュエルカルサイト
    "OriginalShine"     :11, // オリジナルシャイン
    "RoyalCorot"        :12,    // ロイヤルコロット
    "Kitarism"          :13,      // キタラリズム
    "Mushamusha"        :14,    // ムシャムシャ
    "KetchupStep"       :15,   // ケチャップステップ
    "Unchanging"        :16,    // アンチェンジング
    "Myonmyon"          :17,   // ミョンミョン
    "MiniOrchid"        :18,   // ミニオーキッド
    "EveryoneLikes"     :19,   // エブリワンライクス
    "FlyingTurkey"      :20,   // フライングターキー
    "BreezeDrone"       :21,   // ブリーズドローン
    "DualingStella"     :22,   // デュアリングステラ
    "FrilledOrange"     :23,   // フリルドオレンジ
    "PanPacific"        :24,   // パンパシフィック
    "PretzEclair"       :25,   // プリッツエクレール
    "Leverent"          :26,   // レベレント
    "Kustawi"           :27,   // クスタウィ
    "Duosvel"           :28,   // デュオスヴェル
    "PetitFolklore"     :29,   // プチフォークロア
    "RoombaStep"        :30,   // ルンバステップ
    "MemoryLabyrinth"   :31,   // メモラビリンス
    "StateOfArt"        :32,   // ステートオブアート
    "WeissGrimoire"     :33,   // ヴァイスグリモア
    "RibbonOperetta"    :34,   // リボンオペレッタ
    "JewelTopaz"        :35,   // ジュエルトパーズ
    "BlackGrimoire"     :36,   // ブラックグリモア
    "Tarcke"            :37,   // タルッケ
    "EyeCaret"          :38,   // アイキャレット
//     "Name": ["", ""],
//     "ID":40,
//     new RaceResultObj(4, 1, 6, 4, 6, "ブラボーアール", ["S", 0], "先行", "普通", 0, [], 0, "", 0)
//     "Name": ["", ""],
//     "ID":41,
//     new RaceResultObj(4, 1, 8, 5, 3, "アクアフィヨルド", ["A+", 0], "差し", "普通", 0, [], 0, "", 0)
//     "Name": ["", ""],
//     "ID":42,
//     new RaceResultObj(4, 1, 7, 8, 4, "アルベドベラドンナ", ["A+", 0], "追込", "絶好調", 0, [], 0, "", 0)
//     "Name": ["", ""],
//     "ID":43,
//     new RaceResultObj(4, 1, 4, 9, 5, "マリフィクス", ["S", 0], "先行", "絶好調", 0, [], 0, "1", 0)
//     "Name": ["", ""],
//     "ID":44,
//     new RaceResultObj(4, 2, 4, 1, 3, "アルゴル", ["A+", 0], "逃げ", "絶好調", 0, [], 0, "3/4", 0)
//     "Name": ["", ""],
//     "ID":45,
//     new RaceResultObj(4, 2, 3, 3, 7, "アバブリニ", ["A+", 0], "差し", "普通", 0, [], 0, "大差", 0)
//     "Name": ["", ""],
//     "ID":46,
//     new RaceResultObj(4, 2, 6, 5, 4, "アクアオーシャン", ["A+", 0], "逃げ", "絶好調", 0, [], 0, "ハナ", 0)
//     "Name": ["", ""],
//     "ID":47,
//     new RaceResultObj(4, 2, 8, 6, 6, "シルバーベリー", ["A+", 0], "先行", "不調", 0, [], 0, "アタマ", 0)
//     "Name": ["", ""],
//     "ID":48,
//     new RaceResultObj(4, 6, 7, 5, 8, "タクティカルワン", ["S", 0], "差し", "不調", 0, [], 0, "3/4", 0),
//     "Name": ["", ""],
//     "ID":49,
//     new RaceResultObj(4, 2, 7, 9, 5, "アジャイルタレント", ["A+", 0], "追込", "絶好調", 0, [], 0, "アタマ", 0)
//     "Name": ["", ""],
//     "ID":50,
//     new RaceResultObj(4, 8, 7, 5, 9, "ミニマリーゴールド", ["S", 0], "逃げ", "絶不調", 0, [], 0, "3/4", 0),
//     "Name": ["", ""],
//     "ID":51,
//     new RaceResultObj(4, 11, 3, 7, 3, "サドンアタック", ["S", 0], "追込", "絶好調", 0, [], 0, "6", 0),
//     "Name": ["", ""],
//     "ID":52,
//     new RaceResultObj(4, 3, 9, 5, 6, "ゴージャスバルフェ", ["A+", 0], "逃げ", "好調", 0, [], 0, "1/2", 0)
//     "Name": ["", ""],
//     "ID":53,
//     new RaceResultObj(4, 3, 6, 6, 3, "ステイシャーリーン", ["A+", 0], "先行", "絶好調", 0, [], 0, "1", 0)
//     "Name": ["", ""],
//     "ID":54,
//     new RaceResultObj(4, 3, 7, 7, 7, "ワンインチオブラブ", ["A+", 0], "差し", "好調", 0, [], 0, "5/4", 0)
//     "Name": ["", ""],
//     "ID":55,
//     new RaceResultObj(4, 3, 4, 8, 5, "イノセントグリモア", ["A+", 0], "逃げ", "絶好調", 0, [], 0, "3/2", 0)
//     "Name": ["", ""],
//     "ID":56,
//     new RaceResultObj(4, 3, 3, 9, 4, "デュオスクトゥム", ["A+", 0], "追込", "普通", 0, [], 0, "大差", 0)
//     "Name": ["", ""],
//     "ID":57,
//     new RaceResultObj(4, 10, 9, 7, 3, "ジュエルジルコン", ["A+", 0], "追込み", "絶好調", 0, [], 0, "3/4", 0),
//     "result":[
//             new RaceResultObj(4, 4, 9, 2, 8, "ジュエルジルコン", ["A+", 0], "差し", "絶不調", 0, [], 0, "アタマ", 0)
//         ]
//     },
//     {
//         "ID":58,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 4, 3, 5, 3, "グリードホロウ", ["A+", 0], "差し", "絶好調", 0, [], 0, "6", 0)
//         ]
//     },
//     {
//         "ID":59,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 4, 4, 6, 4, "イズカリ", ["A+", 0], "先行", "好調", 0, [], 0, "1/2", 0)
//         ]
//     },
//     {
//         "ID":60,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 4, 6, 7, 5, "シンスフィールド", ["A+", 0], "逃げ", "不調", 0, [], 0, "1", 0)
//         ]
//     },
//     {
//         "ID":61,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 14, 6, 3, 6, "リボンヴィルレー", ["A+", 0], "逃げ", "不調", 0, [], 0, "1/2", 0),
//             new RaceResultObj(4, 4, 5, 8, 6, "リボンヴィルレー", ["A+", 0], "追込", "好調", 0, [], 0, "クビ", 0)
//         ]
//     },
//     {
//         "ID":62,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 4, 8, 9, 9, "ピウエラリズム", ["A+", 0], "追込", "絶不調", 0, [], 0, "3/4", 0)
//         ]
//     },
//     {
//         "ID":63,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 5, 5, 3, 9, "ナターレノッテ", ["A+", 0], "先行", "絶不調", 0, [], 0, "1", 0)
//         ]
//     },
//     {
//         "ID":64,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 5, 4, 4, 6, "ブルータルラッシュ", ["A+", 0], "先行", "不調", 0, [], 0, "ハナ", 0)
//         ]
//     },
//     {
//         "ID":65,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 5, 9, 5, 3, "ジュエルサファイア", ["A+", 0], "先行", "好調", 0, [], 0, "5/2", 0)
//         ]
//     },
//     {
//         "ID":66,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 5, 3, 6, 8, "ライムシュシュ", ["A+", 0], "差し", "絶不調", 0, [], 0, "大差", 0)
//         ]
//     },
//     {
//         "ID":67,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 5, 7, 7, 5, "ジュエルトルマリン", ["A+", 0], "逃げ", "普通", 0, [], 0, "ハナ", 0)
//         ]
//     },
//     {
//         "ID":68,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 10, 5, 3, 8, "リードエッセイ", ["A+", 0], "先行", "絶不調", 0, [], 0, "3/4", 0),
//             new RaceResultObj(4, 5, 6, 8, 4, "リードエッセイ", ["A+", 0], "逃げ", "絶好調", 0, [], 0, "1/2", 0)
//         ]
//     },
//     {
//         "ID":69,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 5, 8, 9, 7, "マリタイムシッパー", ["A+", 0], "先行", "絶不調", 0, [], 0, "5/4", 0)
//         ]
//     },
//     {
//         "ID":70,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 6, 1, 1, 4, "ファームポリション", ["S", 0], "差し", "不調", 0, [], 0, "3/4", 0)
//         ]
//     },
//     {
//         "ID":71,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 6, 3, 2, 9, "テトラビブロス", ["S", 0], "先行", "好調", 0, [], 0, "5", 0)
//         ]
//     },
//     {
//         "ID":72,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 10, 7, 1, 7, "フリルドチェリー", ["A+", 0], "逃げ", "絶不調", 0, [], 0, "1/2", 0),
//             new RaceResultObj(4, 6, 5, 4, 3, "フリルドチェリー", ["S", 0], "追込", "好調", 0, [], 0, "3/2", 0)
//         ]
//     },
//     {
//         "ID":73,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 6, 6, 7, 5, "タップステップ", ["S", 0], "逃げ", "好調", 0, [], 0, "3/2", 0)
//         ]
//     },
//     {
//         "ID":74,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 6, 8, 8, 6, "フィールザフェイト", ["S", 0], "差し", "普通", 0, [], 0, "1/2", 0)
//         ]
//     },
//     {
//         "ID":75,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 6, 9, 9, 7, "ミニポールサム", ["S", 0], "逃げ", "普通", 0, [], 0, "ハナ", 0)
//         ]
//     },
//     {
//         "ID":76,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 7, 6, 1, 8, "ミニダンデライオン", ["A+", 0], "先行", "絶不調", 0, [], 0, "1", 0)
//         ]
//     },
//     {
//         "ID":77,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 7, 5, 2, 4, "アキナケス", ["A+", 0], "先行", "絶好調", 0, [], 0, "クビ", 0)
//         ]
//     },
//     {
//         "ID":78,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 15, 8, 4, 6, "サンドコマンド", ["A+", 0], "逃げ", "好調", 0, [], 0, "3/2", 0),
//             new RaceResultObj(4, 13, 5, 8, 3, "サンドコマンド", ["S", 0], "差し", "絶不調", 0, [], 0, "3/4", 0),
//             new RaceResultObj(4, 7, 9, 4, 3, "サンドコマンド", ["A+", 0], "差し", "絶好調", 0, [], 0, "ハナ", 0)
//         ]
//     },
//     {
//         "ID":79,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 7, 8, 5, 7, "プリーズセスナ", ["A+", 0], "追込", "絶不調", 0, [], 0, "7/4", 0)
//         ]
//     },
//     {
//         "ID":80,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 8, 4, 7, 4, "エコノアニマル", ["S", 0], "先行", "不調", 0, [], 0, "1", 0),
//             new RaceResultObj(4, 7, 3, 6, 5, "エコノアニマル", ["A+", 0], "差し", "不調", 0, [], 0, "大差", 0)
//         ]
//     },
//     {
//         "ID":81,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 7, 7, 7, 6, "デュオタリカー", ["A+", 0], "逃げ", "普通", 0, [], 0, "1/2", 0)
//         ]
//     },
//     {
//         "ID":82,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 7, 4, 8, 9, "ファスターザンレイ", ["A+", 0], "差し", "絶不調", 0, [], 0, "ハナ", 0)
//         ]
//     },
//     {
//         "ID":83,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 8, 3, 1, 3, "スイートキャビン", ["S", 0], "差し", "不調", 0, [], 0, "5", 0)
//         ]
//     },
//     {
//         "ID":84,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 8, 5, 4, 8, "フォローザサン", ["S", 0], "先行", "絶不調", 0, [], 0, "クビ", 0)
//         ]
//     },
//     {
//         "ID":85,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 8, 6, 6, 5, "ファイフリズム", ["S", 0], "逃げ", "普通", 0, [], 0, "クビ", 0)
//         ]
//     },
//     {
//         "ID":86,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 8, 9, 8, 6, "ヴァロワマロン", ["S", 0], "追込", "不調", 0, [], 0, "5/4", 0)
//         ]
//     },
//     {
//         "ID":87,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 8, 8, 9, 2, "ユニゾンフラッグ", ["S", 0], "差し", "絶好調", 0, [], 0, "1/2", 0)
//         ]
//     },
//     {
//         "ID":88,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 9, 6, 1, 7, "シンプトンダッシュ", ["A+", 0], "先行", "不調", 0, [], 0, "クビ", 0)
//         ]
//     },
//     {
//         "ID":89,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 9, 3, 3, 5, "ミニクレマティス", ["A+", 0], "差し", "不調", 0, [], 0, "3/4", 0)
//         ]
//     },
//     {
//         "ID":90,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 9, 5, 4, 3, "ブラックエボニー", ["A+", 0], "先行", "絶好調", 0, [], 0, "5", 0)
//         ]
//     },
//     {
//         "ID":91,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 9, 9, 5, 6, "リボンミンネ", ["A+", 0], "逃げ", "普通", 0, [], 0, "5", 0)
//         ]
//     },
//     {
//         "ID":92,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 9, 7, 6, 8, "ブレイスインヘヴン", ["A+", 0], "逃げ", "不調", 0, [], 0, "大差", 0)
//         ]
//     },
//     {
//         "ID":93,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 9, 8, 9, 9, "マッキラ", ["A+", 0], "逃げ", "絶不調", 0, [], 0, "5/4", 0)
//         ]
//     },
//     {
//         "ID":94,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 10, 2, 2, 4, "キンダーシャッツ", ["A+", 0], "差し", "絶好調", 0, [], 0, "3/4", 0)
//         ]
//     },
//     {
//         "ID":95,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 10, 3, 4, 9, "イミディエイト", ["A+", 0], "差し", "不調", 0, [], 0, "4", 0)
//         ]
//     },
//     {
//         "ID":96,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 10, 6, 8, 6, "アイタンリ", ["A+", 0], "逃げ", "絶好調", 0, [], 0, "クビ", 0)
//         ]
//     },
//     {
//         "ID":97,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 11, 5, 2, 8, "クレセントエース", ["S", 0], "先行", "不調", 0, [], 0, "3/4", 0)
//         ]
//     },
//     {
//         "ID":98,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 11, 9, 3, 5, "ショファーリズム", ["S", 0], "差し", "絶不調", 0, [], 0, "3/2", 0)
//         ]
//     },
//     {
//         "ID":99,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 11, 8, 6, 4, "ダブルサラウンド", ["S", 0], "差し", "普通", 0, [], 0, "-", 0)
//         ]
//     },
//     {
//         "ID":100,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 11, 6, 8, 7, "カラフルパステル", ["S", 0], "先行", "不調", 0, [], 0, "3/4", 0)
//         ]
//     },
//     {
//         "ID":101,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 11, 7, 9, 9, "リボンメヌエット", ["S", 0], "差し", "絶不調", 0, [], 0, "ハナ", 0)
//         ]
//     },
//     {
//         "ID":102,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 12, 3, 2, 3, "ミニローズ", ["A+", 0], "追込", "絶好調", 0, [], 0, "大差", 0)
//         ]
//     },
//     {
//         "ID":103,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 18, 9, 1, 5, "イースタンダイナー", ["A+", 0], "逃げ", "好調", 0, [], 0, "大差", 0),
//             new RaceResultObj(4, 12, 7, 3, 5, "イースタンダイナー", ["A+", 0], "追込", "絶好調", 0, [], 0, "アタマ", 0)
//         ]
//     },
//     {
//         "ID":104,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 13, 8, 7, 5, "アップツリー", ["S", 0], "差し", "絶不調", 0, [], 0, "ハナ", 0),
//             new RaceResultObj(4, 12, 5, 4, 6, "アップツリー", ["A+", 0], "逃げ", "好調", 0, [], 0, "1", 0)
//         ]
//     },
//     {
//         "ID":105,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 12, 4, 5, 4, "ブラウンモンブラン", ["A+", 0], "差し", "絶好調", 0, [], 0, "ハナ", 0)
//         ]
//     },
//     {
//         "ID":106,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 12, 6, 6, 9, "ブームアバング", ["A+", 0], "逃げ", "不調", 0, [], 0, "7/4", 0)
//         ]
//     },
//     {
//         "ID":107,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 12, 9, 8, 7, "デュオアスピス", ["A+", 0], "先行", "絶不調", 0, [], 0, "1", 0)
//         ]
//     },
//     {
//         "ID":108,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 12, 8, 9, 8, "マストチューズミー", ["A+", 0], "先行", "絶不調", 0, [], 0, "3/2", 0)
//         ]
//     },
//     {
//         "ID":109,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 13, 6, 1, 6, "クリシュマルド", ["S", 0], "先行", "絶不調", 0, [], 0, "1/2", 0)
//         ]
//     },
//     {
//         "ID":110,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 13, 3, 2, 4, "ジュエルルベライト", ["S", 0], "逃げ", "絶好調", 0, [], 0, "7/2", 0)
//         ]
//     },
//     {
//         "ID":111,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 13, 9, 3, 2, "アンペールユニット", ["S", 0], "差し", "絶不調", 0, [], 0, "1", 0)
//         ]
//     },
//     {
//         "ID":112,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 13, 4, 5, 7, "フルーツパルフェ", ["A+", 0], "追込", "絶不調", 0, [], 0, "クビ", 0)
//         ]
//     },
//     {
//         "ID":113,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 13, 7, 6, 9, "ルーラルレジャー", ["A+", 0], "追込", "絶不調", 0, [], 0, "5/2", 0)
//         ]
//     },
//     {
//         "ID":114,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 17, 7, 6, 4, "サンフィッシュレイ", ["A+", 0], "逃げ", "好調", 0, [], 0, "3/4", 0),
//             new RaceResultObj(4, 14, 7, 1, 3, "サンフィッシュレイ", ["A+", 0], "追込", "好調", 0, [], 0, "2", 0)
//         ]
//     },
//     {
//         "ID":115,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 14, 3, 2, 5, "フラハラウ", ["A+", 0], "差し", "普通", 0, [], 0, "7/2", 0)
//         ]
//     },
//     {
//         "ID":116,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 14, 5, 4, 8, "フューダルテニュア", ["A+", 0], "先行", "普通", 0, [], 0, "1/2", 0)
//         ]
//     },
//     {
//         "ID":117,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 14, 8, 5, 9, "マリンシーガル", ["A+", 0], "差し", "絶不調", 0, [], 0, "1", 0)
//         ]
//     },
//     {
//         "ID":118,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 14, 9, 8, 4, "カイゼルパレス", ["A+", 0], "逃げ", "不調", 0, [], 0, "3/4", 0)
//         ]
//     },
//     {
//         "ID":119,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 14, 4, 9, 7, "ハシュハシュ", ["A+", 0], "追込", "絶不調", 0, [], 0, "1", 0)
//         ]
//     },
//     {
//         "ID":120,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(5, 1, 7, 4, 7, "コインシデンス", ["S", 0], "逃げ", "", 0, [], 0, "大差", 0),
//             new RaceResultObj(4, 15, 5, 2, 5, "コインシデンス", ["A+", 0], "追込", "絶好調", 0, [], 0, "3/4", 0)
//         ]
//     },
//     {
//         "ID":121,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(5, 2, 8, 9, 7, "プカプカ", ["S", 0], "追込", "", 0, [], 0, "3/2", 0),
//             new RaceResultObj(4, 15, 4, 3, 3, "プカプカ", ["A+", 0], "逃げ", "絶好調", 0, [], 0, "5/4", 0)
//         ]
//     },
//     {
//         "ID":122,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 15, 6, 5, 7, "スペシャルパルフェ", ["A+", 0], "逃げ", "不調", 0, [], 0, "1/2", 0)
//         ]
//     },
//     {
//         "ID":123,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 15, 3, 6, 4, "トーチアンドブック", ["A+", 0], "先行", "好調", 0, [], 0, "大差", 0)
//         ]
//     },
//     {
//         "ID":124,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 15, 9, 7, 9, "コルスカンティ", ["A+", 0], "先行", "絶不調", 0, [], 0, "クビ", 0)
//         ]
//     },
//     {
//         "ID":125,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 15, 7, 9, 8, "ケミカルウォッシュ", ["A+", 0], "追込", "絶不調", 0, [], 0, "1", 0)
//         ]
//     },
//     {
//         "ID":126,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 16, 3, 1, 4, "ブックオブシュガー", ["A+", 0], "先行", "好調", 0, [], 0, "10", 0)
//         ]
//     },
//     {
//         "ID":127,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 16, 7, 2, 7, "コンプロマイズ", ["A+", 0], "差し", "普通", 0, [], 0, "-", 0)
//         ]
//     },
//     {
//         "ID":128,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 16, 6, 4, 8, "ボヌールソナタ", ["A+", 0], "逃げ", "不調", 0, [], 0, "-", 0)
//         ]
//     },
//     {
//         "ID":129,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 17, 6, 5, 8, "アニマアニムス", ["A+", 0], "先行", "不調", 0, [], 0, "1/2", 0),
//             new RaceResultObj(4, 16, 5, 5, 3, "アニマアニムス", ["A+", 0], "逃げ", "絶好調", 0, [], 0, "-", 0)
//         ]
//     },
//     {
//         "ID":130,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 16, 8, 6, 9, "ゴージャスパルフェ", ["A+", 0], "先行", "絶好調", 0, [], 0, "-", 0)
//         ]
//     },
//     {
//         "ID":131,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 16, 9, 7, 5, "ミニハーブ", ["A+", 0], "差し", "普通", 0, [], 0, "-", 0)
//         ]
//     },
//     {
//         "ID":132,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 16, 4, 8, 6, "ノーティカルツール", ["A+", 0], "逃げ", "絶好調", 0, [], 0, "-", 0)
//         ]
//     },
//     {
//         "ID":133,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 17, 9, 1, 9, "ショーマンズアクト", ["A+", 0], "追込", "絶不調", 0, [], 0, "3/4", 0)
//         ]
//     },
//     {
//         "ID":134,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 17, 3, 2, 3, "クレイジーインラブ", ["A+", 0], "逃げ", "普通", 0, [], 0, "6", 0)
//         ]
//     },
//     {
//         "ID":135,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 17, 5, 3, 5, "アライブカリン", ["A+", 0], "先行", "普通", 0, [], 0, "5/4", 0)
//         ]
//     },
//     {
//         "ID":136,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 17, 8, 4, 6, "ジュエルスフェーン", ["A+", 0], "差し", "普通", 0, [], 0, "3/2", 0)
//         ]
//     },
//     {
//         "ID":137,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 17, 4, 7, 7, "サックスリズム", ["A+", 0], "逃げ", "不調", 0, [], 0, "3/4", 0)
//         ]
//     },
//     {
//         "ID":138,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 18, 8, 3, 7, "ライフィールド", ["A+", 0], "逃げ", "不調", 0, [], 0, "大差", 0)
//         ]
//     },
//     {
//         "ID":139,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 18, 3, 4, 3, "ディオシパルー", ["A+", 0], "差し", "絶好調", 0, [], 0, "大差", 0)
//         ]
//     },
//     {
//         "ID":140,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 18, 6, 5, 8, "ギミーワンラブ", ["A+", 0], "先行", "絶不調", 0, [], 0, "7/2", 0)
//         ]
//     },
//     {
//         "ID":141,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 18, 5, 6, 9, "アイゼンテンツァー", ["A+", 0], "差し", "絶不調", 0, [], 0, "3/4", 0)
//         ]
//     },
//     {
//         "ID":142,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 18, 7, 8, 4, "アグリゲーション", ["A+", 0], "先行", "絶好調", 0, [], 0, "3/4", 0)
//         ]
//     },
//     {
//         "ID":143,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(4, 18, 4, 9, 6, "クピドズシュート", ["A+", 0], "追込", "不調", 0, [], 0, "5/2", 0)
//         ]
//     },
//     {
//         "ID":144,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(5, 1, 8, 1, 8, "ソワソワ", ["S", 0], "先行", "", 0, [], 0, "1/2", 0)
//         ]    
//     },    

//     {
//         "ID":145,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(5, 1, 9, 3, 9, "ミニコスモス", ["S", 0], "逃げ", "", 0, [], 0, "3/2", 0)
//         ]
//     },
//     {
//         "ID":146,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(5, 2, 9, 3, 9, "サニーウェザー", ["A+", 0], "逃げ", "", 0, [], 0, "クビ", 0)
//         ]
//     },
//     {
//         "ID":147,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(5, 2, 7, 6, 8, "サムガーデン", ["S", 0], "先行", "", 0, [], 0, "大差", 0)
//         ]
//     },

//     {
//         "ID":148,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(5, 3, 8, 4, 7, "オグレッセ", ["A+", 0], "逃げ", "", 0, [], 0, "", 0)
//         ]
//     },
//     {
//         "ID":149,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(5, 3, 9, 6, 9, "ジェバト", ["A+", 0], "差し", "", 0, [], 0, "1/2", 0)
//         ]
//     },
//     {
//         "ID":150,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(5, 3, 7, 8, 8, "クラリネットリズム", ["A+", 0], "", "", 0, [], 0, "", 0)
//         ]
//     },
//     {
//         "ID":151,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(7, 1, 15, 10, 15, "オンステージレビュ", ["S", 0], "差し", "絶好調", 0, [], 0, "3/2", 0),
//         ]
//     },
//     {
//         "ID":152,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(7, 2, 15, 10, 15, "メモリアルゴラッソ", ["S", 0], "逃げ", "絶好調", 0, [], 0, "6", 0),
//         ]
//     },
//     {
//         "ID":153,
//         "Name": ["", ""],
//         "result":[
//             new RaceResultObj(
//                 7, 3, 15, 9, 15, "アウトスタンドギグ", ["S", 0], "追込", "絶好調", 0, [], 0, "9",
//                 new RaceResultStatusObj(
//                     {"Speed":1000, "Stamina":1000, "Power":1000, "Guts":1000, "Intelligent":1000},
//                     {"Feald":"A", "Length":"A", "Strategy":"A"},
//                     ["右回り〇", "良バ場〇", "道悪〇", "内枠得意〇", "外枠得意〇"],
//                 )
//             ),
//         ]
//     },
    // {
    //     "ID":154,
    //     "Name": ["", ""],
    //     "result":[
    //         new RaceResultObj(7, 2, 15, 10, 15, "スピーチレスハック", ["S", 0], "逃げ", "絶好調", 0, [], 0, "6", 0),
    //     ]
    // },
    // {
    //     "ID":155,
    //     "Name": ["", ""],
    //     "result":[
    //         new RaceResultObj(7, 2, 15, 10, 15, "ジュエルコーラル", ["S", 0], "逃げ", "絶好調", 0, [], 0, "6", 0),
    //     ]
    // },
    // {
    //     "ID":156,
    //     "Name": ["", ""],
    //     "result":[
    //         new RaceResultObj(0, 0, 0, 0, 0, "ハイタイムスーン", ["", 0], "", "", 0, [], 0, "", 0),
    //     ]
    // },
    // {
    //     "ID":157,
    //     "Name": ["", ""],
    //     "result":[
    //         new RaceResultObj(0, 0, 0, 0, 0, "リボンマンボ", ["", 0], "", "", 0, [], 0, "", 0),
    //     ]
    // },
    // {
    //     "ID":158,
    //     "Name": ["", ""],
    //     "result":[
    //         new RaceResultObj(0, 0, 0, 0, 0, "カジュアルスナップ", ["", 0], "", "", 0, [], 0, "", 0),
    //     ]
    // },
    // {
    //     "ID":159,
    //     "Name": ["", ""],
    //     "result":[
    //         new RaceResultObj(0, 0, 0, 0, 0, "サコッシュ", ["", 0], "", "", 0, [], 0, "", 0),
    //     ]
    // },
    // {
    //     "ID":160,
    //     "Name": ["", ""],
    //     "result":[
    //         new RaceResultObj(0, 0, 0, 0, 0, "ビアンコグリモア", ["", 0], "", "", 0, [], 0, "", 0),
    //     ]
    // },
    // {
    //     "ID":161,
    //     "Name": ["", ""],
    //     "result":[
    //         new RaceResultObj(0, 0, 0, 0, 0, "サマーボンファイア", ["", 0], "", "", 0, [], 0, "", 0),
    //     ]
    // },
    // {
    //     "ID":162,
    //     "Name": ["", ""],
    //     "result":[
    //         new RaceResultObj(0, 0, 0, 0, 0, "リードサスペンス", ["", 0], "", "", 0, [], 0, "", 0),
    //     ]
    // },
// ]
}

const Members = [
    {
        "ID":1,
        "Name": ["ヴァニラ", "Vanilla"],
        "info":{
            "TrainerID":0, 
            "TrainerTitle":"小さな頑張り屋",
            "Comment":"仕事何でもやる！",
            "RentChar":{"name":"マチカネフクキタル2", "Runk":["",0], "Strategy":"", "Parents":["", ""], "Param":{"Speed":0, "Stamina":0, "Power":0, "Guts":0, "Intelligent":0},
                "Aptitude":{"Feald":"", "Length":"", "Strategy":""}, "Skills":[], "Support":[], "Scenario":0, "CultivateDate":{"Year":0, "Month":0, "Day":0, "Hour":0, "Min":0},
                "CultivateRace":[{"name":"", "Goal":0}],/* "Factor":[]*/
            },
            "RentCard":{"name":"", "Runk":["",0], "Strategy":"", "Parents":["", ""], "Param":{"Speed":0, "Stamina":0, "Power":0, "Guts":0, "Intelligent":0},
                "Aptitude":{"Feald":"", "Length":"", "Strategy":""}, "Skills":[], "Support":[], "Scenario":0, "CultivateDate":{"Year":0, "Month":0, "Day":0, "Hour":0, "Min":0},
                "CultivateRace":[{"name":"", "Goal":0}],/* "Factor":[]*/
            },
            "Directory":{
                "Lv": 92,
                "Exp":3773393,
                "Char":[
                    {"name":"ヤマニンゼファー", "Runk":["UD4",37158], "Strategy":"先行", "Parents":["タイキシャトル", "ニシノフラワー"],
                    "Param":{"Speed":0, "Stamina":0, "Power":0, "Guts":0, "Intelligent":0}, "Aptitude":{"Feald":"", "Length":"", "Strategy":""}, "Skills":[],
                    "Support":[], "Scenario":8, "CultivateDate":{"Year":24, "Month":9, "Day":24, "Hour":-1, "Min":-1}, "CultivateRace":[{"name":"URAファイナルズ決勝", "Goal":1}]
                    /* "Factor":[]*/}
                ]
            },
            "progress":{
                "Training":{"Count":261, "GoodEnd":23, "VestPoint":37158},
                "Trophy":{"G1":35,"G2":26,"G3":21,"EX":93},
                "Team":{"Class":3,"VestScore":1254060,"WinCount":584},
                "Releases":{},"FunPoint":87930650,"Gallery":{},
            },
            "TeamComposition":{
                "Short":[],"Mille":[],"Middle":[],"Long":[],"Dart":[]
            }
        },
        "result": [
            new RaceResultObj(7, 3, 12, 7, 12, 2001, ["UE8", 33399], "逃げ", "絶好調", 0, [], 0, "クビ", 0),
            new RaceResultObj(7, 2, 13, 9, 13, 2001, ["UE8", 33399], "逃げ", "絶好調", 0, [], 0, "5/2", 0),
            new RaceResultObj(7, 1, 12, 9, 13, 2001, ["UE8", 33399], "逃げ", "絶好調", 0, [], 0, "7", 0),
            new RaceResultObj(5, 1, 2, 6, 5, 4602, ["UE4", 31469], "逃げ", "", 0, [], 0, "1", 0),
            new RaceResultObj(3, 6, 18, 11, 17, 5601, ["-", 0], "差し", "", 0, [], 0, "大差", 0),
            new RaceResultObj(1, 1, 16, 3, 18, 5601, ["-", 0], "差し", "", 1330, [15,15,17,17], 0, 27)
        ]
    },
    {
        "ID":2,
        "Name": ["むにえる", "Meuniere"],
        "result":[
            new RaceResultObj(4, 1, 2, 7, 2, 1802, ["UE2", 0], "先行", "好調", 0, [], 0, "3", 0, [],
                new RaceResultStatusObj({"Speed":1585,"Stamina":744,"Power":1344,"Guts":1208,"Intelligent":1304}, {"Feald":"S", "Length":"S", "Strategy":"A"},
                    ["薫風、永遠なる瞬間を", "ヴィクトリーショット！", "つぼみ、ほころぶ時", "右回り〇", "秋ウマ娘〇", "集中力", "アガってきた！", "尻尾上がり", "向こう見ず", "優位形成",
                    "ハイボルテージ", "最高峰の夢", "弧線のプロフェッサー", "上弦のソムリエール", "女帝の矜持", "先行コーナー〇", "お先に失礼っ！", "下り坂巧者"])
            ),
            new RaceResultObj(3, 3, 2, 7, 0, 1502, ["-", 0], "", "", 0, [], 0, "7/2", 0),
            new RaceResultObj(2, 3, 3, 8, 3, 1802, ["-", 0], "", "", 917, [11,10,9], 0, "3/2", 4),
            new RaceResultObj(2, 1, 1, 14, 6, 1802, ["-", 0], "", "", 902, [6,2,1], 0, "-", 6),
            new RaceResultObj(1, 1, 1, 16, 2, 1502, ["-", 0], "", "", 1305, [7,6,3,3], 0, "-", 4)
        ]
    },
    {
        "ID":3,
        "Name": ["ぐましぃ", "Gumashi"],
        "result":[
            new RaceResultObj(
                6, 1, 4, 1, 1, 11601, ["UD1", 35396], "先行", "絶好調", 0, [], 0, "3/4",
                new RaceResultStatusObj(
                    {"Speed":0, "Stamina":0, "Power":0, "Guts":0, "Intelligent":0},
                    {"Feald":"", "Length":"", "Strategy":""},
                    [],
                )
            ),
            new RaceResultObj(4, 11, 1, 1, 2, 1402, ["UE3", 30507], "差し", "絶好調", 900, [], 0, "-", ["", ""],
                new RaceResultStatusObj(
                    {"Speed":1669, "Stamina":829, "Power":1324, "Guts":713, "Intelligent":1321},
                    {"Feald":"A", "Length":"S", "Strategy":"A"},
                    ["コンドル猛撃波", "勝利の鼓動", "つぼみ、ほころぶ時", "右回り〇", "中山レース場〇", "根幹距離〇", "非根幹距離〇", "弧線のプロフェッサー",
                    "直線回復", "ノンストップガール","昇りコンドル", "豪勇無双", "先行ためらい", "マイル直線◎", "マイルコーナー◎", "アクセラレーション",
                    "尻尾上がり", "スリップストリーム", "向こう見ず", "優位形成", "快速", "ネバーギブアップ","アオハル点火・賢", "レースの心髄・心", "最高峰の夢"],
                )
            ),
            new RaceResultObj(4, 6, 1, 3, 2, 1402, ["UE3", 30507], "差し", "好調", 900, [], 0, "-", ["", ""],
                new RaceResultStatusObj(
                    {"Speed":1669, "Stamina":829, "Power":1324, "Guts":713, "Intelligent":1321},
                    {"Feald":"A", "Length":"S", "Strategy":"A"},
                    ["コンドル猛撃波", "勝利の鼓動", "つぼみ、ほころぶ時", "右回り〇", "中山レース場〇", "根幹距離〇", "非根幹距離〇", "弧線のプロフェッサー",
                    "直線回復", "ノンストップガール","昇りコンドル", "豪勇無双", "先行ためらい", "マイル直線◎", "マイルコーナー◎", "アクセラレーション",
                    "尻尾上がり", "スリップストリーム", "向こう見ず", "優位形成", "快速", "ネバーギブアップ","アオハル点火・賢", "レースの心髄・心", "最高峰の夢"],
                )
            ),
            new RaceResultObj(3, 3, 3, 4, 0, 2301, ["-", 0], "", "", 0, [], 0, "5/2", 0),
            new RaceResultObj(2, 3, 5, 4, 1, 2301, ["-", 0], "", "", 918, [8,7,5], 0, "クビ", 5),
            new RaceResultObj(2, 2, 3, 12, 2, 2301, ["-", 0], "先行", "", 923, [6,6,5], 0, "5/4", 7),
            new RaceResultObj(1, 1, 18, 1, 11, 7201, ["-", 0], "", "", 1343, [8,8,8,12], 0, "7", 38)
        ]
    },
    {
        "ID":4,
        "Name": ["れじすた", "Resiter"],
        "result":[
            new RaceResultObj(7, 3, 8, 1, 3, 11801, ["UC4", 43651], "追込", "絶好調", 0, [], 0, "ハナ"),
            new RaceResultObj(7, 2, 3, 12, 3, 11801, ["UC4", 43651], "追込", "絶好調", 0, [], 0, "1"),
            new RaceResultObj(7, 1, 5, 6, 2, 11801, ["UC4", 43651], "追込", "絶好調", 0, [], 0, "1/2"),
            new RaceResultObj(6, 1, 7, 3, 5, "ジェンティルドンナ", ["UD3", 36218], "先行", "絶好調", 0, [], 0, "3/4"),
            new RaceResultObj(5, 3, 1, 1, 3, "アストンマーチャン", ["UE4", 31469], "逃げ", "", 671, [], 0, "-", 0),
            new RaceResultObj(4, 15, 2, 1, 2, 8901, ["UE", 29292], "先行", "絶不調", 0, [], 0, "1", ["", ""],
                new RaceResultStatusObj(
                    {"Speed":1601, "Stamina":1256, "Power":1236, "Guts":1008, "Intelligent":1014},
                    {"Feald":"A", "Length":"S", "Strategy":"A"},
                    ["Celeste Oath(6)", "アングリング×スキーミング", "セイリオス", "秋ウマ娘〇", "直線巧者", "垂れウマ回避", "全力投球", "中距離コーナー〇", "先行直線〇", "先行コーナー〇", "尻尾上がり",
                    "スリップストリーム", "ありったけ", "攻めの姿勢", "偉大なる踏破", "優位形成", "王手", "ネバーギブアップ", "陽の加護", "最高峰の夢"],
                )
            ),
            new RaceResultObj(3, 5, 1, 7, 1, "アドマイヤベガ", ["-", 0], "", "", 1306, [], 0, "-", 0),
            new RaceResultObj(2, 3, 9, 16, 6, "アドマイヤベガ", ["-", 0], "", "", 920, [13,15,15], 0, "クビ", 7),
            new RaceResultObj(2, 1, 4, 11, 1, "アドマイヤベガ", ["-", 0], "", "", 910, [15,14,13], 0, "ハナ", 8),
            new RaceResultObj(1, 1, 7, 15, 6, "アドマイヤベガ", ["-", 0], "", "", 1314, [18,18,16,16], 0, "1", 9,)
        ]
    },
    {
        "ID":5,
        "Name": ["REON", "REON"],
        "result":[
            new RaceResultObj(7, 3, 3, 13, 1, 5701, ["UC3", 43118], "追込", "絶好調", 0, [], 0, "クビ", 0),
            new RaceResultObj(7, 2, 11, 5, 1, 5701, ["UC3", 43118], "追込", "絶好調", 0, [], 0, "1", 0),
            new RaceResultObj(7, 1, 6, 2, 1, 5701, ["UC3", 43118], "追込", "絶好調", 0, [], 0, "1/2", 0),
            new RaceResultObj(5, 3, 4, 7, 2, "カツラギエース", ["UE6", 32503], "逃げ", "", 0, [], 0, "1/2", 0),
            new RaceResultObj(4, 12, 2, 1, 1, 5701, ["UE3", 30983], "追込", "絶好調", 0, [], 0, "2", 0, ["", ""],
                new RaceResultStatusObj(
                    {"Speed":1622, "Stamina":1089, "Power":1180, "Guts":1206, "Intelligent":1287},
                    {"Feald":"S", "Length":"S", "Strategy":"A"},
                    ["叙情、旅路の果てに", "レッツ・アナボリック！", "Adventure of 564", "根幹距離〇", "コーナー巧者〇", "直線巧者", "好転一息", "弾む大地", "光芒一閃", "中距離コーナー〇",
                     "ウマ好み", "ありったけ", "天翔る足取り", "優位形成", "昂る鼓動", "ネバーギブアップ", "最高峰の夢"],
                )
            ),
            new RaceResultObj(4, 5, 2, 1, 1, 5701, ["UE2", 30354], "追込", "絶好調", 0, [], 0, "2", 0, ["", ""],
                new RaceResultStatusObj(
                    {"Speed":1605, "Stamina":1228, "Power":1261, "Guts":958, "Intelligent":1245},
                    {"Feald":"A", "Length":"S", "Strategy":"A"},
                    ["叙情、旅路の果てに", "レッツ・アナボリック！", "コーナー巧者〇", "直線巧者", "好転一息", "垂れウマ回避", "弾む大地", "長距離直線◎",
                    "長距離コーナー◎", "追込直線◎", "登山家", "ウマ好み", "切れ味", "天翔る足取り", "快速", "昂る鼓動", "ネバーギブアップ", "最高峰の夢"],
                )
            ),
            new RaceResultObj(3, 6, 4, 1, 8, 5701, ["-", 0], "", "", 0, [], 0, "5/4", 0),
            new RaceResultObj(2, 3, 2, 7, 4, 5701, ["-", 0], "", "", 915, [14,11,8], 0, "3/2", 2),
            new RaceResultObj(2, 2, 2, 7, 4, 5701, ["-", 0], "追込", "", 921, [13,12,6], 0, "3", 5),
            new RaceResultObj(1, 1, 14, 5, 4, 5701, ["-", 0], "", "", 1323, [16,16,15,14], 0, "クビ", 18)
        ]
    },
    {
        "ID":6,
        "Name": ["みやび", "Miyabi"],
        "result":[
            new RaceResultObj(7, 3, 9, 11, 6, 4502, ["UC4", 43546], "先行", "絶好調", 0, [], 0, "7/4", 0),
            new RaceResultObj(7, 2, 8, 2, 7, 4502, ["UC4", 43546], "先行", "絶好調", 0, [], 0, "3/2", 0),
            new RaceResultObj(7, 1, 4, 7, 7, 4502, ["UC4", 43546], "先行", "絶好調", 0, [], 0, "1/2", 0),
            new RaceResultObj(5, 1, 1, 5, 1, 1001, ["UD6", 38442], "先行", "", 988, [], 0, "-", 0),
            new RaceResultObj(
                4, 16, 2, 9, 1, 1001, ["UE7", 32813], "先行", "普通", 0, [], 0, "5/2", 0, [], 
                new RaceResultStatusObj(
                    {"Speed":1605,"Stamina":1227,"Power":1294,"Guts":1181,"Intelligent":1274},
                    {"Feald":"A","Length":"S","Strategy":"A"},
                    ["ヴィクトリーショット(6)", "紅焔ギア/LP1211-M", "アングリング×スキーミング", "コーナー巧者〇", "ハヤテ一文字", "集中力", "テンポアップ", "中距離直線〇", "中距離コーナー〇",
                     "スリップストリーム", "お先に失礼っ！", "ありったけ", "闘争心", "気迫を込めて", "攻めの姿勢", "優位形成", "昂る鼓動", "探求心",
                     "王手", "ネバーギブアップ","中盤巧者", "最高峰の夢"]
                )
            ),
            new RaceResultObj(
                4, 10, 1, 9, 1, 1001, ["UE2", 30173], "先行", "普通", 674, [], 0, "-", 0, [], 
                new RaceResultStatusObj(
                    {"Speed":1628,"Stamina":771,"Power":1362,"Guts":1252,"Intelligent":1236},
                    {"Feald":"S","Length":"S","Strategy":"A"},
                    ["ヴィクトリーショット", "つぼみ、ほころぶ時", "風光る", "根幹距離〇", "良バ場〇", "弧線のプロフェッサー", "直線巧者", "スプリントギア", "短距離コーナー〇",
                    "善後策", "先行のコツ〇","盤石の構え", "お先に失礼っ！", "鍔迫り合い", "攻めの姿勢", "快速", "ネバーギブアップ","ひたむき前進", "想いを背負って"]
                )
            ),
            new RaceResultObj(
                4, 2, 1, 2, 1, 1001, ["UF7", 32813], "先行", "好調", 1412, [], 0, "-", 0, [], 
                new RaceResultStatusObj(
                    {"Speed":1605,"Stamina":1227,"Power":1294,"Guts":1181,"Intelligent":1274},
                    {"Feald":"A","Length":"S","Strategy":"A"},
                    ["ヴィクトリーショット", "紅焔ギア/LP1211-M", "アングリングxスキーミング", "コーナー巧者〇", "ハヤテ一文字", "集中力", "テンポアップ", "中距離直線〇", "中距離コーナー〇",
                    "スリップストリーム", "お先に失礼っ！","ありったけ", "闘争心", "気迫を込めて", "攻めの姿勢", "優位形成", "昂る鼓動", "探求心", "王手", "ネバーギブアップ","中盤巧者", "最高峰の夢"]
                )
            ),
            new RaceResultObj(3, 6, 1, 13, 2, 1001, ["-", 0], "", "", 1417, [], 0, "-", 0),
            new RaceResultObj(3, 4, 1, 6, 0, 1001, ["-", 0], "", "", 898, [], 0, "-", 0),
            new RaceResultObj(2, 3, 1, 5, 5, 1001, ["-", 0], "", "", 913, [7,5,2], 0, "-", 2),
            new RaceResultObj(2, 1, 3, 8, 2, 1001, ["-", 0], "", "", 910, [7,5,4], 0, "1", 8),
            new RaceResultObj(1, 1, 5, 9, 1, 1001, ["-", 0], "", "", 1312, [4,4,4,5], 0, "5/4", 7)
        ]
    },
    {
        "ID":7,
        "Name": ["ハイダラ", "Haidara"],
        "result":[
            new RaceResultObj(4, 10, 2, 5, 2, "メジロラモーヌ", ["UE", 29379], "先行", "好調", 0, [], 0, "5/2", 0, ["", ""],
                new RaceResultStatusObj({"Speed":1704,"Stamina":664,"Power":1229,"Guts":1314,"Intelligent":1248},
                    {"Feald":"A","Length":"S","Strategy":"A"},
                    ["愛と煌けよただ溶けよ", "根幹距離◎", "良バ場◎", "冬ウマ娘◎", "弧線のプロフェッサー", "コーナー加速〇", "直線巧者", "アガってきた！",
                    "スピードスター", "短距離直線〇","短距離コーナー〇", "先行コーナー〇", "お先に失礼っ！", "鍔迫り合い", "軽い足取り", "攻めの姿勢"],
                )
            ),
            new RaceResultObj(4, 4, 1, 4, 2, "メジロラモーヌ", ["UE", 29379], "先行", "普通", 674, [], 0, "-", 0, ["", ""],
                new RaceResultStatusObj({"Speed":1704,"Stamina":664,"Power":1229,"Guts":1314,"Intelligent":1248},
                    {"Feald":"A","Length":"S","Strategy":"A"},
                    ["愛と煌けよただ溶けよ", "根幹距離◎", "良バ場◎", "冬ウマ娘◎", "弧線のプロフェッサー", "コーナー加速〇", "直線巧者", "アガってきた！",
                    "スピードスター", "短距離直線〇","短距離コーナー〇", "先行コーナー〇", "お先に失礼っ！", "鍔迫り合い", "軽い足取り", "攻めの姿勢"],
                )
            ),
            new RaceResultObj(3, 6, 5, 16, 13, "メジロパーマー", ["-", 0], "", "", 0, [], 0, "3/2", 0),
            new RaceResultObj(2, 3, 16, 10, 14, "メジロパーマー", ["-", 0], "", "", 931, [4,4,10], 0, "1", 18),
            new RaceResultObj(2, 1, 6, 4, 9, "メジロパーマー", ["-", 0], "", "", 913, [1,1,2], 0, "3/4", 11),
            new RaceResultObj(1, 1, 10, 10, 14, "メジロパーマー", ["-", 0], "", "", 1320, [2,2,4,9], 0, 15)
        ]
    },
    {
        "ID":8,
        "Name": ["猾仙", "Katsusen"],
        "result":[
            new RaceResultObj(7, 3, 1, 6, 8, 6402, ["UC7", 45674], "逃げ", "絶好調", 1492, [], 0, "-", 0),
            new RaceResultObj(7, 2, 1, 8, 9, 6402, ["UC7", 45674], "逃げ", "絶好調", 1484, [], 0, "-", 0),
            new RaceResultObj(7, 1, 3, 14, 9, 6402, ["UC7", 45674], "逃げ", "絶好調", 0, [], 0, "1/2", 0),
            new RaceResultObj(4, 17, 2, 9, 1, 6501, ["UF8", 28268], "先行", "不調", 0, [], 0, "1/2", 0, [],
                new RaceResultStatusObj(
                    {"Speed":1427,"Stamina":596,"Power":1379,"Guts":1384,"Intelligent":1173},
                    {"Feald":"A","Length":"S","Strategy":"A",},
                    ["アゲてアゲてぷちょへんざ！(6)", "ヴィクトリーショット", "右回り〇", "冬ウマ娘〇", "弧線のプロフェッサー", "直線巧者", "直線巧者", "直線加速", "集中力", "垂れウマ回避",
                     "抜け出し準備", "スプリントギア", "短距離直線〇", "短距離コーナー〇", "善後策", "仕掛け準備", "先行直線〇", "先行のコツ〇", "地固め", "スリップストリーム", "お先に失礼っ！",
                     "鍔迫り合い", "意気衝天",])
            ),
            new RaceResultObj(4, 11, 2, 4, 1, 6501, ["UE4", 31226], "先行", "絶不調", 0, [], 0, "ハナ", 0, [],
                new RaceResultStatusObj({"Speed":1533,"Stamina":740,"Power":1379,"Guts":1382,"Intelligent":1204}, {"Feald":"A","Length":"S","Strategy":"A",},
                    ["アゲてアゲてぷちょへんざ！", "アングリングxスキーミング", "つぼみ、ほころぶ時", "根幹距離〇", "弧線のプロフェッサー", "直線巧者", "積極策", "マイル直線〇", "マイルコーナー〇", "マジ爆上げっしょ！",
                    "負けん気", "先行のコツ〇", "地固め", "尻尾上がり", "お先に失礼っ！", "鍔迫り合い", "あやしげな作戦", "とりまやったれ～！", "しとやかな足取り", "自信家", "ハイボルテージ", "序盤巧者"])
            ),
            new RaceResultObj(4, 1, 1, 6, 1, 6501, ["UE4", 31226], "先行", "絶好調", 901, [], 0, "-", 0, [],
                new RaceResultStatusObj({"Speed":1533,"Stamina":740,"Power":1379,"Guts":1382,"Intelligent":1204}, {"Feald":"A","Length":"S","Strategy":"A",},
                    ["アゲてアゲてぷちょへんざ！", "アングリングxスキーミング", "つぼみ、ほころぶ時", "根幹距離〇", "弧線のプロフェッサー", "直線巧者", "積極策", "マイル直線〇", "マイルコーナー〇", "マジ爆上げっしょ！",
                    "負けん気", "先行のコツ〇", "地固め", "尻尾上がり", "お先に失礼っ！", "鍔迫り合い", "あやしげな作戦", "とりまやったれ～！", "しとやかな足取り", "自信家", "ハイボルテージ", "序盤巧者"])
            ),
            new RaceResultObj(2, 3, 12, 11, 10, 6501, ["-", 0], "", "", 924, [3,3,4], 0, "3/4", 11),
            new RaceResultObj(2, 2, 6, 8, 6, 6501, ["-", 0], "", "", 927, [3,3,2], 0, "5/4", 11),
            new RaceResultObj(1, 1, 8, 18, 5, 6501, ["-", 0], "", "", 1316, [10,11,10,8], 0, 11)
        ]
    },
    {
        "ID":9,
        "Name": ["黒郷雨", "Kurosatou"],
        "result":[
            new RaceResultObj(3, 6, 16, 2, 18, "ライスシャワー", ["-", 0], "", "", 0, [], 0, "9", 0),
        ]
    },
    {
        "ID":10,
        "Name": ["おマチ", "Omachi"],
        "result":[
            new RaceResultObj(6, 1, 1, 6, 2, "ジェンティルドンナ", ["UD", 34904], "先行", "絶好調", 1484, [], 0),
            new RaceResultObj(4, 18, 1, 7, 1, 5802, ["UE", 29024], "先行", "-", 1927, [], 0, "-", 0,
                new RaceResultStatusObj(
                    {"Speed":1632,"Stamina":1201,"Power":1110,"Guts":913,"Intelligent":1225},
                    {"Feald":"A","Length":"S","Strategy":"A"},
                    ["Spooky-Scary-Happy", "勝ち鬨ワッショイ！", "弧線のプロフェッサー", "魂の導き手", "直線巧者", "直線回復", "ペースアップ", "末脚", "深呼吸",
                    "内弁慶", "長距離コーナー〇", "先行のコツ〇", "お先に失礼っ！", "心に灯す闘志", "アンストッパブル", "怪物", "込み上げる熱", "最高峰の夢"],
                )
            ),
            new RaceResultObj(4, 12, 1, 7, 2, 5802, ["UE1", 29645], "先行", "絶好調", 1299, [], 0, "-", 0,
                new RaceResultStatusObj(
                    {"Speed":1534,"Stamina":1133,"Power":1211,"Guts":913,"Intelligent":1304},
                    {"Feald":"A","Length":"S","Strategy":"A"},
                    ["Spooky-Scary-Happy", "根幹距離〇", "コーナー巧者〇", "魂の導き手", "直線巧者", "アガッてきた！", "垂れウマ回避", "テンポアップ", "中距離直線〇",
                    "中距離コーナー〇", "先行直線〇", "先行コーナー", "先行のコツ〇", "お先に失礼っ！", "ありったけ", "心に灯す闘志", "闘争心", "気迫を込めて", "下り坂巧者",
                    "攻めの姿勢", "しとやかな足取り", "王手", "勝利に向かって", "最高峰の夢"],
                )
            ),
            new RaceResultObj(4, 3, 2, 2, 1, "メイショウドトウ(2)", ["UE", 29024], "先行", "不調", 0, [], 0, "5/2", 0,
                new RaceResultStatusObj(
                    {"Speed":1632,"Stamina":1201,"Power":1110,"Guts":913,"Intelligent":1225},
                    {"Feald":"A","Length":"S","Strategy":"A"},
                    ["Spooky-Scary-Happy", "勝ち鬨ワッショイ！", "弧線のプロフェッサー", "魂の導き手", "直線巧者", "直線回復", "ペースアップ", "末脚", "深呼吸",
                    "内弁慶", "長距離コーナー〇", "先行のコツ〇", "お先に失礼っ！", "心に灯す闘志", "アンストッパブル", "怪物", "込み上げる熱", "最高峰の夢"],
                )
            ),
            new RaceResultObj(3, 4, 5, 7, 0, "メイショウドトウ", ["-", 0], "", "", 0, [], 0, "5/2", 0)
        ]
    },
    {
        "ID":11,
        "Name": ["とあ", "Toa"],
        "result":[
            new RaceResultObj(7, 3, 2, 4, 2, 7402, ["UC7", 45402], "差し", "絶好調", 0, [], 0, "7/4", 0),
            new RaceResultObj(7, 2, 2, 7, 2, 7402, ["UC7", 45402], "差し", "絶好調", 0, [], 0, "3/2", 0),
            new RaceResultObj(7, 1, 2, 4, 3, 7402, ["UC7", 45402], "差し", "絶好調", 0, [], 0, "1/2", 0),
            new RaceResultObj(5, 1, 3, 2, 3, "コパノリッキー", ["UD", 34598], "差し", "", 0, [], 0, "ハナ", 0),
            new RaceResultObj(4, 7, 2, 3, 2, "メジロラモーヌ", ["UE2", 30273], "先行", "絶不調", 0, [], 0, "5", ["", ""],
                new RaceResultStatusObj(
                    {"Speed":1614, "Stamina":737, "Power":1263, "Guts":1245, "Intelligent":1275},
                    {"Feald":"S", "Length":"S", "Strategy":"A"},
                    ["愛と煌めけよただ溶けよ", "聖夜のミラクルラン！", "あっぱれ大盤振る舞い！", "良バ場〇", "コーナー回復〇", "直線回復", "垂れウマ回避", "中距離コーナー〇",
                    "先行直線〇", "先行コーナー〇", "スリーセブン", "尻尾上がり", "鍔迫り合い", "アンストッパブル", "高嶺の艶笑", "王手", "純愛", "かっとばせ！", "最高峰の夢"],
                )
            ),
            new RaceResultObj(3, 2, 1, 2, 1, "コパノリッキー", ["-", 0], "", "", 1209, [], 0, "-", 0),
            new RaceResultObj(2, 3, 14, 15, 8, "コパノリッキー", ["-", 0], "", "", 929, [9,12,14], 0, "5/2", 16),
            new RaceResultObj(2, 2, 4, 16, 5, "コパノリッキー", ["-", 0], "", "", 925, [5,5,4], 0, 9),
            new RaceResultObj(1, 1, 17, 8, 7, "コパノリッキー", ["-", 0], "", "", 1332, [3,3,2,4], 0, 27)
        ]
    },
    {
        "ID":12,
        "Name": ["なんこつ", "Nankotsu"],
        "result":[
            new RaceResultObj(7, 3, 13, 12, 11, 3201, ["UD5", 37808], "先行", "絶好調", 0, [], 0, "5", 0),
            new RaceResultObj(7, 2, 12, 14, 11, 3201, ["UD5", 37808], "先行", "絶好調", 0, [], 0, "6", 0),
            new RaceResultObj(7, 1, 13, 5, 12, 3201, ["UD5", 37808], "先行", "絶好調", 0, [], 0, "7/2", 0),
            new RaceResultObj(6, 1, 8, 8, 6, 11801, ["UE5", 31667], "追込", "絶好調", 0, [], 0, "1/2", 0, ["ヒシミラクル", "メジロドーベル"]),
            new RaceResultObj(5, 2, 4, 1, 5, 3201, ["UE4", 31420], "先行", "", 0, [], 0, "1/2", 0),
            new RaceResultObj(4, 13, 2, 9, 8, 1902, ["UG9", 23596], "差し", "普通", 0, [], 0, "3", 0, ["", ""],
                new RaceResultStatusObj(
                    {"Speed":1522, "Stamina":646, "Power":1175, "Guts":933, "Intelligent":1113},
                    {"Feald":"A", "Length":"S", "Strategy":"A"},
                    ["萌到譲我活過來了(4)", "彼方、その先へ...", "左回り〇", "弧線のプロフェッサー", "直線巧者", "ペースアップ", "末脚", "差し切り体制", "上昇気流", "マイル直線〇", "マイルコーナー〇",
                     "アクセラレーション", "負けん気", "差しコーナー〇", "ウマ好み", "お先に失礼っ！", "優位形成", "陽の加護", "最高峰の夢"]
                )
            ),
            new RaceResultObj(3, 6, 15, 4, 16, 3201, ["-", 0], "", "", 0, [], 0, "1", 0),
            new RaceResultObj(2, 3, 15, 12, 16, 3201, ["-", 0], "", "", 929, [6,9,12], 0, "ハナ", 16),
            new RaceResultObj(2, 1, 8, 6, 10, 3201, ["-", 0], "", "", 917, [8,7,7], 0, "3/2", 15),
            new RaceResultObj(1, 1, 11, 2, 12, 3201, ["-", 0], "", "", 1322, [11,10,9,11], 0, 17)
        ]
    },
    {
        "ID":13,
        "Name": ["ミカ", "Mika"],
        "result":[
            new RaceResultObj(7, 3, 10, 10, 7, 7701, ["UD8", 39741], "先行", "絶好調", 0, [], 0, "5/4", 0),
            new RaceResultObj(7, 2, 6, 1, 8, 7701, ["UD8", 39741], "先行", "絶好調", 0, [], 0, "ハナ", 0),
            new RaceResultObj(7, 1, 11, 3, 8, 7701, ["UD8", 39741], "先行", "絶好調", 0, [], 0, "7/2", 0),
            new RaceResultObj(4, 8, 2, 2, 7, "キングヘイロー(2)", ["UG6", 22286], "差し", "好調", 0, [], 0, "7/4", 0, ["", ""],
                new RaceResultStatusObj(
                    {"Speed":1492, "Stamina":676, "Power":1220, "Guts":1132, "Intelligent":727},
                    {"Feald":"A", "Length":"S", "Strategy":"A"},
                    ["轟！トレセン応援団！！(6)", "垂れウマ回避", "竜の雲を得る如し", "食い下がり", "ライトニングステップ", "差し直線〇", "差しコーナー〇",
                    "努力家", "百万バリキ", "読解力", "鋭い眼光", "差しのコツ〇", "ワンチャンス", "フルスロットル", "ネバーギブアップ"]
                )
            ),
            new RaceResultObj(3, 1, 5, 11, 5, "キングヘイロー", ["-", 0], "", "", 0, [], 0, "1/2", 0),
            new RaceResultObj(2, 2, 12, 3, 12, "キングヘイロー", ["-", 0], "", "", 936, [10,14,15], 0, "1/2", 20),
            new RaceResultObj(1, 1, 15, 14, 15, "キングヘイロー", ["-", 0], "", "", 1325, [5,5,7,5], 0, 20)
        ]
    },
    {
        "ID":14,
        "Name": ["閻魔", "Enma"],
        "result":[
            new RaceResultObj(6, 1, 6, 10, 7, "スイープトウショウ", ["UE8", 33311], "追込", "絶好調", 0, [], 0, "7/2"),
            new RaceResultObj(
                4, 2, 2, 7, 2, "タニノギムレット", ["UF1", 24648], "追込", "不調", 0, [], 0, "3", 0, [],
                new RaceResultStatusObj(
                    {"Speed":1518,"Stamina":1127,"Power":1273,"Guts":909,"Intelligent":823},
                    {"Feald":"A","Length":"S","Strategy":"A"},
                    ["霹靂のアウフヘーベン", "レッツ・アナボリック！", "彼方、その先へ…", "直線巧者", "直線回復", "アガってきた！", "ノンストップガール", "嵐を呼ぶ破壊神",
                    "中距離コーナー〇", "スリーセブン","スリップストリーム", "お先に失礼っ！", "酔い痴れよ、世界", "ネバーギブアップ", "思いを背負って"]
                )
            ),
            new RaceResultObj(3, 5, 4, 2, 6, "タニノギムレット", ["-", 0], "", "", 0, [], 0, "アタマ", 0),
            new RaceResultObj(2, 3, 4, 1, 15, "タニノギムレット", ["-", 0], "", "", 918, [16,16,13], 0, "1/2", 5),
            new RaceResultObj(2, 2, 7, 2, 9, "タニノギムレット", ["-", 0], "", "", 928, [16,15,14], 0, "3/4", 12),
            new RaceResultObj(1, 1, 4, 7, 16, "タニノギムレット", ["-", 0], "", "", 1312, [14,14,14,15], 0, "アタマ", 7)
        ]
    },
    {
        "ID":15,
        "Name": ["そらお", "Sorao"],
        "result":[
            new RaceResultObj(7, 3, 5, 3, 10, 10201, ["UC", 41245], "差し", "絶好調", 0, [], 0, "5/4", 0),
            new RaceResultObj(7, 2, 9, 15, 12, 10201, ["UC", 41245], "差し", "絶好調", 0, [], 0, "1/2", 0),
            new RaceResultObj(7, 1, 7, 1, 11, 10201, ["UC", 41245], "差し", "絶好調", 0, [], 0, "1/2", 0),
            new RaceResultObj(6, 1, 2, 4, 4, "ゼンノロブロイ(2)", ["UE9", 34009], "先行", "絶好調", 0, [], 0, "1"),
            new RaceResultObj(4, 9, 1, 8, 1, "ゼンノロブロイ(1)", ["UF9", 28662], "先行", "普通", 1923, [], 0, "-", 0, ["", ""],
                new RaceResultStatusObj(
                    {"Speed":1516, "Stamina":1206, "Power":1258, "Guts":876, "Intelligent":1223},
                    {"Feald":"S", "Length":"S", "Strategy":"A"},
                    ["掲げよ、己が魂の剣を！(5)", "恵福バルカローレ", "右回り〇", "根幹距離〇", "弧線のプロフェッサー", "コーナー回復〇", "ハヤテ一文字", "垂れウマ回避",
                    "英雄への道標", "内弁慶", "光り輝く剣", "長距離直線〇", "長距離コーナー〇", "先行コーナー〇", "アンストッパブル", "怪物", "ネバーギブアップ", "最高峰の夢"]
                )
            ),
            new RaceResultObj(3, 2, 5, 5, 4, "ワンダーアキュート", ["-", 0], "", "", 0, [], 0, "", 0),
            new RaceResultObj(2, 3, 8, 2, 9, "ワンダーアキュート", ["-", 0], "", "", 920, [10,8,7], 0, "1/2", 7),
            new RaceResultObj(2, 1, 7, 2, 3, "ワンダーアキュート", ["-", 0], "", "", 915, [11,9,9], 0, "5/4", 13),
            new RaceResultObj(1, 1, 9, 13, 8, "ワンダーアキュート", ["-", 0], "", "", 1319, [12,12,13,13], 0, 14)
        ]
    },
    {
        "ID":16,
        "Name": ["ノーデ", "Node"],
        "result":[
            new RaceResultObj(6, 1, 3, 12, 8, "ドリームジャーニー", ["UD", 34745], "追込", "絶好調", 0, [], 0, "3/4"),
            new RaceResultObj(4, 3, 1, 3, 2, "ナリタタイシン", ["UE", 29053], "追込", "好調", 1477, [], 0, "-", 0,
                new RaceResultStatusObj(
                    {"Speed":1645,"Stamina":1224,"Power":1273,"Guts":1014,"Intelligent":960},
                    {"Feald":"A","Length":"S","Strategy":"A"},
                    ["Nemesis", "レッツアナボリック！", "あっぱれ大盤振る舞い！", "コーナー巧者〇", "コーナー回復〇", "直線巧者", "アガってきた！", "末脚", "鬼気森然",
                    "駆り立てる想い", "長距離コーナー◎", "追込直線〇", "ウマ好み", "一匹狼", "ロックオン", "昂る鼓動", "ネバーギブアップ", "最高峰の夢"],
                )
            ),
            new RaceResultObj(2, 3, 10, 6, 13, "ナリタタイシン", ["-", 0], "", "", 922, [12,13,11], 0, "1", 9),
            new RaceResultObj(2, 2, 5, 1, 7, "ナリタタイシン", ["-", 0], "", "", 925, [14,13,9], 0, "アタマ", 9),
            new RaceResultObj(1, 1, 6, 11, 10, "ナリタタイシン", ["-", 0], "", "", 1312, [13,13,12,6], 0, "アタマ", 7)
        ]
    },
    {
        "ID":17,
        "Name": ["うしうし", "Ushiushi"],
        "result":[
            new RaceResultObj(7, 3, 4, 14, 4, 8301, ["UC5", 44536], "差し", "絶好調", 0, [], 0, "1/2", 0),
            new RaceResultObj(7, 2, 5, 3, 4, 8301, ["UC5", 44536], "差し", "絶好調", 0, [], 0, "1", 0),
            new RaceResultObj(7, 1, 8, 8, 4, 8301, ["UC5", 44536], "差し", "絶好調", 0, [], 0, "クビ", 0),
            new RaceResultObj(4, 5, 1, 2, 2, "ファインモーション", ["UE2", 30284], "先行", "好調", 1484, [], 0, "-", 0, ["", ""],
                new RaceResultStatusObj(
                    {"Speed":1584, "Stamina":1232, "Power":1234, "Guts":926, "Intelligent":1248},
                    {"Feald":"A", "Length":"S", "Strategy":"A"},
                    ["Fairy tale", "右回り〇", "コーナー回復〇", "直線巧者", "好転一息", "ロイヤルスター", "深呼吸", "長距離直線〇",　"長距離コーナー〇", "先行直線〇", "先行コーナー〇",
                    "先行のコツ〇", "尻尾上がり", "スリップストリーム", "お先に失礼っ！", "影打", "アンストッパブル", "怪物", "ネバーギブアップ", "中盤巧者", "最高峰の夢"],
                )
            ),
            new RaceResultObj(3, 4, 3, 5, 0, "ファインモーション", ["-", 0], "", "", 0, [], 0, "1/2", 0),
            new RaceResultObj(2, 2, 9, 5, 1, "ファインモーション", ["-", 0], "", "", 932, [9,10,10], 0, "7/4", 16),
            new RaceResultObj(1, 1, 12, 12, 13, "ファインモーション", ["-", 0], "", "", 1322, [3,9,11,10], 0, 17)
        ]
    },
    {
        "ID":18,
        "Name": ["セーレン", "Seren"],
        "result":[
            new RaceResultObj(3, 5, 3, 9, 0, "ネオユニヴァース", ["-", 0], "", "", 0, [], 0, "3/4", 0)
        ]
    },
    {
        "ID":19,
        "Name": ["takkun", "takkun"],
        "result":[
            new RaceResultObj(7, 3, 6, 8, 5, 103, ["UC6", 44993], "差し", "絶好調", 0, [], 0, "1/2", 0),
            new RaceResultObj(7, 2, 7, 13, 5, 103, ["UC6", 44993], "差し", "絶好調", 0, [], 0, "5/4", 0),
            new RaceResultObj(7, 1, 10, 12, 6, 103, ["UC6", 44993], "差し", "絶好調", 0, [], 0, "3/4", 0),
            new RaceResultObj(5, 3, 6, 9, 1, "サイレンススズカ", ["UD8", 33370], "逃げ", "", 0, [], 0, "1/2", 0),
            new RaceResultObj(4, 4, 2, 1, 1, "サイレンススズカ", ["UE3", 30677], "逃げ", "不調", 0, [], 0, "2", 0, ["", ""],
                new RaceResultStatusObj(
                    {"Speed":1601,"Stamina":1231,"Power":1234,"Guts":1125,"Intelligent":1197},
                    {"Feald":"S","Length":"A","Strategy":"S"},
                    ["先頭の景色は譲らない...！", "アングリングxスキーミング", "大逃げ", "弧線のプロフェッサー", "コーナー回復〇", "直線巧者", "最大集中", "末脚", "先駆け", "急ぎ足",
                    "異次元の逃亡者", "スプリントギア", "差しためらい", "善後策", "逃げのコツ〇", "盤石の構え", "お先に失礼っ！", "軽い足取り", "ネバーギブアップ", "急発進",],
                )
            ),
            new RaceResultObj(3, 6, 14, 7, 7, 201, ["-", 0], "", "", 0, [], 0, "6", 0),
            new RaceResultObj(3, 1, 4, 2, 2, 201, ["-", 0], "", "", 0, [], 0, "1", 0),
            new RaceResultObj(2, 3, 13, 14, 2, 201, ["-", 0], "", "", 925, [1,2,6], 0, "1/2", 12),
            new RaceResultObj(2, 2, 1, 14, 3, 201, ["-", 0], "逃げ", "", 916, [1,1,1], 0, "-", 5),
            new RaceResultObj(1, 1, 3, 6, 3, 201, ["-", 0], "", "", 1312, [1,1,1,1], 0, "7/4", 7)
        ]
    },
    {
        "ID":20,
        "Name": ["にふにふ", "Nifunihu"],
        "result":[
            new RaceResultObj(7, 3, 14, 5, 14, 6601, ["UE6", 32162], "逃げ", "絶好調", 0, [], 0, "7", 0),
            new RaceResultObj(7, 2, 14, 6, 14, 6601, ["UE6", 32162], "逃げ", "絶好調", 0, [], 0, "大差", 0),
            new RaceResultObj(7, 1, 14, 11, 14, 6601, ["UE6", 32162], "逃げ", "絶好調", 0, [], 0, "大差", 0),
            new RaceResultObj(4, 6, 2, 6, 1, "ツインターボ", ["UE", 28911], "逃げ", "絶好調", 0, [], 0, "5/2", ["", ""],
                new RaceResultStatusObj(
                    {"Speed":1637, "Stamina":1090, "Power":1242, "Guts":955, "Intelligent":1180},
                    {"Feald":"A", "Length":"A", "Strategy":"A"},
                    ["エンジン全開！大噴射！", "アングリングxスキーミング", "大逃げ", "弧線のプロフェッサー", "直線巧者", "集中力", "ポジションセンス", "ターボについてこーい！", "急ぎ足", "ギアシフト",
                    "逃げ直線〇", "逃げコーナー〇", "先頭プライド", "勢い任せ", "逃げのコツ〇", "スリーセブン", "出力1000万％！！", "ネバーギブアップ", "アオハル点火・賢", "最高峰の夢"],
                )
            ),
            new RaceResultObj(3, 6, 9, 8, 14, "ツインターボ", ["-", 0], "", "", 0, [], 0, "3/4", 0),
            new RaceResultObj(2, 3, 7, 3, 11, "ツインターボ", ["-", 0], "", "", 919, [2,1,1], 0, "ハナ", 6),
            new RaceResultObj(2, 2, 8, 10, 8, "ツインターボ", ["-", 0], "", "", 929, [2,2,3], 0, "1/2", 13)
        ]
    },
    {
        "ID":21,
        "Name": ["シャカトレ", "Shakatore"],
        "result":[
            new RaceResultObj(5, 2, 1, 5, 2, "エアシャカール", ["UD", 34627], "追込", "", 1310, [], 0, "-", 0),
            new RaceResultObj(4, 17, 1, 8, 2, 5302, ["UE2", 30135], "差し", "不調", 666, [], 0, "-", 0, ["", ""],
                new RaceResultStatusObj(
                    {"Speed":1620, "Stamina":516, "Power":1320, "Guts":1327, "Intelligent":1211},
                    {"Feald":"A", "Length":"S", "Strategy":"A"},
                    ["奥義・常夏バーニング！！(5)", "レッツ・アナボリック！", "I Never Goof Up！", "右回り〇", "コーナー巧者〇", "直線巧者", "注目の踊り子", "垂れウマ回避", "位置取り押上げ",
                     "熱血進化ライディング", "詰め寄り", "ウマ好み", "お先に失礼っ！", "恐れぬ心", "勇往邁進", "一足跳び", "快速", "ネバーギブアップ", "気骨稜稜"]
                )
            ),
            new RaceResultObj(4, 14, 2, 7, 1, 5302, ["UE2", 30135], "差し", "不調", 0, [], 0, "3", 0, ["", ""],
                new RaceResultStatusObj(
                    {"Speed":1620, "Stamina":516, "Power":1320, "Guts":1327, "Intelligent":1211},
                    {"Feald":"A", "Length":"S", "Strategy":"A"},
                    ["奥義・常夏バーニング！！(5)", "レッツ・アナボリック！", "I Never Goof Up！", "右回り〇", "コーナー巧者〇", "直線巧者", "注目の踊り子", "垂れウマ回避", "位置取り押上げ",
                     "熱血進化ライディング", "詰め寄り", "ウマ好み", "お先に失礼っ！", "恐れぬ心", "勇往邁進", "一足跳び", "快速", "ネバーギブアップ", "気骨稜稜"]
                )
            ),
            new RaceResultObj(4, 8, 1, 3, 1, 5302, ["UE2", 30068], "差し", "普通", 915, [], 0, "-", 0, ["", ""],
                new RaceResultStatusObj(
                    {"Speed":1608, "Stamina":707, "Power":1359, "Guts":1293, "Intelligent":1227},
                    {"Feald":"A", "Length":"S", "Strategy":"A"},
                    ["奥義・常夏バーニング！！(5)", "ヴィクトリーショット！", "レッツ・アナボリック！", "つぼみ、ほころぶ時", "良バ場〇", "弧線のプロフェッサー", "直線巧者", "アガってきた！",
                    "熱血進化ライディング", "外差し準備", "マイル直線〇", "マイルコーナー〇", "ギアシフト", "差し直線〇", "尻尾上がり", "優位形成", "ハイボルテージ", "ネバーギブアップ"]
                )
            ),
            new RaceResultObj(3, 3, 1, 11, 0, "エアシャカール", ["-", 0], "", "", 0, [], 0, "-", 0),
            new RaceResultObj(2, 3, 11, 13, 7, "エアシャカール", ["-", 0], "", "", 923, [15,14,16], 0, "1/2", 10),
            new RaceResultObj(2, 1, 2, 5, 5, "エアシャカール", ["-", 0], "", "", 908, [12,11,10], 0, "7/2", 6)
        ]
    },
    {
        "ID":22,
        "Name": ["マサ", "Masa"],
        "result":[
            new RaceResultObj(5, 2, 3, 4, 1, "オグリキャップ", ["UD1", 35216], "追込", "", 0, [], 0, "1/2", 0),
            new RaceResultObj(3, 1, 3, 7, 3, "オグリキャップ", ["-", 0], "", "", 0, [], 0, "3/2", 0)
        ]
    },
    {
        "ID":23,
        "Name": ["ぽよだい", "Poyodai"],
        "result":[
            new RaceResultObj(7, 3, 7, 2, 9, 402, ["UD5", 37717], "逃げ", "絶好調", 0, [], 0, "7/4", 0),
            new RaceResultObj(7, 2, 10, 4, 10, 402, ["UD5", 37717], "逃げ", "絶好調", 0, [], 0, "3/4", 0),
            new RaceResultObj(7, 1, 9, 15, 10, 402, ["UD5", 37717], "逃げ", "絶好調", 0, [], 0, "3/4", 0),
            new RaceResultObj(4, 18, 2, 2, 2, 401, ["UF2", 25060], "逃げ", "不調", 0, [], 0, "大差", 0, ["", ""],
                new RaceResultStatusObj(
                    {"Speed":1472, "Stamina":960, "Power":1066, "Guts":1140, "Intelligent":1132},
                    {"Feald":"A", "Length":"A", "Strategy":"A"},
                    ["紅焔ギア/LP1211-M(6)", "ぶっちぎりロード", "あっぱれ大盤振る舞い！", "弧線のプロフェッサー", "コーナー回復〇", "直線巧者", "好転一息", "集中力", "垂れウマ回避", "先駆け",
                     "別腹タンク", "長距離直線", "長距離コーナー〇", "パス上手", "追い上げ", "先頭プライド", "お先に失礼っ！", "快速", "ネバーギブアップ", "想いを背負って"]
                )
            ),
            new RaceResultObj(4, 13, 1, 4, 1, 401, ["UE2", 30192], "逃げ", "不調", 904, [], 0, "-", 0, ["", ""],
                new RaceResultStatusObj(
                    {"Speed":1598, "Stamina":507, "Power":1271, "Guts":1384, "Intelligent":1234},
                    {"Feald":"A", "Length":"A", "Strategy":"A"},
                    ["紅焔ギア/LP1211-M(6)", "聖夜のミラクルラン！", "Adventure of 564", "弧線のプロフェッサー", "コーナー回復〇", "直線巧者", "集中力", "先駆け", "マイル直線〇",
                     "かっとばすわよ！", "紅蓮のオーバーレブ", "スピードイーター", "逃げ直線〇", "一匹狼", "お先に失礼っ！", "向こう見ず", "自信家", "心弾んで", "ネバーギブアップ", "最高峰の夢"]
                )
            ),
            new RaceResultObj(4, 9, 2, 7, 2, 401, ["UF4", 26197], "逃げ", "普通", 0, [], 0, "大差", 0, ["", ""],
                new RaceResultStatusObj(
                    {"Speed":1600, "Stamina":930, "Power":1037, "Guts":978, "Intelligent":1239},
                    {"Feald":"A", "Length":"A", "Strategy":"A"},
                    ["紅焔ギア/LP1211-M(6)", "ぶっちぎりロード", "あっぱれ大盤振る舞い！", "良バ場〇", "弧線のプロフェッサー", "コーナー回復〇", "直線巧者", "好転一息", "集中力",
                    "ポジションセンス", "先駆け", "目くらまし", "先頭プライド", "お先に失礼っ！", "脇目も振らず", "バイブル上昇", "ネバーギブアップ", "迷いなし", "最高峰の夢"]
                )
            ),
            new RaceResultObj(3, 6, 10, 18, 12, "トーセンジョーダン", ["-", 0], "", "", 0, [], 0, "3/2", 0),
            new RaceResultObj(2, 3, 6, 9, 12, 401, ["-", 0], "", "", 919, [5,6,3], 0, "1/2", 6),
            new RaceResultObj(2, 1, 5, 9, 4, 401, ["-", 0], "", "", 912, [2,3,3], 0, "3/2", 10)
        ]
    },
    {
        "ID":24,
        "Name": ["春はあげぽよ", "Haruhaagepoyo"],
        "result":[
            new RaceResultObj(2, 1, 11, 3, 8, "ファインモーション", ["-", 0], "", "", 920, [10,12,12], 0, "1/2", 18),
            new RaceResultObj(1, 1, 13, 4, 17, "アグネスデジタル", ["-", 0], "", "", 1323, [17,17,18,18], 0, 18)
        ]
    },
    {
        "ID":25,
        "Name": ["テミ", "Temi"],
        "result":[]
    },
    {
        "ID":26,
        "Name": ["ヤス", "Yasu"],
        "result":[]
    },
    {
        "ID":27,
        "Name": ["きりゆたんぽ", "Kiriyutanpo"],
        "result":[
            new RaceResultObj(6, 1, 5, 7, 3, 7601, ["UD5", 38085], "差し", "絶好調", 0, [], 0, "ハナ"),
            new RaceResultObj(4, 16, 1, 3, 2, 3202, ["UE3", 30940], "先行", "絶好調", 1167, [], 0, "-", ["", ""],
                new RaceResultStatusObj(
                    {"Speed":1615, "Stamina":1107, "Power":1358, "Guts":796, "Intelligent":1277},
                    {"Feald":"A", "Length":"S", "Strategy":"A"},
                    ["夏空ハレーション", "あっぱれ大盤振る舞い！", "秋ウマ娘〇", "垂れウマ回避", "テンポアップ", "中距離直線〇", "中距離コーナー〇", "先行コーナー〇", "決意の直滑降", "スリーセブン",
                     "尻尾上がり", "お先に失礼っ！", "ありったけ", "鍔迫り合い", "眩耀のルクシオン", "イグニッション", "ラプラスの悪魔", "ネバーギブアップ", "品行方正", "勝利に向かって", "最高峰の夢"],
                )
            ),
            new RaceResultObj(4, 15, 1, 8, 1, 3202, ["UE4", 31184], "先行", "普通", 1422, [], 0, "-", ["", ""],
                new RaceResultStatusObj(
                    {"Speed":1562, "Stamina":1233, "Power":1209, "Guts":1062, "Intelligent":1233},
                    {"Feald":"S", "Length":"S", "Strategy":"A"},
                    ["夏空ハレーション", "紅焔ギア/LP1211-M", "あっぱれ大盤振る舞い！", "根幹距離〇", "ハヤテ一文字", "垂れウマ回避", "末脚", "テンポアップ", "食い下がり", "地固め", "尻尾上がり",
                    "スリップストリーム", "お先に失礼っ！", "ありったけ", "真っ向勝負", "眩耀のルクシオン", "イグニッション", "自信家", "ラプラスの悪魔", "王手", "ネバーギブアップ", "かっとばせ！", "最高峰の夢"],
                )
            ),
            new RaceResultObj(4, 7, 1, 9, 1, 3202, ["UE4", 31184], "先行", "好調", 1174, [], 0, "-", ["", ""],
                new RaceResultStatusObj(
                    {"Speed":1562, "Stamina":1233, "Power":1209, "Guts":1062, "Intelligent":1233},
                    {"Feald":"S", "Length":"S", "Strategy":"A"},
                    ["夏空ハレーション", "紅焔ギア/LP1211-M", "あっぱれ大盤振る舞い！", "根幹距離〇", "ハヤテ一文字", "垂れウマ回避", "末脚", "テンポアップ", "食い下がり", "地固め", "尻尾上がり",
                    "スリップストリーム", "お先に失礼っ！", "ありったけ", "真っ向勝負", "眩耀のルクシオン", "イグニッション", "自信家", "ラプラスの悪魔", "王手", "ネバーギブアップ", "かっとばせ！", "最高峰の夢"],
                )
            ),
            new RaceResultObj(3, 6, 3, 14, 6, 3202, ["-", 0], "", "", 0, [], 0, "ハナ", 0),
            new RaceResultObj(1, 1, 2, 17, 9, 3202, ["-", 0], "", "", 1309, [9,7,6,2], 0, "3/2", 4)
        ]
    },
    {
        "ID":28,
        "Name": ["108", "108"],
        "result":[
            new RaceResultObj(4, 14, 1, 6, 2, 6102, ["UE7", 32817], "差し", "不調", 672, [], 0, "-", 0, ["", ""],
                new RaceResultStatusObj(
                    {"Speed":1708, "Stamina":522, "Power":1349, "Guts":1494, "Intelligent":889},
                    {"Feald":"A", "Length":"S", "Strategy":"A"},
                    ["轟！トレセン応援団(5)", "つぼみ、ほころぶ時", "熱血！！風紀アタック", "春風吹きて、桜舞う", "コーナー巧者〇", "コーナー回復〇", "直線巧者", "アガってきた！", "迅速果断", "差し切り体制",
                     "竜の雲を得る如し", "スプリントギア", "詰め寄り", "短距離コーナー〇", "仕掛け準備", "差し直線〇", "スリップストリーム", "勇往邁進", "一足跳び", "溢れる情熱", "進出開始", "ネバーギブアップ",
                     "ひたむき前進", "最高峰の夢"]
                )
            ),
            new RaceResultObj(3, 2, 4, 6, 3, 5201, ["-", 0], "", "", 0, [], 0, "", 0),
            new RaceResultObj(2, 1, 9, 15, 7, 5201, ["-", 0], "", "", 918, [16,16,15], 0, "3/4", 16),
        ]
    },
    {
        "ID":29,
        "Name": ["イツキ", "Itsuki"],
        "result":[]
    },
    {
        "ID":30,
        "Name": ["ヒナ", "Hina"],
        "result":[]
    },
    {
        "ID":31,
        "Name": ["オにーさマン", "BroMan"],
        "result":[]
    },
    {
        "ID":32,
        "Name": ["うーましぶ", "Umashib"],
        "result":[
            new RaceResultObj(7, 3, 11, 15, 13, 5602, ["UC", 40793], "差し", "絶好調", 1485, [], 0, "4"),
            new RaceResultObj(7, 2, 4, 11, 6, 5602, ["UC", 40850], "差し", "絶好調", 1485, [], 0, "1"),
            new RaceResultObj(7, 1, 1, 13, 5, 5602, ["UC3", 42976], "差し", "絶好調", 1485, [], 0, "-"),
        ]
    },
];

const Rinrin_Members = [
    {
        "ID":1,
        "Name": ["鈴八", "Rinpatch"],
        "TrainerID":0, 
        "result": [
            new RaceResultObj(5, 3, 5, 3, 5, "ヒシアケボノ", ["UE8", 33288], "先行", "", 0, [], 0, "5", 0),
            new RaceResultObj(3, 6, 13, 12, 15, "ゴールドシップ", ["-", 0], "", "", 0, [], 0, "5", 0)
        ]
    },
    {
        "ID":2,
        "Name": ["不純ブンガク", "Fujunbungaku"],
        "TrainerID":0, 
        "result": [
            new RaceResultObj(3, 1, 2, 6, 12, "ニシノフラワー", ["-", 0], "", "", 0, [], 0, "1/2", 0)
        ]
    },
    {
        "ID":3,
        "Name": ["れおん", "Leon"],
        "TrainerID":0,
        "result": [
            new RaceResultObj(5, 2, 5, 8, 6, "オグリキャップ", ["UE5", 31931], "追込", "", 0, [], 0, "3", 0),
            new RaceResultObj(3, 6, 6, 6, 11, "ミスターシービー", ["-", 0], "", "", 0, [], 0, "1/2", 0),
            new RaceResultObj(3, 1, 6, 9, 7, "アストンマーチャン", ["-", 0], "", "", 0, [], 0, "7/2", 0),
        ]
    },
    {
        "ID":4,
        "Name": ["蒼龍", "Souryu"],
        "TrainerID":0, 
        "result": [
            new RaceResultObj(3, 1, 1, 12, 1, "カレンチャン", ["-", 0], "", "", 679, [], 0, "-", 0)
        ]
    },
    {
        "ID":5,
        "Name": ["あすく", "Asuku"],
        "TrainerID":0,
        "result": [
            new RaceResultObj(5, 1, 5, 7, 4, "コパノリッキー", ["UE9", 39896], "先行", "", 0, [], 0, "2", 0),
            new RaceResultObj(3, 2, 3, 9, 2, "コパノリッキー", ["-", 0], "", "", 0, [], 0, "", 0)
        ]
    },
    {
        "ID":6,
        "Name": ["からす", "Karasu"],
        "TrainerID":0,
        "result": [
            new RaceResultObj(3, 6, 17, 10, 5, 201, ["-", 0], "", "", 0, [], 0, "6", 0),
            new RaceResultObj(3, 2, 6, 10, 5, 201, ["-", 0], "", "", 0, [], 0, "", 0)
        ]
    },
    {
        "ID":7,
        "Name": ["はご", "Hago"],
        "TrainerID":0,
        "result": [
            new RaceResultObj(5, 1, 4, 9, 2, "トランセンド", ["UD1", 35172], "逃げ", "", 0, [], 0, "アタマ", 0),
            new RaceResultObj(3, 2, 2, 12, 6, "シンコウウィンディ", ["-", 0], "", "", 0, [], 0, "", 0)
        ]
    },
    {
        "ID":8,
        "Name": ["みざくら", "Mizakura"],
        "TrainerID":0,
        "result": [
            new RaceResultObj(5, 3, 2, 5, 6, "バンブーメモリー", ["UD8", 33733], "差し", "", 0, [], 0, "1/2", 0),
            new RaceResultObj(3, 3, 6, 2, 0, "アグネスタキオン", ["-", 0], "", "", 0, [], 0, "6", 0)
        ]
    },
    {
        "ID":9,
        "Name": ["ナタデココ", "Natadecoco"],
        "TrainerID":0,
        "result": [
            new RaceResultObj(3, 3, 4, 3, 0, "メジロマックイーン", ["-", 0], "", "", 0, [], 0, "5", 0)
        ]
    },
    {
        "ID":10,
        "Name": ["ディシュパー", "Disyupa"],
        "TrainerID":0,
        "result": [
            new RaceResultObj(3, 3, 5, 8, 0, "マチカネフクキタル", ["-", 0], "", "", 0, [], 0, "5", 0)
        ]
    },
    {
        "ID":11,
        "Name": ["あたし", "Atashi"],
        "TrainerID":0,
        "result": [
            new RaceResultObj(3, 4, 2, 4, 0, "タイキシャトル", ["-", 0], "", "", 0, [], 0, "1", 0),
        ]
    },
    {
        "ID":12,
        "Name": ["時津風", "Tokitsukaze"],
        "TrainerID":0,
        "result": [
            new RaceResultObj(3, 4, 4, 9, 3, 201, ["-", 0], "", "", 0, [], 0, "2", 0)
        ]
    },
    {
        "ID":13,
        "Name": ["八雲", "Yakumo"],
        "TrainerID":0,
        "result": [
            new RaceResultObj(5, 3, 3, 2, 4, "アストンマーチャン", ["UE6", 32263], "逃げ", "", 0, [], 0, "アタマ", 0),
            new RaceResultObj(3, 4, 6, 10, 5, "エアシャカール", ["-", 0], "", "", 0, [], 0, "5/4", 0)
        ]
    },
    {
        "ID":14,
        "Name": ["オムレツ", "Omuret"],
        "TrainerID":0,
        "result": [
            new RaceResultObj(3, 6, 11, 3, 1, "トウカイテイオー", ["-", 0], "", "", 0, [], 0, "1", 0),
            new RaceResultObj(3, 5, 6, 4, 0, "トウカイテイオー", ["-", 0], "", "", 0, [], 0, "5", 0)
        ]
    },
    {
        "ID":15,
        "Name": ["ボンレス兄貴", "BonressBro"],
        "TrainerID":0,
        "result": [
            new RaceResultObj(5, 1, 6, 8, 6, "ハルウララ", ["UE6", 32549], "差し", "", 0, [], 0, "クビ", 0),
            new RaceResultObj(3, 5, 5, 5, 0, "トウカイテイオー", ["-", 0], "", "", 0, [], 0, "4", 0)
        ]
    },
    {
        "ID":16,
        "Name": ["セシル", "Seshiru"],
        "TrainerID":0,
        "result": [
            new RaceResultObj(5, 2, 2, 7, 4, "ネオユニヴァース", ["UE9", 34160], "差し", "", 0, [], 0, "3/2", 0),
            new RaceResultObj(3, 5, 2, 6, 2, "ゴールドシップ", ["-", 0], "", "", 0, [], 0, "3/4", 0)
        ]
    },
    {
        "ID":17,
        "Name": ["でんげん", "Dengen"],
        "TrainerID":0,
        "result": [
            new RaceResultObj(5, 2, 6, 2, 3, 3201, ["UD1", 35167], "差し", "", 0, [], 0, "2", 0),
            new RaceResultObj(3, 6, 12, 5, 4, "ヒシミラクル", ["-", 0], "", "", 0, [], 0, "ハナ", 0)
        ]
    },
    {
        "ID":18,
        "Name": ["さめはだ", "Samehada"],
        "TrainerID":0,
        "result": [
            new RaceResultObj(3, 6, 7, 9, 9, "マチカネフクキタル", ["-", 0], "", "", 0, [], 0, "アタマ", 0)
        ]
    },
    {
        "ID":19,
        "Name": ["たきざあ", "Takiza"],
        "TrainerID":0,
        "result": [
            new RaceResultObj(3, 6, 2, 15, 3, "カツラギエース", ["-", 0], "", "", 0, [], 0, "1/2", 0)
        ]
    },
    {
        "ID":20,
        "Name": ["チョラン", "Tyoran"],
        "TrainerID":0,
        "result": [
            new RaceResultObj(3, 6, 8, 17, 10, "フジキセキ", ["-", 0], "", "", 0, [], 0, "7/2", 0)
        ]
    },
    {
        "ID":21,
        "Name": ["まるまる", "Marumaru"],
        "TrainerID":0,
        "result": [
            // new RaceResultObj(3, 6, 8, 17, 10, "フジキセキ", ["-", 0], "", "", 0, [], 0, "7/2", 0)
        ]
    },
    {
        "ID":22,
        "Name": ["ごろー", "Goro"],
        "TrainerID":0,
        "result": [
            // new RaceResultObj(3, 6, 8, 17, 10, "フジキセキ", ["-", 0], "", "", 0, [], 0, "7/2", 0)
        ]
    },
]

const CPU_Members = [
    {
        "ID":1,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(2, 1, 12, 1, 13, "アジサイゲッコウ", ["-", 0], "", "", 921, [3,4,5], 0, "3/4", 0),
        ]
    },
    {
        "ID":2,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(2, 1, 15, 7, 15, "タイドアンドフロウ", ["-", 0], "", "", 923, [4,8,8], 0, "クビ", 0),
        ]
    },
    {
        "ID":3,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(2, 1, 16, 10, 16, "リーフリーフ", ["-", 0], "", "", 928, [13,15,16], 0, "3", 0),
        ]
    },
    {
        "ID":4,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 9, 3, 2, 4, "ワイスマネージャー", ["A+", 0], "追込", "不調", 0, [], 0, "3", 0),
            new RaceResultObj(4, 1, 5, 3, 7, "ワイスマネージャー", ["A+", 0], "逃げ", "絶不調", 0, [], 0, "3/4", 0),
            new RaceResultObj(2, 1, 10, 12, 12, "ワイスマネージャー", ["-", 0], "", "", 919, [14,13,14], 0, "3/4", 0)
        ]
    },
    {
        "ID":5,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(2, 1, 13, 13, 14, "パラディンソード", ["-", 0], "", "", 923, [5,6,6], 0, "5/4", 0),
        ]
    },
    {
        "ID":6,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(2, 1, 14, 16, 11, "オーボエリズム", ["-", 0], "", "", 923, [9,10,11], 0, "アタマ", 0),
        ]
    },
    {
        "ID":7,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(2, 2, 15, 4, 14, "オレンジシュシュ", ["-", 0], "", "", 937, [7,8,11], 0, "アタマ", 0)
        ]
    },
    {
        "ID":8,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 1, 9, 2, 8, "インペリアルタリス", ["A+", 0], "追込", "不調", 0, [], 0, "", 0),
            new RaceResultObj(2, 2, 10, 6, 15, "インペリアルタリス", ["-", 0], "", "", 932, [12,11,13], 0, "3/2", 0)
        ]
    },
    {
        "ID":9,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(2, 2, 14, 9, 10, "プディングパルフェ", ["-", 0], "", "", 937, [15,16,16], 0, "1/2", 0)
        ]
    },
    {
        "ID":10,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(2, 2, 13, 11, 16, "ビーティングパルス", ["-", 0], "", "", 936, [4,4,7], 0, "クビ", 0)
        ]
    },
    {
        "ID":11,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(2, 2, 16, 13, 13, "ジュエルカルサイト", ["-", 0], "", "", 938, [11,9,12], 0, "1/2", 0)
        ]
    },
    {
        "ID":12,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 4, 7, 3, 7, "オリジナルシャイン", ["A+", 0], "差し", "絶不調", 0, [], 0, "3/2", 0),
            new RaceResultObj(2, 2, 11, 15, 11, "オリジナルシャイン", ["-", 0], "", "", 935, [8,7,8], 0, "3/4", 0)
        ]
    },
    {
        "ID":13,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(3, 1, 7, 1, 11, "ロイヤルコロット", ["-", 0], "", "", 0, [], 0, "5", 0)
        ]
    },
    {
        "ID":14,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(3, 1, 11, 3, 8, "キタラリズム", ["-", 0], "", "", 0, [], 0, "3/4", 0)
        ]
    },
    {
        "ID":15,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(3, 4, 10, 1, 0, "ムシャムシャ", ["-", 0], "", "", 0, [], 0, "アタマ", 0),
            new RaceResultObj(3, 1, 8, 4, 6, "ムシャムシャ", ["-", 0], "", "", 0, [], 0, "1/2", 0)
        ]
    },
    {
        "ID":16,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(3, 1, 9, 5, 12, "ケチャップステップ", ["-", 0], "", "", 0, [], 0, "ハナ", 0)
        ]
    },
    {
        "ID":17,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(3, 3, 11, 6, 0, "アンチェンジング", ["-", 0], "", "", 0, [], 0, "ハナ", 0),
            new RaceResultObj(3, 2, 7, 11, 7, "アンチェンジング", ["-", 0], "", "", 0, [], 0, "", 0),
            new RaceResultObj(3, 1, 10, 8, 10, "アンチェンジング", ["-", 0], "", "", 0, [], 0, "ハナ", 0)
        ]
    },
    {
        "ID":18,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(3, 1, 12, 10, 9, "ミョンミョン", ["-", 0], "", "", 0, [], 0, "クビ", 0)
        ]
    },
    {
        "ID":19,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(3, 3, 9, 9, 0, "ミニオーキッド", ["-", 0], "", "", 0, [], 0, "大差", 0),
            new RaceResultObj(3, 2, 11, 1, 9, "ミニオーキッド", ["-", 0], "", "", 0, [], 0, "", 0)
        ]
    },
    {
        "ID":20,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(3, 2, 10, 3, 10, "エブリワンライクス", ["-", 0], "", "", 0, [], 0, "", 0)
        ]
    },
    {
        "ID":21,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(3, 2, 12, 4, 8, "フライングターキー", ["-", 0], "", "", 0, [], 0, "", 0)
        ]
    },
    {
        "ID":22,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(3, 2, 8, 7, 11, "ブリーズドローン", ["-", 0], "", "", 0, [], 0, "", 0)
        ]
    },
    {
        "ID":23,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(3, 2, 9, 8, 12, "デュアリングステラ", ["-", 0], "", "", 0, [], 0, "", 0)
        ]
    },
    {
        "ID":24,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(3, 3, 12, 1, 0, "フリルドオレンジ", ["-", 0], "", "", 0, [], 0, "5/2", 0),
        ]
    },
    {
        "ID":25,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 2, 9, 4, 8, "パンパシフィック", ["A+", 0], "逃げ", "普通", 0, [], 0, "5/2", 0),
            new RaceResultObj(3, 3, 8, 5, 0, "パンパシフィック", ["-", 0], "", "", 0, [], 0, "5/2", 0)
        ]
    },
    {
        "ID":26,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(3, 3, 10, 10, 0, "プリッツエクレール", ["-", 0], "", "", 0, [], 0, "3/2", 0)
        ]
    },
    {
        "ID":27,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 10, 8, 6, 5, "レベレント", ["-", 0], "先行", "好調", 0, [], 0, "1/2", 0),
            new RaceResultObj(3, 3, 7, 12, 0, "レベレント", ["-", 0], "", "", 0, [], 0, "大差", 0)
        ]
    },
    {
        "ID":28,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 11, 4, 5, 6, "クスタウィ", ["S", 0], "差し", "不調", 0, [], 0, "5/4", 0),
            new RaceResultObj(3, 4, 11, 2, 0, "クスタウィ", ["-", 0], "", "", 0, [], 0, "ハナ", 0),
        ]
    },
    {
        "ID":29,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(3, 4, 12, 3, 0, "デュオスヴェル", ["-", 0], "", "", 0, [], 0, "3/2", 0),
        ]
    },
    {
        "ID":30,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(3, 4, 8, 8, 0, "プチフォークロア", ["-", 0], "", "", 0, [], 0, "7/4", 0)
        ]
    },
    {
        "ID":31,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(3, 4, 7, 11, 8, "ルンバステップ", ["-", 0], "", "", 0, [], 0, "6", 0)
        ]
    },
    {
        "ID":32,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(3, 4, 9, 12, 0, "メモラビリンス", ["-", 0], "", "", 0, [], 0, "アタマ", 0)
        ]
    },
    {
        "ID":33,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(3, 5, 10, 1, 11, "ステートオブアート", ["-", 0], "", "", 0, [], 0, "ハナ", 0)
        ]
    },
    {
        "ID":34,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(3, 5, 12, 3, 0, "ヴァイスグリモア", ["-", 0], "", "", 0, [], 0, "1/2", 0)
        ]
    },
    {
        "ID":35,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(3, 5, 9, 8, 0, "リボンオペレッタ", ["-", 0], "", "", 0, [], 0, "1", 0)
        ]
    },
    {
        "ID":36,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(3, 5, 8, 10, 0, "ジュエルトパーズ", ["-", 0], "", "", 0, [], 0, "1/2", 0)
        ]
    },
    {
        "ID":37,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(3, 5, 11, 11, 0, "ブラックグリモア", ["-", 0], "", "", 0, [], 0, "1/2", 0)
        ]
    },
    {
        "ID":38,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(3, 5, 7, 12, 0, "タルッケ", ["-", 0], "", "", 0, [], 0, "5", 0)
        ]
    },
    {
        "ID":39,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 1, 3, 1, 9, "アイキャレット", ["A+", 0], "逃げ", "絶不調", 0, [], 0, "6", 0)
        ]
    },
    {
        "ID":40,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 1, 6, 4, 6, "ブラボーアール", ["S", 0], "先行", "普通", 0, [], 0, "", 0)
        ]
    },
    {
        "ID":41,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 1, 8, 5, 3, "アクアフィヨルド", ["A+", 0], "差し", "普通", 0, [], 0, "", 0)
        ]
    },
    {
        "ID":42,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 1, 7, 8, 4, "アルベドベラドンナ", ["A+", 0], "追込", "絶好調", 0, [], 0, "", 0)
        ]
    },
    {
        "ID":43,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 1, 4, 9, 5, "マリフィクス", ["S", 0], "先行", "絶好調", 0, [], 0, "1", 0)
        ]
    },
    {
        "ID":44,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 2, 4, 1, 3, "アルゴル", ["A+", 0], "逃げ", "絶好調", 0, [], 0, "3/4", 0)
        ]
    },
    {
        "ID":45,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 2, 3, 3, 7, "アバブリニ", ["A+", 0], "差し", "普通", 0, [], 0, "大差", 0)
        ]
    },

    {
        "ID":46,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 2, 6, 5, 4, "アクアオーシャン", ["A+", 0], "逃げ", "絶好調", 0, [], 0, "ハナ", 0)
        ]
    },

    {
        "ID":47,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 2, 8, 6, 6, "シルバーベリー", ["A+", 0], "先行", "不調", 0, [], 0, "アタマ", 0)
        ]
    },
    {
        "ID":48,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 6, 7, 5, 8, "タクティカルワン", ["S", 0], "差し", "不調", 0, [], 0, "3/4", 0),
            new RaceResultObj(4, 2, 5, 8, 5, "タクティカルワン", ["A+", 0], "追込", "不調", 0, [], 0, "3/2", 0)
        ]
    },
    {
        "ID":49,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 2, 7, 9, 5, "アジャイルタレント", ["A+", 0], "追込", "絶好調", 0, [], 0, "アタマ", 0)
        ]
    },
    {
        "ID":50,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 8, 7, 5, 9, "ミニマリーゴールド", ["S", 0], "逃げ", "絶不調", 0, [], 0, "3/4", 0),
            new RaceResultObj(4, 3, 8, 1, 9, "ミニマリーゴールド", ["A+", 0], "先行", "不調", 0, [], 0, "1", 0)
        ]
    },
    {
        "ID":51,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 11, 3, 7, 3, "サドンアタック", ["S", 0], "追込", "絶好調", 0, [], 0, "6", 0),
            new RaceResultObj(4, 3, 5, 4, 8, "サドンアタック", ["A+", 0], "逃げ", "絶不調", 0, [], 0, "クビ", 0)
        ]
    },
    {
        "ID":52,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 3, 9, 5, 6, "ゴージャスバルフェ", ["A+", 0], "逃げ", "好調", 0, [], 0, "1/2", 0)
        ]
    },
    {
        "ID":53,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 3, 6, 6, 3, "ステイシャーリーン", ["A+", 0], "先行", "絶好調", 0, [], 0, "1", 0)
        ]
    },
    {
        "ID":54,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 3, 7, 7, 7, "ワンインチオブラブ", ["A+", 0], "差し", "好調", 0, [], 0, "5/4", 0)
        ]
    },
    {
        "ID":55,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 3, 4, 8, 5, "イノセントグリモア", ["A+", 0], "逃げ", "絶好調", 0, [], 0, "3/2", 0)
        ]
    },
    {
        "ID":56,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 3, 3, 9, 4, "デュオスクトゥム", ["A+", 0], "追込", "普通", 0, [], 0, "大差", 0)
        ]
    },
    {
        "ID":57,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 10, 9, 7, 3, "ジュエルジルコン", ["A+", 0], "追込み", "絶好調", 0, [], 0, "3/4", 0),
            new RaceResultObj(4, 4, 9, 2, 8, "ジュエルジルコン", ["A+", 0], "差し", "絶不調", 0, [], 0, "アタマ", 0)
        ]
    },
    {
        "ID":58,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 4, 3, 5, 3, "グリードホロウ", ["A+", 0], "差し", "絶好調", 0, [], 0, "6", 0)
        ]
    },
    {
        "ID":59,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 4, 4, 6, 4, "イズカリ", ["A+", 0], "先行", "好調", 0, [], 0, "1/2", 0)
        ]
    },
    {
        "ID":60,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 4, 6, 7, 5, "シンスフィールド", ["A+", 0], "逃げ", "不調", 0, [], 0, "1", 0)
        ]
    },
    {
        "ID":61,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 14, 6, 3, 6, "リボンヴィルレー", ["A+", 0], "逃げ", "不調", 0, [], 0, "1/2", 0),
            new RaceResultObj(4, 4, 5, 8, 6, "リボンヴィルレー", ["A+", 0], "追込", "好調", 0, [], 0, "クビ", 0)
        ]
    },
    {
        "ID":62,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 4, 8, 9, 9, "ピウエラリズム", ["A+", 0], "追込", "絶不調", 0, [], 0, "3/4", 0)
        ]
    },
    {
        "ID":63,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 5, 5, 3, 9, "ナターレノッテ", ["A+", 0], "先行", "絶不調", 0, [], 0, "1", 0)
        ]
    },
    {
        "ID":64,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 5, 4, 4, 6, "ブルータルラッシュ", ["A+", 0], "先行", "不調", 0, [], 0, "ハナ", 0)
        ]
    },
    {
        "ID":65,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 5, 9, 5, 3, "ジュエルサファイア", ["A+", 0], "先行", "好調", 0, [], 0, "5/2", 0)
        ]
    },
    {
        "ID":66,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 5, 3, 6, 8, "ライムシュシュ", ["A+", 0], "差し", "絶不調", 0, [], 0, "大差", 0)
        ]
    },
    {
        "ID":67,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 5, 7, 7, 5, "ジュエルトルマリン", ["A+", 0], "逃げ", "普通", 0, [], 0, "ハナ", 0)
        ]
    },
    {
        "ID":68,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 10, 5, 3, 8, "リードエッセイ", ["A+", 0], "先行", "絶不調", 0, [], 0, "3/4", 0),
            new RaceResultObj(4, 5, 6, 8, 4, "リードエッセイ", ["A+", 0], "逃げ", "絶好調", 0, [], 0, "1/2", 0)
        ]
    },
    {
        "ID":69,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 5, 8, 9, 7, "マリタイムシッパー", ["A+", 0], "先行", "絶不調", 0, [], 0, "5/4", 0)
        ]
    },
    {
        "ID":70,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 6, 1, 1, 4, "ファームポリション", ["S", 0], "差し", "不調", 0, [], 0, "3/4", 0)
        ]
    },
    {
        "ID":71,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 6, 3, 2, 9, "テトラビブロス", ["S", 0], "先行", "好調", 0, [], 0, "5", 0)
        ]
    },
    {
        "ID":72,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 10, 7, 1, 7, "フリルドチェリー", ["A+", 0], "逃げ", "絶不調", 0, [], 0, "1/2", 0),
            new RaceResultObj(4, 6, 5, 4, 3, "フリルドチェリー", ["S", 0], "追込", "好調", 0, [], 0, "3/2", 0)
        ]
    },
    {
        "ID":73,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 6, 6, 7, 5, "タップステップ", ["S", 0], "逃げ", "好調", 0, [], 0, "3/2", 0)
        ]
    },
    {
        "ID":74,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 6, 8, 8, 6, "フィールザフェイト", ["S", 0], "差し", "普通", 0, [], 0, "1/2", 0)
        ]
    },
    {
        "ID":75,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 6, 9, 9, 7, "ミニポールサム", ["S", 0], "逃げ", "普通", 0, [], 0, "ハナ", 0)
        ]
    },
    {
        "ID":76,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 7, 6, 1, 8, "ミニダンデライオン", ["A+", 0], "先行", "絶不調", 0, [], 0, "1", 0)
        ]
    },
    {
        "ID":77,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 7, 5, 2, 4, "アキナケス", ["A+", 0], "先行", "絶好調", 0, [], 0, "クビ", 0)
        ]
    },
    {
        "ID":78,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 15, 8, 4, 6, "サンドコマンド", ["A+", 0], "逃げ", "好調", 0, [], 0, "3/2", 0),
            new RaceResultObj(4, 13, 5, 8, 3, "サンドコマンド", ["S", 0], "差し", "絶不調", 0, [], 0, "3/4", 0),
            new RaceResultObj(4, 7, 9, 4, 3, "サンドコマンド", ["A+", 0], "差し", "絶好調", 0, [], 0, "ハナ", 0)
        ]
    },
    {
        "ID":79,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 7, 8, 5, 7, "プリーズセスナ", ["A+", 0], "追込", "絶不調", 0, [], 0, "7/4", 0)
        ]
    },
    {
        "ID":80,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 8, 4, 7, 4, "エコノアニマル", ["S", 0], "先行", "不調", 0, [], 0, "1", 0),
            new RaceResultObj(4, 7, 3, 6, 5, "エコノアニマル", ["A+", 0], "差し", "不調", 0, [], 0, "大差", 0)
        ]
    },
    {
        "ID":81,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 7, 7, 7, 6, "デュオタリカー", ["A+", 0], "逃げ", "普通", 0, [], 0, "1/2", 0)
        ]
    },
    {
        "ID":82,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 7, 4, 8, 9, "ファスターザンレイ", ["A+", 0], "差し", "絶不調", 0, [], 0, "ハナ", 0)
        ]
    },
    {
        "ID":83,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 8, 3, 1, 3, "スイートキャビン", ["S", 0], "差し", "不調", 0, [], 0, "5", 0)
        ]
    },
    {
        "ID":84,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 8, 5, 4, 8, "フォローザサン", ["S", 0], "先行", "絶不調", 0, [], 0, "クビ", 0)
        ]
    },
    {
        "ID":85,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 8, 6, 6, 5, "ファイフリズム", ["S", 0], "逃げ", "普通", 0, [], 0, "クビ", 0)
        ]
    },
    {
        "ID":86,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 8, 9, 8, 6, "ヴァロワマロン", ["S", 0], "追込", "不調", 0, [], 0, "5/4", 0)
        ]
    },
    {
        "ID":87,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 8, 8, 9, 2, "ユニゾンフラッグ", ["S", 0], "差し", "絶好調", 0, [], 0, "1/2", 0)
        ]
    },
    {
        "ID":88,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 9, 6, 1, 7, "シンプトンダッシュ", ["A+", 0], "先行", "不調", 0, [], 0, "クビ", 0)
        ]
    },
    {
        "ID":89,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 9, 3, 3, 5, "ミニクレマティス", ["A+", 0], "差し", "不調", 0, [], 0, "3/4", 0)
        ]
    },
    {
        "ID":90,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 9, 5, 4, 3, "ブラックエボニー", ["A+", 0], "先行", "絶好調", 0, [], 0, "5", 0)
        ]
    },
    {
        "ID":91,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 9, 9, 5, 6, "リボンミンネ", ["A+", 0], "逃げ", "普通", 0, [], 0, "5", 0)
        ]
    },
    {
        "ID":92,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 9, 7, 6, 8, "ブレイスインヘヴン", ["A+", 0], "逃げ", "不調", 0, [], 0, "大差", 0)
        ]
    },
    {
        "ID":93,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 9, 8, 9, 9, "マッキラ", ["A+", 0], "逃げ", "絶不調", 0, [], 0, "5/4", 0)
        ]
    },
    {
        "ID":94,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 10, 2, 2, 4, "キンダーシャッツ", ["A+", 0], "差し", "絶好調", 0, [], 0, "3/4", 0)
        ]
    },
    {
        "ID":95,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 10, 3, 4, 9, "イミディエイト", ["A+", 0], "差し", "不調", 0, [], 0, "4", 0)
        ]
    },
    {
        "ID":96,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 10, 6, 8, 6, "アイタンリ", ["A+", 0], "逃げ", "絶好調", 0, [], 0, "クビ", 0)
        ]
    },
    {
        "ID":97,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 11, 5, 2, 8, "クレセントエース", ["S", 0], "先行", "不調", 0, [], 0, "3/4", 0)
        ]
    },
    {
        "ID":98,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 11, 9, 3, 5, "ショファーリズム", ["S", 0], "差し", "絶不調", 0, [], 0, "3/2", 0)
        ]
    },
    {
        "ID":99,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 11, 8, 6, 4, "ダブルサラウンド", ["S", 0], "差し", "普通", 0, [], 0, "-", 0)
        ]
    },
    {
        "ID":100,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 11, 6, 8, 7, "カラフルパステル", ["S", 0], "先行", "不調", 0, [], 0, "3/4", 0)
        ]
    },
    {
        "ID":101,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 11, 7, 9, 9, "リボンメヌエット", ["S", 0], "差し", "絶不調", 0, [], 0, "ハナ", 0)
        ]
    },
    {
        "ID":102,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 12, 3, 2, 3, "ミニローズ", ["A+", 0], "追込", "絶好調", 0, [], 0, "大差", 0)
        ]
    },
    {
        "ID":103,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 18, 9, 1, 5, "イースタンダイナー", ["A+", 0], "逃げ", "好調", 0, [], 0, "大差", 0),
            new RaceResultObj(4, 12, 7, 3, 5, "イースタンダイナー", ["A+", 0], "追込", "絶好調", 0, [], 0, "アタマ", 0)
        ]
    },
    {
        "ID":104,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 13, 8, 7, 5, "アップツリー", ["S", 0], "差し", "絶不調", 0, [], 0, "ハナ", 0),
            new RaceResultObj(4, 12, 5, 4, 6, "アップツリー", ["A+", 0], "逃げ", "好調", 0, [], 0, "1", 0)
        ]
    },
    {
        "ID":105,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 12, 4, 5, 4, "ブラウンモンブラン", ["A+", 0], "差し", "絶好調", 0, [], 0, "ハナ", 0)
        ]
    },
    {
        "ID":106,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 12, 6, 6, 9, "ブームアバング", ["A+", 0], "逃げ", "不調", 0, [], 0, "7/4", 0)
        ]
    },
    {
        "ID":107,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 12, 9, 8, 7, "デュオアスピス", ["A+", 0], "先行", "絶不調", 0, [], 0, "1", 0)
        ]
    },
    {
        "ID":108,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 12, 8, 9, 8, "マストチューズミー", ["A+", 0], "先行", "絶不調", 0, [], 0, "3/2", 0)
        ]
    },
    {
        "ID":109,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 13, 6, 1, 6, "クリシュマルド", ["S", 0], "先行", "絶不調", 0, [], 0, "1/2", 0)
        ]
    },
    {
        "ID":110,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 13, 3, 2, 4, "ジュエルルベライト", ["S", 0], "逃げ", "絶好調", 0, [], 0, "7/2", 0)
        ]
    },
    {
        "ID":111,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 13, 9, 3, 2, "アンペールユニット", ["S", 0], "差し", "絶不調", 0, [], 0, "1", 0)
        ]
    },
    {
        "ID":112,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 13, 4, 5, 7, "フルーツパルフェ", ["A+", 0], "追込", "絶不調", 0, [], 0, "クビ", 0)
        ]
    },
    {
        "ID":113,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 13, 7, 6, 9, "ルーラルレジャー", ["A+", 0], "追込", "絶不調", 0, [], 0, "5/2", 0)
        ]
    },
    {
        "ID":114,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 17, 7, 6, 4, "サンフィッシュレイ", ["A+", 0], "逃げ", "好調", 0, [], 0, "3/4", 0),
            new RaceResultObj(4, 14, 7, 1, 3, "サンフィッシュレイ", ["A+", 0], "追込", "好調", 0, [], 0, "2", 0)
        ]
    },
    {
        "ID":115,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 14, 3, 2, 5, "フラハラウ", ["A+", 0], "差し", "普通", 0, [], 0, "7/2", 0)
        ]
    },
    {
        "ID":116,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 14, 5, 4, 8, "フューダルテニュア", ["A+", 0], "先行", "普通", 0, [], 0, "1/2", 0)
        ]
    },
    {
        "ID":117,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 14, 8, 5, 9, "マリンシーガル", ["A+", 0], "差し", "絶不調", 0, [], 0, "1", 0)
        ]
    },
    {
        "ID":118,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 14, 9, 8, 4, "カイゼルパレス", ["A+", 0], "逃げ", "不調", 0, [], 0, "3/4", 0)
        ]
    },
    {
        "ID":119,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 14, 4, 9, 7, "ハシュハシュ", ["A+", 0], "追込", "絶不調", 0, [], 0, "1", 0)
        ]
    },
    {
        "ID":120,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(5, 1, 7, 4, 7, "コインシデンス", ["S", 0], "逃げ", "", 0, [], 0, "大差", 0),
            new RaceResultObj(4, 15, 5, 2, 5, "コインシデンス", ["A+", 0], "追込", "絶好調", 0, [], 0, "3/4", 0)
        ]
    },
    {
        "ID":121,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(5, 2, 8, 9, 7, "プカプカ", ["S", 0], "追込", "", 0, [], 0, "3/2", 0),
            new RaceResultObj(4, 15, 4, 3, 3, "プカプカ", ["A+", 0], "逃げ", "絶好調", 0, [], 0, "5/4", 0)
        ]
    },
    {
        "ID":122,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 15, 6, 5, 7, "スペシャルパルフェ", ["A+", 0], "逃げ", "不調", 0, [], 0, "1/2", 0)
        ]
    },
    {
        "ID":123,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 15, 3, 6, 4, "トーチアンドブック", ["A+", 0], "先行", "好調", 0, [], 0, "大差", 0)
        ]
    },
    {
        "ID":124,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 15, 9, 7, 9, "コルスカンティ", ["A+", 0], "先行", "絶不調", 0, [], 0, "クビ", 0)
        ]
    },
    {
        "ID":125,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 15, 7, 9, 8, "ケミカルウォッシュ", ["A+", 0], "追込", "絶不調", 0, [], 0, "1", 0)
        ]
    },
    {
        "ID":126,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 16, 3, 1, 4, "ブックオブシュガー", ["A+", 0], "先行", "好調", 0, [], 0, "10", 0)
        ]
    },
    {
        "ID":127,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 16, 7, 2, 7, "コンプロマイズ", ["A+", 0], "差し", "普通", 0, [], 0, "-", 0)
        ]
    },
    {
        "ID":128,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 16, 6, 4, 8, "ボヌールソナタ", ["A+", 0], "逃げ", "不調", 0, [], 0, "-", 0)
        ]
    },
    {
        "ID":129,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 17, 6, 5, 8, "アニマアニムス", ["A+", 0], "先行", "不調", 0, [], 0, "1/2", 0),
            new RaceResultObj(4, 16, 5, 5, 3, "アニマアニムス", ["A+", 0], "逃げ", "絶好調", 0, [], 0, "-", 0)
        ]
    },
    {
        "ID":130,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 16, 8, 6, 9, "ゴージャスパルフェ", ["A+", 0], "先行", "絶好調", 0, [], 0, "-", 0)
        ]
    },
    {
        "ID":131,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 16, 9, 7, 5, "ミニハーブ", ["A+", 0], "差し", "普通", 0, [], 0, "-", 0)
        ]
    },
    {
        "ID":132,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 16, 4, 8, 6, "ノーティカルツール", ["A+", 0], "逃げ", "絶好調", 0, [], 0, "-", 0)
        ]
    },
    {
        "ID":133,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 17, 9, 1, 9, "ショーマンズアクト", ["A+", 0], "追込", "絶不調", 0, [], 0, "3/4", 0)
        ]
    },
    {
        "ID":134,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 17, 3, 2, 3, "クレイジーインラブ", ["A+", 0], "逃げ", "普通", 0, [], 0, "6", 0)
        ]
    },
    {
        "ID":135,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 17, 5, 3, 5, "アライブカリン", ["A+", 0], "先行", "普通", 0, [], 0, "5/4", 0)
        ]
    },
    {
        "ID":136,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 17, 8, 4, 6, "ジュエルスフェーン", ["A+", 0], "差し", "普通", 0, [], 0, "3/2", 0)
        ]
    },
    {
        "ID":137,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 17, 4, 7, 7, "サックスリズム", ["A+", 0], "逃げ", "不調", 0, [], 0, "3/4", 0)
        ]
    },
    {
        "ID":138,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 18, 8, 3, 7, "ライフィールド", ["A+", 0], "逃げ", "不調", 0, [], 0, "大差", 0)
        ]
    },
    {
        "ID":139,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 18, 3, 4, 3, "ディオシパルー", ["A+", 0], "差し", "絶好調", 0, [], 0, "大差", 0)
        ]
    },
    {
        "ID":140,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 18, 6, 5, 8, "ギミーワンラブ", ["A+", 0], "先行", "絶不調", 0, [], 0, "7/2", 0)
        ]
    },
    {
        "ID":141,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 18, 5, 6, 9, "アイゼンテンツァー", ["A+", 0], "差し", "絶不調", 0, [], 0, "3/4", 0)
        ]
    },
    {
        "ID":142,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 18, 7, 8, 4, "アグリゲーション", ["A+", 0], "先行", "絶好調", 0, [], 0, "3/4", 0)
        ]
    },
    {
        "ID":143,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(4, 18, 4, 9, 6, "クピドズシュート", ["A+", 0], "追込", "不調", 0, [], 0, "5/2", 0)
        ]
    },
    {
        "ID":144,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(5, 1, 8, 1, 8, "ソワソワ", ["S", 0], "先行", "", 0, [], 0, "1/2", 0)
        ]    
    },    

    {
        "ID":145,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(5, 1, 9, 3, 9, "ミニコスモス", ["S", 0], "逃げ", "", 0, [], 0, "3/2", 0)
        ]
    },
    {
        "ID":146,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(5, 2, 9, 3, 9, "サニーウェザー", ["A+", 0], "逃げ", "", 0, [], 0, "クビ", 0)
        ]
    },
    {
        "ID":147,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(5, 2, 7, 6, 8, "サムガーデン", ["S", 0], "先行", "", 0, [], 0, "大差", 0)
        ]
    },

    {
        "ID":148,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(5, 3, 8, 4, 7, "オグレッセ", ["A+", 0], "逃げ", "", 0, [], 0, "", 0)
        ]
    },
    {
        "ID":149,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(5, 3, 9, 6, 9, "ジェバト", ["A+", 0], "差し", "", 0, [], 0, "1/2", 0)
        ]
    },
    {
        "ID":150,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(5, 3, 7, 8, 8, "クラリネットリズム", ["A+", 0], "", "", 0, [], 0, "", 0)
        ]
    },
    {
        "ID":151,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(7, 1, 15, 10, 15, "オンステージレビュ", ["S", 0], "差し", "絶好調", 0, [], 0, "3/2", 0),
        ]
    },
    {
        "ID":152,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(7, 2, 15, 10, 15, "メモリアルゴラッソ", ["S", 0], "逃げ", "絶好調", 0, [], 0, "6", 0),
        ]
    },
    {
        "ID":153,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(
                7, 3, 15, 9, 15, "アウトスタンドギグ", ["S", 0], "追込", "絶好調", 0, [], 0, "9",
                new RaceResultStatusObj(
                    {"Speed":1000, "Stamina":1000, "Power":1000, "Guts":1000, "Intelligent":1000},
                    {"Feald":"A", "Length":"A", "Strategy":"A"},
                    ["右回り〇", "良バ場〇", "道悪〇", "内枠得意〇", "外枠得意〇"],
                )
            ),
        ]
    },
    {
        "ID":154,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(0, 0, 0, 0, 0, "スピーチレスハック", ["", 0], "", "", 0, [], 0, "", 0),
        ]
    },
    {
        "ID":155,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(0, 0, 0, 0, 0, "ジュエルコーラル", ["", 0], "", "", 0, [], 0, "", 0),
        ]
    },
    {
        "ID":156,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(0, 0, 0, 0, 0, "ハイタイムスーン", ["", 0], "", "", 0, [], 0, "", 0),
        ]
    },
    {
        "ID":157,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(0, 0, 0, 0, 0, "リボンマンボ", ["", 0], "", "", 0, [], 0, "", 0),
        ]
    },
    {
        "ID":158,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(0, 0, 0, 0, 0, "カジュアルスナップ", ["", 0], "", "", 0, [], 0, "", 0),
        ]
    },
    {
        "ID":159,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(0, 0, 0, 0, 0, "サコッシュ", ["", 0], "", "", 0, [], 0, "", 0),
        ]
    },
    {
        "ID":160,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(0, 0, 0, 0, 0, "ビアンコグリモア", ["", 0], "", "", 0, [], 0, "", 0),
        ]
    },
    {
        "ID":161,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(0, 0, 0, 0, 0, "サマーボンファイア", ["", 0], "", "", 0, [], 0, "", 0),
        ]
    },
    {
        "ID":162,
        "Name": ["", ""],
        "result":[
            new RaceResultObj(0, 0, 0, 0, 0, "リードサスペンス", ["", 0], "", "", 0, [], 0, "", 0),
        ]
    },
    // {
    //     "ID":163,
    //     "Name": ["", ""],
    //     "result":[
    //         new RaceResultObj(0, 0, 0, 0, 0, "ロイヤルサーバント", ["", 0], "", "", 0, [], 0, "", 0),
    //     ]
    // },
    // {
    //     "ID":164,
    //     "Name": ["", ""],
    //     "result":[
    //         new RaceResultObj(0, 0, 0, 0, 0, "ハートブロウアップ", ["", 0], "", "", 0, [], 0, "", 0),
    //     ]
    // },

]
