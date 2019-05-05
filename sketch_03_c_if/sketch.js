let slotSize = 50;
let marginX;
let marginY;
let seed

function setup() {

    createCanvas(windowWidth, windowHeight);
    background(180);

    pixelDensity(1);

    marginX = windowWidth - int((windowWidth / slotSize)) * slotSize;
    marginY = windowHeight - int((windowHeight / slotSize)) * slotSize;

    seed = random(9999)
}


function draw() {
    randomSeed(seed)
    background(0)
    noFill();
    stroke(255)
    for (let i = marginX / 2 + slotSize / 2; i < width - marginX / 2; i += slotSize) {
        for (let j = marginY / 2 + slotSize / 2; j < height - marginY / 2; j += slotSize) {
            var rd = random(1)
            if (rd < 0.25) {
                line(i -slotSize/2, j - slotSize/2, i-slotSize/2, j + slotSize/2); // left
            } else if (rd > 0.25 && rd < 0.50) {
                line(i + slotSize/2, j-slotSize/2, i + slotSize/2, j + slotSize/2); // down
            } else if (rd > 0.50 && rd < 0.75) {
                line(i-slotSize/2, j-slotSize/2, i + slotSize/2, j-slotSize/2); // up
            } else if (rd > 0.25 && rd < 0.50) {
                line(i + slotSize/2, j - slotSize/2, i + slotSize/2, j + slotSize/2); //right
            }

        }
    }
}

function mousePressed() {
    seed = random(9999)
    slotSize = random(10, 100)
    strokeWeight(1+random(10))
    marginX = windowWidth - int((windowWidth / slotSize)) * slotSize;
    marginY = windowHeight - int((windowHeight / slotSize)) * slotSize;
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    marginX = windowWidth - int((windowWidth / slotSize)) * slotSize;
    marginY = windowHeight - int((windowHeight / slotSize)) * slotSize;
}
