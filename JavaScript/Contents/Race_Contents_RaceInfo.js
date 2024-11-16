// function WriteRaceInfo() {
//     let text = `
//         <div id="RaceInfo">
//             <div class="raceInfo_date" style="display: flex;">
//                 <div class="date"></div>
//                 <div class="startTime">aaaaa</div>
//             </div>
//             <div style="display: flex;">
//                 <div class="season" style="padding: 0 5px; border: solid 1px black; background-color: white;">aaaaa</div>
//                 <div class="time_zone" style="padding: 0 5px; border: solid 1px black; background-color: white;">aaaaa</div>
//                 <div class="weather" style="padding: 0 5px; border: solid 1px black; background-color: white;">aaaaa</div>
//                 <div class="field" style="padding: 0 5px; border: solid 1px black; background-color: white;">aaaaa</div>
//             </div>
//             <div class="course">aaaaa</div>
//         </div>
//     `;

//     return text;
// }
function SetRaceInfo(flag) {
    let raceInfo = {};
    
    if(flag != false) {
        if(DB_RaceInfo.length >= RaceGroupeID) {
            const info = DB_RaceInfo[RaceGroupeID-1];
            
            if(info.Race.length >= (ActiveRacedIdx*3) + ActiveTabIdx){
                raceInfo = info.Races[(ActiveRacedIdx*3) + ActiveTabIdx];
            }
        }
    }

    const template = document.getElementById('RaceInfoTemplate');
    const clone = template.content.cloneNode(true);

    if(flag != false && Object.keys(raceInfo).length > 0){
        try{
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
        catch (err) {
            SetDefaultRaceInfoDatas(clone);
        }
    }
    else {
        SetDefaultRaceInfoDatas(clone);
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

function SetDefaultRaceInfoDatas(clone) {
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
