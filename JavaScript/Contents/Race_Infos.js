class RaceInfoObj {
    constructor(
        Place, Season, TimeZone, Field, Length,
        Rotate, Weather, Condition, MembersCnt
    ) {
        {
            this.MembersCnt = 0;
            this.Condition = "";
            this.Weather = "";
            this.Rotate = "";
            this.Length = 0;
            this.Field = "";
            this.TimeZone = "";
            this.Season = "";
            this.Place = "";

            switch(arguments.length) {
            case 9:
                this.MembersCnt = MembersCnt;
            case 8:
                this.Condition = Condition;
            case 7:
                this.Weather = Weather;
            case 6:
                this.Rotate = Rotate;
            case 5:
                this.Length = Length;
            case 4:
                this.Field = Field;
            case 3:
                this.TimeZone = TimeZone;
            case 2:
                this.Season = Season;
            case 1:
                this.Place = Place;
            default:
                break;
            }
        }
    }
}
class RaceInfomationObj {
    constructor(
        RaceID, SubTitle, AbbreviationName, terms,
        RaceName, RaceGrade, RaceDate, RaceInfo, Winner
    ) {
        this.RaceID = 0;
        this.SubTitle = "";
        this.AbbreviationName = "";
        this.terms = "";
        this.RaceName = "";
        this.RaceGrade = "";
        this.RaceDate = {"Year":0,"Month":0,"Day":0,"Date":"","Hour":22, "Min":0};
        this.RaceInfo = new RaceInfoObj();
        this.Winner = {"Top":{"Name":"", "Time":0},"Next":{"Name":"", "Time":0}};
        
        switch(arguments.length) {
        case 9:
            this.Winner = Winner;
        case 8:
            this.RaceInfo = RaceInfo;
        case 7:
            this.RaceDate = RaceDate;
        case 6:
            this.RaceGrade = RaceGrade;
        case 5:
            this.RaceName = RaceName;
        case 4:
            this.terms = terms;
        case 3:
            this.AbbreviationName = AbbreviationName;
        case 2:
            this.SubTitle = SubTitle;
        case 1:
            this.RaceID = RaceID;
            break;
        default:
            break;
        }
    }
};
class RaceGropeInfomationObj {
    constructor(RaceGroupeID, RaceCnt, Numbering, RaceTitle, Races) {
        this.RaceGroupeID = 0;
        this.RaceCnt = 0;
        this.Numbering = "";
        this.RaceTitle = "";
        this.Races = [];

        switch(arguments.length) {
        case 5:
            this.Races = Races;
        case 4:
            this.RaceTitle = RaceTitle;
        case 3:
            this.Numbering = Numbering;
        case 2:
            this.RaceCnt = RaceCnt;
        case 1:
            this.RaceGroupeID = RaceGroupeID;
            break;
        default:
            break;
        }
    }
};


const DB_RaceInfo = [
    new RaceGropeInfomationObj(
        1, 1,"第1回","すっ　ご杯",
        [
            new RaceInfomationObj(
                1,"","第1回すっ　ご杯","サークル内","神戸新聞杯","G2", {"Year":2023,"Month":7,"Day":31,"Date":"月曜","Hour":"22","Min":"00"},
                new RaceInfoObj("京都","秋","昼","芝",2200,"右・外","晴","良",18), {"Top":{"Name":"テイエムオペラオー", "Time":1305}, "Next":{"Name":"アグネスタキオン", "Time":1309}}
            )
        ]
    ),
    new RaceGropeInfomationObj(
        2, 3, "第2回", "すっ　ご杯",
        [
            new RaceInfomationObj(
                1,"予選奇数ブロック","すっ　ご杯2 奇数予選","サークル内","","EX",{"Year":2023,"Month":9,"Day":25,"Date":"月曜","Hour":"21","Min":"40"},
                new RaceInfoObj("中山","夏","昼","芝",1600,"右・外","晴","良",16),{"Top":{"Name":"エアグルーヴ", "Time":902},"Next":{"Name":"エアシャカール", "Time":908}}
            ),
            new RaceInfomationObj(
                2,"予選偶数ブロック","すっ　ご杯2 偶数予選","サークル内","","EX", {"Year":2023,"Month":9,"Day":25,"Date":"月曜","Hour":"21","Min":"50"},
                new RaceInfoObj("中山","夏","昼","芝",1600,"右・外","晴","良",16), {"Top":{"Name":"サイレンススズカ", "Time":916},"Next":{"Name":"ミスターシービー", "Time":921}}
            ),
            new RaceInfomationObj(
                3,"決勝","すっ　ご杯2 決勝","サークル内","","EX", {"Year":2023,"Month":9,"Day":25,"Date":"月曜","Hour":"22","Min":"00",},
                new RaceInfoObj("中山","夏","昼","芝",1600,"右・外","晴","良",16), {"Top":{"Name":"タイキシャトル", "Time":913},"Next":{"Name":"ミスターシービー", "Time":915}}
            ),
        ]
    ),
    new RaceGropeInfomationObj(
        3, 6, "第1回", "すっ　ごりんりん対抗戦",
        [
            new RaceInfomationObj(
                1,"第1レース 短距離","サークル対抗戦 短距離","サークル間","","EX",
                {"Year":2023,"Month":11,"Day":15,"Date":"水曜","Hour":"","Min":""},
                new RaceInfoObj("","","","芝",0,"","","",12),
                {"Top":{"Name":"カレンチャン", "Time":0},"Next":{"Name":"ニシノフラワー", "Time":0}}
            ),
            new RaceInfomationObj(
                2,"第2レース ダート","サークル対抗戦 ダート","サークル間","","EX",
                {"Year":2023,"Month":11,"Day":15,"Date":"水曜","Hour":"","Min":""},
                new RaceInfoObj("","","","芝",0,"","","",12),
                {"Top":{"Name":"コパノリッキー", "Time":0},"Next":{"Name":"シンコウウィンディ", "Time":0}}
            ),
            new RaceInfomationObj(
                3,"第3レース 長距離","サークル対抗戦 長距離","サークル間","","EX",
                {"Year":2023,"Month":11,"Day":15,"Date":"水曜","Hour":"","Min":""},
                new RaceInfoObj("","","","芝",0,"","","",12),
                {"Top":{"Name":"エアシャカール", "Time":0},"Next":{"Name":"テイエムオペラオー", "Time":0}}
            ),
            new RaceInfomationObj(
                4,"第4レース マイル","サークル対抗戦 マイル","サークル間","","EX",
                {"Year":2023,"Month":11,"Day":15,"Date":"水曜","Hour":"","Min":""},
                new RaceInfoObj("","","","芝",0,"","","",12),
                {"Top":{"Name":"タイキシャトル", "Time":"1:29.8"},"Next":{"Name":"タイキシャトル", "Time":0}}
            ),
            new RaceInfomationObj(
                5,"第5レース 中距離","サークル対抗戦 中距離","サークル間","","EX",
                {"Year":2023,"Month":11,"Day":15,"Date":"水曜","Hour":"","Min":""},
                new RaceInfoObj("","","","芝",0,"","","",12),
                {"Top":{"Name":"アドマイヤベガ", "Time":"2:10.6"},"Next":{"Name":"ゴールドシップ", "Time":0}}
            ),
            new RaceInfomationObj(
                6,"第6レース EX","サークル対抗戦 EX","サークル間","","EX",
                {"Year":2023,"Month":11,"Day":15,"Date":"水曜","Hour":"","Min":""},
                new RaceInfoObj("東京","","","芝",2400,"左・内","","",18),
                {"Top":{"Name":"タイキシャトル", "Time":"2:21.7"},"Next":{"Name":"カツラギエース", "Time":0}}
            ),
        ]
    ),
    {
        "RaceGroupeID":4,
        "RaceCnt":18,
        "Numbering":"第3回",
        "RaceTitle":"すっ　ご杯トリオトーナメント",
        "Races":[
            {
                "RaceID":1,
                "SubTitle":"第1試合 第1レース",
                "AbbreviationName":"トリオ杯 予選1 1レース",
                "terms":"サークル内",
                "RaceName":"NHKマイルカップ",
                "RaceGrade":"G1",
                "RaceDate":{
                    "Year":2024,
                    "Month":2,
                    "Day":12,
                    "Date":"月曜",
                    "Hour":"22",
                    "Min":"00",
                },
                "RaceInfo":{
                    "Place":"東京",
                    "Season":"春",
                    "TimeZone":"昼",
                    "Field":"芝",
                    "Length":1600,
                    "Rotate":"左",
                    "Weather":"晴",
                    "Condition":"良",
                    "MembersCnt":9,
                },
                "Winner":{
                    "Top":{"Name":"ダイタクヘリオス", "Time":"1:30.1"},
                    "Next":{"Name":"エアグルーヴ", "Time":0},
                }
            },
            {
                "RaceID":2,
                "SubTitle":"第1試合 第2レース",
                "AbbreviationName":"トリオ杯 予選1 2レース",
                "terms":"サークル内",
                "RaceName":"東京優駿 日本ダービー",
                "RaceGrade":"G1",
                "RaceDate":{
                    "Year":2024,
                    "Month":2,
                    "Day":12,
                    "Date":"月曜",
                    "Hour":"22",
                    "Min":"10",
                },
                "RaceInfo":{
                    "Place":"東京",
                    "Season":"春",
                    "TimeZone":"昼",
                    "Field":"芝",
                    "Length":2400,
                    "Rotate":"左",
                    "Weather":"晴",
                    "Condition":"良",
                    "MembersCnt":9,
                },
                "Winner":{
                    "Top":{"Name":"タイキシャトル", "Time":0},
                    "Next":{"Name":"タニノギムレット", "Time":0},
                }
            },
            {
                "RaceID":3,
                "SubTitle":"第1試合 第3レース",
                "AbbreviationName":"トリオ杯 予選1 3レース",
                "terms":"サークル内",
                "RaceName":"有馬記念",
                "RaceGrade":"G1",
                "RaceDate":{
                    "Year":2024,
                    "Month":2,
                    "Day":12,
                    "Date":"月曜",
                    "Hour":"22",
                    "Min":"20",
                },
                "RaceInfo":{
                    "Place":"中山",
                    "Season":"冬",
                    "TimeZone":"昼",
                    "Field":"芝",
                    "Length":2500,
                    "Rotate":"右・外",
                    "Weather":"晴",
                    "Condition":"良",
                    "MembersCnt":9,
                },
                "Winner":{
                    "Top":{"Name":"ナリタタイシン", "Time":"2:27.7"},
                    "Next":{"Name":"メイショウドトウ", "Time":0},
                }
            },
            {
                "RaceID":4,
                "SubTitle":"第2試合 第1レース",
                "AbbreviationName":"トリオ杯 予選2 1レース",
                "terms":"サークル内",
                "RaceName":"スプリンターズステークス",
                "RaceGrade":"G1",
                "RaceDate":{
                    "Year":2024,
                    "Month":2,
                    "Day":12,
                    "Date":"月曜",
                    "Hour":"",
                    "Min":"",
                },
                "RaceInfo":{
                    "Place":"",
                    "Season":"",
                    "TimeZone":"昼",
                    "Field":"芝",
                    "Length":0,
                    "Rotate":"",
                    "Weather":"晴",
                    "Condition":"良",
                    "MembersCnt":9,
                },
                "Winner":{
                    "Top":{"Name":"", "Time":0},
                    "Next":{"Name":"", "Time":0},
                }
            },
            {
                "RaceID":5,
                "SubTitle":"第2試合 第2レース",
                "AbbreviationName":"トリオ杯 予選2 2レース",
                "terms":"サークル内",
                "RaceName":"有馬記念",
                "RaceGrade":"G1",
                "RaceDate":{
                    "Year":2024,
                    "Month":2,
                    "Day":12,
                    "Date":"月曜",
                    "Hour":"",
                    "Min":"",
                },
                "RaceInfo":{
                    "Place":"中山",
                    "Season":"冬",
                    "TimeZone":"昼",
                    "Field":"芝",
                    "Length":2500,
                    "Rotate":"右・外",
                    "Weather":"晴",
                    "Condition":"良",
                    "MembersCnt":9,
                },
                "Winner":{
                    "Top":{"Name":"", "Time":0},
                    "Next":{"Name":"", "Time":0},
                }
            },
            {
                "RaceID":6,
                "SubTitle":"第2試合 第3レース",
                "AbbreviationName":"トリオ杯 予選2 3レース",
                "terms":"サークル内",
                "RaceName":"朝日杯フューチュリティステークス",
                "RaceGrade":"G1",
                "RaceDate":{
                    "Year":2024,
                    "Month":2,
                    "Day":12,
                    "Date":"月曜",
                    "Hour":"",
                    "Min":"",
                },
                "RaceInfo":{
                    "Place":"",
                    "Season":"冬",
                    "TimeZone":"昼",
                    "Field":"芝",
                    "Length":0,
                    "Rotate":"",
                    "Weather":"晴",
                    "Condition":"良",
                    "MembersCnt":9,
                },
                "Winner":{
                    "Top":{"Name":"", "Time":0},
                    "Next":{"Name":"", "Time":0},
                }
            },
            {
                "RaceID":7,
                "SubTitle":"第3試合 第1レース",
                "AbbreviationName":"トリオ杯 予選3 1レース",
                "terms":"サークル内",
                "RaceName":"大阪杯",
                "RaceGrade":"G1",
                "RaceDate":{
                    "Year":2024,
                    "Month":2,
                    "Day":12,
                    "Date":"月曜",
                    "Hour":"",
                    "Min":"",
                },
                "RaceInfo":{
                    "Place":"",
                    "Season":"",
                    "TimeZone":"昼",
                    "Field":"芝",
                    "Length":0,
                    "Rotate":"",
                    "Weather":"晴",
                    "Condition":"良",
                    "MembersCnt":9,
                },
                "Winner":{
                    "Top":{"Name":"", "Time":0},
                    "Next":{"Name":"", "Time":0},
                }
            },
            {
                "RaceID":8,
                "SubTitle":"第3試合 第2レース",
                "AbbreviationName":"トリオ杯 予選3 2レース",
                "terms":"サークル内",
                "RaceName":"NHKマイルカップ",
                "RaceGrade":"G1",
                "RaceDate":{
                    "Year":2024,
                    "Month":2,
                    "Day":12,
                    "Date":"月曜",
                    "Hour":"",
                    "Min":"",
                },
                "RaceInfo":{
                    "Place":"",
                    "Season":"",
                    "TimeZone":"昼",
                    "Field":"芝",
                    "Length":0,
                    "Rotate":"",
                    "Weather":"晴",
                    "Condition":"良",
                    "MembersCnt":9,
                },
                "Winner":{
                    "Top":{"Name":"", "Time":0},
                    "Next":{"Name":"", "Time":0},
                }
            },
            {
                "RaceID":9,
                "SubTitle":"第3試合 第3レース",
                "AbbreviationName":"トリオ杯 予選3 3レース",
                "terms":"サークル内",
                "RaceName":"天皇賞・春",
                "RaceGrade":"G1",
                "RaceDate":{
                    "Year":2024,
                    "Month":2,
                    "Day":12,
                    "Date":"月曜",
                    "Hour":"",
                    "Min":"",
                },
                "RaceInfo":{
                    "Place":"",
                    "Season":"",
                    "TimeZone":"昼",
                    "Field":"芝",
                    "Length":0,
                    "Rotate":"",
                    "Weather":"晴",
                    "Condition":"良",
                    "MembersCnt":9,
                },
                "Winner":{
                    "Top":{"Name":"", "Time":0},
                    "Next":{"Name":"", "Time":0},
                }
            },
            {
                "RaceID":10,
                "SubTitle":"第4試合 第1レース",
                "AbbreviationName":"トリオ杯 準決勝1 1レース",
                "terms":"サークル内",
                "RaceName":"高松宮記念",
                "RaceGrade":"G1",
                "RaceDate":{
                    "Year":2024,
                    "Month":2,
                    "Day":12,
                    "Date":"月曜",
                    "Hour":"",
                    "Min":"",
                },
                "RaceInfo":{
                    "Place":"",
                    "Season":"",
                    "TimeZone":"昼",
                    "Field":"芝",
                    "Length":0,
                    "Rotate":"",
                    "Weather":"晴",
                    "Condition":"良",
                    "MembersCnt":9,
                },
                "Winner":{
                    "Top":{"Name":"", "Time":0},
                    "Next":{"Name":"", "Time":0},
                }
            },
            {
                "RaceID":11,
                "SubTitle":"第4試合 第2レース",
                "AbbreviationName":"トリオ杯 準決勝1 2レース",
                "terms":"サークル内",
                "RaceName":"阪神ジュベナイルフィリーズ",
                "RaceGrade":"G1",
                "RaceDate":{
                    "Year":2024,
                    "Month":2,
                    "Day":12,
                    "Date":"月曜",
                    "Hour":"",
                    "Min":"",
                },
                "RaceInfo":{
                    "Place":"",
                    "Season":"",
                    "TimeZone":"昼",
                    "Field":"芝",
                    "Length":0,
                    "Rotate":"",
                    "Weather":"晴",
                    "Condition":"良",
                    "MembersCnt":9,
                },
                "Winner":{
                    "Top":{"Name":"", "Time":0},
                    "Next":{"Name":"", "Time":0},
                }
            },
            {
                "RaceID":12,
                "SubTitle":"第4試合 第3レース",
                "AbbreviationName":"トリオ杯 準決勝1 3レース",
                "terms":"サークル内",
                "RaceName":"エリザベス女王杯",
                "RaceGrade":"G1",
                "RaceDate":{
                    "Year":2024,
                    "Month":2,
                    "Day":12,
                    "Date":"月曜",
                    "Hour":"",
                    "Min":"",
                },
                "RaceInfo":{
                    "Place":"",
                    "Season":"",
                    "TimeZone":"昼",
                    "Field":"芝",
                    "Length":0,
                    "Rotate":"",
                    "Weather":"晴",
                    "Condition":"良",
                    "MembersCnt":9,
                },
                "Winner":{
                    "Top":{"Name":"", "Time":0},
                    "Next":{"Name":"", "Time":0},
                }
            },
            {
                "RaceID":13,
                "SubTitle":"第5試合 第1レース",
                "AbbreviationName":"トリオ杯 準決勝2 1レース",
                "terms":"サークル内",
                "RaceName":"NHKマイルカップ",
                "RaceGrade":"G1",
                "RaceDate":{
                    "Year":2024,
                    "Month":2,
                    "Day":12,
                    "Date":"月曜",
                    "Hour":"",
                    "Min":"",
                },
                "RaceInfo":{
                    "Place":"",
                    "Season":"",
                    "TimeZone":"昼",
                    "Field":"芝",
                    "Length":0,
                    "Rotate":"",
                    "Weather":"晴",
                    "Condition":"良",
                    "MembersCnt":9,
                },
                "Winner":{
                    "Top":{"Name":"", "Time":0},
                    "Next":{"Name":"", "Time":0},
                }
            },
            {
                "RaceID":14,
                "SubTitle":"第5試合 第2レース",
                "AbbreviationName":"トリオ杯 準決勝2 2レース",
                "terms":"サークル内",
                "RaceName":"高松宮記念",
                "RaceGrade":"G1",
                "RaceDate":{
                    "Year":2024,
                    "Month":2,
                    "Day":12,
                    "Date":"月曜",
                    "Hour":"",
                    "Min":"",
                },
                "RaceInfo":{
                    "Place":"",
                    "Season":"",
                    "TimeZone":"昼",
                    "Field":"芝",
                    "Length":0,
                    "Rotate":"",
                    "Weather":"晴",
                    "Condition":"良",
                    "MembersCnt":9,
                },
                "Winner":{
                    "Top":{"Name":"", "Time":0},
                    "Next":{"Name":"", "Time":0},
                }
            },
            {
                "RaceID":15,
                "SubTitle":"第5試合 第3レース",
                "AbbreviationName":"トリオ杯 準決勝2 3レース",
                "terms":"サークル内",
                "RaceName":"オークス 優駿牝馬",
                "RaceGrade":"G1",
                "RaceDate":{
                    "Year":2024,
                    "Month":2,
                    "Day":12,
                    "Date":"月曜",
                    "Hour":"",
                    "Min":"",
                },
                "RaceInfo":{
                    "Place":"",
                    "Season":"",
                    "TimeZone":"昼",
                    "Field":"芝",
                    "Length":0,
                    "Rotate":"",
                    "Weather":"晴",
                    "Condition":"良",
                    "MembersCnt":9,
                },
                "Winner":{
                    "Top":{"Name":"", "Time":0},
                    "Next":{"Name":"", "Time":0},
                }
            },
            {
                "RaceID":16,
                "SubTitle":"第6試合 第1レース",
                "AbbreviationName":"トリオ杯 決勝 1レース",
                "terms":"サークル内",
                "RaceName":"秋華賞",
                "RaceGrade":"G1",
                "RaceDate":{
                    "Year":2024,
                    "Month":2,
                    "Day":12,
                    "Date":"月曜",
                    "Hour":"",
                    "Min":"",
                },
                "RaceInfo":{
                    "Place":"",
                    "Season":"",
                    "TimeZone":"昼",
                    "Field":"芝",
                    "Length":0,
                    "Rotate":"",
                    "Weather":"晴",
                    "Condition":"良",
                    "MembersCnt":9,
                },
                "Winner":{
                    "Top":{"Name":"", "Time":0},
                    "Next":{"Name":"", "Time":0},
                }
            },
            {
                "RaceID":17,
                "SubTitle":"第6試合 第2レース",
                "AbbreviationName":"トリオ杯 決勝 2レース",
                "terms":"サークル内",
                "RaceName":"高松宮記念",
                "RaceGrade":"G1",
                "RaceDate":{
                    "Year":2024,
                    "Month":2,
                    "Day":12,
                    "Date":"月曜",
                    "Hour":"",
                    "Min":"",
                },
                "RaceInfo":{
                    "Place":"",
                    "Season":"",
                    "TimeZone":"昼",
                    "Field":"芝",
                    "Length":0,
                    "Rotate":"",
                    "Weather":"晴",
                    "Condition":"良",
                    "MembersCnt":9,
                },
                "Winner":{
                    "Top":{"Name":"", "Time":0},
                    "Next":{"Name":"", "Time":0},
                }
            },
            {
                "RaceID":18,
                "SubTitle":"第6試合 第3レース",
                "AbbreviationName":"トリオ杯 決勝 3レース",
                "terms":"サークル内",
                "RaceName":"天皇賞・春",
                "RaceGrade":"G1",
                "RaceDate":{
                    "Year":2024,
                    "Month":2,
                    "Day":12,
                    "Date":"月曜",
                    "Hour":"",
                    "Min":"",
                },
                "RaceInfo":{
                    "Place":"",
                    "Season":"",
                    "TimeZone":"昼",
                    "Field":"芝",
                    "Length":0,
                    "Rotate":"",
                    "Weather":"晴",
                    "Condition":"良",
                    "MembersCnt":9,
                },
                "Winner":{
                    "Top":{"Name":"", "Time":0},
                    "Next":{"Name":"", "Time":0},
                }
            },
        ]
    },
    {
        "RaceGroupeID":5,
        "RaceCnt":6,
        "Numbering":"第2回",
        "RaceTitle":"すっ　ごりんりん対抗戦",
        "Races":[
            {
                "RaceID":1,
                "SubTitle":"第1レース ダート",
                "AbbreviationName":"サークル対抗戦2 ダート",
                "terms":"サークル間",
                "RaceName":"全日本ジュニア優駿",
                "RaceGrade":"G1",
                "RaceDate":{
                    "Year":2024,
                    "Month":2,
                    "Day":12,
                    "Date":"月曜",
                    "Hour":"",
                    "Min":"",
                },
                "RaceInfo":{
                    "Place":"川崎",
                    "Season":"冬",
                    "TimeZone":"夜",
                    "Field":"ダ",
                    "Length":1600,
                    "Rotate":"左",
                    "Weather":"晴",
                    "Condition":"良",
                    "MembersCnt":9,
                },
                "Winner":{
                    "Top":{"Name":"タイキシャトル", "Time":"1:38.8"},
                    "Next":{"Name":"スマートファルコン", "Time":0},
                }
            },
        ]
    },
    {
        "RaceGroupeID":6,
        "RaceCnt":6,
        "Numbering":"第4回",
        "RaceTitle":"すっご杯～FourSquad～",
        "terms":"サークル内",
        "Races":[
            {
                "RaceID":1,
                "SubTitle":"第1戦 長距離",
                "AbbreviationName":"すっご杯4 長距離",
                "RaceName":"有馬記念",
                "RaceGrade":"G1",
                "RaceDate":{
                    "Year":2024,
                    "Month":9,
                    "Day":23,
                    "Date":"月曜",
                    "Hour":"21",
                    "Min":"35",
                },
                "RaceInfo":{
                    "Place":"中山",
                    "Season":"冬",
                    "TimeZone":"昼",
                    "Field":"芝",
                    "Length":2500,
                    "Rotate":"右・外",
                    "Weather":"晴",
                    "Condition":"良",
                    "MembersCnt":12,
                },
                "Winner":{
                    "Top":{"Name":11601, "Time":1484},   //Timeは計算しやすくするため100msecで保持
                    "Next":{"Name":11801, "Time":0},
                }
            },
            {
                "RaceID":2,
                "SubTitle":"第2戦 ダート",
                "AbbreviationName":"すっご杯4 ダート",
                "RaceName":"チャンピオンズカップ",
                "RaceGrade":"G1",
                "RaceDate":{
                    "Year":2024,
                    "Month":9,
                    "Day":23,
                    "Date":"月曜",
                    "Hour":"21",
                    "Min":"55",
                },
                "RaceInfo":{
                    "Place":"中京",
                    "Season":"冬",
                    "TimeZone":"昼",
                    "Field":"ダ",
                    "Length":1800,
                    "Rotate":"左",
                    "Weather":"晴",
                    "Condition":"良",
                    "MembersCnt":12,
                },
                "Winner":{
                    "Top":{"Name":"ホッコータルマエ", "Time":1072},
                    "Next":{"Name":"コパノリッキー", "Time":0},
                }
            },
            {
                "RaceID":3,
                "SubTitle":"第3戦 中距離",
                "AbbreviationName":"すっご杯4 中距離",
                "terms":"サークル内",
                "RaceName":"優駿牝馬(オークス)",
                "RaceGrade":"G1",
                "RaceDate":{
                    "Year":2024,
                    "Month":9,
                    "Day":23,
                    "Date":"月曜",
                    "Hour":"22",
                    "Min":"15",
                },
                "RaceInfo":{
                    "Place":"東京",
                    "Season":"春",
                    "TimeZone":"昼",
                    "Field":"芝",
                    "Length":2400,
                    "Rotate":"左",
                    "Weather":"晴",
                    "Condition":"良",
                    "MembersCnt":12,
                },
                "Winner":{
                    "Top":{"Name":"メジロラモーヌ", "Time":1412},
                    "Next":{"Name":"ジェンティルドンナ", "Time":0},
                }
            },
            {
                "RaceID":4,
                "SubTitle":"第4戦 マイル",
                "AbbreviationName":"すっご杯4 マイル",
                "terms":"サークル内",
                "RaceName":"桜花賞",
                "RaceGrade":"G1",
                "RaceDate":{
                    "Year":2024,
                    "Month":9,
                    "Day":23,
                    "Date":"月曜",
                    "Hour":"22",
                    "Min":"30",
                },
                "RaceInfo":{
                    "Place":"阪神",
                    "Season":"春",
                    "TimeZone":"昼",
                    "Field":"芝",
                    "Length":1600,
                    "Rotate":"右・外",
                    "Weather":"晴",
                    "Condition":"良",
                    "MembersCnt":12,
                },
                "Winner":{
                    "Top":{"Name":"シーキングザパール", "Time":904},
                    "Next":{"Name":"メイショウドトウ", "Time":0},
                }
            },
            {
                "RaceID":5,
                "SubTitle":"第5戦 短距離",
                "AbbreviationName":"すっご杯4 短距離",
                "terms":"サークル内",
                "RaceName":"スプリンターズステークス",
                "RaceGrade":"G1",
                "RaceDate":{
                    "Year":2024,
                    "Month":9,
                    "Day":23,
                    "Date":"月曜",
                    "Hour":"22",
                    "Min":"50",
                },
                "RaceInfo":{
                    "Place":"中山",
                    "Season":"秋",
                    "TimeZone":"昼",
                    "Field":"芝",
                    "Length":1200,
                    "Rotate":"右・外",
                    "Weather":"晴",
                    "Condition":"良",
                    "MembersCnt":12,
                },
                "Winner":{
                    "Top":{"Name":"シーキングザパール", "Time":673},
                    "Next":{"Name":"タイキシャトル", "Time":0},
                }
            },
            {
                "RaceID":6,
                "SubTitle":"第6戦 ダート",
                "AbbreviationName":"すっご杯4 ダート",
                "terms":"サークル内",
                "RaceName":"全日本ジュニア優駿",
                "RaceGrade":"G1",
                "RaceDate":{
                    "Year":2024,
                    "Month":9,
                    "Day":23,
                    "Date":"月曜",
                    "Hour":"23",
                    "Min":"05",
                },
                "RaceInfo":{
                    "Place":"川崎",
                    "Season":"冬",
                    "TimeZone":"夜",
                    "Field":"ダ",
                    "Length":1600,
                    "Rotate":"左",
                    "Weather":"晴",
                    "Condition":"良",
                    "MembersCnt":12,
                },
                "Winner":{
                    "Top":{"Name":"イナリワン", "Time":970},
                    "Next":{"Name":"アグネスデジタル", "Time":0},
                }
            },
        ]
    },
]