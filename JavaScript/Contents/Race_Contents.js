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

let ActiveRacedIdx = 0; // 選択中の戦情報
let ActiveTabIdx = 0;   // 選択中レースのインデックス
let ActiveKindIdx = 0;  // 選択中の表示情報(0:結果, 1:出馬表)

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
if(MatchingRace[ActiveTabIdx][WRITE_INFO_TYPE_TABS].length == 0){
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
    let strtTime = DB_RaceInfo[RaceGroupeID-1].Races[ActiveTabIdx].RaceDate;
    const raceTime = new Date(strtTime.Year, strtTime.Month-1, strtTime.Day, strtTime.Hour, strtTime.Min-5).getTime() / 1000.0;

    if( raceTime <= nowTime && ActiveTabIdx < MatchingRace.length){
        SetRaceInfo();
    
        switch(ActiveKindIdx){
            case WRITE_INFO_TYPE_TABS:
                WriteResult();
                SetRaceResult();
                break;
    
            case WRITE_INFO_TYPE_KIND:
                WriteRunner();
                SetRaceRunner();
                break;
    
            default:
                break;
        }
    }
    else {
        // 5分前までは未公開にする
        SetRaceInfo(false);

        switch(ActiveKindIdx){
            case WRITE_INFO_TYPE_TABS:
                WriteResult();
                SetRaceResult();
                break;
    
            case WRITE_INFO_TYPE_KIND:
                WriteRunner();
                SetRaceRunner([[],[],{},], {});
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

function SetRaceResult () {
    const result = MatchingRace[ActiveTabIdx][0];
    const member = MatchingRace[ActiveTabIdx][1];

    // レース結果がある場合のみデータを登録
    if(result.length > 0 && result.length == member.length) {
        const template = document.getElementById('ResultTemplate');

        // 順位順に情報を挿入
        for(let idx = 0; idx < member.length; idx++) {
            const clone = template.content.cloneNode(true);
            
            const resultID = result[idx];   // 着順でウマ番を取得
            const memberID = member[resultID-1];    // ウマ番から出走者情報のIDを取得

            // メンバーIDのオフセットを参照して出走者情報を取得する
            const target = GetTargetRunnerFromMemberID(memberID);
            
            // メンバーの出走記録からレース情報を取得
            const RaceRes = GetTargetRaceInfoFromMemberID(target);
            
            clone.querySelector('.result_table_runk').textContent            = idx + 1;
            clone.querySelector('.result_table_number').textContent          = result[idx];
            clone.querySelector('.result_table_name').textContent            = RaceRes.Name>0?Characters[Math.trunc(RaceRes.Name/100-1)].Name[0]:RaceRes.Name;
            clone.querySelector('.result_table_training_rank').textContent   = RaceRes.Runk[0];
            clone.querySelector('.result_table_training_point').textContent  = RaceRes.Runk[1];
            clone.querySelector('.result_table_trainer').textContent         = target.Name[0];;
            clone.querySelector('.result_table_goal_time').textContent       = RaceRes.GoalTime==0?"":Math.trunc(RaceRes.GoalTime/600)+":"+("00" + Math.trunc((RaceRes.GoalTime%600)/10)).slice(-2) +"."+RaceRes.GoalTime%10;
            clone.querySelector('.result_table_goal_def').textContent        = RaceRes.GoalDef;
            clone.querySelector('.result_table_corner_pass').textContent     = RaceRes.CornerPass;
            clone.querySelector('.result_table_furlong_time').textContent    = RaceRes.FurlongTime;
            clone.querySelector('.result_table_favorite').textContent        = RaceRes.Favorite;

            document.getElementById('ResultTable').tBodies[0].appendChild(clone);
            const row = document.getElementById('ResultTable').tBodies[0].getElementsByClassName('result_table_rows')[idx];
            if((idx + 1) % 2 == 0) {
                row.style.backgroundColor = "#f0f0f0";
            }
            else {
                row.style.backgroundColor = "#ffffff";
            }

            // 枠番画像を挿入
            row.getElementsByClassName('result_table_frame')[0].appendChild(SetFrameImg(result.length, resultID-1));
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

function SetRaceRunner () {
    const member = MatchingRace[ActiveTabIdx][1];
    const race = DB_RaceInfo[RaceGroupeID-1];

    // メンバー情報がある場合のみデータを登録
    if(member.length > 0){
        const template = document.getElementById('RunnerTemplate');
        const raceInfo = race.Races[ActiveTabIdx];

        // ウマ番順に情報を挿入
        for(let idx = 0; idx < member.length; idx++) {
            const clone = template.content.cloneNode(true);

            // メンバーIDのオフセットを参照して出走者情報を取得する
            const id = member[idx];
            const target = GetTargetRunnerFromMemberID(id);

            // メンバーの出走記録からレース情報を取得
            const RaceRes = GetTargetRaceInfoFromMemberID(target);

            clone.querySelector('.runner_table_number').textContent          = idx + 1;
            clone.querySelector('.runner_table_name').textContent            = RaceRes.Name>0?Characters[Math.trunc(RaceRes.Name/100-1)].Name[0]:RaceRes.Name;
            clone.querySelector('.runner_table_trainer').textContent         = target.Name[0];
            clone.querySelector('.runner_table_parent1').textContent         = RaceRes.Parents[0];
            clone.querySelector('.runner_table_parent2').textContent         = RaceRes.Parents[1];
            clone.querySelector('.runner_table_training_runk').textContent   = RaceRes.Runk[0];
            clone.querySelector('.runner_table_training_point').textContent  = RaceRes.Runk[1];

            // 前走の表示設定
            let befRunCnt = 0;
            for(let idx2 = 0; idx2 < target.result.length; idx2++) {
                let targetTxtBase = '.runner_table';
                if(befRunCnt == 0) targetTxtBase += '_before';
                else if(befRunCnt == 1) targetTxtBase += '_2before';
                else if(befRunCnt == 2) targetTxtBase += '_3before';
                else if(befRunCnt == 3) targetTxtBase += '_4before';
                else continue;

                const befData = target.result[idx2];
                // レースグループが対象よりも高いならば前走ではないのでスキップ
                if(befData.RaceGrpID > RaceGroupeID){
                    continue;
                }
                // レースグループが同値かつ対象よりレースIDが同値以上ならば前走ではないのでスキップ
                if(befData.RaceGrpID == RaceGroupeID && befData.RaceID-1 >= ActiveTabIdx){
                    continue;
                }

                befRunCnt++;
                const befRace = DB_RaceInfo[befData.RaceGrpID-1];

                clone.querySelector(targetTxtBase+'_date').textContent              = befRace.Races[befData.RaceID-1].RaceDate.Year+"/"+befRace.Races[befData.RaceID-1].RaceDate.Month+"/"+befRace.Races[befData.RaceID-1].RaceDate.Day;
                clone.querySelector(targetTxtBase+'_prace').textContent             = befRace.Races[befData.RaceID-1].RaceInfo.Place;
                clone.querySelector(targetTxtBase+'_race_name').textContent         = befRace.Races[befData.RaceID-1].AbbreviationName;
                clone.querySelector(targetTxtBase+'_result').textContent            = befData.Goal;
                clone.querySelector(targetTxtBase+'_result_unit').textContent       = "着";
                clone.querySelector(targetTxtBase+'_number').textContent            = befRace.Races[befData.RaceID-1].RaceInfo.MembersCnt + "頭 " + ("00" + befData.Number).slice(-2) + "番";
                clone.querySelector(targetTxtBase+'_favorite').textContent          = befData.Favorite + " 番人気";
                clone.querySelector(targetTxtBase+'_trainer').textContent           = befData.Name>0?Characters[Math.trunc(befData.Name/100-1)].Name[0]:befData.Name;
                clone.querySelector(targetTxtBase+'_training_runk').textContent     = befData.Runk[1] + "(" + befData.Runk[0] + ")";
                clone.querySelector(targetTxtBase+'_training_couse').textContent    = "-";
                clone.querySelector(targetTxtBase+'_course').textContent            = befRace.Races[befData.RaceID-1].RaceInfo.Length + " " + befRace.Races[befData.RaceID-1].RaceInfo.Field;
                clone.querySelector(targetTxtBase+'_goal_time').textContent         = Math.trunc(befData.GoalTime/600)+":"+Math.trunc((befData.GoalTime%600)/10)+"."+befData.GoalTime%10;;
                clone.querySelector(targetTxtBase+'_condition').textContent         = befRace.Races[befData.RaceID-1].RaceInfo.Condition;
                clone.querySelector(targetTxtBase+'_corner_pass').textContent       = befData.Corner;
                clone.querySelector(targetTxtBase+'_furlong_time').textContent      = "3F" + befData.FurlongTime;
                
                if(befData.GoalTime == 0) {
                    clone.querySelector(targetTxtBase+'_top_runner').textContent = "-";
                }
                else if(befData.Goal == 1) {
                    let name;
                    let defTime;
                    defTime = befRace.Races[befData.RaceID-1].Winner.Next.Time - befData.GoalTime;
                    if( defTime == NaN) defTime = "-";
                    if(befRace.Races[befData.RaceID-1].Winner.Next.Name>0) {
                        name = Characters[Math.trunc(befRace.Races[befData.RaceID-1].Winner.Top.Name/100-1)].Name[0];
                    }
                    else {
                        name = befRace.Races[befData.RaceID-1].Winner.Top.Name
                    }
                    clone.querySelector(targetTxtBase+'_top_runner').textContent = name + " (" + defTime/10 + ")";
                }
                else {
                    let name;
                    let defTime;
                    defTime = befData.GoalTime - befRace.Races[befData.RaceID-1].Winner.Top.Time;
                    if( defTime == NaN) defTime = "-";
                    if(befRace.Races[befData.RaceID-1].Winner.Next.Name>0) {
                        name = Characters[Math.trunc(befRace.Races[befData.RaceID-1].Winner.Next.Name/100-1)].Name[0];
                    }
                    else {
                        name = befRace.Races[befData.RaceID-1].Winner.Next.Name
                    }
                    clone.querySelector(targetTxtBase+'_top_runner').textContent = name + " (" + defTime/10 + ")";
                }
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
            
            // 背景色の変更
            let befsCnt = 0;
            const befs = row.getElementsByClassName('runner_table_befores');
            for(let idx2 = 0; idx2 < target.result.length; idx2++){
                if (befsCnt >= 4) {
                    break;
                }

                const befData = target.result[idx2];
                // レースグループが対象よりも高いならば前走ではないのでスキップ
                if(befData.RaceGrpID > RaceGroupeID){
                    continue;
                }
                // レースグループが同値かつ対象よりレースIDが同値以上ならば前走ではないのでスキップ
                if(befData.RaceGrpID == RaceGroupeID && befData.RaceID-1 >= ActiveTabIdx){
                    continue;
                }

                // 上位順位の背景は変更する
                if(befData.Goal == 1) {
                    befs[befsCnt].style.backgroundColor = "#ffd7d7";
                }
                else if(befData.Goal == 2) {
                    befs[befsCnt].style.backgroundColor = "#dee6ef";
                }
                else if(befData.Goal == 3) {
                    befs[befsCnt].style.backgroundColor = "#dde8cb";
                }
                else {
                    /* NOP */
                }
                befsCnt++;
            }
            if(befsCnt < 4) {
                // 前走の未入力欄を網掛けにする
                for(let idx2 = befsCnt; idx2 < 4; idx2++) {
                    befs[idx2].style.backgroundColor = "#d0d0d0";
                    befsCnt++;
                }
            }

            row.getElementsByClassName('runner_table_frame')[0].appendChild(SetFrameImg(member.length, idx));

            const nowTime = new Date().getTime() / 1000.0;
            const raceTime = new Date(raceInfo.RaceDate.Year, raceInfo.RaceDate.month-1, raceInfo.RaceDate.Day, raceInfo.RaceDate.Hour, raceInfo.RaceDate.Min).getTime() / 1000.0;

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

// fullCnt: 出走人数
// idx: 対象のウマ番
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

function GetTargetRunnerFromMemberID(id) {
    let ret;
    if(MembersIDOffset[0] < id && id <= MembersIDOffset[1]) {
        // すっごメンバーの情報
        ret = Members[ id-1 ];
    }
    else if(MembersIDOffset[1] < id && id <= MembersIDOffset[2]) {
        // りんりんメンバーの情報
        ret = Rinrin_Members[ id-MembersIDOffset[1]-1 ];
    }
    else if(MembersIDOffset[MembersIDOffset.length-1] < id) {
        // モブの情報(モブは常に最後に登録される)
        ret = CPU_Members[ id-MembersIDOffset[MembersIDOffset.length-1]-1 ];
    }
    else {
        ret = new MemberResultObj();
    }

    return ret;
}

function GetTargetRaceInfoFromMemberID(target, grpID, ID) {
    let ret;
    let groupeID;
    let raceID;

    if(target == undefined) {
        ret = new RaceResultObj();
    }
    else {
        if(grpID == undefined) {
            groupeID = RaceGroupeID;
        }
        else {
            groupeID = grpID
        }

        if(ID == undefined) {
            raceID = (ActiveRacedIdx*3) + ActiveTabIdx;
        }
        else {
            raceID = ID
        }

        for(let i = 0; i < target.result.length; i++) {
            res = target.result[i]
            if(res.RaceGrpID == groupeID && res.RaceID-1 == raceID) {
                ret = res;
                break;
            }
            else {
                ret = new RaceResultObj();
            }
        };
    }

    return ret;
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
function SetRaceInfo(flag) {
    let raceInfo;

    if(flag == false){
        // データを未記入にする場合
        raceInfo = new RaceInfomationObj();
    }
    else {
        raceInfo = DB_RaceInfo[RaceGroupeID-1].Races[(ActiveRacedIdx*3) + ActiveTabIdx];
    }

    const template = document.getElementById('RaceInfoTemplate');
    const clone = template.content.cloneNode(true);

    if(Object.keys(raceInfo).length > 0){
        clone.querySelector('.title').textContent       = raceInfo.SubTitle;
        clone.querySelector('.raceName').textContent    = raceInfo.RaceName;
        clone.querySelector('.date').textContent        = raceInfo.RaceDate.Year + "年" + raceInfo.RaceDate.Month + "月" + raceInfo.RaceDate.Day + "日(" + raceInfo.RaceDate.Date + ")";
        clone.querySelector('.startTime').textContent   = "発走時間：" + raceInfo.RaceDate.Hour + ":" + raceInfo.RaceDate.Min;
        clone.querySelector('.season').textContent      = "季節：" + raceInfo.RaceInfo.Season;
        clone.querySelector('.time_zone').textContent   = "時間帯：" + raceInfo.RaceInfo.TimeZone;
        clone.querySelector('.weather').textContent     = "天候：" + raceInfo.RaceInfo.Weather;
        clone.querySelector('.field').textContent       = raceInfo.RaceInfo.Field + "：" + raceInfo.RaceInfo.Condition;
        clone.querySelector('.course').textContent      = "コース：" + raceInfo.RaceInfo.Length + "m (" + raceInfo.RaceInfo.Place + " " + raceInfo.RaceInfo.Rotate + ")";
    }
    else {
        clone.querySelector('.title').textContent       = "-";
        clone.querySelector('.raceName').textContent    = "-";
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

function ViewInfomation(event){
    const target = event.target;
    const targetParent = target.parentNode;
    const  targetTableRow = targetParent.parentNode.querySelectorAll("tr");

    let i;
    for(i = 0; i < targetTableRow.length; i++) {
        if(targetTableRow[i] === targetParent) {
            break;
        }
    };

    const el = document.getElementById("ViewModal");
    if(el != null){
        el.style.top = window.scrollY+"px";
        el.style.display = "block";
        document.getElementsByTagName("body")[0].style.overflow = "hidden";

        el.addEventListener('click',()=>{
            el.style.display = "none";
            document.getElementsByTagName("body")[0].style.overflow = "visible";
        },false);
    }
    
    console.log("idx:"+i);
}
