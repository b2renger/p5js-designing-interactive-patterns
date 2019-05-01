let slotSize = 50;
let marginX;
let marginY;

function setup() {

    createCanvas(windowWidth, windowHeight);
    background(0)

    pixelDensity(1);

    marginX = windowWidth - int((windowWidth / slotSize)) * slotSize;
    marginY = windowHeight - int((windowHeight / slotSize)) * slotSize;

}


function draw() {

    background(0)
    noFill();
    stroke(255)
    strokeWeight(2)
    for (let i = marginX / 2 + slotSize / 2; i < width - marginX / 2; i += slotSize) {
        for (let j = marginY / 2 + slotSize / 2; j < height - marginY / 2; j += slotSize) {

            let xOffset = map(mouseX, 0, width, -0.5, 0.5)
            let yOffset = map(mouseY, 0, height, -0.5, 0.5)
            line(i + xOffset * (slotSize), j + yOffset * (slotSize),
                i - slotSize * 0.5, j - slotSize * 0.5);
            line(i + xOffset * (slotSize), j + yOffset * (slotSize),
                i + slotSize * 0.5, j + slotSize * 0.5);
            line(i + xOffset * (slotSize), j + yOffset * (slotSize),
                i + slotSize * 0.5, j - slotSize * 0.5);
            line(i + xOffset * (slotSize), j + yOffset * (slotSize),
                i - slotSize * 0.5, j + slotSize * 0.5);

        }
    }
}

function mousePressed() {
    slotSize = random(10, 200)
    marginX = windowWidth - int((windowWidth / slotSize)) * slotSize;
    marginY = windowHeight - int((windowHeight / slotSize)) * slotSize;
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    marginX = windowWidth - int((windowWidth / slotSize)) * slotSize;
    marginY = windowHeight - int((windowHeight / slotSize)) * slotSize;
}
