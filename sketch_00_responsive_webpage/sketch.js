
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(180);
}

function draw() {
  fill(255);
  ellipse(width*0.5, height*0.5, 50, 50);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight) ;
  background(180);
}
