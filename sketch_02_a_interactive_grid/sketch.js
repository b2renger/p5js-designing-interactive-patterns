let slotSize = 50;
let marginX;
let marginY;

function setup() {

    createCanvas(windowWidth, windowHeight);
    background(180);

    pixelDensity(1);

    marginX = windowWidth - int((windowWidth / slotSize)) * slotSize;
    marginY = windowHeight - int((windowHeight / slotSize)) * slotSize;

}


function draw() {

    background(0)
    for (let i = marginX / 2 + slotSize / 2; i < width - marginX / 2; i += slotSize) {
        for (let j = marginY / 2 + slotSize / 2; j < height - marginY / 2; j += slotSize) {

            let s = map(dist(i,j,mouseX,mouseY), 0, sqrt(width*width + height*height), slotSize, 1)
            ellipse(i, j, s, s);

        }
    }
}

function mousePressed(){
    slotSize = random(10, 200)

    marginX = windowWidth - int((windowWidth / slotSize)) * slotSize;
    marginY = windowHeight - int((windowHeight / slotSize)) * slotSize;
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    marginX = windowWidth - int((windowWidth / slotSize)) * slotSize;
    marginY = windowHeight - int((windowHeight / slotSize)) * slotSize;
}
