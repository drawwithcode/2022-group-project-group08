let fallimg = [];
let posimg = [];

let fallshape = [];
let posshape = [];

let nimg;
let nshape;

let timg;
let tshape;

let cnv1;

let rain = function (r) {
  r.preload = function () {
    cnv1 = r.createCanvas(r.windowWidth, r.windowHeight);
    nimg = r.round(r.random(0, 15));
    nshape = r.round(r.random(0, 15));

    console.log(fallimg[0]);

    for (let i = 0; i < nimg; i += 2) {
      timg = r.round(r.random(0, fallimg.lenght));
      posimg[i] = r.random(0, r.width);
      posimg[i + 1] = 50;
      r.image(fallimg[timg], 0, 0, 100, 100);
    }
  };

  r.setup = function () {
    for (let i = 0; i < 1; i++) {
      fallimg[i] = r.loadImage("Assets/Photos/i" + i + ".png");
      console.log(i);
    }

    for (let i = 0; i < 1; i++) {
      fallshape[i] = r.loadImage("Assets/Photos/s" + i + ".png");
    }
  };

  r.draw = function () {};
};

let rainingobjects = new p5(rain);
