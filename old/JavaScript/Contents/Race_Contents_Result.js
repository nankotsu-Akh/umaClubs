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
    const result = MatchingRace[ActiveTabIdx][0];   // レース結果リスト(ウマ番)
    const member = MatchingRace[ActiveTabIdx][1];   // 出走者リスト(ID)

    // レース結果がある場合のみデータを登録
    if(result.length > 0 && result.length == member.length) {
        const template = document.getElementById('ResultTemplate');

        try{
            // 順位順に情報を挿入
            for(let idx = 0; idx < member.length; idx++) {
                const clone = template.content.cloneNode(true);
                
                const memberID = member[result[idx]-1];    // 出走者情報のIDを取得
    
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

                // 行を見やすいように1行ごとに色を変える
                const row = document.getElementById('ResultTable').tBodies[0].getElementsByClassName('result_table_rows')[idx];
                if((idx + 1) % 2 == 0) {
                    row.style.backgroundColor = "#f0f0f0";
                }
                else {
                    row.style.backgroundColor = "#ffffff";
                }

                // 枠番画像を挿入
                row.getElementsByClassName('result_table_frame')[0].appendChild(SetFrameImg(result.length, result[idx]-1));
            }
        }
        catch(err){
            alert("Data Error")
            console.log(err);
            document.getElementById('ResultTable').tBodies[0].appendChild(this.SetDefaultDatas());
        }
    }
    else {
        document.getElementById('ResultTable').tBodies[0].appendChild(this.SetDefaultDatas());
    }
}

function SetDefaultDatas() {
    const row = document.createElement('tr');
    row.classList.add("result_table_rows");
    row.style.backgroundColor = "#ffffff";

    const col = document.createElement('td');
    col.textContent = "レース未出走";
    col.colSpan = 12;
    row.appendChild(col);

    return row;
}
