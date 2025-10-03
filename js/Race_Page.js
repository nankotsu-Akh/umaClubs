/** ページID */
const urlParams = new URLSearchParams(window.location.search);
const targetCupID = parseInt(urlParams.get('id'));
let targetRaceID = 0;

// ページの対象となる大会のデータ
const targetRaceCupData = DB_RaceCup_Info[targetCupID - 1];

// 後からテーブル要素の書き換えをするために各行の構造体を保持
let  arr_RaceResult_Elements = [];
let arr_RaceMember_Elements = [];

// レース結果の行情報テンプレート
const tpltRowData_Result = {	// 行のエレメント
	Row			: {},	// 行情報
	ResultNum	: {},	// 着順
	Frame		: {},	// 枠番号
	Num			: {},	// ウマ番
	Name		: {}, 	// バ名
	Rank		: {},	// 評価ランク
	RankPoint	: {},	// 評価点
	TrainerName	: {},	// トレーナー名
	GoalTime	: {},	// ゴールタイム
	GoalDiff	: {},	// 着差
	PassageCorner	: {},	// コーナー通過順位
	FTime		: {},	// 上がりハロンタイム
	Favorite	: {},	// 人気
};
// 出馬表の行情報テンプレート
const tpltRowData_Member = {	// 行のエレメント
	Row			: {},	// 行情報
	Frame		: {},	// 枠番号
	Num			: {},	// ウマ番
	NameEtc		: {
		el			: {},
		Name		: {}, 	// バ名
		TrainerName	: {}, 	// トレーナー名
		Parent_1	: {}, 	// 継承親1
		Parent_2	: {}, 	// 継承親2
	},
	Ranks		: {
		el			: {},
		Ranks		: {},	// 評価ランク
		RankPoint	: {},	// 評価点
	},
	Before_1	: {},	// 前走
	Before_2	: {},	// 前々走
	Before_3	: {},	// 3走前
	Before_4	: {},	// 4走前
};

/*******************************************************************************************************
 * 関数名	func_Init
 * 概要		ページの生成
 * I/O		-
 * return	-
 * 更新日	2025/09/20	新規
 *******************************************************************************************************/
function func_Init() {
	func_Common_HeaderLink("../Race_Home.html");

	// アコーディオンメニューの動作処理
	func_Init_Acordion();

	// トーナメント表
	func_Init_Tournament();

	// 出馬表
	func_Init_RaceContents();

	// データを挿入
	func_DataInsert();
}

/*******************************************************************************************************
 * 関数名	func_Init_Acordion
 * 概要		アコーディオンメニューの生成
 * I/O		-
 * return	-
 * 更新日	2025/09/20	新規
 *******************************************************************************************************/
function func_Init_Acordion() {
	const el_acordionTitle = document.getElementsByClassName('cls_Acordion_Title');
	const el_acordionContent = document.getElementsByClassName('cls_Acordion_Content');

	for(let idx = 0; idx < el_acordionTitle.length; idx++) {
		const targetTitle = el_acordionTitle[idx];
		const targetContent = el_acordionContent[idx];

		targetTitle.addEventListener("click", () => {
			if(targetTitle.classList.contains('open')) {
				targetTitle.classList.remove('open');
				targetContent.classList.remove('open');
			}
			else {
				targetTitle.classList.add('open');
				targetContent.classList.add('open');
			}
		})
	}
}

/*******************************************************************************************************
 * 関数名	func_Init_Tournament
 * 概要		トーナメント表の生成
 * I/O		-
 * return	-
 * 更新日	2025/09/20	新規
 *******************************************************************************************************/
function func_Init_Tournament() {
	// 必要のないページには描画しない
	if(4 != targetCupID) {
		document.getElementById("id_Acordion_Tournament").style = "display:none;";
		return;
	}
}



/*******************************************************************************************************
 * 関数名	func_Init_RaceContents
 * 概要		出馬表等の生成
 * I/O		-
 * return	-
 * 更新日	2025/09/20	新規
 *******************************************************************************************************/
function func_Init_RaceContents() {
	/** 出馬表等は必ず表示する　*/

	// 選択タブの挙動を生成
	func_Init_RaceContents_ClickAction();
	// レース情報の生成
	func_Init_RaceContents_Result();	// レース結果の生成
	// 出走馬の生成
	func_Init_RaceContents_Member();	// 出馬表の生成
}

/*******************************************************************************************************
 * 関数名	func_Init_RaceContents_ClickAction
 * 概要		タブ選択時の挙動を設定
 * I/O		-
 * return	-
 * 更新日	2025/09/28	新規
 *******************************************************************************************************/
function func_Init_RaceContents_ClickAction() {
	const el_SelectTabResult = document.getElementById('id_SelectTab_Result');
	const el_SelectTabMember = document.getElementById('id_SelectTab_Member');
	
	// 1大会でレースが複数ある場合はレース選択タブを追加
	const el_RaceCntTab = document.getElementById('id_RaceCntTab');
	
	if(2 <= targetRaceCupData[enum_DB_Cup.Races].length){
		const arr_el_SelectRaceCnt = new Array(targetRaceCupData[enum_DB_Cup.Races].length);
		
		for(let idx = 0; idx < targetRaceCupData[enum_DB_Cup.Races].length; idx++) {
			arr_el_SelectRaceCnt[idx] = document.createElement("li");

			arr_el_SelectRaceCnt[idx].classList = ["cls_SelectRaceCnt", "cls_border_bs1"];
			arr_el_SelectRaceCnt[idx].innerHTML = "第" + (idx+1) + "レース";

			el_RaceCntTab.appendChild(arr_el_SelectRaceCnt[idx]);

			// タブ押下時の処理
			arr_el_SelectRaceCnt[idx].addEventListener("click", () => {
				if( !arr_el_SelectRaceCnt[idx].classList.contains('active') ) {
					for(let i = 0; i < arr_el_SelectRaceCnt.length; i++) {
						arr_el_SelectRaceCnt[i].classList.remove('active');
					}
					arr_el_SelectRaceCnt[idx].classList.add('active');

					targetRaceID = idx;
					func_DataInsert();
				}
			})
		}

		// 初期表示の操作
		arr_el_SelectRaceCnt[0].classList.add('active');
	}
	
	// タブ押下時の処理
	el_SelectTabResult.addEventListener("click", () => {
		if( !el_SelectTabResult.classList.contains('active') ) {
			el_SelectTabResult.classList.add('active');
			el_SelectTabMember.classList.remove('active');

			document.getElementById('id_RaceContents_RaceResult').style = "display:block;";
			document.getElementById('id_RaceInfo_RaceMember').style = "display:none;";
		}
	})
	
	// 表示変更の処理
	el_SelectTabMember.addEventListener("click", () => {
		if( !el_SelectTabMember.classList.contains('active') ) {
			el_SelectTabResult.classList.remove('active');
			el_SelectTabMember.classList.add('active');

			document.getElementById('id_RaceContents_RaceResult').style = "display:none;";
			document.getElementById('id_RaceInfo_RaceMember').style = "display:block;";
		}
	})
}

/*******************************************************************************************************
 * 関数名	func_Init_RaceContents_Result
 * 概要		レース結果の生成
 * I/O		-
 * return	-
 * 更新日	2025/09/20	新規
 *******************************************************************************************************/
function func_Init_RaceContents_Result() {
	// レース結果テーブルを生成
	const table = document.getElementById('id_RaceContents_RaceResult_Table').getElementsByTagName('tbody')[0];		// 表のエレメント
	
	// 各レース各行のオブジェクトを保持
	arr_RaceResult_Elements = new Array(18);

	// 表の行を最大行(18)生成
	for(let cnt = 0; cnt < 18; cnt++) {
		// 行を生成
		const tmpRowData = structuredClone(tpltRowData_Result);
		
		tmpRowData.Row					= document.createElement("tr");		// 行情報
		tmpRowData.ResultNum			= document.createElement("td");		// 着順
		tmpRowData.Frame				= document.createElement("td");		// 枠番号
		tmpRowData.Num					= document.createElement("td");		// ウマ番
		tmpRowData.Name					= document.createElement("td");		// バ名
		tmpRowData.Rank					= document.createElement("td");		// 評価ランク
		tmpRowData.TrainerName			= document.createElement("td");		// トレーナー名
		tmpRowData.GoalTime				= document.createElement("td");		// ゴールタイム
		tmpRowData.GoalDiff				= document.createElement("td");		// 着差
		tmpRowData.PassageCorner		= document.createElement("td");		// コーナー通過順位
		tmpRowData.FTime				= document.createElement("td");		// 上がりハロンタイム
		tmpRowData.Favorite				= document.createElement("td");		// 人気

		tmpRowData.Row.append(
			tmpRowData.ResultNum, tmpRowData.Frame, tmpRowData.Num, tmpRowData.Name, tmpRowData.Rank, tmpRowData.TrainerName,
			tmpRowData.GoalTime, tmpRowData.GoalDiff, tmpRowData.PassageCorner, tmpRowData.FTime, tmpRowData.Favorite
		);
		tmpRowData.Row.classList = ["cls_ResultTable_Body_Row"];
		table.appendChild(tmpRowData.Row);

		arr_RaceResult_Elements[cnt] = tmpRowData;
		arr_RaceResult_Elements[cnt].Row.style = "display:none";
		arr_RaceResult_Elements[cnt].ResultNum.innerHTML = cnt + 1;
		delete(tmpRowData);
	}

	// 初期表示の操作
	document.getElementById('id_SelectTab_Result').classList.add('active');
	document.getElementById('id_RaceContents_RaceResult').style = "display:block;";
	document.getElementById('id_RaceInfo_RaceMember').style = "display:none;";
}

/*******************************************************************************************************
 * 関数名	func_Init_RaceContents_Member
 * 概要		出馬表の生成
 * I/O		-
 * return	-
 * 更新日	2025/09/28	新規
 *******************************************************************************************************/
function func_Init_RaceContents_Member() {
	// 出馬表テーブルを生成
	const table = document.getElementById('id_RaceContents_RaceMember_Table').getElementsByTagName('tbody')[0];		// 表のエレメント
	
	// 各行のオブジェクトを保持
	arr_RaceMember_Elements = new Array(18);

	// 表の行を最大行(18)生成
	for(let cnt = 0; cnt < 18; cnt++) {
		// 行を生成
		const tmpRowData = structuredClone(tpltRowData_Member);

		tmpRowData.Row					= document.createElement("tr");		// 行情報
		tmpRowData.Frame				= document.createElement("td");		// 枠番号
		tmpRowData.Num					= document.createElement("td");		// ウマ番
		tmpRowData.NameEtc.el			= document.createElement("td");		// バ名等
		tmpRowData.NameEtc.Name				= document.createElement("div");		// バ名
		tmpRowData.NameEtc.TrainerName		= document.createElement("div");		// トレーナー名
		tmpRowData.NameEtc.Parent_1			= document.createElement("div");		// 継承親1
		tmpRowData.NameEtc.Parent_2			= document.createElement("div");		// 継承親2
		tmpRowData.Ranks.el				= document.createElement("td");		// 評価ランク
		tmpRowData.Ranks.Rank				= document.createElement("div");		// 評価ランク
		tmpRowData.Ranks.RankPoint			= document.createElement("div");		// 評価ポイント
		tmpRowData.Before_1				= document.createElement("td");		// 前走
		tmpRowData.Before_2				= document.createElement("td");		// 前々走
		tmpRowData.Before_3				= document.createElement("td");		// 3走前
		tmpRowData.Before_4				= document.createElement("td");		// 4走前

		tmpRowData.NameEtc.el.append(tmpRowData.NameEtc.Name, tmpRowData.NameEtc.TrainerName, tmpRowData.NameEtc.Parent_1, tmpRowData.NameEtc.Parent_2);
		tmpRowData.Ranks.el.append(tmpRowData.Ranks.Rank, tmpRowData.Ranks.RankPoint);
		tmpRowData.Row.append(
			tmpRowData.Frame, tmpRowData.Num, tmpRowData.NameEtc.el, tmpRowData.Ranks.el,
			tmpRowData.Before_1, tmpRowData.Before_2, tmpRowData.Before_3, tmpRowData.Before_4
		);
		tmpRowData.Row.classList = ["cls_MemberTable_Body_Row"];
		table.appendChild(tmpRowData.Row);

		arr_RaceMember_Elements[cnt] = tmpRowData;
		arr_RaceMember_Elements[cnt].Row.style = "display:none";
		arr_RaceMember_Elements[cnt].Num.innerHTML = cnt + 1;
		delete(tmpRowData);
	}
}


/*******************************************************************************************************
 * 関数名	func_DataInsert
 * 概要		DBからのデータの挿入
 * I/O		-
 * return	-
 * 更新日	2025/09/20	新規
 *******************************************************************************************************/
function func_DataInsert() {
	func_DataInsert_Result();
	func_DataInsert_Member();
}


/*******************************************************************************************************
 * 関数名	func_DataInsert_Result
 * 概要		DBからのレース結果データの挿入
 * I/O		-
 * return	-
 * 更新日	2025/09/20	新規
 *******************************************************************************************************/
function func_DataInsert_Result() {
	const member = fnc_DB_RaceMember_Trainee_Data(targetCupID, targetRaceID+1);		// 該当レースに出走したメンバーの配列
	const targetRaceData = targetRaceCupData[enum_DB_Cup.Races][targetRaceID];	// 対象レース情報
	
	// 出走数に合わせて表の描画を調整
	for(let idx = 0; idx < targetRaceData[enum_DB_Race.MembersCnt]; idx++) {
		arr_RaceResult_Elements[idx].Row.style = "";
	}
	
	// 表の行を出走人数分挿入
	for(let idx = 0; idx < targetRaceData[enum_DB_Race.MembersCnt]; idx++) {
		// 着順に挿入対象を取る
		let tmpTarget;
		let idx2;
		for(idx2 = 0; idx2 < member.length; idx2++) {
			if(member[idx2][enum_DB_Trainee.Goal] == idx + 1){
				tmpTarget = member[idx2];
				break;
			}
		}
		if(undefined == tmpTarget){
			continue;
		}
		const targetMember = tmpTarget;
		
		// データを登録
		/** 着順は生成時に登録済み */

		/** 枠番画像を登録 */
		arr_RaceResult_Elements[targetMember[enum_DB_Trainee.Goal] - 1].Frame.innerHTML = "";
		arr_RaceResult_Elements[targetMember[enum_DB_Trainee.Goal] - 1].Frame.appendChild(fnc_SetFrameImg(targetRaceData[enum_DB_Race.MembersCnt], targetMember[enum_DB_Trainee.Num] - 1));

		/** ウマ番を登録 */
		arr_RaceResult_Elements[targetMember[enum_DB_Trainee.Goal] - 1].Num.innerHTML = targetMember[enum_DB_Trainee.Num];
		
		/** バ名を登録 */
		arr_RaceResult_Elements[targetMember[enum_DB_Trainee.Goal] - 1].Name.innerHTML = fnc_DB_Get_CharacterInfo(Math.trunc(targetMember[enum_DB_Trainee.Name] / 100), enum_DB_Characters.Name_jp);

		/** 評価ランクを登録 */
		arr_RaceResult_Elements[targetMember[enum_DB_Trainee.Goal] - 1].Rank.innerHTML = func_Common_RankPoint(targetMember[enum_DB_Trainee.RankPoint]);

		/** トレーナー名 */
		arr_RaceResult_Elements[targetMember[enum_DB_Trainee.Goal] - 1].TrainerName.innerHTML = fnc_DB_Get_Member_Info(targetMember[enum_DB_Trainee.TrainerName], enum_DB_MemberInfo.Name);
		
		/** ゴールタイム */
		arr_RaceResult_Elements[targetMember[enum_DB_Trainee.Goal] - 1].GoalTime.innerHTML = fnc_DB_Split_GoalTime(targetMember[enum_DB_Trainee.GoalTime]);
		
		/** 着差 */
		arr_RaceResult_Elements[targetMember[enum_DB_Trainee.Goal] - 1].GoalDiff.innerHTML = targetMember[enum_DB_Trainee.GoalDiff];

		/** コーナー通過順位 */
		arr_RaceResult_Elements[targetMember[enum_DB_Trainee.Goal] - 1].PassageCorner.innerHTML = "-";

		/** 上がりハロンタイム */
		arr_RaceResult_Elements[targetMember[enum_DB_Trainee.Goal] - 1].FTime.innerHTML = "-";

		/** 人気 */
		arr_RaceResult_Elements[targetMember[enum_DB_Trainee.Goal] - 1].Favorite.innerHTML = targetMember[enum_DB_Trainee.Favorite];
	}
}

/*******************************************************************************************************
 * 関数名	func_DataInsert_Member
 * 概要		DBからの出馬表データの挿入
 * I/O		-
 * return	-
 * 更新日	2025/09/20	新規
 *******************************************************************************************************/
function func_DataInsert_Member() {
	const member = fnc_DB_RaceMember_Trainee_Data(targetCupID, targetRaceID+1);		// 該当レースに出走したメンバーの配列
	const targetRaceData = targetRaceCupData[enum_DB_Cup.Races][targetRaceID];	// 対象レース情報
	
	// 出走数に合わせて表の描画を調整
	for(let idx = 0; idx < targetRaceData[enum_DB_Race.MembersCnt]; idx++) {
		arr_RaceMember_Elements[idx].Row.style = "";
	}
	
	// 表の行を出走人数分挿入
	for(let idx = 0; idx < targetRaceData[enum_DB_Race.MembersCnt]; idx++) {
		// ウマ番順に挿入対象を取る
		let tmpTarget;
		for(let idx2 = 0; idx2 < member.length; idx2++) {
			if(member[idx2][enum_DB_Trainee.Num] == idx + 1){
				tmpTarget = member[idx2];
				break;
			}
		}
		if(undefined == tmpTarget){
			continue;
		}
		const targetMember = tmpTarget;
		
		// 枠番画像を登録
		arr_RaceMember_Elements[idx].Frame.innerHTML = "";
		arr_RaceMember_Elements[idx].Frame.appendChild(fnc_SetFrameImg(targetRaceData[enum_DB_Race.MembersCnt], idx));

		// ウマ番を登録
		/** 着順は生成時に登録済み */
		
		// バ名
		arr_RaceMember_Elements[idx].NameEtc.Name.innerHTML = fnc_DB_Get_CharacterInfo(Math.trunc(targetMember[enum_DB_Trainee.Name] / 100), enum_DB_Characters.Name_jp);

		// トレーナー名
		arr_RaceMember_Elements[idx].NameEtc.TrainerName.innerHTML = fnc_DB_Get_Member_Info(targetMember[enum_DB_Trainee.TrainerName], enum_DB_MemberInfo.Name);

		// // 継承親
		arr_RaceMember_Elements[idx].NameEtc.Parent_1.innerHTML = ((targetMember[enum_DB_Trainee.Parents_1] == "") ? "-" : fnc_DB_Get_CharacterInfo(Math.trunc(targetMember[enum_DB_Trainee.Parents_1] / 100), enum_DB_Characters.Name_jp));
		
		// // 継承親
		arr_RaceMember_Elements[idx].NameEtc.Parent_2.innerHTML = ((targetMember[enum_DB_Trainee.Parents_2] == "") ? "-" : fnc_DB_Get_CharacterInfo(Math.trunc(targetMember[enum_DB_Trainee.Parents_2] / 100), enum_DB_Characters.Name_jp));

		// 評価ランク
		arr_RaceMember_Elements[idx].Ranks.Rank.innerHTML = func_Common_RankPoint(targetMember[enum_DB_Trainee.RankPoint]);
		// 評価点
		arr_RaceMember_Elements[idx].Ranks.RankPoint.innerHTML = ((targetMember[enum_DB_Trainee.RankPoint] == 0) ? "-" : targetMember[enum_DB_Trainee.RankPoint]);
		
		// 前走情報
		// let el_arr_before = targetRaceID][idx].Before_1, arr_RaceMember_Elements[idx].Before_2, arr_RaceMember_Elements[idx].Before_3, arr_RaceMember_Elements[idx].Before_4]
		// fnc_View_MemberRaceLog_El(el_arr_before, targetMember[enum_DB_Trainee.TrainerName]);
	}
}


/*******************************************************************************************************
 * 関数名	fnc_SetFrameImg
 * 概要		枠番画像の挿入
 * I/O		-
 * return	-
 * 更新日	2025/09/20	新規
 *******************************************************************************************************/
function fnc_SetFrameImg(fullCnt, idx) {
	let flm_idx;
	
	if(fullCnt < 17) {
		const diff = 16 - fullCnt;
		if(idx < diff) {
			flm_idx = Math.trunc(idx);
		}
		else {
			flm_idx = Math.trunc( (idx + diff + 1)/2 + 0.5);
		}
	}
	else {
		const diff = 48-(2*fullCnt);
		if(idx < diff) {
			flm_idx = Math.trunc(idx / 2);
		}
		else {
			flm_idx = Math.trunc( ((2*idx) + diff) / 6);
		}
	}

	// SVG画像を生成
	const arr_Frame_Color = ["#FFFFFF", "#000000", "#FF0000", "#0000FF", "#FFFF00", "#00A500", "#FF7F00", "#FFB5EB"];
	const arr_Font_Color = ["#000000", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#000000", "#FFFFFF", "#000000", "#000000"];
	const frame = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
	const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');

	frame.setAttribute("width", "40");
	frame.setAttribute("height", "40");

	rect.setAttribute("width", "40");
	rect.setAttribute("height", "40");
	rect.setAttribute("fill", arr_Frame_Color[flm_idx - 1]);
	
	text.setAttribute("x", "10");
	text.setAttribute("y", "32");
	text.setAttribute("font-size", "26pt");
	text.style = "font-family:'Gill Sans', sans-serif;;";
	// text.setAttribute("font-weight", "bold");
	text.setAttribute("fill", arr_Font_Color[flm_idx - 1]);
	text.innerHTML = flm_idx;
	frame.append(rect, text);
	return frame;
}


