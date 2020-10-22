// 小手調べ
function setup(){
  for(let i = 0; i < 10; i++){
    noFill();
    if (i<5){
    stroke(0,0,255)
    }
    else{
    stroke(255,0,0)
    }
let s = (i+1) * 10
   ellipse(50,50,s);

  }
}
