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

const SUGGO_MEMBER_ID_OFFSET = 0;
const RINRIN_MEMBER_ID_OFFSET = 100;
const CPU_MEMBER_ID_OFFSET = 1000;
const MembersIDOffset = [SUGGO_MEMBER_ID_OFFSET, RINRIN_MEMBER_ID_OFFSET, CPU_MEMBER_ID_OFFSET];

const Members = [
    {
        "ID":1,
        "Name": ["ヴァニラ", "Vanilla"],
        "TrainerID":0, 
        "result": [
            new RaceResultObj(3, 6, 18, 11, 17, "マチカネフクキタル", ["-", 0], "差し", "", 0, [], 0, "大差", 0),
            new RaceResultObj(1, 1, 16, 3, 18, "マチカネフクキタル", ["-", 0], "差し", "", 1330, [15,15,17,17], 0, 27)
        ]
    },
    {
        "ID":2,
        "Name": ["むにえる", "Meuniere"],
        "result":[
            new RaceResultObj(4, 1, 2, 7, 2, "エアグルーヴ", ["UE2", 0], "先行", "好調", 0, [], 0, "3", 0, [],
                new RaceResultStatusObj({"Speed":1585,"Stamina":744,"Power":1344,"Guts":1208,"Intelligent":1304}, {"Feald":"S", "Length":"S", "Strategy":"A"},
                    ["薫風、永遠なる瞬間を", "ヴィクトリーショット！", "つぼみ、ほころぶ時", "右回り〇", "秋ウマ娘〇", "集中力", "アガってきた！", "尻尾上がり", "向こう見ず", "優位形成",
                    "ハイボルテージ", "最高峰の夢", "弧線のプロフェッサー", "上弦のソムリエール", "女帝の矜持", "先行コーナー〇", "お先に失礼っ！", "下り坂巧者"])
            ),
            new RaceResultObj(3, 3, 2, 7, 0, "テイエムオペラオー", ["-", 0], "", "", 0, [], 0, "7/2", 0),
            new RaceResultObj(2, 3, 3, 8, 3, "エアグルーヴ", ["-", 0], "", "", 917, [11,10,9], 0, "3/2", 4),
            new RaceResultObj(2, 1, 1, 14, 6, "エアグルーヴ", ["-", 0], "", "", 902, [6,2,1], 0, "-", 6),
            new RaceResultObj(1, 1, 1, 16, 2, "テイエムオペラオー", ["-", 0], "", "", 1305, [7,6,3,3], 0, "-", 4)
        ]
    },
    {
        "ID":3,
        "Name": ["ぐましぃ", "Gumashi"],
        "result":[
            new RaceResultObj(
                6, 1, 4, 1, 1, "ジェンティルドンナ", ["UD1", 35396], "先行", "絶好調", 0, [], 0, "3/4",
                new RaceResultStatusObj(
                    {"Speed":0, "Stamina":0, "Power":0, "Guts":0, "Intelligent":0},
                    {"Feald":"", "Length":"", "Strategy":""},
                    [],
                )
            ),
            new RaceResultObj(3, 3, 3, 4, 0, "ビワハヤヒデ", ["-", 0], "", "", 0, [], 0, "5/2", 0),
            new RaceResultObj(2, 3, 5, 4, 1, "ビワハヤヒデ", ["-", 0], "", "", 918, [8,7,5], 0, "クビ", 5),
            new RaceResultObj(2, 2, 3, 12, 2, "ビワハヤヒデ", ["-", 0], "先行", "", 923, [6,6,5], 0, "5/4", 7),
            new RaceResultObj(1, 1, 18, 1, 11, "ヤエノムテキ", ["-", 0], "", "", 1343, [8,8,8,12], 0, "7", 38)
        ]
    },
    {
        "ID":4,
        "Name": ["れじすた", "Resiter"],
        "result":[
            new RaceResultObj(6, 1, 7, 3, 5, "ジェンティルドンナ", ["UD3", 36218], "先行", "絶好調", 0, [], 0, "3/4"),
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
            new RaceResultObj(
                3, 6, 4, 1, 8, "ミスターシービー", ["-", 0], "", "", 0, [], 0, 0,
                new RaceResultStatusObj(
                    {"Speed":0, "Stamina":0, "Power":0, "Guts":0, "Intelligent":0},
                    {"Feald":"", "Length":"", "Strategy":""},
                    [],
                )
            ),
            new RaceResultObj(3, 6, 4, 1, 8, "ミスターシービー", ["-", 0], "", "", 0, [], 0, "5/4", 0),
            new RaceResultObj(2, 3, 2, 7, 4, "ミスターシービー", ["-", 0], "", "", 915, [14,11,8], 0, "3/2", 2),
            new RaceResultObj(2, 2, 2, 7, 4, "ミスターシービー", ["-", 0], "追込", "", 921, [13,12,6], 0, "3", 5),
            new RaceResultObj(1, 1, 14, 5, 4, "ミスターシービー", ["-", 0], "", "", 1323, [16,16,15,14], 0, "クビ", 18)
        ]
    },
    {
        "ID":6,
        "Name": ["みやび", "Miyabi"],
        "result":[
            new RaceResultObj(
                4, 2, 1, 2, 1, "タイキシャトル", ["UF7", 32813], "先行", "好調", 0, [], 0, "-", 0, [], 
                new RaceResultStatusObj(
                    {"Speed":1605,"Stamina":1227,"Power":1294,"Guts":1181,"Intelligent":1274},
                    {"Feald":"A","Length":"S","Strategy":"A"},
                    ["ヴィクトリーショット", "紅焔ギア/LP1211-M", "アングリングxスキーミング", "コーナー巧者〇", "ハヤテ一文字", "集中力", "テンポアップ", "中距離直線〇", "中距離コーナー〇",
                    "スリップストリーム", "お先に失礼っ！","ありったけ", "闘争心", "気迫を込めて", "攻めの姿勢", "優位形成", "昂る鼓動", "探求心", "王手", "ネバーギブアップ","中盤巧者", "最高峰の夢"]
                )
            ),
            new RaceResultObj(3, 6, 1, 13, 2, "タイキシャトル", ["-", 0], "", "", 1417, [], 0, "-", 0),
            new RaceResultObj(3, 4, 1, 6, 0, "タイキシャトル", ["-", 0], "", "", 898, [], 0, "-", 0),
            new RaceResultObj(2, 3, 1, 5, 5, "タイキシャトル", ["-", 0], "", "", 913, [7,5,2], 0, "-", 2),
            new RaceResultObj(2, 1, 3, 8, 2, "タイキシャトル", ["-", 0], "", "", 910, [7,5,4], 0, "1", 8),
            new RaceResultObj(1, 1, 5, 9, 1, "タイキシャトル", ["-", 0], "", "", 1312, [4,4,4,5], 0, "5/4", 7)
        ]
    },
    {
        "ID":7,
        "Name": ["ハイダラ", "Haidara"],
        "result":[
            {
                "RaceGrpID":4,
                "RaceID":4,
                "Goal":"",
                "Number":"4",
                "Favorite":"2",
                "Name":"メジロラモーヌ",
                "Runk":["UE", 29379],
                "Strategy":"先行",
                "Motivation":"普通",
                "GoalTime":"",
                "Corner":[],
                "FurlongTime":"",
                "TopDef":"",
                "Status":{
                    "Param":{
                        "Speed":1704,
                        "Stamina":664,
                        "Power":1229,
                        "Guts":1314,
                        "Intelligent":1248,
                    },
                    "Aptitude":{
                        "Feald":"A",
                        "Length":"S",
                        "Strategy":"A",
                    },
                    "Skills":[
                        "愛と煌けよただ溶けよ", "根幹距離◎", "良バ場◎", "冬ウマ娘◎", "弧線のプロフェッサー", "コーナー加速〇", "直線巧者", "アガってきた！", "スピードスター", "短距離直線〇",
                        "短距離コーナー〇", "先行コーナー〇", "お先に失礼っ！", "鍔迫り合い", "軽い足取り", "攻めの姿勢",
                    ],
                }
            },
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
            new RaceResultObj(
                4, 1, 1, 6, 1, "ダイタクヘリオス", ["UE4", 0], "先行", "絶好調", 901, [], 0, "-", 0, [],
                new RaceResultStatusObj({"Speed":1533,"Stamina":740,"Power":1379,"Guts":1382,"Intelligent":1204}, {"Feald":"A","Length":"S","Strategy":"A",},
                    ["アゲてアゲてぷちょへんざ！", "アングリングxスキーミング", "つぼみ、ほころぶ時", "根幹距離〇", "先行のコツ〇", "自信家", "積極策", "地固め", "序盤巧者", "マジ爆上げっしょ！", "尻尾上がり",
                    "とりまやったれ～！", "しとやかな足取り", "鍔迫り合い", "ハイボルテージ", "弧線のプロフェッサー", "直線巧者", "マイル直線〇", "マイルコーナー〇", "負けん気","お先に失礼っ！", "あやしげな作戦"])
            ),
            new RaceResultObj(2, 3, 12, 11, 10, "ダイタクヘリオス", ["-", 0], "", "", 924, [3,3,4], 0, "3/4", 11),
            new RaceResultObj(2, 2, 6, 8, 6, "ダイタクヘリオス", ["-", 0], "", "", 927, [3,3,2], 0, "5/4", 11),
            new RaceResultObj(1, 1, 8, 18, 5, "ダイタクヘリオス", ["-", 0], "", "", 1316, [10,11,10,8], 0, 11)
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
            {
                "RaceGrpID":4,
                "RaceID":4,
                "Date":{"year":24, "month":2, "day":12},
                "Place":"中山",
                "Title":"第3回すっご杯トリオトーナメント1回戦第1試合第3レース",
                "RaceName":"有馬記念",
                "RaceGrade":"G1",
                "Goal":"",
                "MembersCnt":"9",
                "Number":"",
                "Favorite":"",
                "Name":"メイショウドトウ",
                "Runk":["UE", 29024],
                "Strategy":"先行",
                "Motivation":"",
                "CourseLength":"25",
                "Season":"冬",
                "TimeZone":"昼",
                "Weather":"晴",
                "Feald":"芝",
                "Condition":"良",
                "Rotate":"右",
                "GoalTime":"",
                "Corner":[],
                "FurlongTime":"",
                "Top":"ナリタタイシン",
                "TopDef":"",
                "Status":{
                    "Param":{
                        "Speed":1632,
                        "Stamina":1201,
                        "Power":1110,
                        "Guts":913,
                        "Intelligent":1225,
                    },
                    "Aptitude":{
                        "Feald":"A",
                        "Length":"S",
                        "Strategy":"A",
                    },
                    "Skills":[
                        "Spooky-Scary-Happy", "勝ち鬨ワッショイ！", "弧線のプロフェッサー", "魂の導き手", "直線巧者", "直線回復", "ペースアップ", "末脚", "深呼吸", "内弁慶",
                        "長距離コーナー〇", "先行のコツ〇", "お先に失礼っ！", "心に灯す闘志", "アンストッパブル", "怪物", "込み上げる熱", "最高峰の夢"
                    ],
                }
            },
            new RaceResultObj(3, 4, 5, 7, 0, "メイショウドトウ", ["-", 0], "", "", 0, [], 0, "5/2", 0)
        ]
    },
    {
        "ID":11,
        "Name": ["とあ", "Toa"],
        "result":[
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
            new RaceResultObj(6, 1, 8, 8, 6, 11801, ["UE5", 31667], "追込", "絶好調", 0, [], 0, "1/2", 0, ["ヒシミラクル", "メジロドーベル"]),
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
                4, 2, 2, 7, 2, "タニノギムレット", ["UF1", 24648], "追込", "不調", 0, [], 0, "", 0, [],
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
            new RaceResultObj(6, 1, 2, 4, 4, "ゼンノロブロイ", ["UE9", 34009], "先行", "絶好調", 0, [], 0, "1"),
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
            {
                "RaceGrpID":4,
                "RaceID":4,
                "Date":{"year":24, "month":2, "day":12},
                "Place":"中山",
                "Title":"第3回すっご杯トリオトーナメント1回戦第1試合第3レース",
                "RaceName":"有馬記念",
                "RaceGrade":"G1",
                "Goal":"",
                "MembersCnt":"9",
                "Number":"",
                "Favorite":"2",
                "Name":"ナリタタイシン",
                "Runk":["UE", 29053],
                "Strategy":"追込",
                "Motivation":"好調",
                "CourseLength":"25",
                "Season":"冬",
                "TimeZone":"昼",
                "Weather":"晴",
                "Feald":"芝",
                "Condition":"良",
                "Rotate":"右",
                "GoalTime":"",
                "Corner":[],
                "FurlongTime":"",
                "Top":"メイショウドトウ",
                "TopDef":"",
                "Status":{
                    "Param":{
                        "Speed":1645,
                        "Stamina":1224,
                        "Power":1273,
                        "Guts":1014,
                        "Intelligent":960,
                    },
                    "Aptitude":{
                        "Feald":"A",
                        "Length":"S",
                        "Strategy":"A",
                    },
                    "Skills":[
                        "Nemesis", "レッツアナボリック！", "あっぱれ大盤振る舞い！", "コーナー巧者〇", "コーナー回復〇", "直線巧者", "アガってきた！", "末脚", "鬼気森然", "駆り立てる想い",
                        "長距離コーナー◎", "追込直線〇", "ウマ好み", "一匹狼", "ロックオン", "昂る鼓動", "ネバーギブアップ", "最高峰の夢"
                    ],
                }
            },
            new RaceResultObj(2, 3, 10, 6, 13, "ナリタタイシン", ["-", 0], "", "", 922, [12,13,11], 0, "1", 9),
            new RaceResultObj(2, 2, 5, 1, 7, "ナリタタイシン", ["-", 0], "", "", 925, [14,13,9], 0, "アタマ", 9),
            new RaceResultObj(1, 1, 6, 11, 10, "ナリタタイシン", ["-", 0], "", "", 1312, [13,13,12,6], 0, "アタマ", 7)
        ]
    },
    {
        "ID":17,
        "Name": ["うしうし", "Ushiushi"],
        "result":[
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
            {
                "RaceGrpID":4,
                "RaceID":4,
                "Date":{"year":24, "month":2, "day":12},
                "Place":"",
                "Title":"第3回すっご杯トリオトーナメント1回戦第2試合第1レース",
                "RaceName":"スプリンターズステークス",
                "RaceGrade":"G1",
                "Goal":"",
                "MembersCnt":"9",
                "Number":"",
                "Favorite":"",
                "Name":"サイレンススズカ",
                "Runk":["UE3", 30677],
                "Strategy":"逃げ",
                "Motivation":"",
                "CourseLength":"",
                "Season":"秋",
                "TimeZone":"昼",
                "Weather":"晴",
                "Feald":"芝",
                "Condition":"良",
                "Rotate":"",
                "GoalTime":"",
                "Corner":[],
                "FurlongTime":"",
                "Top":"",
                "TopDef":"",
                "Status":{
                    "Param":{
                        "Speed":1601,
                        "Stamina":1231,
                        "Power":1234,
                        "Guts":1125,
                        "Intelligent":1197,
                    },
                    "Aptitude":{
                        "Feald":"S",
                        "Length":"A",
                        "Strategy":"S",
                    },
                    "Skills":[
                        "先頭の景色は譲らない...！", "アングリングxスキーミング", "大逃げ", "弧線のプロフェッサー", "コーナー回復〇", "直線巧者", "最大集中", "末脚", "先駆け", "急ぎ足",
                        "異次元の逃亡者", "スプリントギア", "差しためらい", "善後策", "逃げのコツ〇", "盤石の構え", "お先に失礼っ！", "軽い足取り", "ネバーギブアップ", "急発進",
                    ],
                }
            },
            {
                "RaceGrpID":4,
                "RaceID":4,
                "Date":{"year":24, "month":2, "day":12},
                "Place":"中山",
                "Title":"第3回すっご杯トリオトーナメント1回戦第2試合第1レース",
                "RaceName":"スプリンターズステークス",
                "RaceGrade":"G1",
                "Goal":"",
                "MembersCnt":"9",
                "Number":"",
                "Favorite":"2",
                "Name":"サイレンススズカ",
                "Runk":["UE", 29053],
                "Strategy":"追込",
                "Motivation":"好調",
                "CourseLength":"25",
                "Season":"冬",
                "TimeZone":"昼",
                "Weather":"晴",
                "Feald":"芝",
                "Condition":"良",
                "Rotate":"右",
                "GoalTime":"",
                "Corner":[],
                "FurlongTime":"",
                "Top":"メイショウドトウ",
                "TopDef":"",
                "Status":{
                    "Param":{
                        "Speed":1645,
                        "Stamina":1224,
                        "Power":1273,
                        "Guts":1014,
                        "Intelligent":960,
                    },
                    "Aptitude":{
                        "Feald":"A",
                        "Length":"S",
                        "Strategy":"A",
                    },
                    "Skills":[
                        "Nemesis", "レッツアナボリック！", "あっぱれ大盤振る舞い！", "コーナー巧者〇", "コーナー回復〇", "直線巧者", "アガってきた！", "末脚", "鬼気森然", "駆り立てる想い",
                        "長距離コーナー◎", "追込直線〇", "ウマ好み", "一匹狼", "ロックオン", "昂る鼓動", "ネバーギブアップ", "最高峰の夢"
                    ],
                }
            },
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
            new RaceResultObj(3, 6, 9, 8, 14, "ツインターボ", ["-", 0], "", "", 0, [], 0, "3/4", 0),
            new RaceResultObj(2, 3, 7, 3, 11, "ツインターボ", ["-", 0], "", "", 919, [2,1,1], 0, "ハナ", 6),
            new RaceResultObj(2, 2, 8, 10, 8, "ツインターボ", ["-", 0], "", "", 929, [2,2,3], 0, "1/2", 13)
        ]
    },
    {
        "ID":21,
        "Name": ["シャカトレ", "Shakatore"],
        "result":[
            new RaceResultObj(3, 3, 1, 11, 0, "エアシャカール", ["-", 0], "", "", 0, [], 0, "-", 0),
            new RaceResultObj(2, 3, 11, 13, 7, "エアシャカール", ["-", 0], "", "", 923, [15,14,16], 0, "1/2", 10),
            new RaceResultObj(2, 1, 2, 5, 5, "エアシャカール", ["-", 0], "", "", 908, [12,11,10], 0, "7/2", 6)
        ]
    },
    {
        "ID":22,
        "Name": ["マサ", "Masa"],
        "result":[
            new RaceResultObj(3, 1, 3, 7, 3, "オグリキャップ", ["-", 0], "", "", 0, [], 0, "3/2", 0)
        ]
    },
    {
        "ID":23,
        "Name": ["ぽよだい", "Poyodai"],
        "result":[
            new RaceResultObj(3, 6, 10, 18, 12, "トーセンジョーダン", ["-", 0], "", "", 0, [], 0, "3/2", 0),
            new RaceResultObj(2, 3, 6, 9, 12, "マルゼンスキー", ["-", 0], "", "", 919, [5,6,3], 0, "1/2", 6),
            new RaceResultObj(2, 1, 5, 9, 4, "マルゼンスキー", ["-", 0], "", "", 912, [2,3,3], 0, "3/2", 10)
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
            new RaceResultObj(6, 1, 5, 7, 3, "サクラローレル", ["UD5", 38085], "差し", "絶好調", 0, [], 0, "ハナ"),
            new RaceResultObj(3, 6, 3, 14, 6, "アグネスタキオン", ["-", 0], "", "", 0, [], 0, "ハナ", 0),
            new RaceResultObj(1, 1, 2, 17, 9, "アグネスタキオン", ["-", 0], "", "", 1309, [9,7,6,2], 0, "3/2", 4)
        ]
    },
    {
        "ID":28,
        "Name": ["108", "108"],
        "result":[
            new RaceResultObj(3, 2, 4, 6, 3, "ハルウララ", ["-", 0], "", "", 0, [], 0, "", 0),
            new RaceResultObj(2, 1, 9, 15, 7, "ハルウララ", ["-", 0], "", "", 918, [16,16,15], 0, "3/4", 16),
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
];

const Rinrin_Members = [
    {
        "ID":1,
        "Name": ["鈴八", "Rinpatch"],
        "TrainerID":0, 
        "result": [
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
            new RaceResultObj(3, 2, 2, 12, 6, "シンコウウィンディ", ["-", 0], "", "", 0, [], 0, "", 0)
        ]
    },
    {
        "ID":8,
        "Name": ["みざくら", "Mizakura"],
        "TrainerID":0,
        "result": [
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
            new RaceResultObj(3, 5, 5, 5, 0, "トウカイテイオー", ["-", 0], "", "", 0, [], 0, "4", 0)
        ]
    },
    {
        "ID":16,
        "Name": ["セシル", "Seshiru"],
        "TrainerID":0,
        "result": [
            new RaceResultObj(3, 5, 2, 6, 2, "ゴールドシップ", ["-", 0], "", "", 0, [], 0, "3/4", 0)
        ]
    },
    {
        "ID":17,
        "Name": ["でんげん", "Dengen"],
        "TrainerID":0,
        "result": [
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
            new RaceResultObj(3, 3, 7, 12, 0, "レベレント", ["-", 0], "", "", 0, [], 0, "大差", 0)
        ]
    },
    {
        "ID":28,
        "Name": ["", ""],
        "result":[
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
]
