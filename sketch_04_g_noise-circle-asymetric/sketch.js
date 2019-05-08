let slotSize = 300;
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
    colorMode(HSB, 360, 100, 100)
}


function draw() {

    //background(0)
    noFill();
    stroke(255, 25)
    strokeWeight(0.15)
    time += 0.0055;
    for (let i = marginX / 2 + slotSize / 2; i < width - marginX / 2; i += slotSize) {
        for (let j = marginY / 2 + slotSize / 2; j < height - marginY / 2; j += slotSize) {
            beginShape()
            for (let angle = 0; angle <= TWO_PI * 2; angle = angle + PI * 0.05) {
                let r = noise(time + i + j, cos(angle) + 1, sin(angle) + 1) * slotSize * 0.5
                let xpos = i + cos(angle) * r
                let ypos = j + sin(angle) * r
                let h = map(r, 0, slotSize * 0.5, 160, 220)

                stroke(h, 50, 100, 1)
                curveVertex(xpos, ypos)

            }
            endShape()
        }
    }
}

function mousePressed() {
    background(0)
    slotSize = random(100, 500)
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
