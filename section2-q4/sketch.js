// カタール国旗
function setup() {
  createCanvas(300,300)
  fill(148,36,58)
  rect(0,0,280,110)
  let c = color (255)
  fill(c)
  noStroke()
  rect(0,0,80,110)
  let s = 110/9
  for(let i = 0; i < 9; i++){
    fill(c)
    noStroke();
    triangle(80, s * i, 80, s * (i+1), 100, s * i + s/2);
  }
}
