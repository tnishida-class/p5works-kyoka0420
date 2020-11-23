// テキスト「関数を使う」
// 練習問題：このプログラムを改造してEUの旗を描いてみよう
function setup(){
  createCanvas(300, 200);
  background(0,0,255);
  for(var i = 0; i < 12; i++){
    var theta = TWO_PI * i / 12;
    var x = 150 + cos(theta) * 50;
    var y = 100 + sin(theta) * 50;
    fill(255,255,0)
    noStroke();
    star(x,y,10)
    }
}

function star(a,b,r){
  beginShape();
  for(var j = 0; j < 5; j++){
    var theta = TWO_PI * j * 2/5 - HALF_PI;
    var cx = a + cos(theta) * r;
    var cy = b + sin(theta) * r;
    vertex(cx,cy)
  }
  endShape(CLOSE)
}
