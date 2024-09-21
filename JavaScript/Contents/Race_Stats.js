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
            cln_Race.querySelector('.race_result_before_date').textContent              = race.Date;
            cln_Race.querySelector('.race_result_before_prace').textContent             = race.Place;
            cln_Race.querySelector('.race_result_before_race_name').textContent         = race.Title;
            cln_Race.querySelector('.race_result_before_result').textContent            = race.Goal;
            cln_Race.querySelector('.race_result_before_result_unit').textContent       = "着";
            cln_Race.querySelector('.race_result_before_number').textContent            = race.MembersCnt + "頭" + race.Number + "番";
            cln_Race.querySelector('.race_result_before_favorite').textContent          = race.Favorite + "番人気";
            cln_Race.querySelector('.race_result_before_trainer').textContent           = race.Name;
            cln_Race.querySelector('.race_result_before_training_runk').textContent     = race.Runk;
            cln_Race.querySelector('.race_result_before_training_couse').textContent    = "";
            cln_Race.querySelector('.race_result_before_course').textContent            = race.CourseLength + "00" + race.Feald;
            cln_Race.querySelector('.race_result_before_goal_time').textContent         = race.GoalTime;
            cln_Race.querySelector('.race_result_before_condition').textContent         = race.Condition;
            cln_Race.querySelector('.race_result_before_furlong_time').textContent      = race.FurlongTime;
            cln_Race.querySelector('.race_result_before_top_runner').textContent        = race.Top+"("+race.TopDef+")";
            
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
