/*================================================*/
/* グローバル定数定義 */
/*================================================*/

/*================================================*/
/* グローバル変数定義 */
/*================================================*/
const el_Main = document.getElementById('Main');

/*================================================*/
/* メイン処理 */
/*================================================*/
// 初期表示
SetRaceResult();

/*================================================*/
/* 関数定義 */
/*================================================*/
function SetRaceResult () {
    const ele = document.getElementById('Rows_Template');
    const ele_race = document.getElementById('race_result');

    Members.forEach(memb => {
        const clone = ele.content.cloneNode(true);
        
        clone.querySelector('.member_name').textContent = memb.Name[0];
        memb.result.forEach(race => {
            const cln_Race = ele_race.content.cloneNode(true);
            
            const raceInfo = DB_RaceInfo[race.RaceGrpID-1].Races[race.RaceID-1];
            SetBeforeRunsTextContent(cln_Race, race, raceInfo);
                
            const el_before = document.createElement('td');
            el_before.className = "befores";

            // 上位入着は背景色を変更
            if(race.Goal == 1) {
                el_before.style.backgroundColor = "#ffd7d7";
            }
            else if(race.Goal == 2) {
                el_before.style.backgroundColor = "#dee6ef";
            }
            else if(race.Goal == 3) {
                el_before.style.backgroundColor = "#dde8cb";
            }
            else {
                /* NOP */
            }

            el_before.appendChild(cln_Race);
            clone.querySelector(".member_result_races_item").appendChild(el_before);
        });
                    

        SetBeforeRunsBackGrndCtl(clone, ".member_result_races_item", memb.result.length, 8)


        el_Main.children[0].tBodies[0].appendChild(clone);
    });
}

