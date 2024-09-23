/*================================================*/
/* グローバル定数定義 */
/*================================================*/
const WRITE_INFO_TYPE_TABS = 0;
const WRITE_INFO_TYPE_KIND = 1;

/*================================================*/
/* グローバル変数定義 */
/*================================================*/
const relPath_Img = "../";      // jsフォルダから画像フォルダへの相対パス
const ar_FrameMap = GetFrameMapImg_RelativePath(relPath_Img);   // 枠番画像
const el_RaceTabs = GetElementListTag('RaceTabs');
const el_RaceScoresKind = document.getElementById('RaceScoresKind').getElementsByTagName('li');

let ActiveTabIdx = 0;
let ActiveKindIdx = 0;

/*================================================*/
/* メイン処理 */
/*================================================*/
// レースタブ選択時のイベント付与
for(let i = 0; i < el_RaceTabs.length; i++) {
    el_RaceTabs[i].addEventListener("click", ()=>{
        AddEvent_SelectTab(el_RaceTabs, i)
        ActiveTabIdx = i;
        WriteInfo();
    });
}
// 表示情報選択時のイベント付与
for(let i = 0; i < el_RaceScoresKind.length; i++) {
    el_RaceScoresKind[i].addEventListener("click", ()=>{
        AddEvent_SelectTab(el_RaceScoresKind, i)
        ActiveKindIdx = i;
        WriteInfo();
    });
}

// 第1レースが未出走の場合は出馬表を初期表示とする
if(MatchingRace[ActiveTabIdx][ActiveKindIdx].length == 0){
    ActiveKindIdx = WRITE_INFO_TYPE_KIND;
    AddEvent_SelectTab(el_RaceScoresKind, ActiveKindIdx)
}
// 第1レースの結果数よりも出走数が少ない場合は出馬表を初期表示とする
if(MatchingRace[ActiveTabIdx][WRITE_INFO_TYPE_TABS].length > MatchingRace[ActiveTabIdx][WRITE_INFO_TYPE_KIND].length){
    ActiveKindIdx = WRITE_INFO_TYPE_KIND;
    AddEvent_SelectTab(el_RaceScoresKind, ActiveKindIdx)
}
// 初期表示
WriteInfo();


/*================================================*/
/* 関数定義 */
/*================================================*/
// タブの表示状態変更
function AddEvent_SelectTab(el, idx){
    // クリックされたタブがactive出ない場合
    if(!el[idx].classList.contains('active')) {
        // 一度すべてのタブからactiveを削除
        for(let i = 0; i < el.length; i++) {
            if(el[i].classList.contains('active')) {
                el[i].classList.remove('active');
            }
        }

        // クリックされたタブにactiveを付与
        el[idx].classList.add('active');
    }
}

function WriteInfo() {
    const nowTime = new Date().getTime() / 1000.0;
    let strtTime = MatchingRace[ActiveTabIdx][2].startTime.substr(0,2)*60 + MatchingRace[ActiveTabIdx][2].startTime.substr(3,5) - 5;
    const raceTime = new Date("20"+MatchingRace[ActiveTabIdx][2].raceDay.year, MatchingRace[ActiveTabIdx][2].raceDay.month-1, MatchingRace[ActiveTabIdx][2].raceDay.day, Math.trunc(strtTime/60), strtTime-Math.trunc(strtTime/60)).getTime() / 1000.0;

    // if(raceTime > nowTime) {
    if(false) {
        // 5分前までは未公開にする
        SetRaceInfo([[],[],{},]);
        switch(ActiveKindIdx){
            case WRITE_INFO_TYPE_TABS:
                WriteResult();
                SetRaceResult([[],[],{},]);
                break;
    
            case WRITE_INFO_TYPE_KIND:
                WriteRunner();
                SetRaceRunner([[],[],{},]);
                break;
    
            default:
                break;
        }
    }
    else if( ActiveTabIdx < MatchingRace.length){
        SetRaceInfo(MatchingRace[ActiveTabIdx]);
    
        switch(ActiveKindIdx){
            case WRITE_INFO_TYPE_TABS:
                WriteResult();
                SetRaceResult(MatchingRace[ActiveTabIdx]);
                break;
    
            case WRITE_INFO_TYPE_KIND:
                WriteRunner();
                SetRaceRunner(MatchingRace[ActiveTabIdx]);
                break;
    
            default:
                break;
        }
    }
    else {
        SetRaceInfo([[],[],{},]);
        switch(ActiveKindIdx){
            case WRITE_INFO_TYPE_TABS:
                WriteResult();
                SetRaceResult([[],[],{},]);
                break;
    
            case WRITE_INFO_TYPE_KIND:
                WriteRunner();
                SetRaceRunner([[],[],{},]);
                break;
    
            default:
                break;
        }
    }
}

function WriteResult() {
    const ele = document.getElementById('RaceScoreInfos');

    let text = `
        <div class="race_contents_main_items_raceScores_Infos_result_item">
            <table id="ResultTable">
                <tr class="result_table_row_tag">
                    <th class="result_table_col_goal">着順</th>
                    <th class="result_table_col_frame">枠</th>
                    <th class="result_table_col_number">ウマ番</th>
                    <th class="result_table_col_name">バ名</th>
                    <th class="result_table_col_rank">評価ランク</th>
                    <th class="result_table_col_point">評価点</th>
                    <th class="result_table_col_trainer">トレーナー名</th>
                    <th class="result_table_col_time">タイム</th>
                    <th class="result_table_col_def">着差</th>
                    <th class="result_table_col_corner">コーナー通過順位</th>
                    <th class="result_table_col_furlong">推定上り</th>
                    <th class="result_table_col_favorite">人気</th>
                </tr>
            </table>
        </div>
        <div class="result_ex_info">
            <div>タイム</div>
            <table class="result_ex_info_table">
                <tr>
                    <th class="result_ex_info_table_title">ハロンタイム</th>
                    <th class="result_ex_info_table_value"></th>
                </tr>
                <tr>
                    <th>上り</th>
                    <th></th>
                </tr>
            </table>
        </div>
        <div class="result_ex_info">
            <div>コーナー通過順位</div>
            <table class="result_ex_info_table">
                <tr>
                    <th class="result_ex_info_table_title">1コーナー</th>
                    <th class="result_ex_info_table_value"></th>
                </tr>
                <tr>
                    <th class="result_ex_info_table_title">2コーナー</th>
                    <th class="result_ex_info_table_value"></th>
                </tr>
                <tr>
                    <th class="result_ex_info_table_title">3コーナー</th>
                    <th class="result_ex_info_table_value"></th>
                </tr>
                <tr>
                    <th class="result_ex_info_table_title">4コーナー</th>
                    <th class="result_ex_info_table_value"></th>
                </tr>
            </table>
        </div>
    `;
    ele.innerHTML = text;
}

function SetRaceResult (data) {
    const result = data[0];
    const member = data[1];

    // レース結果がある場合のみデータを登録
    if(result.length > 0 && result.length == member.length) {
        const template = document.getElementById('ResultTemplate');
        for(let idx = 0; idx < member.length; idx++) {
            if(idx < result.length) {
                const clone = template.content.cloneNode(true);
                const currRes = result[idx] - 1;
                const id = member[currRes].MemberID;

                clone.querySelector('.result_table_runk').textContent            = idx + 1;
                clone.querySelector('.result_table_number').textContent          = result[idx];
                clone.querySelector('.result_table_name').textContent            = member[currRes].Name;
                clone.querySelector('.result_table_training_rank').textContent   = member[currRes].Runk[0];
                clone.querySelector('.result_table_training_point').textContent  = member[currRes].Runk[1];
                clone.querySelector('.result_table_trainer').textContent         = id>0?Members[id-1].Name[0]:member[currRes].Trainer;
                clone.querySelector('.result_table_goal_time').textContent       = member[currRes].GoalTime;
                clone.querySelector('.result_table_goal_def').textContent        = member[currRes].GoalTimeDef;
                clone.querySelector('.result_table_corner_pass').textContent     = member[currRes].CornerPass;
                clone.querySelector('.result_table_furlong_time').textContent    = member[currRes].FurlongTime;
                clone.querySelector('.result_table_favorite').textContent        = member[currRes].Favorite;

                document.getElementById('ResultTable').tBodies[0].appendChild(clone);
                const row = document.getElementById('ResultTable').tBodies[0].getElementsByClassName('result_table_rows')[idx];
                if((idx + 1) % 2 == 0) {
                    row.style.backgroundColor = "#f0f0f0";
                }
                else {
                    row.style.backgroundColor = "#ffffff";
                }

                row.getElementsByClassName('result_table_frame')[0].appendChild(SetFrameImg(result.length, currRes));
            }
        }
    }
    else {
        const row = document.createElement('tr');
        row.classList.add("result_table_rows");
        row.style.backgroundColor = "#ffffff";

        const col = document.createElement('td');
        col.textContent = "レース未出走";
        col.colSpan = 12;
        row.appendChild(col);
            
        document.getElementById('ResultTable').tBodies[0].appendChild(row);
    }
}

/* 出馬表登録 */
function WriteRunner() {
    const ele = document.getElementById('RaceScoreInfos');

    let text = `
        <div class="race_contents_main_items_raceScores_Infos_result_item">
            <table id="RunnerTable">
                <tr class="runner_table_row_tag">
                    <th class="runner_table_col_frame">枠</th>
                    <th class="runner_table_col_number">ウマ番</th>
                    <th class="runner_table_col_name_etc">
                        <div style="margin: 0 2px;">バ名</div>
                        <div style="margin: 0 2px;">トレーナー名</div>
                        <div style="margin: 0 2px;">継承</div>
                    </th>
                    <th class="runner_table_col_ranks">
                        <div style="margin: 0 2px;">評価ランク</div>
                        <div style="margin: 0 2px;">評価点</div>
                    </th>
                    <th class="runner_table_col_befores">前走</th>
                    <th class="runner_table_col_befores">前々走</th>
                    <th class="runner_table_col_befores">3走前</th>
                    <th class="runner_table_col_befores">4走前</th>
                </tr>
            </table>
        </div>
    `;

    ele.innerHTML = text;
}

function SetRaceRunner (data) {
    const member = data[1];
    const raceInfo = data[2];

    if(member.length > 0){
        const template = document.getElementById('RunnerTemplate');
        for(let idx = 0; idx < member.length; idx++) {
            const clone = template.content.cloneNode(true);
            const id = member[idx].MemberID;

            clone.querySelector('.runner_table_number').textContent          = idx + 1;
            clone.querySelector('.runner_table_name').textContent            = member[idx].Name;
            clone.querySelector('.runner_table_trainer').textContent         = id>0?Members[id-1].Name[0]:member[idx].Trainer;;
            clone.querySelector('.runner_table_parent1').textContent         = member[idx].parents[0];
            clone.querySelector('.runner_table_parent2').textContent         = member[idx].parents[1];
            clone.querySelector('.runner_table_training_runk').textContent   = member[idx].Runk[0];
            clone.querySelector('.runner_table_training_point').textContent  = member[idx].Runk[1];

            // 前走の表示設定
            for(let idx2 = 0; idx2 < member[idx].beforeRuns.length; idx2++) {
                let targetTxtBase = '.runner_table';
                if(idx2 == 0) targetTxtBase = targetTxtBase+'_before';
                else if(idx2 == 1) targetTxtBase = targetTxtBase+'_2before';
                else if(idx2 == 2) targetTxtBase = targetTxtBase+'_3before';
                else if(idx2 == 3) targetTxtBase = targetTxtBase+'_4before';
                else continue;

                const befData = member[idx].beforeRuns[idx2];

                clone.querySelector(targetTxtBase+'_date').textContent              = "20"+befData.Date.year+"/"+befData.Date.month+"/"+befData.Date.day;
                clone.querySelector(targetTxtBase+'_prace').textContent             = befData.Place;
                clone.querySelector(targetTxtBase+'_race_name').textContent         = befData.Title;
                clone.querySelector(targetTxtBase+'_result').textContent            = befData.Goal;
                clone.querySelector(targetTxtBase+'_result_unit').textContent       = "着";
                clone.querySelector(targetTxtBase+'_number').textContent            = befData.MembersCnt + "頭 " + ("00" + befData.Number).slice(-2) + "番";
                clone.querySelector(targetTxtBase+'_favorite').textContent          = befData.Favorite + " 番人気";
                clone.querySelector(targetTxtBase+'_trainer').textContent           = befData.Name;
                clone.querySelector(targetTxtBase+'_training_runk').textContent     = befData.Runk[1] + "(" + befData.Runk[0] + ")";
                clone.querySelector(targetTxtBase+'_training_couse').textContent    = "-";
                clone.querySelector(targetTxtBase+'_course').textContent            = befData.CourseLength + "00 " + befData.Feald;
                clone.querySelector(targetTxtBase+'_goal_time').textContent         = befData.GoalTime;
                clone.querySelector(targetTxtBase+'_condition').textContent         = befData.Condition;
                clone.querySelector(targetTxtBase+'_corner_pass').textContent       = befData.Corner;
                clone.querySelector(targetTxtBase+'_furlong_time').textContent      = "3F" + befData.FurlongTime;
                clone.querySelector(targetTxtBase+'_top_runner').textContent        = befData.Top + " (" + befData.TopDef + ")";
            }

            // 行を見やすいように1行ごとに色を変える
            document.getElementById('RunnerTable').tBodies[0].appendChild(clone);
            const row = document.getElementById('RunnerTable').tBodies[0].getElementsByClassName('runner_table_rows')[idx];
            if((idx + 1) % 2 == 0) {
                row.style.backgroundColor = "#f0f0f0";
            }
            else {
                row.style.backgroundColor = "#ffffff";
            }

            for(let idx2 = 0; idx2 < member[idx].beforeRuns.length; idx2++) {
                if(member[idx].beforeRuns[idx2].Goal == 1) {
                    
                }
            }

            // 背景色の変更
            const befsMax = 4;
            const befs = row.getElementsByClassName('runner_table_befores');
            for(let idx2 = 0; idx2 < befsMax; idx2++){
                if(idx2 < member[idx].beforeRuns.length) {
                    // 上位順位の背景は変更する
                    if(member[idx].beforeRuns[idx2].Goal == 1) {
                        befs[idx2].style.backgroundColor = "#ffd7d7";
                    }
                    else if(member[idx].beforeRuns[idx2].Goal == 2) {
                        befs[idx2].style.backgroundColor = "#dee6ef";
                    }
                    else if(member[idx].beforeRuns[idx2].Goal == 3) {
                        befs[idx2].style.backgroundColor = "#dde8cb";
                    }
                    else {
                        /* NOP */
                    }
                }
                else {
                    // 前走の未入力欄を網掛けにする
                    befs[idx2].style.backgroundColor = "#d0d0d0";
                }
            }

            row.getElementsByClassName('runner_table_frame')[0].appendChild(SetFrameImg(member.length, idx));

            const nowTime = new Date().getTime() / 1000.0;
            const raceTime = new Date("20"+raceInfo.raceDay.year, raceInfo.raceDay.month-1, raceInfo.raceDay.day, raceInfo.startTime.substr(0,2), raceInfo.startTime.substr(3,5)).getTime() / 1000.0;

            if(raceTime > nowTime) {
                row.getElementsByClassName('runner_table_number')[0].textContent = "";
                row.getElementsByClassName('runner_table_frame')[0].textContent = "";
            }
        }
    }
    else {
        const row = document.createElement('tr');
        row.classList.add("result_table_rows");
        row.style.backgroundColor = "#ffffff";

        const col = document.createElement('td');
        col.textContent = "未登録";
        col.colSpan = 8;
        row.appendChild(col);
            
        document.getElementById('RunnerTable').tBodies[0].appendChild(row);
    }
}

function SetFrameImg(fullCnt, idx) {
    const frame = document.createElement('img');

    let flm_idx;
    
    if(fullCnt < 17) {
        let defs = (2*8)-fullCnt;
        if(idx < defs)  flm_idx = Math.trunc(idx);
        else            flm_idx = Math.trunc((idx+defs)/2)
    }
    else {
        let defs = (3*16)-(2*fullCnt);
        if(idx < defs)  flm_idx = Math.trunc(idx/2);
        else                    flm_idx = Math.trunc((2*idx+defs)/6)
    }

    frame.src = ar_FrameMap[flm_idx];
    frame.alt = "枠番 - " + flm_idx;
    return frame;
}

function WriteRaceInfo() {
    let text = `
        <div id="RaceInfo">
            <div class="raceInfo_date" style="display: flex;">
                <div class="date"></div>
                <div class="startTime">aaaaa</div>
            </div>
            <div style="display: flex;">
                <div class="season" style="padding: 0 5px; border: solid 1px black; background-color: white;">aaaaa</div>
                <div class="time_zone" style="padding: 0 5px; border: solid 1px black; background-color: white;">aaaaa</div>
                <div class="weather" style="padding: 0 5px; border: solid 1px black; background-color: white;">aaaaa</div>
                <div class="field" style="padding: 0 5px; border: solid 1px black; background-color: white;">aaaaa</div>
            </div>
            <div class="course">aaaaa</div>
        </div>
    `;

    return text;
}
function SetRaceInfo(data) {
    const raceInfo = data[2];
    const template = document.getElementById('RaceInfoTemplate');
    const clone = template.content.cloneNode(true);

    if(Object.keys(raceInfo).length > 0){
        clone.querySelector('.title').textContent       = raceInfo.raceTitle;
        clone.querySelector('.date').textContent        = "20" + raceInfo.raceDay.year + "年" + raceInfo.raceDay.month + "月" + raceInfo.raceDay.day + "日(" + raceInfo.raceDay.date + ")";
        clone.querySelector('.startTime').textContent   = "発走時間：" + raceInfo.startTime;
        clone.querySelector('.season').textContent      = "季節：" + raceInfo.season;
        clone.querySelector('.time_zone').textContent   = "時間帯：" + raceInfo.timeZone;
        clone.querySelector('.weather').textContent     = "天候：" + raceInfo.weather;
        clone.querySelector('.field').textContent       = raceInfo.field + "：" + raceInfo.condition;
        clone.querySelector('.course').textContent      = "コース：" + raceInfo.course.length + "00m (" + raceInfo.course.place + " " + raceInfo.course.rotate + ")";
    }
    else {
        clone.querySelector('.title').textContent       = "-";
        clone.querySelector('.date').textContent        = "1970年1月1日(Thu)";
        clone.querySelector('.startTime').textContent   = "発走時間：00:00";
        clone.querySelector('.season').textContent      = "季節：春";
        clone.querySelector('.time_zone').textContent   = "時間帯：昼";
        clone.querySelector('.weather').textContent     = "天候：晴れ";
        clone.querySelector('.field').textContent       = "芝：良";
        clone.querySelector('.course').textContent      = "コース：-0000m (芝 左・外)";
    }
    
    // コンテナに要素が入っている場合は削除する
    let el_raceInfos = document.getElementById('RaceInfos').getElementsByTagName('div');
    if(el_raceInfos[0] != null) {
        for(let i = 0; i < el_raceInfos.length;){
            el_raceInfos[i].remove();
        }
    }
    document.getElementById('RaceInfos').appendChild(clone);
}

function GetElementListTag(tagID) {
    const ret = document.getElementById(tagID);
    if(ret != undefined) {
        return ret.getElementsByTagName('li');
    }

    console.log("[Race_Contents.js][GetElementListTag] Tag Undefined ["+tagID+"]");
    return document.createElement("li");
}
