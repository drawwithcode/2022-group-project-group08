let changer = 0;
let logo;
let facerec;

let video;
let faceapi;
let detection = [];
let maxHappy = 0;
let maxSad = 0;
let maxAngry = 0;
let maxDisgusted = 0;
let maxNeutral = 0;
let maxSurprised = 0;
let faceHappy;
let faceSad;
let faceAngry;
let faceDisgusted;
let faceNeutral;
let faceSurprised;

let fallimg = [];
let posximg = [];
let posyimg = [];
let velimgy = [];
let imgsize = [];
let imgangle = [];
let nimg;
let imgtype = 16;
let timg = [];

let startbutton;
let bhover = false;
let recth = 0;
let flip = false;
let flipvec = 15;

function preload() {
  //------------------------------------------FIRST PAGE----------------------------------------------------

  for (let i = 0; i <= imgtype; i++) {
    fallimg[i] = loadImage("Assets/Photos/i" + i + ".png");
  }

  flipimg = loadImage("Assets/Graphics/flip.png");
  noflipimg = loadImage("Assets/Graphics/nonflip.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  logo = select("#logo");

  //------------------------------------------FACE API----------------------------------------------------

  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();

  const faceOptions = {
    withLandmarks: true,
    withExpressions: true,
    withDescriptors: false,
    withAgeAndGender: true,
    minConfidence: 0.5,
  };

  faceapi = ml5.faceApi(video, faceOptions, faceReady);

  facerec = createGraphics(width, height);

  //------------------------------------------FIRST PAGE----------------------------------------------------
  nimg = round(random(15, 20));

  for (let i = 0; i < nimg; i++) {
    timg[i] = round(random(0, imgtype));
    posximg[i] = random(0, width);
    posyimg[i] = random(0, -height);
    velimgy[i] = random(1, 5);
    imgsize[i] = random(100, 200);
    imgangle[i] = random(0, 360);
  }

  translate(width / 2, height / 2);
  rotate(-3);
  startbutton = createDiv();
  startbutton.size(width / 3, width / 15);
  startbutton.position(width / 2, height / 2);
  startbutton.style("background-color: transparent");
  startbutton.style("transform: translate(-50%, -50%) rotate(-3deg)");

  startbutton.mouseOver(hover);
  startbutton.mouseOut(nohover);

  recth = height / 15;
}

function draw() {
  switch (changer) {
    //------------------------------------------FIRST PAGE-----------------------------------------------------
    case 0:
      clear();
      rectMode(CENTER);
      angleMode(DEGREES);
      textAlign(CENTER);
      imageMode(CENTER);

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

      if (bhover == true) {
        startbutton.style("cursor", "pointer");

        if (mouseIsPressed == true) {
          changer = 1;
          logo.style("left: 4%; top: 8%; height: 7vh");
        }

        if (flip == false) {
          recth -= flipvec;
          if (recth < flipvec) {
            flip = true;
          }
        } else {
          if (recth < startbutton.height) {
            recth += flipvec;
          }
        }
      } else {
        startbutton.style("cursor", "");
        if (flip == true) {
          recth -= flipvec;
          if (recth < flipvec) {
            flip = false;
          }
        } else {
          if (recth < startbutton.height) {
            recth += flipvec;
          }
        }
      }
      push();
      fill("#F5D233");
      translate(width / 2, height / 2);
      rotate(3);
      rect(0, 0, width / 3, height / 10);
      pop();

      push();
      translate(width / 2, height / 2);
      rotate(-3);
      if (flip == false) {
        image(flipimg, 0, 0, width / 3, recth);
      } else {
        image(noflipimg, 0, 0, width / 3, recth);
      }
      pop();

      break;

    //------------------------------------------SECOND PAGE-----------------------------------------------------
    case 1:
      clear();
      imageMode(CORNER);
      rectMode(CORNER);

      facerec.image(video, 0, 0, width, height);
      if (detection.length > 0) {
        let x1 = detection[0].detection._box._x;
        let y1 = detection[0].detection._box._y;

        let x2 = detection[0].detection._box._width;
        let y2 = detection[0].detection._box._height;

        if (maxAngry < detection[0].expressions.angry) {
          maxAngry = detection[0].expressions.angry;
          faceAngry = facerec.get(x1, y1, x2, y2);
        }

        if (maxDisgusted < detection[0].expressions.disgusted) {
          maxDisgusted = detection[0].expressions.disgusted;
          faceDisgusted = facerec.get(x1, y1, x2, y2);
        }

        if (maxHappy < detection[0].expressions.happy) {
          maxHappy = detection[0].expressions.happy;
          faceHappy = facerec.get(x1, y1, x2, y2);
        }

        if (maxNeutral < detection[0].expressions.neutral) {
          maxNeutral = detection[0].expressions.neutral;
          faceNeutral = facerec.get(x1, y1, x2, y2);
        }

        if (maxSad < detection[0].expressions.sad) {
          maxSad = detection[0].expressions.sad;
          faceSad = facerec.get(x1, y1, x2, y2);
        }

        if (maxSurprised < detection[0].expressions.surprised) {
          maxSurprised = detection[0].expressions.surprised;
          faceSurprised = facerec.get(x1, y1, x2, y2);
        }

        image(faceAngry, 0, 0, 100, 100);
        image(faceDisgusted, 100, 0, 100, 100);
        image(faceHappy, 200, 0, 100, 100);
        image(faceNeutral, 300, 0, 100, 100);
        image(faceSad, 400, 0, 100, 100);
        image(faceSurprised, 500, 0, 100, 100);
      }
      break;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function hover() {
  bhover = true;
}

function nohover() {
  bhover = false;
}

function faceReady() {
  faceapi.detect(gotFace);
}

function gotFace(error, result) {
  if (error) {
    console.log(error);
    return;
  }

  detection = result;
  faceapi.detect(gotFace);
}
