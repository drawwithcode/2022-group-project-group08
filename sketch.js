let fallimg = [];
let posximg = [];
let posyimg = [];
let velimgy = [];
let imgsize = [];
let imgangle = [];

let nimg;

let imgtype = 16;

let timg = [];

let cnv1;

function preload() {
  for (let i = 0; i <= imgtype; i++) {
    fallimg[i] = loadImage("Assets/Photos/i" + i + ".png");
  }
}

function setup() {
  cnv1 = createCanvas(windowWidth, windowHeight);

  nimg = round(random(10, 15));
  angleMode(DEGREES);

  for (let i = 0; i < nimg; i++) {
    timg[i] = round(random(0, imgtype));
    posximg[i] = random(0, width);
    posyimg[i] = random(0, -height);
    velimgy[i] = random(1, 5);
    imgsize[i] = random(100, 200);
    imgangle[i] = random(0, 360);
  }
}

function draw() {
  background("#1e1e1e");

  for (let i = 0; i < nimg; i++) {
    push();
    translate(posximg[i], posyimg[i]);
    rotate(imgangle[i]);

    image(fallimg[timg[i]], 0, 0, imgsize[i], imgsize[i]);
    posyimg[i] += velimgy[i];

    if (posyimg[i] > height + 200) {
      posyimg[i] = random(0, -height);
      posximg[i] = random(0, width);
      imgsize[i] = random(100, 200);
      velimgy[i] = random(1, 5);
      imgangle[i] = random(0, 360);
    }
    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
