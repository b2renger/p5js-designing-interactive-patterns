let slotSize = 100;
let marginX;
let marginY;
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

    //background(0)
    noFill();
    stroke(255, 200)
    strokeWeight(0.15)
    time += 0.005;
    for (let i = marginX / 2 + slotSize / 2; i < width - marginX / 2; i += slotSize) {
        for (let j = marginY / 2 + slotSize / 2; j < height - marginY / 2; j += slotSize) {
            let angle = noise(time/2 , i , j) * TWO_PI * 2
            let r = noise(time , i , j) * slotSize *0.5
            let xpos = i + cos(angle) * r
            let ypos = j + sin(angle) * r
            line(xpos,ypos, i,j)

        }
    }
}

function mousePressed() {
    background(0)
    slotSize = random(50, 400)
    marginX = windowWidth - int((windowWidth / slotSize)) * slotSize;
    marginY = windowHeight - int((windowHeight / slotSize)) * slotSize;
}

function keyPressed() {
    background(0)
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    marginX = windowWidth - int((windowWidth / slotSize)) * slotSize;
    marginY = windowHeight - int((windowHeight / slotSize)) * slotSize;
}
