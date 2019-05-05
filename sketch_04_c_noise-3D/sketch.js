let slotSize = 10;
let marginX;
let marginY;
let divisor = 100
let time = 0

function setup() {

    createCanvas(windowWidth, windowHeight);

    pixelDensity(1);

    marginX = windowWidth - int((windowWidth / slotSize)) * slotSize;
    marginY = windowHeight - int((windowHeight / slotSize)) * slotSize;
    rectMode(CENTER)
    background(0)

}


function draw() {

    background(0)
    //noFill();
    stroke(255)
    strokeWeight(1)
    time += 0.005;
    for (let i = marginX / 2 + slotSize / 2; i < width - marginX / 2; i += slotSize) {
        for (let j = marginY / 2 + slotSize / 2; j < height - marginY / 2; j += slotSize) {
            let s = noise(i/divisor, j/divisor, time) * slotSize*1.25
            rect(i, j, s, s)
        }
    }
}

function mousePressed() {
    //background(0)
    slotSize = random(5, 100)
    divisor = random(10, 1000)
    marginX = windowWidth - int((windowWidth / slotSize)) * slotSize;
    marginY = windowHeight - int((windowHeight / slotSize)) * slotSize;
}

function keyPressed(){
    background(0)
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    marginX = windowWidth - int((windowWidth / slotSize)) * slotSize;
    marginY = windowHeight - int((windowHeight / slotSize)) * slotSize;
}
