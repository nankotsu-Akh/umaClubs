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
    // 現在の時刻とレースの発走時間をUNIX時間で保持
    // const nowTime = new Date().getTime() / 1000.0;
    // let strtTime = DB_RaceInfo[RaceGroupeID-1].Races[ActiveTabIdx].RaceDate;
    // const raceTime = new Date(strtTime.Year, strtTime.Month-1, strtTime.Day, strtTime.Hour, strtTime.Min-5).getTime() / 1000.0;

    // アクティブなレースタブが登録されているレース数以内の場合
    if( ActiveTabIdx < MatchingRace.length){ // 通常描画処理
        // レース情報を描画
        SetRaceInfo();
    }
    else {  // 無効な選択の場合
        SetRaceInfo(false);
    }

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
        for(let idx = 0; idx < CPU_Members.length; idx++){
            if(CPU_Members[idx].ID == (id-MembersIDOffset[MembersIDOffset.length-1])){
                ret = CPU_Members[idx];
                break;
            }
        }
        
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

    // 検索に使用する対象が存在しない場合は空のオブジェクトを返す
    if(target == undefined) {
        ret = new RaceResultObj();
    }
    else {
        // レースグループIDが入力されていない場合は現在のレースグループを使用
        if(grpID == undefined) {
            groupeID = RaceGroupeID;
        }
        else {
            groupeID = grpID
        }
        
        // レースIDが入力されていない場合は現在のレースを使用
        if(ID == undefined) {
            raceID = (ActiveRacedIdx*3) + ActiveTabIdx;
        }
        else {
            raceID = ID
        }

        // 対象のレース出走情報から該当するデータを検索
        let i;
        for(i = 0; i < target.result.length; i++) {
            res = target.result[i]
            if(res.RaceGrpID == groupeID && res.RaceID-1 == raceID) {
                ret = res;
                break;
            }
            else {
                ret = new RaceResultObj();
            }
        };

        if(i >= target.result.length) {
            ret = new RaceResultObj();
        }
    }

    return ret;
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
    let targetInfo;

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

        targetInfo = GetTargetRunnerFromMemberID(MatchingRace[ActiveTabIdx][WRITE_INFO_TYPE_TABS][i-1]);
        WriteInfomation(targetInfo);

        el.addEventListener('click',()=>{
            el.style.display = "none";
            document.getElementsByTagName("body")[0].style.overflow = "visible";
        },false);
    }
    
    console.log("idx:"+i);
}

function WriteInfomation(targetInfo){
    console.log(targetInfo);
    // console.log("test");
}
