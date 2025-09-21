// const ROOT = "/"
const ROOT = "/umaClubs"

// 曜日の定義
const DATE_ID_NONE			= 0;
const DATE_ID_SUNDAY		= 1;
const DATE_ID_MONDAY		= 2;
const DATE_ID_TUESDAY		= 3;
const DATE_ID_WEDNESDAY		= 4;
const DATE_ID_THURSDAY		= 5;
const DATE_ID_FRIDAY		= 6;
const DATE_ID_SATURDAY		= 7;
const DATE_NAME_LIST = [
	"-", "日", "月", "火", "水", "木", "金", "土"
];

// G2
const RACE_ID_G2_KOBE_SHINBUN_CUP	= 26;
const RACE_G2_NAME_LIST = [
	"アメリカJCC", "プロキオンステークス", "京都記念", "中山記念", "チューリップ賞", "フィリーズレビュー",
	"弥生賞ディープインパクト記念", "スプリングステークス", "金鯱賞", "阪神大賞典", "日経賞", "ニュージーランドトロフィー",
	"阪神牝馬ステークス", "青葉賞", "フローラステークス", "読売マイラーズカップ", "京王杯スプリングカップ", "京都新聞杯",
	"目黒記念", "札幌記念", "紫苑ステークス", "セントウルステークス", "ローズステークス", "セントライト記念",
	"オールカマー", "神戸新聞杯", "毎日王冠", "京都大賞典", "アイルランドトロフィー", "スワンステークス",
	"富士ステークス", "京王杯2歳ステークス", "アルゼンチン共和国杯", "デイリー杯2歳ステークス", "東京スポーツ杯2歳ステークス", "ステイヤーズステークス", "阪神カップ"
];

// その他
const RaceInfoID_EX_SUGGO_2_1	= 1;
const RACE_EX_NAME_LIST = [
	"すっご杯2 予選奇数ブロック"
];

// レース場
const RacePlaceID_NONE		=  0;
const RacePlaceID_SAPPORO	=  1;
const RacePlaceID_HAKODATE	=  2;
const RacePlaceID_FUKUSHIMA	=  3;
const RacePlaceID_NIGATA	=  4;
const RacePlaceID_TOKYO		=  5;
const RacePlaceID_NAKAYAMA	=  6;
const RacePlaceID_TYUKYO	=  7;
const RacePlaceID_KYOTO		=  8;
const RacePlaceID_HANSHIN	=  9;
const RacePlaceID_KOKURA	= 10;
const RacePlace_Name_LIST = [
	"-", "札幌", "函館", "福島", "新潟", "東京", "中山", "中京", "京都", "阪神", "小倉"
];

// 脚質
const STRATEGY_ID_NONE	= 0;
const STRATEGY_ID_FRONT	= 1;
const STRATEGY_ID_PACE	= 2;
const STRATEGY_ID_LATE	= 3;
const STRATEGY_ID_END	= 4;
const STRATEGY__Name_LIST = [
	"-", "逃げ", "先行", "差し", "追込"
];

// 評価点
const TRAINEE_RANK_ID_NONE	=  0;
const TRAINEE_RANK_ID_G		=  1;
const TRAINEE_RANK_ID_Gp	=  2;
const TRAINEE_RANK_ID_F		=  3;
const TRAINEE_RANK_ID_Fp	=  4;
const TRAINEE_RANK_ID_E		=  5;
const TRAINEE_RANK_ID_Ep	=  6;
const TRAINEE_RANK_ID_D		=  7;
const TRAINEE_RANK_ID_Dp	=  8;
const TRAINEE_RANK_ID_C		=  9;
const TRAINEE_RANK_ID_Cp	= 10;
const TRAINEE_RANK_ID_B		= 11;
const TRAINEE_RANK_ID_Bp	= 12;
const TRAINEE_RANK_ID_A		= 13;
const TRAINEE_RANK_ID_Ap	= 14;
const TRAINEE_RANK_ID_S		= 15;
const TRAINEE_RANK_ID_Sp	= 16;
const TRAINEE_RANK_ID_SS	= 17;
const TRAINEE_RANK_ID_SSp	= 18;
const TRAINEE_RANK_ID_UG	= 19;
const TRAINEE_RANK_ID_UG1	= 20;
const TRAINEE_RANK_ID_UG2	= 21;
const TRAINEE_RANK_ID_UG3	= 22;
const TRAINEE_RANK_ID_UG4	= 23;
const TRAINEE_RANK_ID_UG5	= 24;
const TRAINEE_RANK_ID_UG6	= 25;
const TRAINEE_RANK_ID_UG7	= 26;
const TRAINEE_RANK_ID_UG8	= 27;
const TRAINEE_RANK_ID_UG9	= 28;
const TRAINEE_RANK_ID_UF	= 29;
const TRAINEE_RANK_ID_UF1	= 30;
const TRAINEE_RANK_ID_UF2	= 31;
const TRAINEE_RANK_ID_UF3	= 32;
const TRAINEE_RANK_ID_UF4	= 33;
const TRAINEE_RANK_ID_UF5	= 34;
const TRAINEE_RANK_ID_UF6	= 35;
const TRAINEE_RANK_ID_UF7	= 36;
const TRAINEE_RANK_ID_UF8	= 37;
const TRAINEE_RANK_ID_UF9	= 38;
const TRAINEE_RANK_ID_UE	= 39;
const TRAINEE_RANK_ID_UE1	= 40;
const TRAINEE_RANK_ID_UE2	= 41;
const TRAINEE_RANK_ID_UE3	= 42;
const TRAINEE_RANK_ID_UE4	= 43;
const TRAINEE_RANK_ID_UE5	= 44;
const TRAINEE_RANK_ID_UE6	= 45;
const TRAINEE_RANK_ID_UE7	= 46;
const TRAINEE_RANK_ID_UE8	= 47;
const TRAINEE_RANK_ID_UE9	= 48;
const TRAINEE_RANK_ID_UD	= 49;
const TRAINEE_RANK_ID_UD1	= 50;
const TRAINEE_RANK_ID_UD2	= 51;
const TRAINEE_RANK_ID_UD3	= 52;
const TRAINEE_RANK_ID_UD4	= 53;
const TRAINEE_RANK_ID_UD5	= 54;
const TRAINEE_RANK_ID_UD6	= 55;
const TRAINEE_RANK_ID_UD7	= 56;
const TRAINEE_RANK_ID_UD8	= 57;
const TRAINEE_RANK_ID_UD9	= 58;
const TRAINEE_RANK_ID_UC	= 59;
const TRAINEE_RANK_ID_UC1	= 60;
const TRAINEE_RANK_ID_UC2	= 61;
const TRAINEE_RANK_ID_UC3	= 62;
const TRAINEE_RANK_ID_UC4	= 63;
const TRAINEE_RANK_ID_UC5	= 64;
const TRAINEE_RANK_ID_UC6	= 65;
const TRAINEE_RANK_ID_UC7	= 66;
const TRAINEE_RANK_ID_UC8	= 67;
const TRAINEE_RANK_ID_UC9	= 68;
const TRAINEE_RANK_ID_UB	= 69;
const TRAINEE_RANK_ID_UB1	= 70;
const TRAINEE_RANK_ID_UB2	= 71;
const TRAINEE_RANK_ID_UB3	= 72;
const TRAINEE_RANK_ID_UB4	= 73;
const TRAINEE_RANK_ID_UB5	= 74;
const TRAINEE_RANK_ID_UB6	= 75;
const TRAINEE_RANK_ID_UB7	= 76;
const TRAINEE_RANK_ID_UB8	= 77;
const TRAINEE_RANK_ID_UB9	= 78;
const TRAINEE_RANK_ID_UA	= 79;
const TRAINEE_RANK_ID_UA1	= 80;
const TRAINEE_RANK_ID_UA2	= 81;
const TRAINEE_RANK_ID_UA3	= 82;
const TRAINEE_RANK_ID_UA4	= 83;
const TRAINEE_RANK_ID_UA5	= 84;
const TRAINEE_RANK_ID_UA6	= 85;
const TRAINEE_RANK_ID_UA7	= 86;
const TRAINEE_RANK_ID_UA8	= 87;
const TRAINEE_RANK_ID_UA9	= 88;
const TRAINEE_RANK_ID_US	= 89;
const TRAINEE_RANK_ID_US1	= 90;
const TRAINEE_RANK_ID_US2	= 91;
const TRAINEE_RANK_ID_US3	= 92;
const TRAINEE_RANK_ID_US4	= 93;
const TRAINEE_RANK_ID_US5	= 94;
const TRAINEE_RANK_ID_US6	= 95;
const TRAINEE_RANK_ID_US7	= 96;
const TRAINEE_RANK_ID_US8	= 97;
const TRAINEE_RANK_ID_US9	= 98;
const TRAINEE_RANK_ID_MAX	= 99;
const TRAINEE_RANK_NAME_LIST = [
	[
		"-", "G", "G+", "F", "F+", "E", "E+", "D", "D+", "C", "C+", "B", "B+", "A", "A+", "S", "S+", "SS", "SS+",
		"UG", "UG1", "UG2", "UG3", "UG4", "UG5", "UG6", "UG7", "UG8", "UG9", "UF", "UF1", "UF2", "UF3", "UF4", "UF5", "UF6", "UF7", "UF8", "UF9",
		"UE", "UE1", "UE2", "UE3", "UE4", "UE5", "UE6", "UE7", "UE8", "UE9", "UD", "UD1", "UD2", "UD3", "UD4", "UD5", "UD6", "UD7", "UD8", "UD9",
		"UC", "UC1", "UC2", "UC3", "UC4", "UC5", "UC6", "UC7", "UC8", "UC9", "UB", "UB1", "UB2", "UB3", "UB4", "UB5", "UB6", "UB7", "UB8", "UB9",
		"UA", "UA1", "UA2", "UA3", "UA4", "UA5", "UA6", "UA7", "UA8", "UA9", "US", "US1", "US2", "US3", "US4", "US5", "US6", "US7", "US8", "US9"
	],
	[
		0, 0, 300, 600, 900, 1300, 1800, 2300, 2900, 3500, 4900, 6500, 8200, 10000, 12100, 14500, 15900, 17500, 19200,
		19600, 20000, 20400, 20800, 21200, 21600, 22100, 22500, 23000, 23400, 23900, 24300, 24800, 25300, 25800, 26300, 26800, 27300, 27800, 28300,
		28800, 29400, 29900, 30400, 31000, 31500, 32100, 32700, 33200, 33800, 34400, 35000, 35600, 36200, 36800, 37500, 38100, 38700, 39400, 40000,
		40700, 41300, 42000, 42700, 43400, 44000, 44700, 45400, 46200, 46900, 47600, 48300, 49000, 49800, 50500, 51300, 52000, 52800, 53600, 54400,
		55200, 55900, 56700, 57500, 58400, 59200, 60000, 60800, 61700, 62500, 63400, 64200, 65100, 66000, 100000, 100000, 100000, 100000, 100000, 100000,
	]
]

/*******************************************************************************************************
 * 関数名	func_Common_RankPoint
 * 概要		評価点のランク表示取得
 * I/O		rankPoint	: 評価点
 * return	評価ランク
 * 更新日	2025/09/20	新規
 *******************************************************************************************************/
function func_Common_RankPoint(rankPoint) {
	let retRankTxt;

	if(TRAINEE_RANK_NAME_LIST[1][0] == rankPoint) {
		retRankTxt = TRAINEE_RANK_NAME_LIST[0][0]
	}
	else if(TRAINEE_RANK_NAME_LIST[1][TRAINEE_RANK_ID_MAX - 1] <= rankPoint) {
		retRankTxt = TRAINEE_RANK_NAME_LIST[0][TRAINEE_RANK_ID_MAX - 1]
	}
	else {
		for(let idx = 1; idx < TRAINEE_RANK_ID_MAX - 1; idx++) {
			if(
				(TRAINEE_RANK_NAME_LIST[1][idx] <= rankPoint)
					&&
				(TRAINEE_RANK_NAME_LIST[1][idx + 1] > rankPoint)
			) {
				retRankTxt = TRAINEE_RANK_NAME_LIST[0][idx]
				break;
			}
		}
	}

	return retRankTxt
}

/*******************************************************************************************************
 * 関数名	func_Common_HeaderLink
 * 概要		ページヘッダのホーム画面遷移処理
 * I/O		path	: ホーム画面への相対パス
 * return	-
 * 更新日	2025/09/20	新規
 *******************************************************************************************************/
function func_Common_HeaderLink(path) {
	const el_CommonHeader = document.getElementById('id_Common_Header');
	el_CommonHeader.addEventListener("click", () => {
		const tmp_Atag = document.createElement('a');

		tmp_Atag.href = path;
		tmp_Atag.click();
	});
}