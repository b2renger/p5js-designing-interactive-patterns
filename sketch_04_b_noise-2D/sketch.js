let slotSize = 50;
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


    stroke(255)
    strokeWeight(2)
    time += 0.005;
    for (let i = marginX / 2 + slotSize / 2; i < width - marginX / 2; i += slotSize) {
        for (let j = marginY / 2 + slotSize / 2; j < height - marginY / 2; j += slotSize) {
            let n1 = noise(time , i)
            let n2 = noise(time + 10 , j)
            let xoffset = map(n1, 0, 1, -slotSize/2, slotSize/2)
            let yoffset = map(n2, 0, 1, -slotSize/2, slotSize/2)
            point(i+xoffset, j+yoffset)
        }
    }
}

function mousePressed() {
    background(0)
    slotSize = random(5, 100)

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
