let slotSize = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(180);
}


function draw() {
  for (let i = 0; i <= width; i += slotSize) {
    for (let j = 0; j <= height; j+= slotSize) {ellipse(i,j, slotSize,slotSize)
        line(i,0,i,height);
        line(0,j,width,j);

    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight) ;
  background(180);
}
