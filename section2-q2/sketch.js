// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
    if (!(i % 2 == j % 2)){
      fill(128)
      rect(size * i,size * j,size,size)
    }
    if (!(i % 2 == j % 2) && j < 3){
      fill(255,0,0)
      ellipse(i * size + size/2,j * size +size/2, size-2)
    }
    else if(!(i % 2 == j % 2) && j > 4 ){
      fill(0)
      ellipse(i * size + size / 2,j * size + size / 2,size-2)
    }

    }
  }
}
