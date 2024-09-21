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

// メンバーの前走をDBから取得
function SetBeforeRuns(MemberDB) {
    MatchingRace.forEach(Races => {
        Races[1].forEach(Mem => {
            let id = Mem.MemberID;

            // IDが登録されている場合に前走を挿入(モブは未登録)
            if(id > 0 && id != undefined) {
                // DBに登録されているデータの前走情報を4つまで登録
                const res = MemberDB[id-1];
                for(let i = 0; i < 4; i++){
                    if(i < res.result.length) {
                        // レース日以降のものは登録しない(前走なので)
                        const nowRaceDay = Races[2].raceDay.year*10000 + Races[2].raceDay.month*100 + Races[2].raceDay.day;
                        const befRaceDay = res.result[i].Date.year*10000 + res.result[i].Date.month*100 + res.result[i].Date.day;
                        if( nowRaceDay > befRaceDay) {
                            Mem.beforeRuns.push(res.result[i]);
                        }
                    }
                    else break;
                }
            }
        })
    });
}
