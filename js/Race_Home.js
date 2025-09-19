const el_NextRace = document.getElementById('id_MainContents_Next');
const el_NewRace = document.getElementById('id_MainContents_New');

const dammyData = []

function func_Init() {
	func_Init_NextRace();
	func_Init_NewRace();
	func_Init_RaceLog();
}

function func_Init_NextRace() {
	const el_NextRaceText = document.getElementById('id_MainContents_Next_Text');
	const doneIdx = func_Tool_Get_Done_False();
	
	if(-1 != doneIdx) {
		const targetRaceCup = func_Tool_Get_Target_RaceCup(doneIdx);
		el_NextRaceText.innerHTML = "第" + targetRaceCup[enum_DB_Cup.TitleNumbering] + "回 " + targetRaceCup[enum_DB_Cup.Title];
		
		el_NextRace.addEventListener("click", () => {
			const tmp_Atag = document.createElement('a');
	
			tmp_Atag.href = "html/Race_Page.html#id=" + targetRaceCup[enum_DB_Cup.CupID];
			tmp_Atag.click();
		});
	}
	else {
		el_NextRaceText.innerHTML = "Coming Soon..."
	}
}

function func_Init_NewRace() {
	const el_NewRaceText = document.getElementById('id_MainContents_New_Text');
	const doneIdx = func_Tool_Get_Done_False();
	let targetRaceCup;
	
	if(-1 != doneIdx) {
		targetRaceCup = func_Tool_Get_Target_RaceCup(doneIdx - 1);
	}
	else {
		targetRaceCup = func_Tool_Get_Target_RaceCup(DB_RaceCup_Info.length - 1);
	}

	el_NewRaceText.innerHTML = "第" + targetRaceCup[enum_DB_Cup.TitleNumbering] + "回 " + targetRaceCup[enum_DB_Cup.Title];
	
	el_NewRace.addEventListener("click", () => {
		const tmp_Atag = document.createElement('a');

		tmp_Atag.href = "html/Race_Page.html#id=" + targetRaceCup[enum_DB_Cup.CupID];
		tmp_Atag.click();
	});
}

function func_Init_RaceLog() {
	const el_RaceLogText = document.getElementById('id_MainContents_Log_Content');
	const doneIdx = func_Tool_Get_Done_False();
	let RaceCupIdx = DB_RaceCup_Info.length - 1;

	// トピックの次回にデータが入る場合はIdxをさらに-1する
	if(-1 != doneIdx) {
		RaceCupIdx = doneIdx - 2;
	}
	else {
		RaceCupIdx--;
	}

	// 最大5つまで表示
	for(let idx = 0; idx < 5; idx++) {
		if(idx > RaceCupIdx)	break;

		const targetRaceCup = func_Tool_Get_Target_RaceCup(RaceCupIdx - idx);
		const tmpEl = document.createElement('div');
		
		tmpEl.classList = ["cls_view_W95p", "cls_border_bs1"];
		tmpEl.innerHTML = "第" + targetRaceCup[enum_DB_Cup.TitleNumbering] + "回 " + targetRaceCup[enum_DB_Cup.Title];
		el_RaceLogText.appendChild(tmpEl);

		tmpEl.addEventListener("click", () => {
			const tmp_Atag = document.createElement('a');

			tmp_Atag.href = "html/Race_Page.html#id=" + targetRaceCup[enum_DB_Cup.CupID];
			tmp_Atag.click();
		});
	}
}

func_Init();
