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
    const member = MatchingRace[ActiveTabIdx][1];   // レース結果リスト(ウマ番)
    const race = DB_RaceInfo[RaceGroupeID-1];   // レース情報
    const baseTabelEle = document.getElementById('RunnerTable');

    // メンバー情報がある場合のみデータを登録
    if(member.length > 0){
        const template = document.getElementById('RunnerTemplate');
        const raceInfo = race.Races[(ActiveRacedIdx*3) + ActiveTabIdx];

        try {
            // ウマ番順に情報を挿入
            for(let idx = 0; idx < member.length; idx++) {
                const clone = template.content.cloneNode(true);

                // メンバーIDのオフセットを参照して出走者情報を取得する
                const target = GetTargetRunnerFromMemberID(member[idx]);

                // メンバーの出走記録からレース情報を取得
                const RaceRes = GetTargetRaceInfoFromMemberID(target);

                clone.querySelector('.runner_table_number').textContent          = idx + 1;
                clone.querySelector('.runner_table_name').textContent            = RaceRes.Name>0?Characters[Math.trunc(RaceRes.Name/100-1)].Name[0]:RaceRes.Name;
                clone.querySelector('.runner_table_trainer').textContent         = target.Name[0];
                clone.querySelector('.runner_table_parent1').textContent         = RaceRes.Parents[0];
                clone.querySelector('.runner_table_parent2').textContent         = RaceRes.Parents[1];
                clone.querySelector('.runner_table_training_runk').textContent   = RaceRes.Runk[0];
                clone.querySelector('.runner_table_training_point').textContent  = RaceRes.Runk[1];
                
                // 行を見やすいように1行ごとに色を変える
                if((idx + 1) % 2 == 0) {
                    clone.querySelector('.runner_table_rows').style.backgroundColor = "#f0f0f0";
                }
                else {
                    clone.querySelector('.runner_table_rows').style.backgroundColor = "#ffffff";
                }
                
                // 前走の表示設定
                let befCnt = SetBeforeRuns(clone.querySelector(".runner_table_rows"), target);
                SetBeforeRunsBackGrndCtl(clone, ".runner_table_rows", befCnt, 4);
                
                baseTabelEle.tBodies[0].appendChild(clone);

                
                
                const row = baseTabelEle.tBodies[0].getElementsByClassName('runner_table_rows')[idx];
                // 枠番画像を挿入
                row.getElementsByClassName('runner_table_frame')[0].appendChild(SetFrameImg(member.length, idx));

                const nowTime = new Date().getTime() / 1000.0;
                const raceTime = new Date(raceInfo.RaceDate.Year, raceInfo.RaceDate.month-1, raceInfo.RaceDate.Day, raceInfo.RaceDate.Hour, raceInfo.RaceDate.Min).getTime() / 1000.0;

                // 出走時間前の場合は枠番を設定しない
                if(raceTime > nowTime) {
                    row.getElementsByClassName('runner_table_number')[0].textContent = "";
                    row.getElementsByClassName('runner_table_frame')[0].textContent = "";
                }
            }
        }
        catch(err){
            alert("Data Error");
            console.log(err);
            baseTabelEle.tBodies[0].appendChild(this.SetDefaultDatas());
        }
    }
    else {
        baseTabelEle.tBodies[0].appendChild(this.SetDefaultDatas());
    }
}

function SetDefaultDatas() {
    const row = document.createElement('tr');
    row.classList.add("runner_table_rows");
    row.style.backgroundColor = "#ffffff";

    const col = document.createElement('td');
    col.textContent = "未登録";
    col.colSpan = 8;
    row.appendChild(col);

    return row;
}

// 描画した前走情報をリターン(最大4)
function SetBeforeRuns(row, target){
    const befTemp = document.getElementById('RunnerBeforeInfoTemplate');
    const targetTxtBase = 'race_result_before';

    let befRunCnt = 0;
    for(let idx2 = 0; idx2 < target.result.length; idx2++) {
        if(befRunCnt >= 4)   break;

        const el = befTemp.content.cloneNode(true);
        
        // 出走レース情報
        const befData = target.result[idx2];
        // レースグループが対象よりも高いならば前走ではないのでスキップ
        if(befData.RaceGrpID > RaceGroupeID){
            continue;
        }
        // レースグループが同値かつ対象よりレースIDが同値以上ならば前走ではないのでスキップ
        if(befData.RaceGrpID == RaceGroupeID && befData.RaceID-1 >= ActiveTabIdx){
            continue;
        }

        const RaceInfo = DB_RaceInfo[befData.RaceGrpID-1].Races[befData.RaceID-1];
        SetBeforeRunsTextContent(el, befData, RaceInfo)

        // 上位入着は背景色を変更
        if(befData.Goal == 1) {
            el.querySelector(".befores").style.backgroundColor = "#ffd7d7";
        }
        else if(befData.Goal == 2) {
            el.querySelector(".befores").style.backgroundColor = "#dee6ef";
        }
        else if(befData.Goal == 3) {
            el.querySelector(".befores").style.backgroundColor = "#dde8cb";
        }
        else {
            /* NOP */
        }
        
        row.appendChild(el);
        befRunCnt++;
    }

    return befRunCnt;
}