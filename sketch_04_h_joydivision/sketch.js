let ySpacing = 25;
let marginX = 400;
let marginY = 200;
let time = 0

function setup() {
    createCanvas(windowWidth, windowHeight);
    pixelDensity(1);
    background(0)
}


function draw() {

    background(0)
    fill(0);
    stroke(255)
    strokeWeight(2)
    time += 0.005;

    for (let j = marginY / 2 ; j < height - marginY / 2; j += ySpacing) {
        stroke(255)
        beginShape()
        for (let i = marginX / 2; i < width - marginX / 2; i += 1) {
            let t = map(i, marginX/2, width-marginX/2,PI, PI*2)
            let n = noise(time, i/10   ,j)
            let offset = map(n, 0, 1, 0, - 1000000)*pow(sin(t)/PI, 8)
            curveVertex(i,j + offset)
        }
        endShape()
    }
}

function mousePressed() {
    background(0)
    ySpacing = random(5, 20)
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
