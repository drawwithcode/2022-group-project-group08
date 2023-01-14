//-----------------------------------INITIAL ANIMATION----------------------------

let fallimg = [];
let posximg = [];
let posyimg = [];
let velimgy = [];
let imgsize = [];
let imgangle = [];

let nimg;

let imgtype = 6;

let timg = [];

let cnv1;

let rain = function (r) {
  r.preload = function () {
    for (let i = 0; i <= imgtype; i++) {
      fallimg[i] = r.loadImage("Assets/Photos/i" + i + ".png");
    }
  };

  r.setup = function () {
    cnv1 = r.createCanvas(r.windowWidth, r.windowHeight);
    cnv1.parent("rainingmen");

    nimg = r.round(r.random(10, 15));
    r.angleMode(r.DEGREES);

    for (let i = 0; i < nimg; i++) {
      timg[i] = r.round(r.random(0, imgtype));
      posximg[i] = r.random(0, r.width);
      posyimg[i] = r.random(0, -r.height);
      velimgy[i] = r.random(1, 5);
      imgsize[i] = r.random(100, 200);
      imgangle[i] = r.random(0, 360);
    }
  };

  r.draw = function () {
    r.background("#1e1e1e");

    for (let i = 0; i < nimg; i++) {
      r.push();
      r.translate(posximg[i], posyimg[i]);
      r.rotate(imgangle[i]);

      r.image(fallimg[timg[i]], 0, 0, imgsize[i], imgsize[i]);
      posyimg[i] += velimgy[i];

      if (posyimg[i] > r.height + 200) {
        posyimg[i] = r.random(0, -r.height);
        posximg[i] = r.random(0, r.width);
        imgsize[i] = r.random(100, 200);
        velimgy[i] = r.random(1, 5);
        imgangle[i] = r.random(0, 360);
      }
      r.pop();
    }
  };

  r.windowResized = function () {
    r.resizeCanvas(r.windowWidth, r.windowHeight);
  };
};

let rainingobjects = new p5(rain);

//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------
//-----------------------------------INITIAL ANIMATION----------------------------
//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------
