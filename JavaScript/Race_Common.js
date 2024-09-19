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