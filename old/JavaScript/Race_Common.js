/*================================================*/
/* グローバル変数定義 */
/*================================================*/
const img_Frame = [
    "Img/Frame_Num_Color/40x40/1.png",
    "Img/Frame_Num_Color/40x40/2.png",
    "Img/Frame_Num_Color/40x40/3.png",
    "Img/Frame_Num_Color/40x40/4.png",
    "Img/Frame_Num_Color/40x40/5.png",
    "Img/Frame_Num_Color/40x40/6.png",
    "Img/Frame_Num_Color/40x40/7.png",
    "Img/Frame_Num_Color/40x40/8.png",
];

/*================================================*/
/* 関数定義定義 */
/*================================================*/
// 枠番画像のパスを取得
function GetFrameMapImg_RelativePath(rel){
    return [
        rel + img_Frame[0],
        rel + img_Frame[1],
        rel + img_Frame[2],
        rel + img_Frame[3],
        rel + img_Frame[4],
        rel + img_Frame[5],
        rel + img_Frame[6],
        rel + img_Frame[7],
    ];
}

function SetBeforeRunsTextContent(el, runnerInfo, raceInfo) {
    el.querySelector('.race_result_before_date').textContent              = raceInfo.RaceDate.Year+"/"+raceInfo.RaceDate.Month+"/"+raceInfo.RaceDate.Day;
    el.querySelector('.race_result_before_prace').textContent             = raceInfo.RaceInfo.Place;
    el.querySelector('.race_result_before_race_name').textContent         = raceInfo.AbbreviationName;
    el.querySelector('.race_result_before_result').textContent            = runnerInfo.Goal;
    el.querySelector('.race_result_before_result_unit').textContent       = "着";
    el.querySelector('.race_result_before_number').textContent            = raceInfo.RaceInfo.MembersCnt + "頭" + ("00"+runnerInfo.Number).slice(-2) + "番";
    el.querySelector('.race_result_before_favorite').textContent          = runnerInfo.Favorite + "番人気";
    el.querySelector('.race_result_before_trainer').textContent           = runnerInfo.Name>0?Characters[Math.trunc(runnerInfo.Name/100-1)].Name[0]:runnerInfo.Name;
    el.querySelector('.race_result_before_training_runk').textContent     = runnerInfo.Runk[0]+"("+runnerInfo.Runk[1]+")";
    el.querySelector('.race_result_before_training_couse').textContent    = "";
    el.querySelector('.race_result_before_course').textContent            = raceInfo.RaceInfo.Length + raceInfo.RaceInfo.Field;
    el.querySelector('.race_result_before_goal_time').textContent         = runnerInfo.GoalTime==0?"-":Math.trunc(runnerInfo.GoalTime/600)+":"+("00" + Math.trunc((runnerInfo.GoalTime%600)/10)).slice(-2) +"."+runnerInfo.GoalTime%10;
    el.querySelector('.race_result_before_condition').textContent         = raceInfo.RaceInfo.Condition;
    el.querySelector('.race_result_before_furlong_time').textContent      = "3F"+runnerInfo.FurlongTime;

    let TopDefInfo;
    if(runnerInfo.Goal == 1)   TopDefInfo = raceInfo.Winner.Next; 
    else                    TopDefInfo = raceInfo.Winner.Top;

    if(TopDefInfo.Name == "")   el.querySelector('.race_result_before_top_runner').textContent = "-";
    else                        el.querySelector('.race_result_before_top_runner').textContent = TopDefInfo.Name;
    
    if(runnerInfo.GoalTime == 0 || TopDefInfo.Time == 0) {
        el.querySelector('.race_result_before_top_runner').textContent += "(-)";
    }
    else {
        let name;
        let defTime;

        // 着差の絶対値を算出
        defTime = Math.abs(TopDefInfo.Time - runnerInfo.GoalTime);
        
        // ☆ウマ娘名をIDに置換中の暫定対応
        if(TopDefInfo.Name>0) {
            // IDに置換済み
            name = Characters[Math.trunc(raceInfo.Winner.Top.Name/100-1)].Name[0];
        }
        else {
            name = raceInfo.Winner.Top.Name
        }

        el.querySelector('.race_result_before_top_runner').textContent += " (" + defTime/10 + ")";
    }

    // コーナー通貨順位を追加
    const el_corners = document.createElement('div');
    el_corners.className = "corner_pass_items";
    runnerInfo.Corner.forEach(corner => {
        const divs = document.createElement('div');
        divs.textContent = corner;
        el_corners.appendChild(divs);
    })
    
    el.querySelector('.race_result_before_corner_pass').appendChild(el_corners);
}

function SetBeforeRunsBackGrndCtl(el, wrapper, target, viewNum) {
    if(target == 0) {
        const cln_Race = document.createElement('div');
        cln_Race.className = "race_result_none"
        cln_Race.textContent = '未出走';

        const el_before = document.createElement('td');
        el_before.className = "befores";
        el_before.appendChild(cln_Race);
        el.querySelector(wrapper).appendChild(el_before);
    }
    if(target < viewNum) {
        for(let i = viewNum; i > target; i--) {
            if(i == 1 && target == 0) break;

            const cln_Race = document.createElement('div');
            cln_Race.className = "race_result_none"
            
            const el_before = document.createElement('td');
            el_before.className = "befores";
            el_before.style = "background-color: #d3d3d3;"
            el_before.appendChild(cln_Race);
            el.querySelector(wrapper).appendChild(el_before);

            if(i<0) break;
        }
    }


    
    // // 背景色の変更
    // let befsCnt = 0;
    // const befs = row.getElementsByClassName('runner_table_befores');
    // for(let idx2 = 0; idx2 < target.result.length; idx2++){
    //     if (befsCnt >= 4) {
    //         break;
    //     }

    //     // 出走レース情報
    //     const befData = target.result[idx2];
    //     // レースグループが対象よりも高いならば前走ではないのでスキップ
    //     if(befData.RaceGrpID > RaceGroupeID){
    //         continue;
    //     }
    //     // レースグループが同値かつ対象よりレースIDが同値以上ならば前走ではないのでスキップ
    //     if(befData.RaceGrpID == RaceGroupeID && befData.RaceID-1 >= ActiveTabIdx){
    //         continue;
    //     }

    //     // 上位順位の背景は変更する
    //     if(befData.Goal == 1) {
    //         befs[befsCnt].style.backgroundColor = "#ffd7d7";
    //     }
    //     else if(befData.Goal == 2) {
    //         befs[befsCnt].style.backgroundColor = "#dee6ef";
    //     }
    //     else if(befData.Goal == 3) {
    //         befs[befsCnt].style.backgroundColor = "#dde8cb";
    //     }
    //     else {
    //         /* NOP */
    //     }
    //     befsCnt++;
    // }
}

// メンバーの前走をDBから取得
// function SetBeforeRuns(MemberDB) {
//     let targetRaceIdx = 0;
//     MatchingRace.forEach(Races => {
//         targetRaceIdx++;
//         Races[1].forEach(Mem => {
//             let id = Mem.MemberID;

//             // IDが登録されている場合に前走を挿入(モブは未登録)
//             if(id > 0 && id != undefined) {
//                 // DBに登録されているデータの前走情報を4つまで登録
//                 const res = MemberDB[id-1];
//                 let addCnt = 0;
//                 for(let i = 0; i < res.result.length; i++){
//                     // if(false) {
//                     if(addCnt < 4) {
//                         // レース日以降のものは登録しない(前走なので)
//                         const targetNowRace = DB_RaceInfo[RaceGroupeID-1].Races[targetRaceIdx-1];
//                         const nowRaceDay = targetNowRace.RaceDate.Year*100000000 + targetNowRace.RaceDate.Month*1000000 + targetNowRace.RaceDate.Day*10000 + targetNowRace.RaceDate.Hour*100 + targetNowRace.RaceDate.Min;
//                         const targetBefRace = DB_RaceInfo[res.result[i].RaceGrpID-1].Races[res.result[i].RaceID-1];
//                         const befRaceDay = targetBefRace.RaceDate.Year*100000000 + targetBefRace.RaceDate.Month*1000000 + targetBefRace.RaceDate.Day*10000 + targetBefRace.RaceDate.Hour*100 + targetBefRace.RaceDate.Min;;
//                         if( nowRaceDay > befRaceDay) {
//                             Mem.beforeRuns.push(res.result[i]);
//                             addCnt++;
//                         }
//                     }
//                     else break;
//                 }
//             }
//         })
//     });
// }
