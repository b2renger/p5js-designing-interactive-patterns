let slotSize = 100;
let marginX;
let marginY;

function setup() {

    createCanvas(windowWidth, windowHeight);
    background(180);

    pixelDensity(1);

    marginX = windowWidth - int((windowWidth / slotSize)) * slotSize;
    marginY = windowHeight - int((windowHeight / slotSize)) * slotSize;

    rectMode(CENTER);
    background(0)
}


function draw() {

    background(0)
    noFill()
    strokeWeight(8)
    stroke(255)

    for (let i = marginX / 2 + slotSize / 2; i < width - marginX / 2; i += slotSize) {
        for (let j = marginY / 2 + slotSize / 2; j < height - marginY / 2; j += slotSize) {
            push()
            translate(i,j)

            let angle = map(mouseX, 0, width, 0, TWO_PI)
            let s = map(mouseY, 0, height, 25, slotSize*2)
            rotate(angle)
            rect(0, 0, s, s);

            pop()
        }
    }

    strokeWeight(3)

     for (let i = marginX / 2 + slotSize / 2; i < width - marginX / 2; i += slotSize) {
        for (let j = marginY / 2 + slotSize / 2; j < height - marginY / 2; j += slotSize) {
            push()
            translate(i,j)
            let angle = map(mouseX, 0, width, 0, TWO_PI)
            rotate(angle)
            let xOffset = map (i, marginX/2, width-marginX/2, -slotSize*0.5 , slotSize *0.5)
            let yOffset = map (j, marginY/2, height-marginY/2, -slotSize*0.5 , slotSize *0.5)
            rect(xOffset, yOffset, slotSize*0.5, slotSize*0.5);
            pop()
        }
    }

}

function mousePressed(){
    background(0)
    slotSize = random(10, 200);
    marginX = windowWidth - int((windowWidth / slotSize)) * slotSize;
    marginY = windowHeight - int((windowHeight / slotSize)) * slotSize;
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    marginX = windowWidth - int((windowWidth / slotSize)) * slotSize;
    marginY = windowHeight - int((windowHeight / slotSize)) * slotSize;
}
