let changer = 0;
let logo;
let facerec;
let preso = false;

let webcam;
let faceapi;
let faceapi2;
let detection = [];
let faceOptions;
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
let yourFace;

let fallimg = [];
let posximg = [];
let posyimg = [];
let velimgy = [];
let imgsize = [];
let imgangle = [];
let nimg;
let imgtype = 16;
let timg = [];

let shapes = [];
let shapetype = 5;
let shapefpage = [];

let text1index = 0;
let lastCont = 0;
let text1cont = 0;
let text0 = "This is";
let text1 = "YOU";
let text2 = "waking up and probably start using your phone...";

let startbutton;
let bhover = false;
let recth = 0;
let flip = false;
let flipvec = 15;

let vid;
let video;
let facevid = [];
let vidbool = false;
let vidbool2 = false;

let myColors = [
  "#E03C2B",
  "#F5D233",
  "#A0CE11",
  "#6058ED",
  "#B054DF",
  "#727272",
];
let randCol = [];
let Akira;
let Graphik;
let text3;
let textvolume;
let contents = [];
let loading;
let playing1 = false;
let playing2 = false;
let playing3 = false;
let playing4 = false;
let playing5 = false;
let vidrand = [];
let shaperand = [];
let mode = 0;
let duration = [];
let totaltime;

let shapeH;
let shapeX;
let shapeXr;
let shapeA;
let shapeD;
let pupil;
let alarm;

let number = 0;

//colori
let ColorH = "#F5D233";
let ColorA = "#E03C2B";
let ColorS = "#6058ED";
let ColorD = "#A0CE11";
let ColorSr = "#B054DF";

//variabili per rotazione
indietro = true;
let angle = 0;
let angle2 = 0;
let angle3 = 0;
let angle4 = 0;
let angle5 = 0;

function preload() {
  //------------------------------------------FONT----------------------------------------------------

  Akira = loadFont("./Assets/Fonts/Akira Expanded Demo.otf");
  Graphik = loadFont("./Assets/Fonts/GraphikMedium.otf");

  //------------------------------------------FIRST PAGE----------------------------------------------------

  for (let i = 0; i <= imgtype; i++) {
    fallimg[i] = loadImage("Assets/Photos/i" + i + ".png");
  }

  flipimg = loadImage("Assets/Graphics/flip.png");
  noflipimg = loadImage("Assets/Graphics/nonflip.png");

  //------------------------------------------SECOND PAGE----------------------------------------------------

  for (let i = 0; i <= shapetype; i++) {
    shapes[i] = loadImage("Assets/Graphics/" + i + ".png");
  }
  //------------------------------------------THIRD PAGE----------------------------------------------------

  shapeH = loadImage("Assets/Graphics/2.png");
  shapeXr = loadImage("Assets/Graphics/5.png");
  shapeD = loadImage("Assets/Graphics/1.png");
  pupil = loadImage("Assets/Graphics/pupilla.png");
  alarm = loadImage("Assets/Graphics/sveglia.png");

  //------------------------------------------CONTENT PAGES----------------------------------------------------

  loading = loadImage("./Assets/Photos/i9.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  logo = select("#logo");

  //------------------------------------------FACE API----------------------------------------------------

  webcam = createCapture(VIDEO);
  webcam.size(width, height);
  webcam.hide();

  faceOptions = {
    withLandmarks: true,
    withExpressions: true,
    withDescriptors: false,
    withAgeAndGender: true,
    minConfidence: 0.5,
  };

  faceapi = ml5.faceApi(webcam, faceOptions, faceReady);

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

  //------------------------------------------SECOND PAGE----------------------------------------------------

  for (let i = 0; i < 3; i++) {
    shapefpage[i] = round(random(5));
  }

  //------------------------------------------CONTENTS PAGES----------------------------------------------------

  for (let i = 0; i < 6; i++) {
    vidrand[i] = round(random(1, 27));
  }

  for (let i = 0; i < 6; i++) {
    contents[vidrand[i]] = createVideo([
      "./Assets/Contents/video" + vidrand[i] + ".mp4",
    ]);
    contents[vidrand[i]].size(width / 1.7, (width / 1.7) * 0.56);
    contents[vidrand[i]].volume(0);
    contents[vidrand[i]].hide();
  }

  for (let i = 1; i <= 6; i++) {
    shaperand[i] = round(random(0, 5));
  }

  /* for (let i = 1; i <= 27; i++) {
    contents[i] = createVideo(["./Assets/Contents/video" + i + ".mp4"]);
    contents[i].size(width / 1.7, (width / 1.7) * 0.56);
    contents[i].volume(0);
    contents[i].hide();
  } */

  for (let i = 0; i <= 6; i++) {
    randCol[i] = random(myColors.length - 1);
    randCol[i] = round(randCol[i]);
  }
}

function draw() {
  switch (changer) {
    //------------------------------------------FIRST PAGE-----------------------------------------------------
    case 0:
      clear();
      rectMode(CENTER);
      angleMode(DEGREES);
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

        if (mouseIsPressed == true && preso == true) {
          changer = 1;
          logo.style("left: 4%; top: 8%; height: 7vh");
          startbutton.hide();
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
      if (vidbool == false) {
        vid = createVideo("Assets/Video/videoiniz.mp4");
        vid.size(width / 1.7, (width / 1.7) * 0.56);
        vid.volume(0);
        vid.loop();
        vid.hide();

        vidbool = true;

        avanti = createButton(">");
        avanti.style(
          "height: 1vw;width: 1vw;font-size: 60px;border: none; background-color: #1e1e1e; color:white"
        );
        avanti.style("cursor", "pointer");
      }
      if (vid.time() == 0 && vidbool2 == false) {
        faceapi2 = ml5.faceApi(vid, faceOptions, faceReady2);
        vidbool2 = true;
      }

      if (vid.time() > 1) {
        vidbool2 = false;
      }
      clear();
      avanti.position((width * 19) / 20, (height * 11) / 12, "absolute");
      avanti.mousePressed(changeTo2);
      imageMode(CORNER);
      rectMode(CORNER);

      image(
        shapes[shapefpage[0]],
        width / 2 - width / 1.5 / 2,
        height / 15,
        200,
        200
      );
      image(
        shapes[shapefpage[1]],
        width / 2 + width / 2.1 / 2,
        height / 1.8,
        270,
        270
      );
      image(
        shapes[shapefpage[2]],
        width / 2 + width / 2 / 2,
        height / 1.7,
        200,
        200
      );

      facerec.image(webcam, 0, 0, width, height);
      if (detection.length > 0) {
        let x1 = detection[0].detection._box._x;
        let y1 = detection[0].detection._box._y;

        let x2 = detection[0].detection._box._width;
        let y2 = detection[0].detection._box._height;

        yourFace = facerec.get(x1, y1, x2, y2);
      }

      push();
      let video = vid.get();
      translate(
        width / 2 - vid.width / 2,
        height / 2 - height / 10 - vid.height / 2
      );
      push();
      rotate(3);
      noStroke();
      fill(myColors[randCol[6]]);
      rect(-10, -30, vid.width + 10, vid.height + 20);
      pop();
      image(video, 0, 0, vid.width, vid.height);

      if (facevid.length > 0) {
        let xvid1 = facevid[0].detection._box._x;
        let yvid1 = facevid[0].detection._box._y;

        let xvid2 = facevid[0].detection._box._width;
        let yvid2 = facevid[0].detection._box._height;

        image(yourFace, xvid1, yvid1, xvid2, yvid2);
      }
      pop();

      fill("white");
      textFont(Graphik);
      textSize(40);
      text(
        text0.substring(0, text1index),
        width / 2 - vid.width / 2,
        height / 2 + vid.height / 2 + 100
      );

      textFont(Akira);
      textSize(40);
      if (text1index > 7) {
        push();
        rectMode(CENTER);
        translate(
          width / 2 - vid.width / 2 + 220,
          height / 2 + vid.height / 2 + 80
        );
        rotate(2);
        fill("#F5D233");
        rect(0, 0, 140, 60);
        pop();

        fill("#1e1e1e");
        text(
          text1.substring(0, text1index - 7),
          width / 2 - vid.width / 2 + 160,
          height / 2 + vid.height / 2 + 100
        );
      }

      fill("white");
      textFont(Graphik);
      textSize(40);
      if (text1index > 11) {
        text(
          text2.substring(0, text1index - 11),
          width / 2 - vid.width / 2,
          height / 2 + vid.height / 2 + 150
        );
      }

      text1cont++;
      if (text1cont > lastCont) {
        text1index = text1cont;
        lastCont = text1cont;
      }

      break;

    //------------------------------------------THIRD PAGE-----------------------------------------------------
    case 2:
      clear();

      //rettangolo viola
      push();
      rectMode(CENTER);
      angleMode(DEGREES);
      noStroke();
      fill(ColorS);
      translate(width / 4.8, height - height / 1.52);
      rotate(-3);
      rect(0, 0, windowWidth / 6, windowHeight / 8.5);
      pop();

      //text//////////////////////////////////////////////
      let t =
        "of people start to see contents on the web barely awake. Among the huge amount of contents avaiable on the web...";
      push();
      fill(255);
      translate(width / 7, height - height / 1.8);
      textFont(Graphik);
      textSize(40);
      text(t, 0, 0, width - width / 4, height);
      pop();

      push();
      fill(255);
      translate(width / 7, height - height / 1.6);
      textFont(Akira);
      textSize(width / 25);
      text(number, 0, 0);
      if (number < 70) {
        number++;
      }
      pop();

      push();
      fill(255);
      translate(width / 4.6, height - height / 1.6);
      textFont(Akira);
      textSize(width / 25);
      text("%", 0, 0);
      pop();

      imageMode(CENTER);
      angleMode(DEGREES);
      ////////////////////////////////////////////////////////////

      //forme e immagini//////////////////////////////////////////////

      //// rotating alarm
      push();
      translate(width - width / 1.5, height - height / 1.25);
      rotate(angle);
      if (indietro == true) {
        angle++;
        if (angle > 50) {
          indietro = false;
        }
      } else {
        angle--;
        if (angle < -30) {
          indietro = true;
        }
      }
      image(
        alarm,
        0,
        0,
        (windowWidth / alarm.width) * 85,
        (windowWidth / alarm.width) * 85
      );
      pop();

      //////// rotating pupil
      push();
      translate(width - width / 4, height - height / 3);
      rotate(angle5);
      if (indietro == true) {
        angle5++;
        if (angle5 > 50) {
          indietro = false;
        }
      } else {
        angle5--;
        if (angle < -30) {
          indietro = true;
        }
      }
      image(
        pupil,
        0,
        0,
        (windowWidth / pupil.width) * 30,
        (windowWidth / pupil.width) * 30
      );
      pop();

      //// rotating happiness shape
      push();
      translate(width - width / 14, height - height / 4);
      rotate(angle3);
      angle3++;
      image(
        shapeH,
        0,
        0,
        (windowWidth / shapeH.width) * 200,
        (windowWidth / shapeH.width) * 200
      );
      pop();

      /// rotating disgust shape
      push();
      translate(width - width / 7, height - height / 6);
      rotate(angle2);
      angle2++;
      image(
        shapeD,
        0,
        0,
        (windowWidth / shapeH.width) * 150,
        (windowWidth / shapeH.width) * 150
      );
      pop();

      //// rotating surprise shape
      push();
      translate(width - width / 4, height - height / 14);
      rotate(angle4);
      angle4++;
      image(
        shapeXr,
        0,
        0,
        (windowWidth / shapeH.width) * 180,
        (windowWidth / shapeH.width) * 180
      );
      pop();

      avanti.position((width * 19) / 20, (height * 11) / 12, "absolute");
      avanti.mousePressed(changeTo3);
      break;

    //------------------------------------------CONTENTS PAGES----------------------------------------------------
    case 3:
      clear();

      if (
        contents[vidrand[1]].time() > floor(contents[vidrand[1]].duration())
      ) {
        mode = 1;
      }
      if (
        contents[vidrand[1]].time() + contents[vidrand[2]].time() >
        floor(contents[vidrand[1]].duration() + contents[vidrand[2]].duration())
      ) {
        mode = 2;
      }
      if (
        contents[vidrand[1]].time() +
          contents[vidrand[2]].time() +
          contents[vidrand[3]].time() >
        floor(
          contents[vidrand[1]].duration() +
            contents[vidrand[2]].duration() +
            contents[vidrand[3]].duration()
        )
      ) {
        mode = 3;
      }
      if (
        contents[vidrand[1]].time() +
          contents[vidrand[2]].time() +
          contents[vidrand[3]].time() +
          contents[vidrand[4]].time() >
        floor(
          contents[vidrand[1]].duration() +
            contents[vidrand[2]].duration() +
            contents[vidrand[3]].duration() +
            contents[vidrand[4]].duration()
        )
      ) {
        mode = 4;
      }
      if (
        contents[vidrand[1]].time() +
          contents[vidrand[2]].time() +
          contents[vidrand[3]].time() +
          contents[vidrand[4]].time() +
          contents[vidrand[5]].time() >
        floor(
          contents[vidrand[1]].duration() +
            contents[vidrand[2]].duration() +
            contents[vidrand[3]].duration() +
            contents[vidrand[4]].duration() +
            contents[vidrand[5]].duration()
        )
      ) {
        console.log("finito");
      }

      switch (mode) {
        case 0:
          textFont(Graphik);
          fill("white");
          text3 = "You can find something like this...";
          textvolume = "*TURN UP THE VOLUME";
          textAlign(CENTER, CENTER);
          //rectMode(CENTER);
          textSize(25);
          text(text3, windowWidth / 2, windowHeight / 12);
          textFont(Akira);
          textSize(18);
          text(textvolume, windowWidth / 2, (1.5 * windowHeight) / 12);

          rectMode(CENTER);
          noStroke();
          //fill("#F5D233");
          fill(myColors[randCol[1]]);
          push();
          translate(windowWidth / 2, windowHeight / 2);
          angleMode(DEGREES);
          rotate(-5);
          rect(0, 0, width / 1.7, (width / 1.7) * 0.56);
          pop();
          //fill("#6058ED");
          fill(myColors[randCol[1]]);
          rect(
            windowWidth / 2,
            windowHeight / 2,
            width / 1.7,
            (width / 1.7) * 0.56
          );

          imageMode(CENTER);
          image(
            shapes[shaperand[1]],
            (4 * windowWidth) / 5,
            (4 * windowHeight) / 5,
            shapes[shaperand[1]].width / 5,
            shapes[shaperand[1]].height / 5
          );

          if (playing1 == false) {
            contents[vidrand[1]].play();
            contents[vidrand[2]].play();
            contents[vidrand[3]].play();
            contents[vidrand[4]].play();
            contents[vidrand[5]].play();
            contents[vidrand[2]].pause();
            contents[vidrand[3]].pause();
            contents[vidrand[4]].pause();
            contents[vidrand[5]].pause();
            playing1 = true;
          }
          if (mouseIsPressed == true) {
            for (let i = 1; i <= 5; i++) {
              contents[vidrand[i]].volume(1);
            }
          }

          let img1 = contents[vidrand[1]].get();
          image(img1, windowWidth / 2, windowHeight / 2);
          break;
        case 1:
          textFont(Graphik);
          fill("white");
          text3 = "Or like this...";
          textvolume = "*TURN UP THE VOLUME";
          textAlign(CENTER, CENTER);
          //rectMode(CENTER);
          textSize(25);
          text(text3, windowWidth / 2, windowHeight / 12);
          textFont(Akira);
          textSize(18);
          text(textvolume, windowWidth / 2, (1.5 * windowHeight) / 12);

          rectMode(CENTER);
          noStroke();
          fill("#F5D233");
          fill(myColors[randCol[2]]);
          push();
          translate(windowWidth / 2, windowHeight / 2);
          angleMode(DEGREES);
          rotate(-5);
          rect(0, 0, width / 1.7, (width / 1.7) * 0.56);
          pop();
          fill("#6058ED");
          fill(myColors[randCol[2]]);
          rect(
            windowWidth / 2,
            windowHeight / 2,
            width / 1.7,
            (width / 1.7) * 0.56
          );

          imageMode(CENTER);
          image(
            shapes[shaperand[2]],
            (4 * windowWidth) / 5,
            (4 * windowHeight) / 5,
            shapes[shaperand[2]].width / 5,
            shapes[shaperand[2]].height / 5
          );

          if (playing2 == false) {
            contents[vidrand[1]].pause();
            contents[vidrand[2]].play();

            playing2 = true;
          }

          let img2 = contents[vidrand[2]].get();
          image(img2, windowWidth / 2, windowHeight / 2);
          break;
        case 2:
          textFont(Graphik);
          fill("white");
          text3 = "Also like this...";
          textvolume = "*TURN UP THE VOLUME";
          textAlign(CENTER, CENTER);
          //rectMode(CENTER);
          textSize(25);
          text(text3, windowWidth / 2, windowHeight / 12);
          textFont(Akira);
          textSize(18);
          text(textvolume, windowWidth / 2, (1.5 * windowHeight) / 12);

          rectMode(CENTER);
          noStroke();
          //fill("#F5D233");
          fill([myColors[randCol[3]]]);
          push();
          translate(windowWidth / 2, windowHeight / 2);
          angleMode(DEGREES);
          rotate(-5);
          rect(0, 0, width / 1.7, (width / 1.7) * 0.56);
          pop();
          //fill("#6058ED");
          fill(myColors[randCol[3]]);
          rect(
            windowWidth / 2,
            windowHeight / 2,
            width / 1.7,
            (width / 1.7) * 0.56
          );

          imageMode(CENTER);
          image(
            shapes[shaperand[3]],
            (4 * windowWidth) / 5,
            (4 * windowHeight) / 5,
            shapes[shaperand[3]].width / 5,
            shapes[shaperand[3]].height / 5
          );

          if (playing3 == false) {
            contents[vidrand[2]].pause();
            contents[vidrand[3]].play();
            playing3 = true;
          }

          let img3 = contents[vidrand[3]].get();
          image(img3, windowWidth / 2, windowHeight / 2);
          break;
        case 3:
          textFont(Graphik);
          fill("white");
          text3 = "Or even like this...";
          textvolume = "*TURN UP THE VOLUME";
          textAlign(CENTER, CENTER);
          //rectMode(CENTER);
          textSize(25);
          text(text3, windowWidth / 2, windowHeight / 12);
          textFont(Akira);
          textSize(18);
          text(textvolume, windowWidth / 2, (1.5 * windowHeight) / 12);

          rectMode(CENTER);
          noStroke();
          //fill("#F5D233");
          fill(myColors[randCol[4]]);
          push();
          translate(windowWidth / 2, windowHeight / 2);
          angleMode(DEGREES);
          rotate(-5);
          rect(0, 0, width / 1.7, (width / 1.7) * 0.56);
          pop();
          //fill("#6058ED");
          fill(myColors[randCol[4]]);
          rect(
            windowWidth / 2,
            windowHeight / 2,
            width / 1.7,
            (width / 1.7) * 0.56
          );

          imageMode(CENTER);
          image(
            shapes[shaperand[4]],
            (4 * windowWidth) / 5,
            (4 * windowHeight) / 5,
            shapes[shaperand[4]].width / 5,
            shapes[shaperand[4]].height / 5
          );

          if (playing4 == false) {
            contents[vidrand[3]].pause();
            contents[vidrand[4]].play();
            playing4 = true;
          }

          let img4 = contents[vidrand[4]].get();
          image(img4, windowWidth / 2, windowHeight / 2);
          break;
        case 4:
          textFont(Graphik);
          fill("white");
          text3 = "Or maybe like this last one...";
          textvolume = "*TURN UP THE VOLUME";
          textAlign(CENTER, CENTER);
          //rectMode(CENTER);
          textSize(25);
          text(text3, windowWidth / 2, windowHeight / 12);
          textFont(Akira);
          textSize(18);
          text(textvolume, windowWidth / 2, (1.5 * windowHeight) / 12);

          rectMode(CENTER);
          noStroke();
          //fill("#F5D233");
          fill(myColors[randCol[5]]);
          push();
          translate(windowWidth / 2, windowHeight / 2);
          angleMode(DEGREES);
          rotate(-5);
          rect(0, 0, width / 1.7, (width / 1.7) * 0.56);
          pop();
          //fill("#6058ED");
          fill(myColors[randCol[5]]);
          rect(
            windowWidth / 2,
            windowHeight / 2,
            width / 1.7,
            (width / 1.7) * 0.56
          );

          imageMode(CENTER);
          image(
            shapes[shaperand[5]],
            (4 * windowWidth) / 5,
            (4 * windowHeight) / 5,
            shapes[shaperand[5]].width / 5,
            shapes[shaperand[5]].height / 5
          );

          if (playing5 == false) {
            contents[vidrand[4]].pause();
            contents[vidrand[5]].play();
            playing5 = true;
          }

          let img5 = contents[vidrand[5]].get();
          image(img5, windowWidth / 2, windowHeight / 2);
          break;
        default:
      }

      totaltime =
        contents[vidrand[1]].duration() +
        contents[vidrand[2]].duration() +
        contents[vidrand[3]].duration() +
        contents[vidrand[4]].duration() +
        contents[vidrand[5]].duration();

      let currenttime =
        contents[vidrand[1]].time() +
        contents[vidrand[2]].time() +
        contents[vidrand[3]].time() +
        contents[vidrand[4]].time() +
        contents[vidrand[5]].time();

      let barlenght = map(currenttime, 0, totaltime, 0, (3 * windowWidth) / 5);

      fill("#727272");
      rectMode(CORNER);
      rect(
        windowWidth / 5,
        (11 * windowHeight) / 12,
        (3 * windowWidth) / 5,
        10
      );
      fill("#FFFFFF");
      rect(windowWidth / 5, (11 * windowHeight) / 12, barlenght, 10);

      imageMode(LEFT);
      image(
        loading,
        windowWidth / 5 + barlenght,
        (11 * windowHeight) / 12,
        loading.width / 6,
        loading.height / 6
      );
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
  preso = true;
}

function faceReady2() {
  faceapi2.detect(gotFace2);
}

function gotFace2(error, result) {
  if (error) {
    console.log(error);
    return;
  }

  facevid = result;
  if (changer == 1) {
    faceapi2.detect(gotFace2);
  }
}

function changeTo2() {
  changer = 2;
}

function changeTo3() {
  changer = 3;
}

/* clear();
imageMode(CORNER);
rectMode(CORNER);

facerec.image(webcam, 0, 0, width, height);
if (detection.length > 0) {
  let x1 = detection[0].detection._box._x - width / 10;
  let y1 = detection[0].detection._box._y - height / 10;

  let x2 = detection[0].detection._box._width + width / 5;
  let y2 = detection[0].detection._box._height + height / 5;

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
} */
