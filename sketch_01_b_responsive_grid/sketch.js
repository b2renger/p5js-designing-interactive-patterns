let slotSize = 100;


function setup() {
    createCanvas(windowWidth, windowHeight);

    background(180);
}


function draw() {

    fill(255);
    for (let i = 0; i <= width ; i += slotSize) {
        for (let j = 0; j <= height ; j += slotSize) {
            line(i, 0, i, height);
            line(0, j, width, j);
        }
    }

    for (let i = slotSize / 2; i <= width - slotSize / 2; i += slotSize) {
        for (let j = slotSize / 2; j <= height - slotSize / 2; j += slotSize) {
            ellipse(i, j, slotSize, slotSize);
        }
    }
}

function mousePressed(){
    background(180);
    slotSize = random(50, 200)
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(180);
}
