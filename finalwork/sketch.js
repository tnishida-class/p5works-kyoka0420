let t,x;
let a = 1;  //aは生物的性別を表す。１＝男、２＝女
let b = 2;  //bは性的指向を表す。１＝男性、２＝女性。３＝両方
const g = 1; //重力加速度
const vxMax = 30;

function setup(){
  createCanvas(windowWidth, windowHeight);
  noStroke()
  fill(255,105,180)
  rect(0,0,windowWidth/8,windowHeight)
  fill(255,0,0,)
  rect(windowWidth/8,0,windowWidth/8,windowHeight)
  fill(255,165,0)
  rect(windowWidth/4,0,windowWidth/8,windowHeight)
  fill(255,255,0)
  rect(windowWidth* 3/8,0,windowWidth/8,windowHeight)
  fill(0,128,0)
  rect(windowWidth/2,0,windowWidth/8,windowHeight)
  fill(64,224,208)
  rect(windowWidth*5/8,0,windowWidth/8,windowHeight)
  fill(75,0,130)
  rect(windowWidth*3/4,0,windowWidth/8,windowHeight)
  fill(128,0,128)
  rect(windowWidth*7/8,0,windowWidth/8,windowHeight)
  x = 0;
  vx = 8
}


function draw(){
// background(setup)
// noStroke()
// fill(0)
// rect(x,0,windowWidth/8,windowHeight)
//  x += vx;
//   if(x > width){ x = 0; }
// }
  let bc = color(255)//楕円の中の色
  let tc = color(0)//文字の色
  baloon(t, windowWidth/2, windowHeight/2, tc, bc);
}
//
//
//
function baloon(t, x, y, tc, bc){
  //生物的性別が男性で、性的指向が男性に向く
  if (a == 1 && b == 1){
  t = "ゲイ:男性同性愛者" }
 //生物的性別が女性で性的指向が女性に向く
  else if (a == 2 && b == 2){
  t = "レズビアン:女性同性愛者" }
  //生物的性別に関わらず性的指向が両性に向く
  else if(a == 1 && b == 3 || a == 2 && b == 3){
  t = "バイセクシュアル:両性愛者" }
  //性的指向が異性に向く
  else{
  t = "ヘテロセクシュアル:異性愛者" }
  textSize(32)
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 20
  fill(bc);
  stroke(0)
  strokeWeight(2);
  ellipse(x, y, w + p * 2, h + p * 2);

  fill(tc)
  text(t, x - w/2 , y + h/4);

}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
