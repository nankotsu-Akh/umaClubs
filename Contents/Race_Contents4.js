const RaceGroupeID = 4;
const el_AccordionTitle = document.getElementsByClassName('main_info_title');
let tournamentViewFlag = false;
let MatchingRace;

// レース出走情報　第1試合
const MatchingRace_1 = [
    [
        [6,7,1,9,3,4,8,5,2],
        [1039,1008,1004,1040,1041,8,2,1042,1043]
    ],
    [
        [2,7,3,1,8,5,9,6,4],
        [1044,6,1045,1025,1046,1047,14,1048,1049]
    ],
    [
        [3,2,9,8,4,6,7,1,5],
        [1050,10,16,1051,1052,1053,1054,1055,1056],
    ],
]
// レース出走情報　第2試合
const MatchingRace_2 = [
    [
        [4,1,5,6,8,7,3,9,2],
        [19,1057,1012,7,1058,1059,1060,1061,1062]
    ],
    [
        [2,1,6,4,3,8,7,9,5],
        [5,17,1063,1064,1065,1066,1067,1068,1069]
    ],
    [
        [3,6,2,1,4,7,5,8,9],
        [1070,1071,3,1072,1048,20,1073,1074,1075]
    ],
]
// レース出走情報　第3試合
const MatchingRace_3 = [
    [
        [9,3,6,8,2,1,7,5,4],
        [1076,1077,11,1078,1079,1080,1081,1082,27]
    ],
    [
        [3,2,1,7,4,6,5,9,8],
        [1083,13,21,1084,1050,1085,1080,1086,1087]
    ],
    [
        [8,7,3,2,4,1,6,9,5],
        [1088,1004,1089,1090,1091,1092,23,15,1093]
    ],
]
// レース出走情報　第4試合
const MatchingRace_4 = [
    // レース出走情報　レース順
    [
        [9,5,4,2,3,8,1,6,7],
        [1072,1094,1068,1095,7,1027,1057,1096,6]
    ],
    [
        [1,4,7,5,2,8,9,6,3],
        [3,1097,1098,8,1028,1099,1051,1100,1101]
    ],
    [
        [7,1,2,5,4,6,3,9,8],
        [5,1102,1103,1104,1105,1106,10,1108,1107]
    ],
]
// レース出走情報　第5試合
const MatchingRace_5 = [
    // レース出走情報　レース順
    [   // 第1レース
        [4,9,2,5,8,1,6,7,3],
        [1109,1110,1111,23,1112,1113,1104,1078,12]
    ],
    [   // 第2レース
        [6,7,2,9,4,3,1,5,8],
        [1114,1115,1061,1116,1117,28,21,1118,1119]
    ],
    [   // 第3レース
        [8,1,6,3,2,5,9,4,7],
        [4,1120,1121,1078,1122,1123,1124,27,1125]
    ],
]
// レース出走情報　第6試合
const MatchingRace_6 = [
    // レース出走情報　レース順
    [   // 第1レース
        [3,9,1,8,5,4,2,6,7],
        [1126,1127,27,1128,1129,1130,1131,1132,6]
    ],
    [   // 第1レース
        [8,9,2,7,3,5,6,4,1],
        [1133,1134,1135,1136,1129,1114,1137,21,8]
    ],
    [   // 第2レース
        [7,2,4,9,6,5,8,3,1],
        [1103,23,1138,1139,1140,1141,1142,10,1143]
    ],
]
const Races = [MatchingRace_1, MatchingRace_2, MatchingRace_3, MatchingRace_4, MatchingRace_5, MatchingRace_6]

/*================================================*/
/* メイン処理 */
/*================================================*/
MatchingRace = MatchingRace_1;
// SetBeforeRuns(Members);

// アコーディオン処理の登録
// SetEventAccordion(el_MainContent);
SetEventAccordion(el_AccordionTitle);
el_AccordionTitle[0].addEventListener("click", ()=>{
    if(el_AccordionTitle[0].classList.contains('close')) {
        if(!tournamentViewFlag){
            CreateTournament();
            tournamentViewFlag = true
        }
    }
})

// 表示情報選択時のイベント付与
const el_RaceMatching = document.getElementById('RaceMatching').getElementsByTagName('li');
for(let i = 0; i < el_RaceMatching.length; i++) {
    el_RaceMatching[i].addEventListener("click", ()=>{
        AddEvent_SelectTab(el_RaceMatching, i)
        ActiveRacedIdx = i;
        MatchingRace = Races[i]
        // SetBeforeRuns(Members);
        WriteInfo();
    });
}

/*================================================*/
/* 関数定義 */
/*================================================*/
function SetEventAccordion(el) {
    /* アコーディオンのクリック処理 */
    for(let i = 0; i < el.length; i++) {
        el[i].addEventListener("click", ()=>{
            const el_AccordionItem = el[i].nextElementSibling;

            /* アコーディオンの上下 */
            SlideToggle(el_AccordionItem, 300);

            if(el[i].classList.contains('close')) {
                el[i].classList.remove('close');
            }
            else {
                el[i].classList.add('close');
            }

            WriteInfo();
        })
    }
}
function SlideToggle(el, duration) {
    if(window.getComputedStyle(el).display === "none") {
        SlideDown(el, duration);
    }
    else {
        SlideUp(el, duration);
    }
};
function SlideUp(el, duration) {
    el.style.height = el.offsetHeight + "px";
    el.offsetHeight;
    el.style.transitionProperty = "height, margin, padding";
    el.style.transitionDuration = duration + "ms";
    el.style.transitionTimingFunction = "ease";
    el.style.overflow = "hidden";
    el.style.height = 0;
    el.style.paddingTop = 0;
    el.style.paddingBottom = 0;
    el.style.marginTop = 0;
    el.style.marginBottom = 0;
    setTimeout(() => {
      el.style.display = "none";
      el.style.removeProperty("height");
      el.style.removeProperty("padding-top");
      el.style.removeProperty("padding-bottom");
      el.style.removeProperty("margin-top");
      el.style.removeProperty("margin-bottom");
      el.style.removeProperty("overflow");
      el.style.removeProperty("transition-duration");
      el.style.removeProperty("transition-property");
      el.style.removeProperty("transition-timing-function");
    }, duration);
}
function SlideDown(el, duration = 300) {
    el.style.removeProperty("display");
    let display = window.getComputedStyle(el).display;
    if (display === "none") {
      display = "block";
    }
    el.style.display = display;
    let height = el.offsetHeight;
    el.style.overflow = "hidden";
    el.style.height = 0;
    el.style.paddingTop = 0;
    el.style.paddingBottom = 0;
    el.style.marginTop = 0;
    el.style.marginBottom = 0;
    el.offsetHeight;
    el.style.transitionProperty = "height, margin, padding";
    el.style.transitionDuration = duration + "ms";
    el.style.transitionTimingFunction = "ease";
    el.style.height = height + "px";
    el.style.removeProperty("padding-top");
    el.style.removeProperty("padding-bottom");
    el.style.removeProperty("margin-top");
    el.style.removeProperty("margin-bottom");
    setTimeout(() => {
      el.style.removeProperty("height");
      el.style.removeProperty("overflow");
      el.style.removeProperty("transition-duration");
      el.style.removeProperty("transition-property");
      el.style.removeProperty("transition-timing-function");
    }, duration);
}

// レーストーナメント表を作成
function CreateTournament() {
    const teamNames = ["むにむにまままーデ", "Oh！米！パリピ留学！", "卍肩傘バナナ卍", "異次元のがじがじ殿下", "バブリーモアイ", "闘魂開運⭐️週末へっぽこ馬券王", "108連鎖のれじすたなんこつ軍団"];
    const tournamentResult = [[true, false], [true, true], [true, true], [true, true], [true, true], [true, false]];
    CreateTournamentImg(teamNames, tournamentResult);
}
const raceInfos = [
    [["マイル", "×-〇"], ["中距離", "×-〇"], ["長距離", "〇-×"]],
    [["短距離", "〇-×"], ["長距離", "×-〇"], ["マイル", "〇-×"]],
    [["中距離", "〇-×"], ["マイル", "〇-×"], ["長距離", "×-〇"]],
    [["短距離", "〇-×"], ["マイル", "×-〇"], ["中距離", "〇-×"]],
    [["マイル", "〇-×"], ["短距離", "×-〇"], ["中距離", "〇-×"]],
    [["中距離", "×-〇"], ["短距離", "×-〇"], ["長距離", "〇-×"]]
];

function CreateTournamentImg(teams, result) {
    const svgImgWidth = 1030;
    const svgImgHeight = 850;
    const svgImg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgImg.setAttribute('id','TournamentImg');
    svgImg.setAttribute('viewbox','0 0 1000 1200');
    svgImg.setAttribute('width', svgImgWidth+'px');
    svgImg.setAttribute('height', svgImgHeight+'px');
    svgImg.setAttribute('preserveAspectRatio','none');
    
    svgImg.setAttribute('style','border: solid 1px black');
    const varLineLength = 100;
    const horLineLength = 61;

    /* 暫定対応 */
    /*************
    * 幅1500pxで7チーム表示(8チーム分の間隔)するため、両サイドマージン75px、
    * 1チームあたりの表示幅90px、1チームおきの間隔90pxとする。
    * 7チーム目のシードに関しては6チームから180pxの間隔を取る。
    
    
    * 幅1030pxで7チーム表示(8チーム分の間隔)するため、両サイドマージン45px、
    * 画像表示分(70px)と文字幅(20px)だけずらす。
    * 7チーム目のシードに関しては6チームから180pxの間隔を取る。
    **************/
    const baseHorMargin = 40;
    const baseVerMargin = 50;
    const viewWidth = 95;
    const picSize = 73;

    /* チーム名 */
    for(let i = 0; i < teams.length; i++) {
        let x1, y1;

        const team = document.createElementNS('http://www.w3.org/2000/svg','text');
        const name = document.createTextNode(teams[i]);
        team.appendChild(name)
        if(i%2 == 0 && i<teams.length-1) {  // 奇数組と偶数組で処理を分ける。7チームは例外で偶数と同一処理
            x1 = baseHorMargin + viewWidth/2 + picSize*(i*2);
        }
        else {
            x1 = baseHorMargin - viewWidth/2 + picSize*((i*2)+1);
        }
        
        y1 = baseVerMargin + 20 + varLineLength*4; 
        team.setAttribute('x', x1);
        team.setAttribute('y', y1);
        team.setAttribute('writing-mode', 'tb');
        team.setAttribute('font-size', '17pt');
        team.setAttribute('font-weight', 'bold');
        team.setAttribute('glyph-orientation-horizontal', 0);
        svgImg.appendChild(team);
    }
    
    let totalFightCnt = 0;
    /* 縦線 */
    for(let i = 0; i < 12; i++){
        let x1, x2, y1, y2;
        let lineColor,  lineWidth;
        let resultFlag;
        
        const line_ver = document.createElementNS('http://www.w3.org/2000/svg','line');
        if(i%2 == 0) {
            x1 = baseHorMargin + viewWidth/2;
            resultFlag = result[Math.trunc(i/3)][1];
        }
        else {
            x1 = baseHorMargin + viewWidth/2 + 1;
            resultFlag = !result[Math.trunc(i/3)][1];
        }

        if(totalFightCnt > 4){}
        else if(totalFightCnt > 2){
            x1 += horLineLength + picSize * ((i-6)*2);
            y1 = baseVerMargin + 20 + varLineLength*2; 
        }
        else {
            x1 +=  + picSize * (i*2);
            y1 = baseVerMargin + 20 + varLineLength*3; 
        }
        
        lineColor = result[Math.trunc(i/3)][0] ? (resultFlag ? "red" : "black") : "black"
        lineWidth = result[Math.trunc(i/3)][0] ? (resultFlag ? "5" : "3") : "3"
        
        SetLineInfo(line_ver, [x1, y1, x1, y1 + varLineLength], lineColor, lineWidth);
        svgImg.appendChild(line_ver);

        if((i+1)%2 == 0) {
            totalFightCnt++;
        }
    }
    // const line10_ver = document.createElementNS('http://www.w3.org/2000/svg','line');
    // x1 = baseHorMargin + picSize*13 - viewWidth/2;
    // y1 = baseVerMargin + 20 + varLineLength*2; 
    // x2 = x1;
    // y2 = y1 + varLineLength*2;
    // lineColor = result[totalFightCnt][0] ? (!result[totalFightCnt][1] ? "red" : "black") : "black"
    // lineWidth = result[totalFightCnt][0] ? (!result[totalFightCnt][1] ? "5" : "3") : "3"
    // SetLineInfo(line10_ver, [x1, y1, x2, y2], lineColor, lineWidth);
    // svgImg.appendChild(line10_ver);




    /* 横線 */
    totalFightCnt = 0;
    for(let i = 0; i < 6; i++){
        let x1, x2, y1, y2;
        let lineColor,  lineWidth;
        let resultFlag;

        const line_hor = document.createElementNS('http://www.w3.org/2000/svg','line');
        if(i%2 == 0) {
            x1 = baseHorMargin + viewWidth/2 + picSize*(i*2);
            x2 = x1 + horLineLength;
            resultFlag = result[totalFightCnt][1];
        }
        else {
            x1 = baseHorMargin + viewWidth/2 + picSize*(i*2)+1;
            x2 = x1 - horLineLength;
            resultFlag = !result[totalFightCnt][1];
        }

        y1 = baseVerMargin + 20 + varLineLength*3; 
        y2 = y1;
        lineColor = result[totalFightCnt][0] ? (resultFlag ? "red" : "black") : "black"
        lineWidth = result[totalFightCnt][0] ? (resultFlag ? "5" : "3") : "3"

        SetLineInfo(line_hor, [x1, y1, x2, y2], lineColor, lineWidth);
        svgImg.appendChild(line_hor);
        
        if((i+1)%2 == 0) {
            totalFightCnt++;
        }
    }
    

    // const line7_hor = document.createElementNS('http://www.w3.org/2000/svg','line');
    // x2 = x1 + horLineLength + picSize + 10;
    // y2 = y1;
    // lineColor = result[totalFightCnt][0] ? (result[totalFightCnt][1] ? "red" : "black") : "black"
    // lineWidth = result[totalFightCnt][0] ? (result[totalFightCnt][1] ? "5" : "3") : "3"
    // SetLineInfo(line7_hor, [x1, y1, x2, y2], lineColor, lineWidth);
    // svgImg.appendChild(line7_hor);

    // const line8_hor = document.createElementNS('http://www.w3.org/2000/svg','line');
    // x2 = x1 - horLineLength - picSize - 10;
    // y2 = y1;
    // lineColor = result[totalFightCnt][0] ? (!result[totalFightCnt][1] ? "red" : "black") : "black"
    // lineWidth = result[totalFightCnt][0] ? (!result[totalFightCnt][1] ? "5" : "3") : "3"
    // SetLineInfo(line8_hor, [x1, y1, x2, y2], lineColor, lineWidth);
    // svgImg.appendChild(line8_hor);
    
    // totalFightCnt = 4;


    // const line9_hor = document.createElementNS('http://www.w3.org/2000/svg','line');
    // x2 = x1 + horLineLength + picSize/2 + 5;
    // y2 = y1;
    // lineColor = result[totalFightCnt][0] ? (result[totalFightCnt][1] ? "red" : "black") : "black"
    // lineWidth = result[totalFightCnt][0] ? (result[totalFightCnt][1] ? "5" : "3") : "3"
    // SetLineInfo(line9_hor, [x1, y1, x2, y2], lineColor, lineWidth);
    // svgImg.appendChild(line9_hor);


    // const line10_hor = document.createElementNS('http://www.w3.org/2000/svg','line');
    // x2 = x1 - horLineLength - picSize/2 - 5;
    // y2 = y1;
    // lineColor = result[totalFightCnt][0] ? (!result[totalFightCnt][1] ? "red" : "black") : "black"
    // lineWidth = result[totalFightCnt][0] ? (!result[totalFightCnt][1] ? "5" : "3") : "3"
    // SetLineInfo(line10_hor, [x1, y1, x2, y2], lineColor, lineWidth);
    // svgImg.appendChild(line10_hor);

    // totalFightCnt = 5;


    // /****** 3回戦 ******/
    // const line11_ver = document.createElementNS('http://www.w3.org/2000/svg','line');
    // x1 = baseHorMargin + picSize*2 + horLineLength + viewWidth/2;
    // y1 = baseVerMargin + 20 + varLineLength; 
    // x2 = x1;
    // y2 = y1 + varLineLength;
    // lineColor = result[totalFightCnt - 2][0] ? "red" : "black";
    // lineWidth = result[totalFightCnt - 2][0] ? "5" : "3";
    // SetLineInfo(line11_ver, [x1, y1, x2, y2], lineColor, lineWidth);
    // svgImg.appendChild(line11_ver);
    
    // const line11_hor = document.createElementNS('http://www.w3.org/2000/svg','line');
    // x2 = x1 + horLineLength*4;
    // y2 = y1;
    // lineColor = result[totalFightCnt][0] ? (result[totalFightCnt][1] ? "red" : "black") : "black"
    // lineWidth = result[totalFightCnt][0] ? (result[totalFightCnt][1] ? "5" : "3") : "3"
    // SetLineInfo(line11_hor, [x1, y1, x2, y2], lineColor, lineWidth);
    // svgImg.appendChild(line11_hor);

    // const line12_ver = document.createElementNS('http://www.w3.org/2000/svg','line');
    // x1 = baseHorMargin + picSize*9 + horLineLength + viewWidth/2 + 30;
    // y1 = baseVerMargin + 20 + varLineLength; 
    // x2 = x1;
    // y2 = y1 + varLineLength;
    // lineColor = result[totalFightCnt - 1][0] ? "red" : "black";
    // lineWidth = result[totalFightCnt - 1][0] ? "5" : "3";
    // SetLineInfo(line12_ver, [x1, y1, x2, y2], lineColor, lineWidth);
    // svgImg.appendChild(line12_ver);

    // const line12_hor = document.createElementNS('http://www.w3.org/2000/svg','line');
    // x2 = x1 - horLineLength - picSize*3 - 40;
    // y2 = y1;
    // lineColor = result[totalFightCnt][0] ? (!result[totalFightCnt][1] ? "red" : "black") : "black"
    // lineWidth = result[totalFightCnt][0] ? (!result[totalFightCnt][1] ? "5" : "3") : "3"
    // SetLineInfo(line12_hor, [x1, y1, x2, y2], lineColor, lineWidth);
    // svgImg.appendChild(line12_hor);

    // /* 決勝 */
    // const line13_ver = document.createElementNS('http://www.w3.org/2000/svg','line');
    // x1 = baseHorMargin + horLineLength*7 + viewWidth/2;
    // y1 = baseVerMargin + 20; 
    // x2 = x1;
    // y2 = y1 + varLineLength;
    // lineColor = result[totalFightCnt][0] ? "red" : "black";
    // lineWidth = result[totalFightCnt][0] ? "5" : "3";
    // SetLineInfo(line13_ver, [x1, y1, x2, y2], lineColor, lineWidth);
    // svgImg.appendChild(line13_ver);

    // 優勝チーム名表示
    if(result[totalFightCnt][0]) {
        const winner = document.createElementNS('http://www.w3.org/2000/svg','text');
        const winnerName = document.createTextNode(teams[4]);
        winner.appendChild(winnerName)
        x1 = baseHorMargin + horLineLength*7 + viewWidth/2 - 40*3.5;
        y1 = baseVerMargin;
        winner.setAttribute('x', x1);
        winner.setAttribute('y', y1);
        winner.setAttribute('writing-mode', 'lr');
        winner.setAttribute('font-size', 40);
        winner.setAttribute('glyph-orientation-horizontal', 0);
        svgImg.appendChild(winner);
    }

    /* レースを挿入 */
    const kindsSize = 18;
    const raceSize = 20;
    const kindsLength = 3;
    // const textLength = 3;

    // 第1試合
    const race1 = document.createElementNS('http://www.w3.org/2000/svg','text');
    const raceText1 = document.createTextNode("１試合");
    race1.appendChild(raceText1)
    let fontSize = kindsSize;
    x1 = baseHorMargin + viewWidth/2 + horLineLength - (fontSize*kindsLength/2);
    y1 = baseVerMargin + 20 + varLineLength*3 + fontSize+5;
    race1.setAttribute('x', x1);
    race1.setAttribute('y', y1);
    race1.setAttribute('writing-mode', 'lr');
    race1.setAttribute('font-size', fontSize);
    race1.setAttribute('glyph-orientation-horizontal', 0);
    svgImg.appendChild(race1);

    const race1_a = document.createElementNS('http://www.w3.org/2000/svg','text');
    const raceText1_a = document.createTextNode(raceInfos[0][0][0]);
    race1_a.appendChild(raceText1_a)
    fontSize = kindsSize;
    x1 = baseHorMargin + viewWidth/2 + horLineLength - (fontSize*kindsLength/2);
    y1 = baseVerMargin + 20 + varLineLength*3 + (fontSize*2)+5; 
    race1_a.setAttribute('x', x1);
    race1_a.setAttribute('y', y1);
    race1_a.setAttribute('writing-mode', 'lr');
    race1_a.setAttribute('font-size', fontSize);
    race1_a.setAttribute('glyph-orientation-horizontal', 0);
    svgImg.appendChild(race1_a);

    const race1_b = document.createElementNS('http://www.w3.org/2000/svg','text');
    const raceText1_b = document.createTextNode(raceInfos[0][0][1]);
    fontSize = kindsSize;
    race1_b.appendChild(raceText1_b)
    x1 = baseHorMargin + viewWidth/2 + horLineLength - (fontSize*kindsLength/2);
    y1 = baseVerMargin + 20 + varLineLength*3 + (fontSize*3)+5; 
    race1_b.setAttribute('x', x1);
    race1_b.setAttribute('y', y1);
    race1_b.setAttribute('writing-mode', 'lr');
    race1_b.setAttribute('font-size', 18);
    race1_b.setAttribute('glyph-orientation-horizontal', 0);
    svgImg.appendChild(race1_b);
    
    const race2_a = document.createElementNS('http://www.w3.org/2000/svg','text');
    const raceText2_a = document.createTextNode(raceInfos[0][1][0]);
    race2_a.appendChild(raceText2_a)
    fontSize = kindsSize;
    x1 = baseHorMargin + viewWidth/2 + horLineLength - (fontSize*kindsLength/2);
    y1 = baseVerMargin + 20 + varLineLength*3 + (fontSize*4)+5; 
    race2_a.setAttribute('x', x1);
    race2_a.setAttribute('y', y1);
    race2_a.setAttribute('writing-mode', 'lr');
    race2_a.setAttribute('font-size', fontSize);
    race2_a.setAttribute('glyph-orientation-horizontal', 0);
    svgImg.appendChild(race2_a);

    const race2_b = document.createElementNS('http://www.w3.org/2000/svg','text');
    const raceText2_b = document.createTextNode(raceInfos[0][1][1]);
    fontSize = kindsSize;
    race2_b.appendChild(raceText2_b)
    x1 = baseHorMargin + viewWidth/2 + horLineLength - (fontSize*kindsLength/2);
    y1 = baseVerMargin + 20 + varLineLength*3 + (fontSize*5)+5; 
    race2_b.setAttribute('x', x1);
    race2_b.setAttribute('y', y1);
    race2_b.setAttribute('writing-mode', 'lr');
    race2_b.setAttribute('font-size', 18);
    race2_b.setAttribute('glyph-orientation-horizontal', 0);
    svgImg.appendChild(race2_b);
    
    const race3_a = document.createElementNS('http://www.w3.org/2000/svg','text');
    const raceText3_a = document.createTextNode(raceInfos[0][2][0]);
    race3_a.appendChild(raceText3_a)
    fontSize = kindsSize;
    x1 = baseHorMargin + viewWidth/2 + horLineLength - (fontSize*kindsLength/2);
    y1 = baseVerMargin + 20 + varLineLength*3 + (fontSize*6)+5; 
    race3_a.setAttribute('x', x1);
    race3_a.setAttribute('y', y1);
    race3_a.setAttribute('writing-mode', 'lr');
    race3_a.setAttribute('font-size', fontSize);
    race3_a.setAttribute('glyph-orientation-horizontal', 0);
    svgImg.appendChild(race3_a);

    const race3_b = document.createElementNS('http://www.w3.org/2000/svg','text');
    const raceText3_b = document.createTextNode(raceInfos[0][2][1]);
    fontSize = kindsSize;
    race3_b.appendChild(raceText3_b)
    x1 = baseHorMargin + viewWidth/2 + horLineLength - (fontSize*kindsLength/2);
    y1 = baseVerMargin + 20 + varLineLength*3 + (fontSize*7)+5; 
    race3_b.setAttribute('x', x1);
    race3_b.setAttribute('y', y1);
    race3_b.setAttribute('writing-mode', 'lr');
    race3_b.setAttribute('font-size', 18);
    race3_b.setAttribute('glyph-orientation-horizontal', 0);
    svgImg.appendChild(race3_b);
    
    // 第2試合
    const race4 = document.createElementNS('http://www.w3.org/2000/svg','text');
    const raceText4 = document.createTextNode("第2試合");
    fontSize = kindsSize;
    race4.appendChild(raceText4)
    x1 = baseHorMargin + (viewWidth*7)/2 + horLineLength - (fontSize*kindsLength/2);
    y1 = baseVerMargin + 20 + varLineLength*3 + (fontSize)+5; 
    race4.setAttribute('x', x1);
    race4.setAttribute('y', y1);
    race4.setAttribute('writing-mode', 'lr');
    race4.setAttribute('font-size', 18);
    race4.setAttribute('glyph-orientation-horizontal', 0);
    svgImg.appendChild(race4);

    const race4_a = document.createElementNS('http://www.w3.org/2000/svg','text');
    const raceText4_a = document.createTextNode(raceInfos[1][0][0]);
    fontSize = kindsSize;
    race4_a.appendChild(raceText4_a)
    x1 = baseHorMargin + (viewWidth*7)/2 + horLineLength - (fontSize*kindsLength/2);
    y1 = baseVerMargin + 20 + varLineLength*3 + (fontSize*2)+5; 
    race4_a.setAttribute('x', x1);
    race4_a.setAttribute('y', y1);
    race4_a.setAttribute('writing-mode', 'lr');
    race4_a.setAttribute('font-size', 18);
    race4_a.setAttribute('glyph-orientation-horizontal', 0);
    svgImg.appendChild(race4_a);
    
    const race4_b = document.createElementNS('http://www.w3.org/2000/svg','text');
    const raceText4_b = document.createTextNode(raceInfos[1][0][1]);
    fontSize = kindsSize;
    race4_b.appendChild(raceText4_b)
    x1 = baseHorMargin + (viewWidth*7)/2 + horLineLength - (fontSize*kindsLength/2);
    y1 = baseVerMargin + 20 + varLineLength*3 + (fontSize*3)+5; 
    race4_b.setAttribute('x', x1);
    race4_b.setAttribute('y', y1);
    race4_b.setAttribute('writing-mode', 'lr');
    race4_b.setAttribute('font-size', 18);
    race4_b.setAttribute('glyph-orientation-horizontal', 0);
    svgImg.appendChild(race4_b);
    
    const race5_a = document.createElementNS('http://www.w3.org/2000/svg','text');
    const raceText5_a = document.createTextNode(raceInfos[1][1][0]);
    fontSize = kindsSize;
    race5_a.appendChild(raceText5_a)
    x1 = baseHorMargin + (viewWidth*7)/2 + horLineLength - (fontSize*kindsLength/2);
    y1 = baseVerMargin + 20 + varLineLength*3 + (fontSize*4)+5; 
    race5_a.setAttribute('x', x1);
    race5_a.setAttribute('y', y1);
    race5_a.setAttribute('writing-mode', 'lr');
    race5_a.setAttribute('font-size', 18);
    race5_a.setAttribute('glyph-orientation-horizontal', 0);
    svgImg.appendChild(race5_a);

    const race5_b = document.createElementNS('http://www.w3.org/2000/svg','text');
    const raceText5_b = document.createTextNode(raceInfos[1][1][1]);
    fontSize = kindsSize;
    race5_b.appendChild(raceText5_b)
    x1 = baseHorMargin + (viewWidth*7)/2 + horLineLength - (fontSize*kindsLength/2);
    y1 = baseVerMargin + 20 + varLineLength*3 + (fontSize*5)+5; 
    race5_b.setAttribute('x', x1);
    race5_b.setAttribute('y', y1);
    race5_b.setAttribute('writing-mode', 'lr');
    race5_b.setAttribute('font-size', 18);
    race5_b.setAttribute('glyph-orientation-horizontal', 0);
    svgImg.appendChild(race5_b);
    
    const race6_a = document.createElementNS('http://www.w3.org/2000/svg','text');
    const raceText6_a = document.createTextNode(raceInfos[1][2][0]);
    fontSize = kindsSize;
    race6_a.appendChild(raceText6_a)
    x1 = baseHorMargin + (viewWidth*7)/2 + horLineLength - (fontSize*kindsLength/2);
    y1 = baseVerMargin + 20 + varLineLength*3 + (fontSize*6)+5; 
    race6_a.setAttribute('x', x1);
    race6_a.setAttribute('y', y1);
    race6_a.setAttribute('writing-mode', 'lr');
    race6_a.setAttribute('font-size', 18);
    race6_a.setAttribute('glyph-orientation-horizontal', 0);
    svgImg.appendChild(race6_a);

    const race6_b = document.createElementNS('http://www.w3.org/2000/svg','text');
    const raceText6_b = document.createTextNode(raceInfos[1][2][1]);
    fontSize = kindsSize;
    race6_b.appendChild(raceText6_b)
    x1 = baseHorMargin + (viewWidth*7)/2 + horLineLength - (fontSize*kindsLength/2);
    y1 = baseVerMargin + 20 + varLineLength*3 + (fontSize*7)+5; 
    race6_b.setAttribute('x', x1);
    race6_b.setAttribute('y', y1);
    race6_b.setAttribute('writing-mode', 'lr');
    race6_b.setAttribute('font-size', 18);
    race6_b.setAttribute('glyph-orientation-horizontal', 0);
    svgImg.appendChild(race6_b);

    // 第3試合
    const race7 = document.createElementNS('http://www.w3.org/2000/svg','text');
    const raceText7 = document.createTextNode("第3試合");
    fontSize = kindsSize;
    race7.appendChild(raceText7)
    x1 = baseHorMargin + (viewWidth*13)/2 + horLineLength - (fontSize*kindsLength/2);
    y1 = baseVerMargin + 20 + varLineLength*3 + (fontSize)+5; 
    race7.setAttribute('x', x1);
    race7.setAttribute('y', y1);
    race7.setAttribute('writing-mode', 'lr');
    race7.setAttribute('font-size', 18);
    race7.setAttribute('glyph-orientation-horizontal', 0);
    svgImg.appendChild(race7);

    const race7_a = document.createElementNS('http://www.w3.org/2000/svg','text');
    const raceText7_a = document.createTextNode(raceInfos[2][0][0]);
    fontSize = kindsSize;
    race7_a.appendChild(raceText7_a)
    x1 = baseHorMargin + (viewWidth*13)/2 + horLineLength - (fontSize*kindsLength/2);
    y1 = baseVerMargin + 20 + varLineLength*3 + (fontSize*2)+5; 
    race7_a.setAttribute('x', x1);
    race7_a.setAttribute('y', y1);
    race7_a.setAttribute('writing-mode', 'lr');
    race7_a.setAttribute('font-size', 18);
    race7_a.setAttribute('glyph-orientation-horizontal', 0);
    svgImg.appendChild(race7_a);

    const race7_b = document.createElementNS('http://www.w3.org/2000/svg','text');
    const raceText7_b = document.createTextNode(raceInfos[2][0][1]);
    fontSize = kindsSize;
    race7_b.appendChild(raceText7_b)
    x1 = baseHorMargin + (viewWidth*13)/2 + horLineLength - (fontSize*kindsLength/2);
    y1 = baseVerMargin + 20 + varLineLength*3 + (fontSize*3)+5; 
    race7_b.setAttribute('x', x1);
    race7_b.setAttribute('y', y1);
    race7_b.setAttribute('writing-mode', 'lr');
    race7_b.setAttribute('font-size', 18);
    race7_b.setAttribute('glyph-orientation-horizontal', 0);
    svgImg.appendChild(race7_b);

    const race8_a = document.createElementNS('http://www.w3.org/2000/svg','text');
    const raceText8_a = document.createTextNode(raceInfos[2][1][0]);
    fontSize = kindsSize;
    race8_a.appendChild(raceText8_a)
    x1 = baseHorMargin + (viewWidth*13)/2 + horLineLength - (fontSize*kindsLength/2);
    y1 = baseVerMargin + 20 + varLineLength*3 + (fontSize*4)+5; 
    race8_a.setAttribute('x', x1);
    race8_a.setAttribute('y', y1);
    race8_a.setAttribute('writing-mode', 'lr');
    race8_a.setAttribute('font-size', 18);
    race8_a.setAttribute('glyph-orientation-horizontal', 0);
    svgImg.appendChild(race8_a);

    const race8_b = document.createElementNS('http://www.w3.org/2000/svg','text');
    const raceText8_b = document.createTextNode(raceInfos[2][1][1]);
    fontSize = kindsSize;
    race8_b.appendChild(raceText8_b)
    x1 = baseHorMargin + (viewWidth*13)/2 + horLineLength - (fontSize*kindsLength/2);
    y1 = baseVerMargin + 20 + varLineLength*3 + (fontSize*5)+5; 
    race8_b.setAttribute('x', x1);
    race8_b.setAttribute('y', y1);
    race8_b.setAttribute('writing-mode', 'lr');
    race8_b.setAttribute('font-size', 18);
    race8_b.setAttribute('glyph-orientation-horizontal', 0);
    svgImg.appendChild(race8_b);
  
    const race9_a = document.createElementNS('http://www.w3.org/2000/svg','text');
    const raceText9_a = document.createTextNode(raceInfos[2][2][0]);
    fontSize = kindsSize;
    race9_a.appendChild(raceText9_a)
    x1 = baseHorMargin + (viewWidth*13)/2 + horLineLength - (fontSize*kindsLength/2);
    y1 = baseVerMargin + 20 + varLineLength*3 + (fontSize*6)+5; 
    race9_a.setAttribute('x', x1);
    race9_a.setAttribute('y', y1);
    race9_a.setAttribute('writing-mode', 'lr');
    race9_a.setAttribute('font-size', 18);
    race9_a.setAttribute('glyph-orientation-horizontal', 0);
    svgImg.appendChild(race9_a);

    const race9_b = document.createElementNS('http://www.w3.org/2000/svg','text');
    const raceText9_b = document.createTextNode(raceInfos[2][2][1]);
    fontSize = kindsSize;
    race9_b.appendChild(raceText9_b)
    x1 = baseHorMargin + (viewWidth*13)/2 + horLineLength - (fontSize*kindsLength/2);
    y1 = baseVerMargin + 20 + varLineLength*3 + (fontSize*7)+5; 
    race9_b.setAttribute('x', x1);
    race9_b.setAttribute('y', y1);
    race9_b.setAttribute('writing-mode', 'lr');
    race9_b.setAttribute('font-size', 18);
    race9_b.setAttribute('glyph-orientation-horizontal', 0);
    svgImg.appendChild(race9_b);
  
    // 第4試合
    const race10 = document.createElementNS('http://www.w3.org/2000/svg','text');
    const raceText10 = document.createTextNode("第4試合");
    fontSize = kindsSize;
    race10.appendChild(raceText10)
    x1 = baseHorMargin + (viewWidth*4)/2 + horLineLength - (fontSize*kindsLength/2);
    y1 = baseVerMargin + 20 + varLineLength*2 + (fontSize)+5; 
    race10.setAttribute('x', x1);
    race10.setAttribute('y', y1);
    race10.setAttribute('writing-mode', 'lr');
    race10.setAttribute('font-size', 18);
    race10.setAttribute('glyph-orientation-horizontal', 0);
    svgImg.appendChild(race10);
  
    const race10_a = document.createElementNS('http://www.w3.org/2000/svg','text');
    const raceText10_a = document.createTextNode(raceInfos[3][0][0]);
    fontSize = kindsSize;
    race10_a.appendChild(raceText10_a)
    x1 = baseHorMargin + (viewWidth*4)/2 + horLineLength - (fontSize*kindsLength/2);
    y1 = baseVerMargin + 20 + varLineLength*2 + (fontSize*2)+5; 
    race10_a.setAttribute('x', x1);
    race10_a.setAttribute('y', y1);
    race10_a.setAttribute('writing-mode', 'lr');
    race10_a.setAttribute('font-size', 18);
    race10_a.setAttribute('glyph-orientation-horizontal', 0);
    svgImg.appendChild(race10_a);
  
    const race10_b = document.createElementNS('http://www.w3.org/2000/svg','text');
    const raceText10_b = document.createTextNode(raceInfos[3][0][1]);
    fontSize = kindsSize;
    race10_b.appendChild(raceText10_b)
    x1 = baseHorMargin + (viewWidth*4)/2 + horLineLength - (fontSize*kindsLength/2);
    y1 = baseVerMargin + 20 + varLineLength*2 + (fontSize*3)+5; 
    race10_b.setAttribute('x', x1);
    race10_b.setAttribute('y', y1);
    race10_b.setAttribute('writing-mode', 'lr');
    race10_b.setAttribute('font-size', 18);
    race10_b.setAttribute('glyph-orientation-horizontal', 0);
    svgImg.appendChild(race10_b);

    const race11_a = document.createElementNS('http://www.w3.org/2000/svg','text');
    const raceText11_a = document.createTextNode(raceInfos[3][1][0]);
    fontSize = kindsSize;
    race11_a.appendChild(raceText11_a)
    x1 = baseHorMargin + (viewWidth*4)/2 + horLineLength - (fontSize*kindsLength/2);
    y1 = baseVerMargin + 20 + varLineLength*2 + (fontSize*4)+5; 
    race11_a.setAttribute('x', x1);
    race11_a.setAttribute('y', y1);
    race11_a.setAttribute('writing-mode', 'lr');
    race11_a.setAttribute('font-size', 18);
    race11_a.setAttribute('glyph-orientation-horizontal', 0);
    svgImg.appendChild(race11_a);
  
    const race11_b = document.createElementNS('http://www.w3.org/2000/svg','text');
    const raceText11_b = document.createTextNode(raceInfos[3][1][1]);
    fontSize = kindsSize;
    race11_b.appendChild(raceText11_b)
    x1 = baseHorMargin + (viewWidth*4)/2 + horLineLength - (fontSize*kindsLength/2);
    y1 = baseVerMargin + 20 + varLineLength*2 + (fontSize*5)+5;
    race11_b.setAttribute('x', x1);
    race11_b.setAttribute('y', y1);
    race11_b.setAttribute('writing-mode', 'lr');
    race11_b.setAttribute('font-size', 18);
    race11_b.setAttribute('glyph-orientation-horizontal', 0);
    svgImg.appendChild(race11_b);
  
    const race12_a = document.createElementNS('http://www.w3.org/2000/svg','text');
    const raceText12_a = document.createTextNode(raceInfos[3][2][0]);
    fontSize = kindsSize;
    race12_a.appendChild(raceText12_a)
    x1 = baseHorMargin + (viewWidth*4)/2 + horLineLength - (fontSize*kindsLength/2);
    y1 = baseVerMargin + 20 + varLineLength*2 + (fontSize*6)+5;
    race12_a.setAttribute('x', x1);
    race12_a.setAttribute('y', y1);
    race12_a.setAttribute('writing-mode', 'lr');
    race12_a.setAttribute('font-size', 18);
    race12_a.setAttribute('glyph-orientation-horizontal', 0);
    svgImg.appendChild(race12_a);
  
    const race12_b = document.createElementNS('http://www.w3.org/2000/svg','text');
    const raceText12_b = document.createTextNode(raceInfos[3][2][1]);
    fontSize = kindsSize;
    race12_b.appendChild(raceText12_b)
    x1 = baseHorMargin + (viewWidth*4)/2 + horLineLength - (fontSize*kindsLength/2);
    y1 = baseVerMargin + 20 + varLineLength*2 + (fontSize*7)+5;
    race12_b.setAttribute('x', x1);
    race12_b.setAttribute('y', y1);
    race12_b.setAttribute('writing-mode', 'lr');
    race12_b.setAttribute('font-size', 18);
    race12_b.setAttribute('glyph-orientation-horizontal', 0);
    svgImg.appendChild(race12_b);
  
    // 第5試合
    const race13 = document.createElementNS('http://www.w3.org/2000/svg','text');
    const raceText13 = document.createTextNode("第5試合");
    fontSize = kindsSize;
    race13.appendChild(raceText13)
    x1 = baseHorMargin + (viewWidth*15.5)/2 + horLineLength - (fontSize*kindsLength/2);
    y1 = baseVerMargin + 20 + varLineLength*2 + (fontSize)+5;
    race13.setAttribute('x', x1);
    race13.setAttribute('y', y1);
    race13.setAttribute('writing-mode', 'lr');
    race13.setAttribute('font-size', 18);
    race13.setAttribute('glyph-orientation-horizontal', 0);
    svgImg.appendChild(race13);
  
    const race13_a = document.createElementNS('http://www.w3.org/2000/svg','text');
    const raceText13_a = document.createTextNode(raceInfos[4][0][0]);
    fontSize = kindsSize;
    race13_a.appendChild(raceText13_a)
    x1 = baseHorMargin + (viewWidth*15.5)/2 + horLineLength - (fontSize*kindsLength/2);
    y1 = baseVerMargin + 20 + varLineLength*2 + (fontSize*2)+5;
    race13_a.setAttribute('x', x1);
    race13_a.setAttribute('y', y1);
    race13_a.setAttribute('writing-mode', 'lr');
    race13_a.setAttribute('font-size', 18);
    race13_a.setAttribute('glyph-orientation-horizontal', 0);
    svgImg.appendChild(race13_a);
  
    const race13_b = document.createElementNS('http://www.w3.org/2000/svg','text');
    const raceText13_b = document.createTextNode(raceInfos[4][0][1]);
    fontSize = kindsSize;
    race13_b.appendChild(raceText13_b)
    x1 = baseHorMargin + (viewWidth*15.5)/2 + horLineLength - (fontSize*kindsLength/2);
    y1 = baseVerMargin + 20 + varLineLength*2 + (fontSize*3)+5;
    race13_b.setAttribute('x', x1);
    race13_b.setAttribute('y', y1);
    race13_b.setAttribute('writing-mode', 'lr');
    race13_b.setAttribute('font-size', 18);
    race13_b.setAttribute('glyph-orientation-horizontal', 0);
    svgImg.appendChild(race13_b);
  
    const race14_a = document.createElementNS('http://www.w3.org/2000/svg','text');
    const raceText14_a = document.createTextNode(raceInfos[4][1][0]);
    fontSize = kindsSize;
    race14_a.appendChild(raceText14_a)
    x1 = baseHorMargin + (viewWidth*15.5)/2 + horLineLength - (fontSize*kindsLength/2);
    y1 = baseVerMargin + 20 + varLineLength*2 + (fontSize*4)+5;
    race14_a.setAttribute('x', x1);
    race14_a.setAttribute('y', y1);
    race14_a.setAttribute('writing-mode', 'lr');
    race14_a.setAttribute('font-size', 18);
    race14_a.setAttribute('glyph-orientation-horizontal', 0);
    svgImg.appendChild(race14_a);
  
    const race14_b = document.createElementNS('http://www.w3.org/2000/svg','text');
    const raceText14_b = document.createTextNode(raceInfos[4][1][1]);
    fontSize = kindsSize;
    race14_b.appendChild(raceText14_b)
    x1 = baseHorMargin + (viewWidth*15.5)/2 + horLineLength - (fontSize*kindsLength/2);
    y1 = baseVerMargin + 20 + varLineLength*2 + (fontSize*5)+5;
    race14_b.setAttribute('x', x1);
    race14_b.setAttribute('y', y1);
    race14_b.setAttribute('writing-mode', 'lr');
    race14_b.setAttribute('font-size', 18);
    race14_b.setAttribute('glyph-orientation-horizontal', 0);
    svgImg.appendChild(race14_b);
  
    const race15_a = document.createElementNS('http://www.w3.org/2000/svg','text');
    const raceText15_a = document.createTextNode(raceInfos[4][2][0]);
    fontSize = kindsSize;
    race15_a.appendChild(raceText15_a)
    x1 = baseHorMargin + (viewWidth*15.5)/2 + horLineLength - (fontSize*kindsLength/2);
    y1 = baseVerMargin + 20 + varLineLength*2 + (fontSize*6)+5;
    race15_a.setAttribute('x', x1);
    race15_a.setAttribute('y', y1);
    race15_a.setAttribute('writing-mode', 'lr');
    race15_a.setAttribute('font-size', 18);
    race15_a.setAttribute('glyph-orientation-horizontal', 0);
    svgImg.appendChild(race15_a);
  
    const race15_b = document.createElementNS('http://www.w3.org/2000/svg','text');
    const raceText15_b = document.createTextNode(raceInfos[4][2][1]);
    fontSize = kindsSize;
    race15_b.appendChild(raceText15_b)
    x1 = baseHorMargin + (viewWidth*15.5)/2 + horLineLength - (fontSize*kindsLength/2);
    y1 = baseVerMargin + 20 + varLineLength*2 + (fontSize*7)+5;
    race15_b.setAttribute('x', x1);
    race15_b.setAttribute('y', y1);
    race15_b.setAttribute('writing-mode', 'lr');
    race15_b.setAttribute('font-size', 18);
    race15_b.setAttribute('glyph-orientation-horizontal', 0);
    svgImg.appendChild(race15_b);
  
    const race16 = document.createElementNS('http://www.w3.org/2000/svg','text');
    const raceText16 = document.createTextNode("第6試合");
    fontSize = kindsSize;
    race16.appendChild(raceText16)
    x1 = baseHorMargin + (viewWidth*8.5)/2 + horLineLength - (fontSize*kindsLength/2);
    y1 = baseVerMargin + 20 + varLineLength + (fontSize)+5;
    race16.setAttribute('x', x1);
    race16.setAttribute('y', y1);
    race16.setAttribute('writing-mode', 'lr');
    race16.setAttribute('font-size', 18);
    race16.setAttribute('glyph-orientation-horizontal', 0);
    svgImg.appendChild(race16);

    const race16_a = document.createElementNS('http://www.w3.org/2000/svg','text');
    const raceText16_a = document.createTextNode(raceInfos[5][0][0]);
    fontSize = kindsSize;
    race16_a.appendChild(raceText16_a)
    x1 = baseHorMargin + (viewWidth*8.5)/2 + horLineLength - (fontSize*kindsLength/2);
    y1 = baseVerMargin + 20 + varLineLength + (fontSize*2)+5;
    race16_a.setAttribute('x', x1);
    race16_a.setAttribute('y', y1);
    race16_a.setAttribute('writing-mode', 'lr');
    race16_a.setAttribute('font-size', 18);
    race16_a.setAttribute('glyph-orientation-horizontal', 0);
    svgImg.appendChild(race16_a);
  
    const race16_b = document.createElementNS('http://www.w3.org/2000/svg','text');
    const raceText16_b = document.createTextNode(raceInfos[5][0][1]);
    fontSize = kindsSize;
    race16_b.appendChild(raceText16_b)
    x1 = baseHorMargin + (viewWidth*8.5)/2 + horLineLength - (fontSize*kindsLength/2);
    y1 = baseVerMargin + 20 + varLineLength + (fontSize*3)+5;
    race16_b.setAttribute('x', x1);
    race16_b.setAttribute('y', y1);
    race16_b.setAttribute('writing-mode', 'lr');
    race16_b.setAttribute('font-size', 18);
    race16_b.setAttribute('glyph-orientation-horizontal', 0);
    svgImg.appendChild(race16_b);
  
    const race17_a = document.createElementNS('http://www.w3.org/2000/svg','text');
    const raceText17_a = document.createTextNode(raceInfos[5][1][0]);
    fontSize = kindsSize;
    race17_a.appendChild(raceText17_a)
    x1 = baseHorMargin + (viewWidth*8.5)/2 + horLineLength - (fontSize*kindsLength/2);
    y1 = baseVerMargin + 20 + varLineLength + (fontSize*4)+5;
    race17_a.setAttribute('x', x1);
    race17_a.setAttribute('y', y1);
    race17_a.setAttribute('writing-mode', 'lr');
    race17_a.setAttribute('font-size', 18);
    race17_a.setAttribute('glyph-orientation-horizontal', 0);
    svgImg.appendChild(race17_a);
  
    const race17_b = document.createElementNS('http://www.w3.org/2000/svg','text');
    const raceText17_b = document.createTextNode(raceInfos[5][1][1]);
    fontSize = kindsSize;
    race17_b.appendChild(raceText17_b)
    x1 = baseHorMargin + (viewWidth*8.5)/2 + horLineLength - (fontSize*kindsLength/2);
    y1 = baseVerMargin + 20 + varLineLength + (fontSize*5)+5;
    race17_b.setAttribute('x', x1);
    race17_b.setAttribute('y', y1);
    race17_b.setAttribute('writing-mode', 'lr');
    race17_b.setAttribute('font-size', 18);
    race17_b.setAttribute('glyph-orientation-horizontal', 0);
    svgImg.appendChild(race17_b);
  
    const race18_a = document.createElementNS('http://www.w3.org/2000/svg','text');
    const raceText18_a = document.createTextNode(raceInfos[5][2][0]);
    fontSize = kindsSize;
    race18_a.appendChild(raceText18_a)
    x1 = baseHorMargin + (viewWidth*8.5)/2 + horLineLength - (fontSize*kindsLength/2);
    y1 = baseVerMargin + 20 + varLineLength + (fontSize*6)+5;
    race18_a.setAttribute('x', x1);
    race18_a.setAttribute('y', y1);
    race18_a.setAttribute('writing-mode', 'lr');
    race18_a.setAttribute('font-size', 18);
    race18_a.setAttribute('glyph-orientation-horizontal', 0);
    svgImg.appendChild(race18_a);

    const race18_b = document.createElementNS('http://www.w3.org/2000/svg','text');
    const raceText18_b = document.createTextNode(raceInfos[5][2][1]);
    fontSize = kindsSize;
    race18_b.appendChild(raceText18_b)
    x1 = baseHorMargin + (viewWidth*8.5)/2 + horLineLength - (fontSize*kindsLength/2);
    y1 = baseVerMargin + 20 + varLineLength + (fontSize*7)+5;
    race18_b.setAttribute('x', x1);
    race18_b.setAttribute('y', y1);
    race18_b.setAttribute('writing-mode', 'lr');
    race18_b.setAttribute('font-size', 18);
    race18_b.setAttribute('glyph-orientation-horizontal', 0);
    svgImg.appendChild(race18_b);

    document.getElementById('Tournament').appendChild(svgImg);


    /* メンバーの画像を挿入 */
    let text = '';
    /* チーム1の画像*/
    let imgY = baseVerMargin + 20 + varLineLength*4 + 510;
    let imgL = 460;
    text += '<img src="../../../Img/Members/サークルメンバー2.png"  alt="1-1" style="z-index:50; position:absolute; top:' + imgY + 'px; left:' + imgL + 'px; width:' + picSize + 'px; border:solid 1px black;">';
    imgY = imgY + 85;
    text += '<img src="../../../Img/Members/サークルメンバー14.png" alt="1-2" style="z-index:50; position:absolute; top:' + imgY + 'px; left:' + imgL + 'px; width:' + picSize + 'px; border:solid 1px black;">';
    imgY = imgY + 85;
    text += '<img src="../../../Img/Members/サークルメンバー16.png" alt="1-3" style="z-index:50; position:absolute; top:' + imgY + 'px; left:' + imgL + 'px; width:' + picSize + 'px; border:solid 1px black;">';
    
    /* チーム2の画像*/
    imgY = baseVerMargin + 20 + varLineLength*4 + 510;
    imgL += picSize * 3;
    text += '<img src="../../../Img/Members/サークルメンバー6.png"  alt="1-1" style="z-index:50; position:absolute; top:' + imgY + 'px; left:' + imgL + 'px; width:' + picSize + 'px; border:solid 1px black;">';
    imgY = imgY + 85;
    text += '<img src="../../../Img/Members/サークルメンバー10.png" alt="1-1" style="z-index:50; position:absolute; top:' + imgY + 'px; left:' + imgL + 'px; width:' + picSize + 'px; border:solid 1px black;">';
    imgY = imgY + 85;
    text += '<img src="../../../Img/Members/サークルメンバー8.png"  alt="1-1" style="z-index:50; position:absolute; top:' + imgY + 'px; left:' + imgL + 'px; width:' + picSize + 'px; border:solid 1px black;">';

    /* チーム3の画像*/
    imgY = baseVerMargin + 20 + varLineLength*4 + 510;
    imgL += picSize;
    text += '<img src="../../../Img/Members/サークルメンバー3.png" alt="1-1" style="z-index:50; position:absolute; top:' + imgY + 'px; left:' + imgL + 'px; width:' + picSize + 'px; border:solid 1px black;">';
    imgY = imgY + 85;
    text += '<img src="../../../Img/Members/サークルメンバー7.png" alt="1-1" style="z-index:50; position:absolute; top:' + imgY + 'px; left:' + imgL + 'px; width:' + picSize + 'px; border:solid 1px black;">';
    imgY = imgY + 85;
    text += '<img src="../../../Img/Members/サークルメンバー5.png" alt="1-1" style="z-index:50; position:absolute; top:' + imgY + 'px; left:' + imgL + 'px; width:' + picSize + 'px; border:solid 1px black;">';

    /* チーム4の画像*/
    imgY = baseVerMargin + 20 + varLineLength*4 + 510;
    imgL += picSize * 3;
    text += '<img src="../../../Img/Members/サークルメンバー19.png" alt="1-1" style="z-index:50; position:absolute; top:' + imgY + 'px; left:' + imgL + 'px; width:' + picSize + 'px; border:solid 1px black;">';
    imgY = imgY + 85;
    text += '<img src="../../../Img/Members/サークルメンバー20.png" alt="1-1" style="z-index:50; position:absolute; top:' + imgY + 'px; left:' + imgL + 'px; width:' + picSize + 'px; border:solid 1px black;">';
    imgY = imgY + 85;
    text += '<img src="../../../Img/Members/サークルメンバー17.png" alt="1-1" style="z-index:50; position:absolute; top:' + imgY + 'px; left:' + imgL + 'px; width:' + picSize + 'px; border:solid 1px black;">';

    /* チーム5の画像*/
    imgY = baseVerMargin + 20 + varLineLength*4 + 510;
    imgL += picSize;
    text += '<img src="../../../Img/Members/サークルメンバー21.png" alt="1-1" style="z-index:50; position:absolute; top:' + imgY + 'px; left:' + imgL + 'px; width:' + picSize + 'px; border:solid 1px black;">';
    imgY = imgY + 85;
    text += '<img src="../../../Img/Members/サークルメンバー23.png" alt="1-1" style="z-index:50; position:absolute; top:' + imgY + 'px; left:' + imgL + 'px; width:' + picSize + 'px; border:solid 1px black;">';
    imgY = imgY + 85;
    text += '<img src="../../../Img/Members/サークルメンバー27.png" alt="1-1" style="z-index:50; position:absolute; top:' + imgY + 'px; left:' + imgL + 'px; width:' + picSize + 'px; border:solid 1px black;">';

    /* チーム6の画像*/
    imgY = baseVerMargin + 20 + varLineLength*4 + 510;
    imgL += picSize * 3;
    text += '<img src="../../../Img/Members/サークルメンバー11.png" alt="1-1" style="z-index:50; position:absolute; top:' + imgY + 'px; left:' + imgL + 'px; width:' + picSize + 'px; border:solid 1px black;">';
    imgY = imgY + 85;
    text += '<img src="../../../Img/Members/サークルメンバー13.png" alt="1-1" style="z-index:50; position:absolute; top:' + imgY + 'px; left:' + imgL + 'px; width:' + picSize + 'px; border:solid 1px black;">';
    imgY = imgY + 85;
    text += '<img src="../../../Img/Members/サークルメンバー15.png" alt="1-1" style="z-index:50; position:absolute; top:' + imgY + 'px; left:' + imgL + 'px; width:' + picSize + 'px; border:solid 1px black;">';

    /* チーム7の画像*/
    imgY = baseVerMargin + 20 + varLineLength*4 + 510;
    imgL += picSize * 2;
    text += '<img src="../../../Img/Members/サークルメンバー4.png"  alt="1-1" style="z-index:50; position:absolute; top:' + imgY + 'px; left:' + imgL + 'px; width:' + picSize + 'px; border:solid 1px black;">';
    imgY = imgY + 85;
    text += '<img src="../../../Img/Members/サークルメンバー28.png" alt="1-1" style="z-index:50; position:absolute; top:' + imgY + 'px; left:' + imgL + 'px; width:' + picSize + 'px; border:solid 1px black;">';
    imgY = imgY + 85;
    text += '<img src="../../../Img/Members/サークルメンバー12.png" alt="1-1" style="z-index:50; position:absolute; top:' + imgY + 'px; left:' + imgL + 'px; width:' + picSize + 'px; border:solid 1px black;">';

    const divs = document.createElement('div');
    divs.innerHTML = text;
    document.getElementById('Tournament').appendChild(divs);

    // if(teams.length > 0) {
    //     /* トーナメント表の段数を計算 */
    //     const rows = ((teams.length%2==0) ? teams.length : teams.length + 1) / 2 + 1;

    //     /* 1段ごとに描画 */
    //     let totalFightCnt = 0;
    //     for(let row= 0; row < rows; row++) {
    //         /* 1試合ごとに描画 */
    //         for(let cnt = 0; cnt < (rows-1)-row; cnt++) {
    //             const line1_ver = document.createElementNS('http://www.w3.org/2000/svg','line');
    //             let x1 = 10 + (horLineLength * 3 * cnt) + (horLineLength * row);
    //             let y1 = 10 + (varLineLength * ((rows - 1) - row)); 
    //             let x2 = x1;
    //             let y2 = y1 + varLineLength;

    //             let lineColor = result[totalFightCnt][0] ? (result[totalFightCnt][1] ? "red" : "black") : "black"
    //             let lineWidth = result[totalFightCnt][0] ? (result[totalFightCnt][1] ? "5" : "3") : "3"
    //             SetLineInfo(line1_ver, [x1, y1, x2, y2], lineColor, lineWidth);
        
    //             svgImg.appendChild(line1_ver);
    //             document.getElementById('Tournament').appendChild(svgImg);


    //             const line1_hor = document.createElementNS('http://www.w3.org/2000/svg','line');
    //             x2 = x1 + horLineLength;
    //             y2 = y1;
    //             SetLineInfo(line1_hor, [x1, y1, x2, y2], lineColor, lineWidth);
                
    //             svgImg.appendChild(line1_hor);
    //             document.getElementById('Tournament').appendChild(svgImg);


    //             const line2_ver = document.createElementNS('http://www.w3.org/2000/svg','line');
    //             x1 = 10 + (horLineLength * (3 * cnt + 2)) + (horLineLength*2 * row);
    //             y1 = 10 + (varLineLength * ((rows - 1) - row)); 
    //             x2 = x1;
    //             y2 = y1 + varLineLength;

    //             lineColor = result[totalFightCnt][0] ? (!result[totalFightCnt][1] ? "red" : "black") : "black"
    //             lineWidth = result[totalFightCnt][0] ? (!result[totalFightCnt][1] ? "5" : "3") : "3"
    //             SetLineInfo(line2_ver, [x1, y1, x2, y2], lineColor, lineWidth);
        
    //             svgImg.appendChild(line2_ver);
    //             document.getElementById('Tournament').appendChild(svgImg);


    //             const line2_hor = document.createElementNS('http://www.w3.org/2000/svg','line');
    //             x2 = x1 - horLineLength;
    //             y2 = y1;
    //             SetLineInfo(line2_hor, [x1, y1, x2, y2], lineColor, lineWidth);
                
    //             svgImg.appendChild(line2_hor);
    //             document.getElementById('Tournament').appendChild(svgImg);
    //         }
    //     }
    // }
}
function SetLineInfo(target, val, color, width) {
    target.setAttribute('x1', val[0]);
    target.setAttribute('y1', val[1]);
    target.setAttribute('x2', val[2]);
    target.setAttribute('y2', val[3]);
    target.setAttribute('stroke', color);
    target.setAttribute('stroke-width', width);
}

