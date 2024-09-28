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
            const raceInfo = DB_RaceInfo[race.RaceGrpID-1].Races[race.RaceID-1];
            const cln_Race = ele_race.content.cloneNode(true);

            cln_Race.querySelector('.race_result_before_date').textContent              = raceInfo.RaceDate.Year+"/"+raceInfo.RaceDate.Month+"/"+raceInfo.RaceDate.Day;
            cln_Race.querySelector('.race_result_before_prace').textContent             = raceInfo.RaceInfo.Place;
            cln_Race.querySelector('.race_result_before_race_name').textContent         = raceInfo.AbbreviationName;
            cln_Race.querySelector('.race_result_before_result').textContent            = race.Goal;
            cln_Race.querySelector('.race_result_before_result_unit').textContent       = "着";
            cln_Race.querySelector('.race_result_before_number').textContent            = raceInfo.RaceInfo.MembersCnt + "頭" + ("00"+race.Number).slice(-2) + "番";
            cln_Race.querySelector('.race_result_before_favorite').textContent          = race.Favorite + "番人気";
            cln_Race.querySelector('.race_result_before_trainer').textContent           = race.Name>0?Characters[Math.trunc(race.Name/100-1)].Name[0]:race.Name;
            cln_Race.querySelector('.race_result_before_training_runk').textContent     = race.Runk[0]+"("+race.Runk[1]+")";
            cln_Race.querySelector('.race_result_before_training_couse').textContent    = "";
            cln_Race.querySelector('.race_result_before_course').textContent            = raceInfo.RaceInfo.Length + raceInfo.RaceInfo.Field;
            cln_Race.querySelector('.race_result_before_goal_time').textContent         = race.GoalTime==0?"-":Math.trunc(race.GoalTime/600)+":"+("00" + Math.trunc((race.GoalTime%600)/10)).slice(-2) +"."+race.GoalTime%10;
            cln_Race.querySelector('.race_result_before_condition').textContent         = raceInfo.RaceInfo.Condition;
            cln_Race.querySelector('.race_result_before_furlong_time').textContent      = "3F"+race.FurlongTime;

            let defTime;
            if(race.Goal == 1) {
                let name;
                
                if(raceInfo.Winner.Next.Time == 0) {
                    cln_Race.querySelector('.race_result_before_top_runner').textContent        = raceInfo.Winner.Top.Name+"(-)";
                }
                else {
                    defTime = raceInfo.Winner.Next.Time - race.GoalTime;
                    if( defTime < 0) defTime = "-";
                    if(raceInfo.Winner.Next.Name>0) {
                        name = Characters[Math.trunc(raceInfo.Winner.Next.Name/100-1)].Name[0];
                    }
                    else {
                        name = race.Name
                    }
                }

                cln_Race.querySelector('.race_result_before_top_runner').textContent = name + " (" + defTime/10 + ")";
            }
            else {
                if(raceInfo.Winner.Top.Time == 0) {
                    cln_Race.querySelector('.race_result_before_top_runner').textContent        = raceInfo.Winner.Top.Name+"(-)";
                }
                else {
                    let name;
                    defTime = race.GoalTime - raceInfo.Winner.Top.Time;
                    if( defTime < 0) defTime = "-";
                    if(raceInfo.Winner.Top.Name>0) {
                        name = Characters[Math.trunc(raceInfo.Winner.Top.Name/100-1)].Name[0];
                    }
                    else {
                        name = race.Name
                    }
                }
                cln_Race.querySelector('.race_result_before_top_runner').textContent = raceInfo.Winner.Top.Name + " (" + defTime/10 + ")";
            }
            
            const el_corners = document.createElement('div');
            el_corners.className = "corner_pass_items";
            race.Corner.forEach(corner => {
                const divs = document.createElement('div');
                divs.textContent = corner;
                el_corners.appendChild(divs);
            })
            cln_Race.querySelector('.race_result_before_corner_pass').appendChild(el_corners);

            const el_before = document.createElement('div');
            el_before.className = "befores";
            el_before.appendChild(cln_Race);
            clone.querySelector(".member_result_races_item").appendChild(el_before);
        });

        if(memb.result.length == 0) {
            const cln_Race = document.createElement('div');
            cln_Race.className = "race_result_none"
            cln_Race.textContent = '未出走';

            const el_before = document.createElement('div');
            el_before.className = "befores";
            el_before.appendChild(cln_Race);
            clone.querySelector(".member_result_races_item").appendChild(el_before);
        }
        if(memb.result.length < 8) {
            for(let i = 8; i > memb.result.length; i--) {
                if(i == 1 && memb.result.length == 0) break;

                cln_Race = document.createElement('div');
                cln_Race.className = "race_result_none"
                cln_Race.style = "background-color: #d3d3d3;"
                
                const el_before = document.createElement('div');
                el_before.className = "befores";
                el_before.appendChild(cln_Race);
                clone.querySelector(".member_result_races_item").appendChild(el_before);

                if(i<0) break;
            }
        }

        el_Main.children[0].tBodies[0].appendChild(clone);
    });
}
