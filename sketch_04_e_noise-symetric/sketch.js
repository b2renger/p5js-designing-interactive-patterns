let slotSize = 200;
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
    stroke(255,50)
    strokeWeight(0.1)
    time += 0.005;
    for (let i = marginX / 2 + slotSize / 2; i < width - marginX / 2; i += slotSize) {
        for (let j = marginY / 2 + slotSize / 2; j < height - marginY / 2; j += slotSize) {

            beginShape()
            for (let k = - slotSize * 0.5; k < slotSize *0.5 ; k ++){
                let inc = map(k, -slotSize*0.5, slotSize*0.5, 0, PI)
                let n = noise((sin(inc) ), time)
                let h = map(n, 0, 1, -slotSize*0.5 , slotSize*0.5)
                curveVertex(k + i, j + h)
            }
            endShape()
        }
    }
}

function mousePressed() {
    background(0)
    slotSize = random(50, 350)
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
