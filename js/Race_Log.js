const RacePage_Path = "../html/Race_Page.html";
const RacePage_Path_ID = "?id=";

/*******************************************************************************************************
 * 関数名	fnc_Init_NextRace
 * 概要		レースログの生成
 * I/O		-
 * return	-
 * 更新日	2025/10/02	新規
 *******************************************************************************************************/
function func_Init_RaceLog() {
	const el_RaceLogText = document.getElementById('id_MainContents');

	for(let idx = 0; idx < DB_RaceCup_Info.length; idx++) {
		const targetRaceCup = DB_RaceCup_Info[idx];
		const tmpEl = document.createElement('div');
		
		tmpEl.classList = ["cls_view_W95p", "cls_border_bs1"];
		tmpEl.innerHTML += targetRaceCup[enum_DB_Cup.Races][0][enum_DB_Race.Year] + "/";
		tmpEl.innerHTML += targetRaceCup[enum_DB_Cup.Races][0][enum_DB_Race.Month] + "/";
		tmpEl.innerHTML += targetRaceCup[enum_DB_Cup.Races][0][enum_DB_Race.Day] + "　";
		tmpEl.innerHTML += "第" + targetRaceCup[enum_DB_Cup.TitleNumbering] + "回 " + targetRaceCup[enum_DB_Cup.Title];
		el_RaceLogText.appendChild(tmpEl);

		tmpEl.addEventListener("click", () => {
			const tmp_Atag = document.createElement('a');

			tmp_Atag.href = RacePage_Path + RacePage_Path_ID + targetRaceCup[enum_DB_Cup.CupID];
			tmp_Atag.click();
		});
	}

	// もっと見るの押下処理
	const el_RaceLogMore = document.getElementById('id_MainContents_Log_More');
	el_RaceLogMore.addEventListener("click", () => {
		const tmp_Atag = document.createElement('a');

		tmp_Atag.href = RaceLog_Path;
		tmp_Atag.click();
	});
}

func_Init_RaceLog();
