let slotSize = 50;
let marginX;
let marginY;
let niteration = 10;

function setup() {

    createCanvas(windowWidth, windowHeight);
    background(180);

    pixelDensity(1);

    marginX = windowWidth - int((windowWidth / slotSize)) * slotSize;
    marginY = windowHeight - int((windowHeight / slotSize)) * slotSize;

}


function draw() {

    background(0)
    noFill();
    stroke(255)
    for (let i = marginX / 2 + slotSize / 2; i < width - marginX / 2; i += slotSize) {
        for (let j = marginY / 2 + slotSize / 2; j < height - marginY / 2; j += slotSize) {
            for (let k = slotSize; k > 0; k = k - slotSize/niteration) {
                let xOffset = map(mouseX, 0, width, -0.5, 0.5)
                let yOffset = map(mouseY, 0, height, -0.5, 0.5)
                ellipse(i + xOffset * (slotSize - k), j + yOffset * (slotSize - k), k, k);
            }
        }
    }
}

function mousePressed() {
    slotSize = random(10, 200)
    niteration = int(random(2, 20))
    marginX = windowWidth - int((windowWidth / slotSize)) * slotSize;
    marginY = windowHeight - int((windowHeight / slotSize)) * slotSize;
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    marginX = windowWidth - int((windowWidth / slotSize)) * slotSize;
    marginY = windowHeight - int((windowHeight / slotSize)) * slotSize;
}
