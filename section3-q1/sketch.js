// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255)
  let a = color(0, 255, 127)
  let b = color(0)
  balloon("レポート多すぎ", 50, 60, a, b);
}

function balloon(t, x, y, a, b){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 4
  fill(a);
  noStroke();
  rect(x, y, w + p * 2, h + p * 2);
  fill(a);
  noStroke();
  fill(a)
  triangle(x + p + w * 2 / 5, y + h + p * 2, x + p + w * 3 / 5, y + h + p * 2, x + p + w / 2, y + (h + p * 2) * 2  )
  fill(b)
  text(t, x + p, y + h + p);

}
