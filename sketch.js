let changer = 0;
let logo;
let facerec;
let preso = false;
let avanti;
let message = false;

let webcam;
let faceapi;
let faceapi2;
let detection = [];
let faceOptions;
let maxHappy = [0, 0, 0, 0, 0, 0];
let maxSad = [0, 0, 0, 0, 0, 0];
let maxAngry = [0, 0, 0, 0, 0, 0];
let maxDisgusted = [0, 0, 0, 0, 0, 0];
let maxNeutral = [0, 0, 0, 0, 0, 0];
let maxSurprised = [0, 0, 0, 0, 0, 0];
let faceHappy = [];
let faceSad = [];
let faceAngry = [];
let faceDisgusted = [];
let faceNeutral = [];
let faceSurprised = [];
let yourFace;
let emotion = [];
let percentage = [];

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

let shapeK;
let shapeY;
let eye;

//variabili per rotazione
let forward = true;
let angolo = 0;
let angolo2 = 0;
let angolo3 = 0;
let angolo4 = 0;

let isonu;
let esonu;

let angerShape;
let disgustShape;
let happyShape;
let neutralShape;
let sadShape;
let surpriseShape;
let content;
let artpage = 0;
let data;
let contentimages = [];
let emoji = [];
let randposx = [];
let randposy = [];
let randvel = [];
let tempo;

let stickers = [];
let xemoji = [];
let yemoji = [];
let velemoji = [];
let emojisize = [];
let emojiangle = [];
let nemoji;
let emojitype = 5;
let temoji = [];
let cnemoji;

let about;

let ourfaces = [];
let facetype = 4;
let cnfaces;
let nfaces;
let tfaces = [];
let xfaces = [];
let yfaces = [];
let velfaces = [];
let facessize = [];
let facesangles = [];
let back;

let button = [];

function preload() {
  //------------------------------------------FONT----------------------------------------------------

  Akira = loadFont("Assets/Fonts/Akira Expanded Demo.otf");
  Graphik = loadFont("Assets/Fonts/GraphikMedium.otf");

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

  loading = loadImage("Assets/Photos/i9.png");

  //------------------------------------------FINAL PAGE----------------------------------------------------

  eye = loadImage("Assets/Graphics/occhio.png");
  shapeK = shapeH;
  shapeY = loadImage("Assets/Graphics/4.png");
  isonu = loadImage("Assets/Graphics/isonu.png");
  esonu = loadImage("Assets/Graphics/esonu.png");

  //------------------------------------------ARTWORK----------------------------------------------------

  angerShape = loadImage("Assets/Graphics/0.png");
  disgustShape = shapeD;
  happyShape = shapeH;
  neutralShape = loadImage("Assets/Graphics/3.png");
  sadShape = shapeY;
  surpriseShape = shapeXr;

  data = loadJSON("possibilities.json");

  for (let i = 0; i < 28; i++) {
    contentimages[i] = loadImage("Assets/Photos/" + i + ".png");
  }

  for (let i = 0; i < 6; i++) {
    emoji[i] = loadImage("Assets/Graphics/Emoji" + i + ".png");
  }

  //------------------------------------------ABOUT----------------------------------------------------

  for (let i = 0; i <= facetype; i++) {
    ourfaces[i] = loadImage("Assets/Faces/Face" + i + ".png");
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //const canvas.getContext("2d", { willReadFrequently: true });
  logo = select("#logo");
  /* alert(
    "Hey, to better enjoy this site we suggest to be alone in a quiet place with your earphones on, Have fun!"
  ); */

  //------------------------------------------FACE API----------------------------------------------------

  webcam = createCapture(VIDEO);
  webcam.size(width, height);
  webcam.hide();

  faceOptions = {
    withLandmarks: true,
    withExpressions: true,
    withDescriptors: false,
    withAgeAndGender: true,
    minConfidence: 0.3,
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

  for (let i = 0; i < 5; i++) {
    vidrand[i] = round(random(0, 24));

    for (let j = 0; j < i; j++) {
      while (vidrand[i] == vidrand[j] && i != j) {
        vidrand[i] = round(random(0, 24));
      }
    }
  }

  for (let i = 0; i < 5; i++) {
    contents[vidrand[i]] = createVideo([
      "Assets/Contents/video" + vidrand[i] + ".mp4",
    ]);
    contents[vidrand[i]].size(width / 1.7, (width / 1.7) * 0.56);
    contents[vidrand[i]].volume(0);
    contents[vidrand[i]].hide();
  }

  for (let i = 1; i <= 6; i++) {
    shaperand[i] = round(random(0, 5));
  }

  /* for (let i = 1; i <= 27; i++) {
    contents[i] = createVideo(["Assets/Contents/video" + i + ".mp4"]);
    contents[i].size(width / 1.7, (width / 1.7) * 0.56);
    contents[i].volume(0);
    contents[i].hide();
  } */

  for (let i = 0; i <= 6; i++) {
    randCol[i] = random(myColors.length - 1);
    randCol[i] = round(randCol[i]);
  }

  //------------------------------------------ARTWORK----------------------------------------------------

  for (let i = 0; i < 20; i++) {
    randposx[i] = random(width);
    randposy[i] = random(-height, 0);
    randvel[i] = random(1, 6);
  }

  //------------------------------------------LAST PAGE----------------------------------------------------

  nemoji = round(random(20, 30));
  angleMode(DEGREES);

  for (let i = 0; i < nemoji; i++) {
    temoji[i] = round(random(0, emojitype));
    xemoji[i] = random(0, width);
    yemoji[i] = random(0, -height);
    velemoji[i] = random(1, 5);
    emojisize[i] = 50;
    emojiangle[i] = random(0, 360);
  }

  rectMode(CENTER);
  about = createButton("ABOUT");
  about.mousePressed(goToTheAbout);

  recap = createButton("RECAP");
  recap.mousePressed(goToTheRecap);

  //------------------------------------------ABOUT----------------------------------------------------

  nfaces = round(random(15, 25));
  angleMode(DEGREES);

  for (let i = 0; i < nfaces; i++) {
    tfaces[i] = round(random(0, facetype));
    xfaces[i] = random(0, width);
    yfaces[i] = random(0, -height);
    velfaces[i] = random(1, 5);
    facessize[i] = random(100, 150);
    facesangles[i] = random(0, 360);
  }

  back = createButton("X");
  back.mousePressed(goBack);

  //------------------------------------------RECAP----------------------------------------------------

  for (let i = 0; i < 5; i++) {
    button[i] = createButton("");
    button[i].hide();
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
        avanti.style("backgound-color", "#ffffff");
        avanti.style("border", "0vw");
        avanti.style("color", "#1E1E1E");
        avanti.style("font-family", "Akira");
        avanti.style("transform: translate(-50%, -50%) rotate(3deg)");
        avanti.size(windowWidth / 16, windowHeight / 16);
        avanti.position(windowWidth - 150, 100);
        avanti.style("font-size", "1.5vw");
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
      push();
      clear();
      avanti.hide();

      if (
        contents[vidrand[0]].time() >
        contents[vidrand[0]].duration() - 0.01
      ) {
        mode = 1;
      }
      if (
        contents[vidrand[0]].time() + contents[vidrand[1]].time() >
        contents[vidrand[0]].duration() + contents[vidrand[1]].duration() - 0.01
      ) {
        mode = 2;
      }
      if (
        contents[vidrand[0]].time() +
          contents[vidrand[1]].time() +
          contents[vidrand[2]].time() >
        contents[vidrand[0]].duration() +
          contents[vidrand[1]].duration() +
          contents[vidrand[2]].duration() -
          0.01
      ) {
        mode = 3;
      }
      if (
        contents[vidrand[0]].time() +
          contents[vidrand[1]].time() +
          contents[vidrand[2]].time() +
          contents[vidrand[3]].time() >
        contents[vidrand[0]].duration() +
          contents[vidrand[1]].duration() +
          contents[vidrand[2]].duration() +
          contents[vidrand[3]].duration() -
          0.01
      ) {
        mode = 4;
      }
      if (
        contents[vidrand[0]].time() +
          contents[vidrand[1]].time() +
          contents[vidrand[2]].time() +
          contents[vidrand[3]].time() +
          contents[vidrand[4]].time() >
        contents[vidrand[0]].duration() +
          contents[vidrand[1]].duration() +
          contents[vidrand[2]].duration() +
          contents[vidrand[3]].duration() +
          contents[vidrand[4]].duration() -
          0.01
      ) {
        console.log(emotion);
        changer = 4;
      }

      switch (mode) {
        case 0:
          imageMode(CORNER);
          rectMode(CORNER);
          facerec.image(webcam, 0, 0, width, height);

          if (detection.length > 0) {
            let x1 = detection[0].detection._box._x - width / 10;
            let y1 = detection[0].detection._box._y - height / 10;

            let x2 = detection[0].detection._box._width + width / 5;
            let y2 = detection[0].detection._box._height + height / 5;

            if (maxAngry[mode] < detection[0].expressions.angry) {
              maxAngry[mode] = detection[0].expressions.angry;
              faceAngry[mode] = facerec.get(x1, y1, x2, y2);
            }

            if (maxDisgusted[mode] < detection[0].expressions.disgusted) {
              maxDisgusted[mode] = detection[0].expressions.disgusted;
              faceDisgusted[mode] = facerec.get(x1, y1, x2, y2);
            }

            if (maxHappy[mode] < detection[0].expressions.happy) {
              maxHappy[mode] = detection[0].expressions.happy;
              faceHappy[mode] = facerec.get(x1, y1, x2, y2);
            }

            if (maxNeutral[mode] < detection[0].expressions.neutral) {
              maxNeutral[mode] = detection[0].expressions.neutral;
              faceNeutral[mode] = facerec.get(x1, y1, x2, y2);
            }

            if (maxSad[mode] < detection[0].expressions.sad) {
              maxSad[mode] = detection[0].expressions.sad;
              faceSad[mode] = facerec.get(x1, y1, x2, y2);
            }

            if (maxSurprised[mode] < detection[0].expressions.surprised) {
              maxSurprised[mode] = detection[0].expressions.surprised;
              faceSurprised[mode] = facerec.get(x1, y1, x2, y2);
            }

            if (
              maxAngry[mode] > 0.5 ||
              maxDisgusted[mode] > 0.5 ||
              maxSad[mode] > 0.5 ||
              maxSurprised[mode] > 0.5 ||
              maxHappy[mode] > 0.5
            ) {
              if (
                maxAngry[mode] > maxDisgusted[mode] &&
                maxAngry[mode] > maxHappy[mode] &&
                maxAngry[mode] > maxSad[mode] &&
                maxAngry[mode] > maxSurprised[mode]
              ) {
                emotion[mode] = "angry";
                percentage[mode] = maxAngry[mode];
              }

              if (
                maxDisgusted[mode] > maxAngry[mode] &&
                maxDisgusted[mode] > maxHappy[mode] &&
                maxDisgusted[mode] > maxSad[mode] &&
                maxDisgusted[mode] > maxSurprised[mode]
              ) {
                emotion[mode] = "disgusted";
                percentage[mode] = maxDisgusted[mode];
              }

              if (
                maxHappy[mode] > maxAngry[mode] &&
                maxHappy[mode] > maxDisgusted[mode] &&
                maxHappy[mode] > maxSad[mode] &&
                maxHappy[mode] > maxSurprised[mode]
              ) {
                emotion[mode] = "happy";
                percentage[mode] = maxHappy[mode];
              }

              if (
                maxSad[mode] > maxAngry[mode] &&
                maxSad[mode] > maxDisgusted[mode] &&
                maxSad[mode] > maxHappy[mode] &&
                maxSad[mode] > maxSurprised[mode]
              ) {
                emotion[mode] = "sad";
                percentage[mode] = maxSad[mode];
              }

              if (
                maxSurprised[mode] > maxAngry[mode] &&
                maxSurprised[mode] > maxDisgusted[mode] &&
                maxSurprised[mode] > maxHappy[mode] &&
                maxSurprised[mode] > maxSad[mode]
              ) {
                emotion[mode] = "surprised";
                percentage[mode] = maxSurprised[mode];
              }
            } else {
              emotion[mode] = "neutral";
              percentage[mode] = maxNeutral[mode];
            }
          }

          textFont(Graphik);
          fill("white");
          text3 = "You can find something like this...";
          textvolume = "*TURN UP THE VOLUME";
          textAlign(CENTER, CENTER);
          //rectMode(CENTER);
          textSize(40);
          text(text3, windowWidth / 2, windowHeight / 12);
          textFont(Akira);
          textSize(40);
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
            contents[vidrand[1]].pause();
            contents[vidrand[2]].pause();
            contents[vidrand[3]].pause();
            contents[vidrand[4]].pause();
            playing1 = true;
          }
          contents[vidrand[0]].play();
          if (mouseIsPressed == true) {
            for (let i = 0; i < 5; i++) {
              contents[vidrand[i]].volume(1);
            }
          }

          let img1 = contents[vidrand[0]].get();
          image(img1, windowWidth / 2, windowHeight / 2);
          break;

        case 1:
          imageMode(CORNER);
          rectMode(CORNER);
          facerec.image(webcam, 0, 0, width, height);

          if (detection.length > 0) {
            let x1 = detection[0].detection._box._x - width / 10;
            let y1 = detection[0].detection._box._y - height / 10;

            let x2 = detection[0].detection._box._width + width / 5;
            let y2 = detection[0].detection._box._height + height / 5;

            if (maxAngry[mode] < detection[0].expressions.angry) {
              maxAngry[mode] = detection[0].expressions.angry;
              faceAngry[mode] = facerec.get(x1, y1, x2, y2);
            }

            if (maxDisgusted[mode] < detection[0].expressions.disgusted) {
              maxDisgusted[mode] = detection[0].expressions.disgusted;
              faceDisgusted[mode] = facerec.get(x1, y1, x2, y2);
            }

            if (maxHappy[mode] < detection[0].expressions.happy) {
              maxHappy[mode] = detection[0].expressions.happy;
              faceHappy[mode] = facerec.get(x1, y1, x2, y2);
            }

            if (maxNeutral[mode] < detection[0].expressions.neutral) {
              maxNeutral[mode] = detection[0].expressions.neutral;
              faceNeutral[mode] = facerec.get(x1, y1, x2, y2);
            }

            if (maxSad[mode] < detection[0].expressions.sad) {
              maxSad[mode] = detection[0].expressions.sad;
              faceSad[mode] = facerec.get(x1, y1, x2, y2);
            }

            if (maxSurprised[mode] < detection[0].expressions.surprised) {
              maxSurprised[mode] = detection[0].expressions.surprised;
              faceSurprised[mode] = facerec.get(x1, y1, x2, y2);
            }

            if (
              maxAngry[mode] > 0.5 ||
              maxDisgusted[mode] > 0.5 ||
              maxSad[mode] > 0.5 ||
              maxSurprised[mode] > 0.5 ||
              maxHappy[mode] > 0.5
            ) {
              if (
                maxAngry[mode] > maxDisgusted[mode] &&
                maxAngry[mode] > maxHappy[mode] &&
                maxAngry[mode] > maxSad[mode] &&
                maxAngry[mode] > maxSurprised[mode]
              ) {
                emotion[mode] = "angry";
                percentage[mode] = maxAngry[mode];
              }

              if (
                maxDisgusted[mode] > maxAngry[mode] &&
                maxDisgusted[mode] > maxHappy[mode] &&
                maxDisgusted[mode] > maxSad[mode] &&
                maxDisgusted[mode] > maxSurprised[mode]
              ) {
                emotion[mode] = "disgusted";
                percentage[mode] = maxDisgusted[mode];
              }

              if (
                maxHappy[mode] > maxAngry[mode] &&
                maxHappy[mode] > maxDisgusted[mode] &&
                maxHappy[mode] > maxSad[mode] &&
                maxHappy[mode] > maxSurprised[mode]
              ) {
                emotion[mode] = "happy";
                percentage[mode] = maxHappy[mode];
              }

              if (
                maxSad[mode] > maxAngry[mode] &&
                maxSad[mode] > maxDisgusted[mode] &&
                maxSad[mode] > maxHappy[mode] &&
                maxSad[mode] > maxSurprised[mode]
              ) {
                emotion[mode] = "sad";
                percentage[mode] = maxSad[mode];
              }

              if (
                maxSurprised[mode] > maxAngry[mode] &&
                maxSurprised[mode] > maxDisgusted[mode] &&
                maxSurprised[mode] > maxHappy[mode] &&
                maxSurprised[mode] > maxSad[mode]
              ) {
                emotion[mode] = "surprised";
                percentage[mode] = maxSurprised[mode];
              }
            } else {
              emotion[mode] = "neutral";
              percentage[mode] = maxNeutral[mode];
            }
          }

          textFont(Graphik);
          fill("white");
          text3 = "Or like this...";
          textvolume = "*TURN UP THE VOLUME";
          textAlign(CENTER, CENTER);
          //rectMode(CENTER);
          textSize(40);
          text(text3, windowWidth / 2, windowHeight / 12);
          textFont(Akira);
          textSize(40);
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
            contents[vidrand[0]].volume(0);
            contents[vidrand[1]].play();

            playing2 = true;
          }

          let img2 = contents[vidrand[1]].get();
          image(img2, windowWidth / 2, windowHeight / 2);
          break;

        case 2:
          imageMode(CORNER);
          rectMode(CORNER);
          facerec.image(webcam, 0, 0, width, height);

          if (detection.length > 0) {
            let x1 = detection[0].detection._box._x - width / 10;
            let y1 = detection[0].detection._box._y - height / 10;

            let x2 = detection[0].detection._box._width + width / 5;
            let y2 = detection[0].detection._box._height + height / 5;

            if (maxAngry[mode] < detection[0].expressions.angry) {
              maxAngry[mode] = detection[0].expressions.angry;
              faceAngry[mode] = facerec.get(x1, y1, x2, y2);
            }

            if (maxDisgusted[mode] < detection[0].expressions.disgusted) {
              maxDisgusted[mode] = detection[0].expressions.disgusted;
              faceDisgusted[mode] = facerec.get(x1, y1, x2, y2);
            }

            if (maxHappy[mode] < detection[0].expressions.happy) {
              maxHappy[mode] = detection[0].expressions.happy;
              faceHappy[mode] = facerec.get(x1, y1, x2, y2);
            }

            if (maxNeutral[mode] < detection[0].expressions.neutral) {
              maxNeutral[mode] = detection[0].expressions.neutral;
              faceNeutral[mode] = facerec.get(x1, y1, x2, y2);
            }

            if (maxSad[mode] < detection[0].expressions.sad) {
              maxSad[mode] = detection[0].expressions.sad;
              faceSad[mode] = facerec.get(x1, y1, x2, y2);
            }

            if (maxSurprised[mode] < detection[0].expressions.surprised) {
              maxSurprised[mode] = detection[0].expressions.surprised;
              faceSurprised[mode] = facerec.get(x1, y1, x2, y2);
            }

            if (
              maxAngry[mode] > 0.5 ||
              maxDisgusted[mode] > 0.5 ||
              maxSad[mode] > 0.5 ||
              maxSurprised[mode] > 0.5 ||
              maxHappy[mode] > 0.5
            ) {
              if (
                maxAngry[mode] > maxDisgusted[mode] &&
                maxAngry[mode] > maxHappy[mode] &&
                maxAngry[mode] > maxSad[mode] &&
                maxAngry[mode] > maxSurprised[mode]
              ) {
                emotion[mode] = "angry";
                percentage[mode] = maxAngry[mode];
              }

              if (
                maxDisgusted[mode] > maxAngry[mode] &&
                maxDisgusted[mode] > maxHappy[mode] &&
                maxDisgusted[mode] > maxSad[mode] &&
                maxDisgusted[mode] > maxSurprised[mode]
              ) {
                emotion[mode] = "disgusted";
                percentage[mode] = maxDisgusted[mode];
              }

              if (
                maxHappy[mode] > maxAngry[mode] &&
                maxHappy[mode] > maxDisgusted[mode] &&
                maxHappy[mode] > maxSad[mode] &&
                maxHappy[mode] > maxSurprised[mode]
              ) {
                emotion[mode] = "happy";
                percentage[mode] = maxHappy[mode];
              }

              if (
                maxSad[mode] > maxAngry[mode] &&
                maxSad[mode] > maxDisgusted[mode] &&
                maxSad[mode] > maxHappy[mode] &&
                maxSad[mode] > maxSurprised[mode]
              ) {
                emotion[mode] = "sad";
                percentage[mode] = maxSad[mode];
              }

              if (
                maxSurprised[mode] > maxAngry[mode] &&
                maxSurprised[mode] > maxDisgusted[mode] &&
                maxSurprised[mode] > maxHappy[mode] &&
                maxSurprised[mode] > maxSad[mode]
              ) {
                emotion[mode] = "surprised";
                percentage[mode] = maxSurprised[mode];
              }
            } else {
              emotion[mode] = "neutral";
              percentage[mode] = maxSurprised[mode];
            }
          }

          textFont(Graphik);
          fill("white");
          text3 = "Also like this...";
          textvolume = "*TURN UP THE VOLUME";
          textAlign(CENTER, CENTER);
          //rectMode(CENTER);
          textSize(40);
          text(text3, windowWidth / 2, windowHeight / 12);
          textFont(Akira);
          textSize(40);
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
            contents[vidrand[1]].volume(0);
            contents[vidrand[2]].play();
            playing3 = true;
          }

          let img3 = contents[vidrand[2]].get();
          image(img3, windowWidth / 2, windowHeight / 2);
          break;

        case 3:
          imageMode(CORNER);
          rectMode(CORNER);
          facerec.image(webcam, 0, 0, width, height);

          if (detection.length > 0) {
            let x1 = detection[0].detection._box._x - width / 10;
            let y1 = detection[0].detection._box._y - height / 10;

            let x2 = detection[0].detection._box._width + width / 5;
            let y2 = detection[0].detection._box._height + height / 5;

            if (maxAngry[mode] < detection[0].expressions.angry) {
              maxAngry[mode] = detection[0].expressions.angry;
              faceAngry[mode] = facerec.get(x1, y1, x2, y2);
            }

            if (maxDisgusted[mode] < detection[0].expressions.disgusted) {
              maxDisgusted[mode] = detection[0].expressions.disgusted;
              faceDisgusted[mode] = facerec.get(x1, y1, x2, y2);
            }

            if (maxHappy[mode] < detection[0].expressions.happy) {
              maxHappy[mode] = detection[0].expressions.happy;
              faceHappy[mode] = facerec.get(x1, y1, x2, y2);
            }

            if (maxNeutral[mode] < detection[0].expressions.neutral) {
              maxNeutral[mode] = detection[0].expressions.neutral;
              faceNeutral[mode] = facerec.get(x1, y1, x2, y2);
            }

            if (maxSad[mode] < detection[0].expressions.sad) {
              maxSad[mode] = detection[0].expressions.sad;
              faceSad[mode] = facerec.get(x1, y1, x2, y2);
            }

            if (maxSurprised[mode] < detection[0].expressions.surprised) {
              maxSurprised[mode] = detection[0].expressions.surprised;
              faceSurprised[mode] = facerec.get(x1, y1, x2, y2);
            }

            if (
              maxAngry[mode] > 0.5 ||
              maxDisgusted[mode] > 0.5 ||
              maxSad[mode] > 0.5 ||
              maxSurprised[mode] > 0.5 ||
              maxHappy[mode] > 0.5
            ) {
              if (
                maxAngry[mode] > maxDisgusted[mode] &&
                maxAngry[mode] > maxHappy[mode] &&
                maxAngry[mode] > maxSad[mode] &&
                maxAngry[mode] > maxSurprised[mode]
              ) {
                emotion[mode] = "angry";
                percentage[mode] = maxAngry[mode];
              }

              if (
                maxDisgusted[mode] > maxAngry[mode] &&
                maxDisgusted[mode] > maxHappy[mode] &&
                maxDisgusted[mode] > maxSad[mode] &&
                maxDisgusted[mode] > maxSurprised[mode]
              ) {
                emotion[mode] = "disgusted";
                percentage[mode] = maxDisgusted[mode];
              }

              if (
                maxHappy[mode] > maxAngry[mode] &&
                maxHappy[mode] > maxDisgusted[mode] &&
                maxHappy[mode] > maxSad[mode] &&
                maxHappy[mode] > maxSurprised[mode]
              ) {
                emotion[mode] = "happy";
                percentage[mode] = maxHappy[mode];
              }

              if (
                maxSad[mode] > maxAngry[mode] &&
                maxSad[mode] > maxDisgusted[mode] &&
                maxSad[mode] > maxHappy[mode] &&
                maxSad[mode] > maxSurprised[mode]
              ) {
                emotion[mode] = "sad";
                percentage[mode] = maxSad[mode];
              }

              if (
                maxSurprised[mode] > maxAngry[mode] &&
                maxSurprised[mode] > maxDisgusted[mode] &&
                maxSurprised[mode] > maxHappy[mode] &&
                maxSurprised[mode] > maxSad[mode]
              ) {
                emotion[mode] = "surprised";
                percentage[mode] = maxSurprised[mode];
              }
            } else {
              emotion[mode] = "neutral";
              percentage[mode] = maxNeutral[mode];
            }
          }

          textFont(Graphik);
          fill("white");
          text3 = "Or even like this...";
          textvolume = "*TURN UP THE VOLUME";
          textAlign(CENTER, CENTER);
          //rectMode(CENTER);
          textSize(40);
          text(text3, windowWidth / 2, windowHeight / 12);
          textFont(Akira);
          textSize(40);
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
            contents[vidrand[2]].volume(0);
            contents[vidrand[3]].play();
            playing4 = true;
          }

          let img4 = contents[vidrand[3]].get();
          image(img4, windowWidth / 2, windowHeight / 2);
          break;

        case 4:
          imageMode(CORNER);
          rectMode(CORNER);
          facerec.image(webcam, 0, 0, width, height);

          if (detection.length > 0) {
            let x1 = detection[0].detection._box._x - width / 10;
            let y1 = detection[0].detection._box._y - height / 10;

            let x2 = detection[0].detection._box._width + width / 5;
            let y2 = detection[0].detection._box._height + height / 5;

            if (maxAngry[mode] < detection[0].expressions.angry) {
              maxAngry[mode] = detection[0].expressions.angry;
              faceAngry[mode] = facerec.get(x1, y1, x2, y2);
            }

            if (maxDisgusted[mode] < detection[0].expressions.disgusted) {
              maxDisgusted[mode] = detection[0].expressions.disgusted;
              faceDisgusted[mode] = facerec.get(x1, y1, x2, y2);
            }

            if (maxHappy[mode] < detection[0].expressions.happy) {
              maxHappy[mode] = detection[0].expressions.happy;
              faceHappy[mode] = facerec.get(x1, y1, x2, y2);
            }

            if (maxNeutral[mode] < detection[0].expressions.neutral) {
              maxNeutral[mode] = detection[0].expressions.neutral;
              faceNeutral[mode] = facerec.get(x1, y1, x2, y2);
            }

            if (maxSad[mode] < detection[0].expressions.sad) {
              maxSad[mode] = detection[0].expressions.sad;
              faceSad[mode] = facerec.get(x1, y1, x2, y2);
            }

            if (maxSurprised[mode] < detection[0].expressions.surprised) {
              maxSurprised[mode] = detection[0].expressions.surprised;
              faceSurprised[mode] = facerec.get(x1, y1, x2, y2);
            }

            if (
              maxAngry[mode] > 0.5 ||
              maxDisgusted[mode] > 0.5 ||
              maxSad[mode] > 0.5 ||
              maxSurprised[mode] > 0.5 ||
              maxHappy[mode] > 0.5
            ) {
              if (
                maxAngry[mode] > maxDisgusted[mode] &&
                maxAngry[mode] > maxHappy[mode] &&
                maxAngry[mode] > maxSad[mode] &&
                maxAngry[mode] > maxSurprised[mode]
              ) {
                emotion[mode] = "angry";
                percentage[mode] = maxAngry[mode];
              }

              if (
                maxDisgusted[mode] > maxAngry[mode] &&
                maxDisgusted[mode] > maxHappy[mode] &&
                maxDisgusted[mode] > maxSad[mode] &&
                maxDisgusted[mode] > maxSurprised[mode]
              ) {
                emotion[mode] = "disgusted";
                percentage[mode] = maxDisgusted[mode];
              }

              if (
                maxHappy[mode] > maxAngry[mode] &&
                maxHappy[mode] > maxDisgusted[mode] &&
                maxHappy[mode] > maxSad[mode] &&
                maxHappy[mode] > maxSurprised[mode]
              ) {
                emotion[mode] = "happy";
                percentage[mode] = maxHappy[mode];
              }

              if (
                maxSad[mode] > maxAngry[mode] &&
                maxSad[mode] > maxDisgusted[mode] &&
                maxSad[mode] > maxHappy[mode] &&
                maxSad[mode] > maxSurprised[mode]
              ) {
                emotion[mode] = "sad";
                percentage[mode] = maxSad[mode];
              }

              if (
                maxSurprised[mode] > maxAngry[mode] &&
                maxSurprised[mode] > maxDisgusted[mode] &&
                maxSurprised[mode] > maxHappy[mode] &&
                maxSurprised[mode] > maxSad[mode]
              ) {
                emotion[mode] = "surprised";
                percentage[mode] = maxSurprised[mode];
              }
            } else {
              emotion[mode] = "neutral";
              percentage[mode] = maxNeutral[mode];
            }
          }

          textFont(Graphik);
          fill("white");
          text3 = "Or maybe like this last one...";
          textvolume = "*TURN UP THE VOLUME";
          textAlign(CENTER, CENTER);
          //rectMode(CENTER);
          textSize(40);
          text(text3, windowWidth / 2, windowHeight / 12);
          textFont(Akira);
          textSize(40);
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
            contents[vidrand[3]].volume(0);
            contents[vidrand[4]].play();
            playing5 = true;
          }

          let img5 = contents[vidrand[4]].get();
          image(img5, windowWidth / 2, windowHeight / 2);
          break;
        default:
      }

      totaltime =
        contents[vidrand[0]].duration() +
        contents[vidrand[1]].duration() +
        contents[vidrand[2]].duration() +
        contents[vidrand[3]].duration() +
        contents[vidrand[4]].duration();

      let currenttime =
        contents[vidrand[0]].time() +
        contents[vidrand[1]].time() +
        contents[vidrand[2]].time() +
        contents[vidrand[3]].time() +
        contents[vidrand[4]].time();

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
      pop();
      recth = 80;
      break;

    case 4:
      imageMode(CENTER);
      textAlign(LEFT);
      rectMode(CENTER);
      clear();
      logo.style("left: 50%; top: 10%; height: 7vh");
      avanti.show();
      avanti.mousePressed(changeTo5);

      if (second() % 3 == 0) {
        if (flip == false) {
          recth -= flipvec;
          if (recth < flipvec) {
            flip = true;
          }
        } else {
          if (recth < 80) {
            recth += flipvec;
          }
        }
      } else {
        if (flip == true) {
          recth -= flipvec;
          if (recth < flipvec) {
            flip = false;
          }
        } else {
          if (recth < 80) {
            recth += flipvec;
          }
        }
      }

      push();
      translate(width / 2, height / 4.5);
      rotate(3);
      if (flip == true) {
        image(esonu, 0, 0, 500, recth);
      } else {
        image(isonu, 0, 0, 500, recth);
      }
      pop();
      rectMode(CORNER);
      imageMode(CORNER);
      //testi //////////////////////////////////////////////////////////////////////////////
      let txt =
        "Have you ever thought that while watching this content you produce a lot of";
      push();
      fill(255);
      translate(width / 7, height - height / 2);
      textFont(Graphik);
      textSize(40);
      text(txt, 0, 0, 950, 300);
      pop();

      let txt1 = "unconscious reactions";
      push();
      fill(255);
      translate(width / 7, height - height / 2.5);
      textFont(Akira);
      textSize(60);
      text(txt1, 0, 0);
      pop();

      let txt2 =
        "Maybe you and your friends can’t, but technology is able to understand you literally every second. I showed you different contents to see how you would have reacted to them, as an unknown person you just met who tries to start a conversation using different topics. I am always present as your reactions are, let me show you...";
      push();
      fill(255);
      translate(width / 7, height - height / 3);
      textFont(Graphik);
      textSize(40);
      text(txt2, 0, 0, width - width / 4, height);
      pop();

      push();
      translate(width - width / 3.2, height - height / 2.15);
      rotate(30);
      fill("#1E1E1E");
      stroke(255);
      strokeWeight(5);
      textFont(Akira);
      textSize(width / 11);
      text("?", 0, 0);
      pop();
      /////////////////////////////////////////////////////////////////////////////

      //immagini e forme  /////////////////////////////////////////////////////////
      imageMode(CENTER);
      angleMode(DEGREES);

      //// rotating happiness shape
      push();
      translate(width, height - height / 1);
      rotate(angolo);
      angolo++;
      image(
        shapeK,
        0,
        0,
        (windowWidth / shapeK.width) * 300,
        (windowWidth / shapeK.width) * 300
      );
      pop();

      //// rotating sad shape
      push();
      translate(width - width / 1.2, height - height / 1.3);
      rotate(angolo2);
      angolo2++;
      image(
        shapeY,
        0,
        0,
        (windowWidth / shapeY.width) * 170,
        (windowWidth / shapeY.width) * 170
      );
      pop();

      ///// rotating eye
      push();
      translate(width - width / 1.13, height - height / 1.3);
      rotate(angolo3);
      if (forward == true) {
        angolo3++;
        if (angolo3 > 50) {
          forward = false;
        }
      } else {
        angolo3--;
        if (angolo3 < -30) {
          forward = true;
        }
      }
      image(
        eye,
        0,
        0,
        (windowWidth / eye.width) * 150,
        (windowWidth / eye.width) * 75
      );
      pop();

      //// rotating pupil
      push();
      translate(width - width / 6.5, height - height / 2);
      rotate(angolo4);
      angolo4++;
      image(
        pupil,
        0,
        0,
        (windowWidth / pupil.width) * 30,
        (windowWidth / pupil.width) * 30
      );
      pop();
      content = 0;
      artpage = 0;
      tempo = second();
      break;

    case 5:
      clear();
      avanti.hide();
      imageMode(CENTER);
      textAlign(CENTER, CENTER);
      fill("white");

      logo.style("left: 4%; top: 8%; height: 7vh");

      push();
      switch (content) {
        case 0:
          switch (artpage) {
            case 0:
              facerec.image(webcam, 0, 0, width, height);

              if (detection.length > 0) {
                console.log(emotion);
                let x1 = detection[0].detection._box._x - width / 10;
                let y1 = detection[0].detection._box._y - height / 10;

                let x2 = detection[0].detection._box._width + width / 5;
                let y2 = detection[0].detection._box._height + height / 5;

                if (maxAngry[5] < detection[0].expressions.angry) {
                  maxAngry[5] = detection[0].expressions.angry;
                  faceAngry[5] = facerec.get(x1, y1, x2, y2);
                }

                if (maxDisgusted[5] < detection[0].expressions.disgusted) {
                  maxDisgusted[5] = detection[0].expressions.disgusted;
                  faceDisgusted[5] = facerec.get(x1, y1, x2, y2);
                }

                if (maxHappy[5] < detection[0].expressions.happy) {
                  maxHappy[5] = detection[0].expressions.happy;
                  faceHappy[5] = facerec.get(x1, y1, x2, y2);
                }

                if (maxNeutral[5] < detection[0].expressions.neutral) {
                  maxNeutral[5] = detection[0].expressions.neutral;
                  faceNeutral[5] = facerec.get(x1, y1, x2, y2);
                }

                if (maxSad[5] < detection[0].expressions.sad) {
                  maxSad[5] = detection[0].expressions.sad;
                  faceSad[5] = facerec.get(x1, y1, x2, y2);
                }

                if (maxSurprised[5] < detection[0].expressions.surprised) {
                  maxSurprised[5] = detection[0].expressions.surprised;
                  faceSurprised[5] = facerec.get(x1, y1, x2, y2);
                }

                if (
                  maxAngry[5] > 0.5 ||
                  maxDisgusted[5] > 0.5 ||
                  maxSad[5] > 0.5 ||
                  maxSurprised[5] > 0.5 ||
                  maxHappy[5] > 0.5
                ) {
                  if (
                    maxAngry[5] > maxDisgusted[5] &&
                    maxAngry[5] > maxHappy[5] &&
                    maxAngry[5] > maxSad[5] &&
                    maxAngry[5] > maxSurprised[5]
                  ) {
                    emotion[5] = "angry";
                    percentage[5] = maxAngry[5];
                  }

                  if (
                    maxDisgusted[5] > maxAngry[5] &&
                    maxDisgusted[5] > maxHappy[5] &&
                    maxDisgusted[5] > maxSad[5] &&
                    maxDisgusted[5] > maxSurprised[5]
                  ) {
                    emotion[5] = "disgusted";
                    percentage[5] = maxDisgusted[5];
                  }

                  if (
                    maxHappy[5] > maxAngry[5] &&
                    maxHappy[5] > maxDisgusted[5] &&
                    maxHappy[5] > maxSad[5] &&
                    maxHappy[5] > maxSurprised[5]
                  ) {
                    emotion[5] = "happy";
                    percentage[5] = maxHappy[5];
                  }

                  if (
                    maxSad[5] > maxAngry[5] &&
                    maxSad[5] > maxDisgusted[5] &&
                    maxSad[5] > maxHappy[5] &&
                    maxSad[5] > maxSurprised[5]
                  ) {
                    emotion[5] = "sad";
                    percentage[5] = maxSad[5];
                  }

                  if (
                    maxSurprised[5] > maxAngry[5] &&
                    maxSurprised[5] > maxDisgusted[5] &&
                    maxSurprised[5] > maxHappy[5] &&
                    maxSurprised[5] > maxSad[5]
                  ) {
                    emotion[5] = "surprised";
                    percentage[5] = maxSurprised[5];
                  }
                } else {
                  emotion[5] = "neutral";
                  percentage[5] = maxNeutral[5];
                }
              }
              if (tempo >= 56) {
                if (second() == 4) {
                  artpage++;
                  tempo = second();
                }
              } else {
                if (second() == tempo + 4) {
                  artpage++;
                  tempo = second();
                }
              }

              if (emotion[content] == "angry") {
                image(
                  angerShape,
                  width / 2,
                  height / 2,
                  height / 1.1,
                  height / 1.1
                );
              } else if (emotion[content] == "disgusted") {
                image(
                  disgustShape,
                  width / 2,
                  height / 2,
                  height / 1.4,
                  height / 1.4
                );
              } else if (emotion[content] == "happy") {
                image(
                  happyShape,
                  width / 2,
                  height / 2,
                  height / 1.2,
                  height / 1.2
                );
              } else if (emotion[content] == "sad") {
                image(
                  sadShape,
                  width / 2,
                  height / 2,
                  height / 1.2,
                  height / 1.2
                );
              } else if (emotion[content] == "surprised") {
                image(
                  surpriseShape,
                  width / 2,
                  height / 2,
                  height / 1.1,
                  height / 1.1
                );
              } else if (emotion[content] == "neutral") {
                image(
                  neutralShape,
                  width / 2,
                  height / 2,
                  height / 1.1,
                  height / 1.1
                );
              }
              image(
                contentimages[vidrand[content]],
                width / 2 - height / 2,
                height / 1.4,
                450,
                450
              );

              textFont(Akira);
              textSize(100);
              text(
                data[vidrand[content]].titolo,
                width / 2 - height / 1.1 / 2,
                height / 2 - height / 1.1 / 2,
                height / 1.1,
                height / 1.1
              );

              textFont(Graphik);
              textSize(40);
              text(
                "in fact, while you were watching...",
                width / 2,
                height / 12
              );

              break;

            case 1:
              if (tempo >= 56) {
                if (second() == 4) {
                  artpage++;
                  tempo = second();
                }
              } else {
                if (second() == tempo + 4) {
                  artpage++;
                  tempo = second();
                }
              }

              if (emotion[content] == "angry") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[1], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  angerShape,
                  width / 2,
                  height / 2,
                  height / 1.1,
                  height / 1.1
                );
              } else if (emotion[content] == "disgusted") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[3], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  disgustShape,
                  width / 2,
                  height / 2,
                  height / 1.4,
                  height / 1.4
                );
              } else if (emotion[content] == "happy") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[0], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  happyShape,
                  width / 2,
                  height / 2,
                  height / 1.2,
                  height / 1.2
                );
              } else if (emotion[content] == "sad") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[4], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  sadShape,
                  width / 2,
                  height / 2,
                  height / 1.2,
                  height / 1.2
                );
              } else if (emotion[content] == "surprised") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[5], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  surpriseShape,
                  width / 2,
                  height / 2,
                  height / 1.1,
                  height / 1.1
                );
              } else if (emotion[content] == "neutral") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[2], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  neutralShape,
                  width / 2,
                  height / 2,
                  height / 1.1,
                  height / 1.1
                );
              }

              textFont(Akira);
              textSize(200);
              text(
                emotion[content],
                width / 2 - height / 1.1 / 2,
                height / 2 - height / 1.1 / 2,
                height / 1.1,
                height / 1.1
              );

              textFont(Graphik);
              textSize(40);
              text(
                "I'm " +
                  round(100 * percentage[content]) +
                  "% sure that you were...",
                width / 2,
                height / 12
              );
              break;

            case 2:
              if (tempo >= 54) {
                if (second() == 6) {
                  artpage++;
                  tempo = second();
                }
              } else {
                if (second() == tempo + 6) {
                  artpage++;
                  tempo = second();
                }
              }
              textFont(Akira);
              textSize(100);
              if (emotion[content] == "angry") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[1], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  angerShape,
                  width / 2,
                  height / 2,
                  height / 1.1,
                  height / 1.1
                );

                text(
                  data[vidrand[content]].anger,
                  width / 2 - height / 1.1 / 2,
                  height / 2 - height / 1.1 / 2,
                  height / 1.1,
                  height / 1.1
                );
              } else if (emotion[content] == "disgusted") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[3], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  disgustShape,
                  width / 2,
                  height / 2,
                  height / 1.4,
                  height / 1.4
                );

                text(
                  data[vidrand[content]].disgust,
                  width / 2 - height / 1.1 / 2,
                  height / 2 - height / 1.1 / 2,
                  height / 1.1,
                  height / 1.1
                );
              } else if (emotion[content] == "happy") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[0], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  happyShape,
                  width / 2,
                  height / 2,
                  height / 1.2,
                  height / 1.2
                );

                text(
                  data[vidrand[content]].happiness,
                  width / 2 - height / 1.1 / 2,
                  height / 2 - height / 1.1 / 2,
                  height / 1.1,
                  height / 1.1
                );
              } else if (emotion[content] == "sad") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[4], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  sadShape,
                  width / 2,
                  height / 2,
                  height / 1.2,
                  height / 1.2
                );

                text(
                  data[vidrand[content]].sadness,
                  width / 2 - height / 1.1 / 2,
                  height / 2 - height / 1.1 / 2,
                  height / 1.1,
                  height / 1.1
                );
              } else if (emotion[content] == "surprised") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[5], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  surpriseShape,
                  width / 2,
                  height / 2,
                  height / 1.1,
                  height / 1.1
                );

                text(
                  data[vidrand[content]].surprise,
                  width / 2 - height / 1.1 / 2,
                  height / 2 - height / 1.1 / 2,
                  height / 1.1,
                  height / 1.1
                );
              } else if (emotion[content] == "neutral") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[2], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  neutralShape,
                  width / 2,
                  height / 2,
                  height / 1.1,
                  height / 1.1
                );

                text(
                  data[vidrand[content]].neutral,
                  width / 2 - height / 1.1 / 2,
                  height / 2 - height / 1.1 / 2,
                  height / 1.1,
                  height / 1.1
                );
              }

              textSize(40);
              text(
                data[vidrand[content]].titolo +
                  ": " +
                  round(100 * percentage[content]) +
                  "% " +
                  emotion[content],
                width / 2,
                height / 12
              );
              break;

            case 3:
              if (tempo >= 56) {
                if (second() == 4) {
                  content++;
                  artpage = 0;
                  tempo = second();
                }
              } else {
                if (second() == tempo + 4) {
                  content++;
                  artpage = 0;
                  tempo = second();
                }
              }

              textFont(Akira);
              textSize(100);
              if (emotion[content] == "angry") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[1], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  angerShape,
                  width / 2,
                  height / 2,
                  height / 1.1,
                  height / 1.1
                );

                text(
                  data[vidrand[content]].anger,
                  width / 2 - height / 1.1 / 2,
                  height / 2 - height / 1.1 / 2,
                  height / 1.1,
                  height / 1.1
                );

                push();
                tint(224, 60, 43);
                image(
                  faceAngry[content],
                  width / 2,
                  height / 2,
                  height / 2.5,
                  height / 2.5
                );
                pop();
              } else if (emotion[content] == "disgusted") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[3], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  disgustShape,
                  width / 2,
                  height / 2,
                  height / 1.4,
                  height / 1.4
                );

                text(
                  data[vidrand[content]].disgust,
                  width / 2 - height / 1.1 / 2,
                  height / 2 - height / 1.1 / 2,
                  height / 1.1,
                  height / 1.1
                );
                push();
                tint(160, 206, 17);
                image(
                  faceDisgusted[content],
                  width / 2,
                  height / 2,
                  height / 2.5,
                  height / 2.5
                );
                pop();
              } else if (emotion[content] == "happy") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[0], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  happyShape,
                  width / 2,
                  height / 2,
                  height / 1.2,
                  height / 1.2
                );

                text(
                  data[vidrand[content]].happiness,
                  width / 2 - height / 1.1 / 2,
                  height / 2 - height / 1.1 / 2,
                  height / 1.1,
                  height / 1.1
                );

                push();
                tint(245, 210, 51);
                image(
                  faceHappy[content],
                  width / 2,
                  height / 2,
                  height / 2.5,
                  height / 2.5
                );
                pop();
              } else if (emotion[content] == "sad") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[4], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  sadShape,
                  width / 2,
                  height / 2,
                  height / 1.2,
                  height / 1.2
                );

                text(
                  data[vidrand[content]].sadness,
                  width / 2 - height / 1.1 / 2,
                  height / 2 - height / 1.1 / 2,
                  height / 1.1,
                  height / 1.1
                );

                push();
                tint(96, 88, 237);
                image(
                  faceSad[content],
                  width / 2,
                  height / 2,
                  height / 2.5,
                  height / 2.5
                );
                pop();
              } else if (emotion[content] == "surprised") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[5], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  surpriseShape,
                  width / 2,
                  height / 2,
                  height / 1.1,
                  height / 1.1
                );

                text(
                  data[vidrand[content]].surprise,
                  width / 2 - height / 1.1 / 2,
                  height / 2 - height / 1.1 / 2,
                  height / 1.1,
                  height / 1.1
                );

                push();
                tint(176, 84, 223);
                image(
                  faceSurprised[content],
                  width / 2,
                  height / 2,
                  height / 2.5,
                  height / 2.5
                );
                pop();
              } else if (emotion[content] == "neutral") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[2], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  neutralShape,
                  width / 2,
                  height / 2,
                  height / 1.1,
                  height / 1.1
                );

                text(
                  data[vidrand[content]].neutral,
                  width / 2 - height / 1.1 / 2,
                  height / 2 - height / 1.1 / 2,
                  height / 1.1,
                  height / 1.1
                );

                push();
                tint(114);
                image(
                  faceNeutral[content],
                  width / 2,
                  height / 2,
                  height / 2.5,
                  height / 2.5
                );
                pop();
              }

              textSize(40);
              text(
                data[vidrand[content]].titolo +
                  ": " +
                  round(100 * percentage[content]) +
                  "% " +
                  emotion[content],
                width / 2,
                height / 12
              );
              break;
          }
          break;
        case 1:
          switch (artpage) {
            case 0:
              if (tempo >= 56) {
                if (second() == 4) {
                  artpage++;
                  tempo = second();
                }
              } else {
                if (second() == tempo + 4) {
                  artpage++;
                  tempo = second();
                }
              }

              if (emotion[content] == "angry") {
                image(
                  angerShape,
                  width / 2,
                  height / 2,
                  height / 1.1,
                  height / 1.1
                );
              } else if (emotion[content] == "disgusted") {
                image(
                  disgustShape,
                  width / 2,
                  height / 2,
                  height / 1.4,
                  height / 1.4
                );
              } else if (emotion[content] == "happy") {
                image(
                  happyShape,
                  width / 2,
                  height / 2,
                  height / 1.2,
                  height / 1.2
                );
              } else if (emotion[content] == "sad") {
                image(
                  sadShape,
                  width / 2,
                  height / 2,
                  height / 1.2,
                  height / 1.2
                );
              } else if (emotion[content] == "surprised") {
                image(
                  surpriseShape,
                  width / 2,
                  height / 2,
                  height / 1.1,
                  height / 1.1
                );
              } else if (emotion[content] == "neutral") {
                image(
                  neutralShape,
                  width / 2,
                  height / 2,
                  height / 1.1,
                  height / 1.1
                );
              }
              image(
                contentimages[vidrand[content]],
                width / 2 - height / 2,
                height / 1.4,
                450,
                450
              );

              textFont(Akira);
              textSize(100);
              text(
                data[vidrand[content]].titolo,
                width / 2 - height / 1.1 / 2,
                height / 2 - height / 1.1 / 2,
                height / 1.1,
                height / 1.1
              );

              textFont(Graphik);
              textSize(40);
              text(
                "in fact, while you were watching...",
                width / 2,
                height / 12
              );

              break;

            case 1:
              if (tempo >= 56) {
                if (second() == 4) {
                  artpage++;
                  tempo = second();
                }
              } else {
                if (second() == tempo + 4) {
                  artpage++;
                  tempo = second();
                }
              }

              if (emotion[content] == "angry") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[1], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  angerShape,
                  width / 2,
                  height / 2,
                  height / 1.1,
                  height / 1.1
                );
              } else if (emotion[content] == "disgusted") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[3], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  disgustShape,
                  width / 2,
                  height / 2,
                  height / 1.4,
                  height / 1.4
                );
              } else if (emotion[content] == "happy") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[0], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  happyShape,
                  width / 2,
                  height / 2,
                  height / 1.2,
                  height / 1.2
                );
              } else if (emotion[content] == "sad") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[4], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  sadShape,
                  width / 2,
                  height / 2,
                  height / 1.2,
                  height / 1.2
                );
              } else if (emotion[content] == "surprised") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[5], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  surpriseShape,
                  width / 2,
                  height / 2,
                  height / 1.1,
                  height / 1.1
                );
              } else if (emotion[content] == "neutral") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[2], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  neutralShape,
                  width / 2,
                  height / 2,
                  height / 1.1,
                  height / 1.1
                );
              }

              textFont(Akira);
              textSize(200);
              text(
                emotion[content],
                width / 2 - height / 1.1 / 2,
                height / 2 - height / 1.1 / 2,
                height / 1.1,
                height / 1.1
              );

              textFont(Graphik);
              textSize(40);
              text(
                "I'm " +
                  round(100 * percentage[content]) +
                  "% sure that you were...",
                width / 2,
                height / 12
              );
              break;

            case 2:
              if (tempo >= 54) {
                if (second() == 6) {
                  artpage++;
                  tempo = second();
                }
              } else {
                if (second() == tempo + 6) {
                  artpage++;
                  tempo = second();
                }
              }
              textFont(Akira);
              textSize(100);
              if (emotion[content] == "angry") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[1], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  angerShape,
                  width / 2,
                  height / 2,
                  height / 1.1,
                  height / 1.1
                );

                text(
                  data[vidrand[content]].anger,
                  width / 2 - height / 1.1 / 2,
                  height / 2 - height / 1.1 / 2,
                  height / 1.1,
                  height / 1.1
                );
              } else if (emotion[content] == "disgusted") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[3], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  disgustShape,
                  width / 2,
                  height / 2,
                  height / 1.4,
                  height / 1.4
                );

                text(
                  data[vidrand[content]].disgust,
                  width / 2 - height / 1.1 / 2,
                  height / 2 - height / 1.1 / 2,
                  height / 1.1,
                  height / 1.1
                );
              } else if (emotion[content] == "happy") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[0], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  happyShape,
                  width / 2,
                  height / 2,
                  height / 1.2,
                  height / 1.2
                );

                text(
                  data[vidrand[content]].happiness,
                  width / 2 - height / 1.1 / 2,
                  height / 2 - height / 1.1 / 2,
                  height / 1.1,
                  height / 1.1
                );
              } else if (emotion[content] == "sad") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[4], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  sadShape,
                  width / 2,
                  height / 2,
                  height / 1.2,
                  height / 1.2
                );

                text(
                  data[vidrand[content]].sadness,
                  width / 2 - height / 1.1 / 2,
                  height / 2 - height / 1.1 / 2,
                  height / 1.1,
                  height / 1.1
                );
              } else if (emotion[content] == "surprised") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[5], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  surpriseShape,
                  width / 2,
                  height / 2,
                  height / 1.1,
                  height / 1.1
                );

                text(
                  data[vidrand[content]].surprise,
                  width / 2 - height / 1.1 / 2,
                  height / 2 - height / 1.1 / 2,
                  height / 1.1,
                  height / 1.1
                );
              } else if (emotion[content] == "neutral") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[2], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  neutralShape,
                  width / 2,
                  height / 2,
                  height / 1.1,
                  height / 1.1
                );

                text(
                  data[vidrand[content]].neutral,
                  width / 2 - height / 1.1 / 2,
                  height / 2 - height / 1.1 / 2,
                  height / 1.1,
                  height / 1.1
                );
              }

              textSize(40);
              text(
                data[vidrand[content]].titolo +
                  ": " +
                  round(100 * percentage[content]) +
                  "% " +
                  emotion[content],
                width / 2,
                height / 12
              );
              break;

            case 3:
              if (tempo >= 56) {
                if (second() == 4) {
                  content++;
                  artpage = 0;
                  tempo = second();
                }
              } else {
                if (second() == tempo + 4) {
                  content++;
                  artpage = 0;
                  tempo = second();
                }
              }

              textFont(Akira);
              textSize(100);
              if (emotion[content] == "angry") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[1], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  angerShape,
                  width / 2,
                  height / 2,
                  height / 1.1,
                  height / 1.1
                );

                text(
                  data[vidrand[content]].anger,
                  width / 2 - height / 1.1 / 2,
                  height / 2 - height / 1.1 / 2,
                  height / 1.1,
                  height / 1.1
                );

                push();
                tint(224, 60, 43);
                image(
                  faceAngry[content],
                  width / 2,
                  height / 2,
                  height / 2.5,
                  height / 2.5
                );
                pop();
              } else if (emotion[content] == "disgusted") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[3], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  disgustShape,
                  width / 2,
                  height / 2,
                  height / 1.4,
                  height / 1.4
                );

                text(
                  data[vidrand[content]].disgust,
                  width / 2 - height / 1.1 / 2,
                  height / 2 - height / 1.1 / 2,
                  height / 1.1,
                  height / 1.1
                );
                push();
                tint(160, 206, 17);
                image(
                  faceDisgusted[content],
                  width / 2,
                  height / 2,
                  height / 2.5,
                  height / 2.5
                );
                pop();
              } else if (emotion[content] == "happy") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[0], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  happyShape,
                  width / 2,
                  height / 2,
                  height / 1.2,
                  height / 1.2
                );

                text(
                  data[vidrand[content]].happiness,
                  width / 2 - height / 1.1 / 2,
                  height / 2 - height / 1.1 / 2,
                  height / 1.1,
                  height / 1.1
                );

                push();
                tint(245, 210, 51);
                image(
                  faceHappy[content],
                  width / 2,
                  height / 2,
                  height / 2.5,
                  height / 2.5
                );
                pop();
              } else if (emotion[content] == "sad") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[4], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  sadShape,
                  width / 2,
                  height / 2,
                  height / 1.2,
                  height / 1.2
                );

                text(
                  data[vidrand[content]].sadness,
                  width / 2 - height / 1.1 / 2,
                  height / 2 - height / 1.1 / 2,
                  height / 1.1,
                  height / 1.1
                );

                push();
                tint(96, 88, 237);
                image(
                  faceSad[content],
                  width / 2,
                  height / 2,
                  height / 2.5,
                  height / 2.5
                );
                pop();
              } else if (emotion[content] == "surprised") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[5], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  surpriseShape,
                  width / 2,
                  height / 2,
                  height / 1.1,
                  height / 1.1
                );

                text(
                  data[vidrand[content]].surprise,
                  width / 2 - height / 1.1 / 2,
                  height / 2 - height / 1.1 / 2,
                  height / 1.1,
                  height / 1.1
                );

                push();
                tint(176, 84, 223);
                image(
                  faceSurprised[content],
                  width / 2,
                  height / 2,
                  height / 2.5,
                  height / 2.5
                );
                pop();
              } else if (emotion[content] == "neutral") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[2], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  neutralShape,
                  width / 2,
                  height / 2,
                  height / 1.1,
                  height / 1.1
                );

                text(
                  data[vidrand[content]].neutral,
                  width / 2 - height / 1.1 / 2,
                  height / 2 - height / 1.1 / 2,
                  height / 1.1,
                  height / 1.1
                );

                push();
                tint(114);
                image(
                  faceNeutral[content],
                  width / 2,
                  height / 2,
                  height / 2.5,
                  height / 2.5
                );
                pop();
              }

              textSize(40);
              text(
                data[vidrand[content]].titolo +
                  ": " +
                  round(100 * percentage[content]) +
                  "% " +
                  emotion[content],
                width / 2,
                height / 12
              );
              break;
          }
          break;
        case 2:
          switch (artpage) {
            case 0:
              if (tempo >= 56) {
                if (second() == 4) {
                  artpage++;
                  tempo = second();
                }
              } else {
                if (second() == tempo + 4) {
                  artpage++;
                  tempo = second();
                }
              }

              if (emotion[content] == "angry") {
                image(
                  angerShape,
                  width / 2,
                  height / 2,
                  height / 1.1,
                  height / 1.1
                );
              } else if (emotion[content] == "disgusted") {
                image(
                  disgustShape,
                  width / 2,
                  height / 2,
                  height / 1.4,
                  height / 1.4
                );
              } else if (emotion[content] == "happy") {
                image(
                  happyShape,
                  width / 2,
                  height / 2,
                  height / 1.2,
                  height / 1.2
                );
              } else if (emotion[content] == "sad") {
                image(
                  sadShape,
                  width / 2,
                  height / 2,
                  height / 1.2,
                  height / 1.2
                );
              } else if (emotion[content] == "surprised") {
                image(
                  surpriseShape,
                  width / 2,
                  height / 2,
                  height / 1.1,
                  height / 1.1
                );
              } else if (emotion[content] == "neutral") {
                image(
                  neutralShape,
                  width / 2,
                  height / 2,
                  height / 1.1,
                  height / 1.1
                );
              }
              image(
                contentimages[vidrand[content]],
                width / 2 - height / 2,
                height / 1.4,
                450,
                450
              );

              textFont(Akira);
              textSize(100);
              text(
                data[vidrand[content]].titolo,
                width / 2 - height / 1.1 / 2,
                height / 2 - height / 1.1 / 2,
                height / 1.1,
                height / 1.1
              );

              textFont(Graphik);
              textSize(40);
              text(
                "in fact, while you were watching...",
                width / 2,
                height / 12
              );

              break;

            case 1:
              if (tempo >= 56) {
                if (second() == 4) {
                  artpage++;
                  tempo = second();
                }
              } else {
                if (second() == tempo + 4) {
                  artpage++;
                  tempo = second();
                }
              }

              if (emotion[content] == "angry") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[1], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  angerShape,
                  width / 2,
                  height / 2,
                  height / 1.1,
                  height / 1.1
                );
              } else if (emotion[content] == "disgusted") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[3], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  disgustShape,
                  width / 2,
                  height / 2,
                  height / 1.4,
                  height / 1.4
                );
              } else if (emotion[content] == "happy") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[0], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  happyShape,
                  width / 2,
                  height / 2,
                  height / 1.2,
                  height / 1.2
                );
              } else if (emotion[content] == "sad") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[4], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  sadShape,
                  width / 2,
                  height / 2,
                  height / 1.2,
                  height / 1.2
                );
              } else if (emotion[content] == "surprised") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[5], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  surpriseShape,
                  width / 2,
                  height / 2,
                  height / 1.1,
                  height / 1.1
                );
              } else if (emotion[content] == "neutral") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[2], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  neutralShape,
                  width / 2,
                  height / 2,
                  height / 1.1,
                  height / 1.1
                );
              }

              textFont(Akira);
              textSize(200);
              text(
                emotion[content],
                width / 2 - height / 1.1 / 2,
                height / 2 - height / 1.1 / 2,
                height / 1.1,
                height / 1.1
              );

              textFont(Graphik);
              textSize(40);
              text(
                "I'm " +
                  round(100 * percentage[content]) +
                  "% sure that you were...",
                width / 2,
                height / 12
              );
              break;

            case 2:
              if (tempo >= 54) {
                if (second() == 6) {
                  artpage++;
                  tempo = second();
                }
              } else {
                if (second() == tempo + 6) {
                  artpage++;
                  tempo = second();
                }
              }
              textFont(Akira);
              textSize(100);
              if (emotion[content] == "angry") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[1], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  angerShape,
                  width / 2,
                  height / 2,
                  height / 1.1,
                  height / 1.1
                );

                text(
                  data[vidrand[content]].anger,
                  width / 2 - height / 1.1 / 2,
                  height / 2 - height / 1.1 / 2,
                  height / 1.1,
                  height / 1.1
                );
              } else if (emotion[content] == "disgusted") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[3], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  disgustShape,
                  width / 2,
                  height / 2,
                  height / 1.4,
                  height / 1.4
                );

                text(
                  data[vidrand[content]].disgust,
                  width / 2 - height / 1.1 / 2,
                  height / 2 - height / 1.1 / 2,
                  height / 1.1,
                  height / 1.1
                );
              } else if (emotion[content] == "happy") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[0], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  happyShape,
                  width / 2,
                  height / 2,
                  height / 1.2,
                  height / 1.2
                );

                text(
                  data[vidrand[content]].happiness,
                  width / 2 - height / 1.1 / 2,
                  height / 2 - height / 1.1 / 2,
                  height / 1.1,
                  height / 1.1
                );
              } else if (emotion[content] == "sad") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[4], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  sadShape,
                  width / 2,
                  height / 2,
                  height / 1.2,
                  height / 1.2
                );

                text(
                  data[vidrand[content]].sadness,
                  width / 2 - height / 1.1 / 2,
                  height / 2 - height / 1.1 / 2,
                  height / 1.1,
                  height / 1.1
                );
              } else if (emotion[content] == "surprised") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[5], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  surpriseShape,
                  width / 2,
                  height / 2,
                  height / 1.1,
                  height / 1.1
                );

                text(
                  data[vidrand[content]].surprise,
                  width / 2 - height / 1.1 / 2,
                  height / 2 - height / 1.1 / 2,
                  height / 1.1,
                  height / 1.1
                );
              } else if (emotion[content] == "neutral") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[2], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  neutralShape,
                  width / 2,
                  height / 2,
                  height / 1.1,
                  height / 1.1
                );

                text(
                  data[vidrand[content]].neutral,
                  width / 2 - height / 1.1 / 2,
                  height / 2 - height / 1.1 / 2,
                  height / 1.1,
                  height / 1.1
                );
              }

              textSize(40);
              text(
                data[vidrand[content]].titolo +
                  ": " +
                  round(100 * percentage[content]) +
                  "% " +
                  emotion[content],
                width / 2,
                height / 12
              );
              break;

            case 3:
              if (tempo >= 56) {
                if (second() == 4) {
                  content++;
                  artpage = 0;
                  tempo = second();
                }
              } else {
                if (second() == tempo + 4) {
                  content++;
                  artpage = 0;
                  tempo = second();
                }
              }

              textFont(Akira);
              textSize(100);
              if (emotion[content] == "angry") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[1], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  angerShape,
                  width / 2,
                  height / 2,
                  height / 1.1,
                  height / 1.1
                );

                text(
                  data[vidrand[content]].anger,
                  width / 2 - height / 1.1 / 2,
                  height / 2 - height / 1.1 / 2,
                  height / 1.1,
                  height / 1.1
                );

                push();
                tint(224, 60, 43);
                image(
                  faceAngry[content],
                  width / 2,
                  height / 2,
                  height / 2.5,
                  height / 2.5
                );
                pop();
              } else if (emotion[content] == "disgusted") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[3], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  disgustShape,
                  width / 2,
                  height / 2,
                  height / 1.4,
                  height / 1.4
                );

                text(
                  data[vidrand[content]].disgust,
                  width / 2 - height / 1.1 / 2,
                  height / 2 - height / 1.1 / 2,
                  height / 1.1,
                  height / 1.1
                );
                push();
                tint(160, 206, 17);
                image(
                  faceDisgusted[content],
                  width / 2,
                  height / 2,
                  height / 2.5,
                  height / 2.5
                );
                pop();
              } else if (emotion[content] == "happy") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[0], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  happyShape,
                  width / 2,
                  height / 2,
                  height / 1.2,
                  height / 1.2
                );

                text(
                  data[vidrand[content]].happiness,
                  width / 2 - height / 1.1 / 2,
                  height / 2 - height / 1.1 / 2,
                  height / 1.1,
                  height / 1.1
                );

                push();
                tint(245, 210, 51);
                image(
                  faceHappy[content],
                  width / 2,
                  height / 2,
                  height / 2.5,
                  height / 2.5
                );
                pop();
              } else if (emotion[content] == "sad") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[4], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  sadShape,
                  width / 2,
                  height / 2,
                  height / 1.2,
                  height / 1.2
                );

                text(
                  data[vidrand[content]].sadness,
                  width / 2 - height / 1.1 / 2,
                  height / 2 - height / 1.1 / 2,
                  height / 1.1,
                  height / 1.1
                );

                push();
                tint(96, 88, 237);
                image(
                  faceSad[content],
                  width / 2,
                  height / 2,
                  height / 2.5,
                  height / 2.5
                );
                pop();
              } else if (emotion[content] == "surprised") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[5], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  surpriseShape,
                  width / 2,
                  height / 2,
                  height / 1.1,
                  height / 1.1
                );

                text(
                  data[vidrand[content]].surprise,
                  width / 2 - height / 1.1 / 2,
                  height / 2 - height / 1.1 / 2,
                  height / 1.1,
                  height / 1.1
                );

                push();
                tint(176, 84, 223);
                image(
                  faceSurprised[content],
                  width / 2,
                  height / 2,
                  height / 2.5,
                  height / 2.5
                );
                pop();
              } else if (emotion[content] == "neutral") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[2], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  neutralShape,
                  width / 2,
                  height / 2,
                  height / 1.1,
                  height / 1.1
                );

                text(
                  data[vidrand[content]].neutral,
                  width / 2 - height / 1.1 / 2,
                  height / 2 - height / 1.1 / 2,
                  height / 1.1,
                  height / 1.1
                );

                push();
                tint(114);
                image(
                  faceNeutral[content],
                  width / 2,
                  height / 2,
                  height / 2.5,
                  height / 2.5
                );
                pop();
              }

              textSize(40);
              text(
                data[vidrand[content]].titolo +
                  ": " +
                  round(100 * percentage[content]) +
                  "% " +
                  emotion[content],
                width / 2,
                height / 12
              );
              break;
          }
          break;
        case 3:
          switch (artpage) {
            case 0:
              if (tempo >= 56) {
                if (second() == 4) {
                  artpage++;
                  tempo = second();
                }
              } else {
                if (second() == tempo + 4) {
                  artpage++;
                  tempo = second();
                }
              }

              if (emotion[content] == "angry") {
                image(
                  angerShape,
                  width / 2,
                  height / 2,
                  height / 1.1,
                  height / 1.1
                );
              } else if (emotion[content] == "disgusted") {
                image(
                  disgustShape,
                  width / 2,
                  height / 2,
                  height / 1.4,
                  height / 1.4
                );
              } else if (emotion[content] == "happy") {
                image(
                  happyShape,
                  width / 2,
                  height / 2,
                  height / 1.2,
                  height / 1.2
                );
              } else if (emotion[content] == "sad") {
                image(
                  sadShape,
                  width / 2,
                  height / 2,
                  height / 1.2,
                  height / 1.2
                );
              } else if (emotion[content] == "surprised") {
                image(
                  surpriseShape,
                  width / 2,
                  height / 2,
                  height / 1.1,
                  height / 1.1
                );
              } else if (emotion[content] == "neutral") {
                image(
                  neutralShape,
                  width / 2,
                  height / 2,
                  height / 1.1,
                  height / 1.1
                );
              }
              image(
                contentimages[vidrand[content]],
                width / 2 - height / 2,
                height / 1.4,
                450,
                450
              );

              textFont(Akira);
              textSize(100);
              text(
                data[vidrand[content]].titolo,
                width / 2 - height / 1.1 / 2,
                height / 2 - height / 1.1 / 2,
                height / 1.1,
                height / 1.1
              );

              textFont(Graphik);
              textSize(40);
              text(
                "in fact, while you were watching...",
                width / 2,
                height / 12
              );

              break;

            case 1:
              if (tempo >= 56) {
                if (second() == 4) {
                  artpage++;
                  tempo = second();
                }
              } else {
                if (second() == tempo + 4) {
                  artpage++;
                  tempo = second();
                }
              }

              if (emotion[content] == "angry") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[1], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  angerShape,
                  width / 2,
                  height / 2,
                  height / 1.1,
                  height / 1.1
                );
              } else if (emotion[content] == "disgusted") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[3], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  disgustShape,
                  width / 2,
                  height / 2,
                  height / 1.4,
                  height / 1.4
                );
              } else if (emotion[content] == "happy") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[0], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  happyShape,
                  width / 2,
                  height / 2,
                  height / 1.2,
                  height / 1.2
                );
              } else if (emotion[content] == "sad") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[4], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  sadShape,
                  width / 2,
                  height / 2,
                  height / 1.2,
                  height / 1.2
                );
              } else if (emotion[content] == "surprised") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[5], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  surpriseShape,
                  width / 2,
                  height / 2,
                  height / 1.1,
                  height / 1.1
                );
              } else if (emotion[content] == "neutral") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[2], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  neutralShape,
                  width / 2,
                  height / 2,
                  height / 1.1,
                  height / 1.1
                );
              }

              textFont(Akira);
              textSize(200);
              text(
                emotion[content],
                width / 2 - height / 1.1 / 2,
                height / 2 - height / 1.1 / 2,
                height / 1.1,
                height / 1.1
              );

              textFont(Graphik);
              textSize(40);
              text(
                "I'm " +
                  round(100 * percentage[content]) +
                  "% sure that you were...",
                width / 2,
                height / 12
              );
              break;

            case 2:
              if (tempo >= 54) {
                if (second() == 6) {
                  artpage++;
                  tempo = second();
                }
              } else {
                if (second() == tempo + 6) {
                  artpage++;
                  tempo = second();
                }
              }
              textFont(Akira);
              textSize(100);
              if (emotion[content] == "angry") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[1], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  angerShape,
                  width / 2,
                  height / 2,
                  height / 1.1,
                  height / 1.1
                );

                text(
                  data[vidrand[content]].anger,
                  width / 2 - height / 1.1 / 2,
                  height / 2 - height / 1.1 / 2,
                  height / 1.1,
                  height / 1.1
                );
              } else if (emotion[content] == "disgusted") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[3], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  disgustShape,
                  width / 2,
                  height / 2,
                  height / 1.4,
                  height / 1.4
                );

                text(
                  data[vidrand[content]].disgust,
                  width / 2 - height / 1.1 / 2,
                  height / 2 - height / 1.1 / 2,
                  height / 1.1,
                  height / 1.1
                );
              } else if (emotion[content] == "happy") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[0], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  happyShape,
                  width / 2,
                  height / 2,
                  height / 1.2,
                  height / 1.2
                );

                text(
                  data[vidrand[content]].happiness,
                  width / 2 - height / 1.1 / 2,
                  height / 2 - height / 1.1 / 2,
                  height / 1.1,
                  height / 1.1
                );
              } else if (emotion[content] == "sad") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[4], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  sadShape,
                  width / 2,
                  height / 2,
                  height / 1.2,
                  height / 1.2
                );

                text(
                  data[vidrand[content]].sadness,
                  width / 2 - height / 1.1 / 2,
                  height / 2 - height / 1.1 / 2,
                  height / 1.1,
                  height / 1.1
                );
              } else if (emotion[content] == "surprised") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[5], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  surpriseShape,
                  width / 2,
                  height / 2,
                  height / 1.1,
                  height / 1.1
                );

                text(
                  data[vidrand[content]].surprise,
                  width / 2 - height / 1.1 / 2,
                  height / 2 - height / 1.1 / 2,
                  height / 1.1,
                  height / 1.1
                );
              } else if (emotion[content] == "neutral") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[2], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  neutralShape,
                  width / 2,
                  height / 2,
                  height / 1.1,
                  height / 1.1
                );

                text(
                  data[vidrand[content]].neutral,
                  width / 2 - height / 1.1 / 2,
                  height / 2 - height / 1.1 / 2,
                  height / 1.1,
                  height / 1.1
                );
              }

              textSize(40);
              text(
                data[vidrand[content]].titolo +
                  ": " +
                  round(100 * percentage[content]) +
                  "% " +
                  emotion[content],
                width / 2,
                height / 12
              );
              break;

            case 3:
              if (tempo >= 56) {
                if (second() == 4) {
                  content++;
                  artpage = 0;
                  tempo = second();
                }
              } else {
                if (second() == tempo + 4) {
                  content++;
                  artpage = 0;
                  tempo = second();
                }
              }

              textFont(Akira);
              textSize(100);
              if (emotion[content] == "angry") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[1], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  angerShape,
                  width / 2,
                  height / 2,
                  height / 1.1,
                  height / 1.1
                );

                text(
                  data[vidrand[content]].anger,
                  width / 2 - height / 1.1 / 2,
                  height / 2 - height / 1.1 / 2,
                  height / 1.1,
                  height / 1.1
                );

                push();
                tint(224, 60, 43);
                image(
                  faceAngry[content],
                  width / 2,
                  height / 2,
                  height / 2.5,
                  height / 2.5
                );
                pop();
              } else if (emotion[content] == "disgusted") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[3], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  disgustShape,
                  width / 2,
                  height / 2,
                  height / 1.4,
                  height / 1.4
                );

                text(
                  data[vidrand[content]].disgust,
                  width / 2 - height / 1.1 / 2,
                  height / 2 - height / 1.1 / 2,
                  height / 1.1,
                  height / 1.1
                );
                push();
                tint(160, 206, 17);
                image(
                  faceDisgusted[content],
                  width / 2,
                  height / 2,
                  height / 2.5,
                  height / 2.5
                );
                pop();
              } else if (emotion[content] == "happy") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[0], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  happyShape,
                  width / 2,
                  height / 2,
                  height / 1.2,
                  height / 1.2
                );

                text(
                  data[vidrand[content]].happiness,
                  width / 2 - height / 1.1 / 2,
                  height / 2 - height / 1.1 / 2,
                  height / 1.1,
                  height / 1.1
                );

                push();
                tint(245, 210, 51);
                image(
                  faceHappy[content],
                  width / 2,
                  height / 2,
                  height / 2.5,
                  height / 2.5
                );
                pop();
              } else if (emotion[content] == "sad") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[4], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  sadShape,
                  width / 2,
                  height / 2,
                  height / 1.2,
                  height / 1.2
                );

                text(
                  data[vidrand[content]].sadness,
                  width / 2 - height / 1.1 / 2,
                  height / 2 - height / 1.1 / 2,
                  height / 1.1,
                  height / 1.1
                );

                push();
                tint(96, 88, 237);
                image(
                  faceSad[content],
                  width / 2,
                  height / 2,
                  height / 2.5,
                  height / 2.5
                );
                pop();
              } else if (emotion[content] == "surprised") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[5], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  surpriseShape,
                  width / 2,
                  height / 2,
                  height / 1.1,
                  height / 1.1
                );

                text(
                  data[vidrand[content]].surprise,
                  width / 2 - height / 1.1 / 2,
                  height / 2 - height / 1.1 / 2,
                  height / 1.1,
                  height / 1.1
                );

                push();
                tint(176, 84, 223);
                image(
                  faceSurprised[content],
                  width / 2,
                  height / 2,
                  height / 2.5,
                  height / 2.5
                );
                pop();
              } else if (emotion[content] == "neutral") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[2], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  neutralShape,
                  width / 2,
                  height / 2,
                  height / 1.1,
                  height / 1.1
                );

                text(
                  data[vidrand[content]].neutral,
                  width / 2 - height / 1.1 / 2,
                  height / 2 - height / 1.1 / 2,
                  height / 1.1,
                  height / 1.1
                );

                push();
                tint(114);
                image(
                  faceNeutral[content],
                  width / 2,
                  height / 2,
                  height / 2.5,
                  height / 2.5
                );
                pop();
              }

              textSize(40);
              text(
                data[vidrand[content]].titolo +
                  ": " +
                  round(100 * percentage[content]) +
                  "% " +
                  emotion[content],
                width / 2,
                height / 12
              );
              break;
          }
          break;
        case 4:
          switch (artpage) {
            case 0:
              if (tempo >= 56) {
                if (second() == 4) {
                  artpage++;
                  tempo = second();
                }
              } else {
                if (second() == tempo + 4) {
                  artpage++;
                  tempo = second();
                }
              }

              if (emotion[content] == "angry") {
                image(
                  angerShape,
                  width / 2,
                  height / 2,
                  height / 1.1,
                  height / 1.1
                );
              } else if (emotion[content] == "disgusted") {
                image(
                  disgustShape,
                  width / 2,
                  height / 2,
                  height / 1.4,
                  height / 1.4
                );
              } else if (emotion[content] == "happy") {
                image(
                  happyShape,
                  width / 2,
                  height / 2,
                  height / 1.2,
                  height / 1.2
                );
              } else if (emotion[content] == "sad") {
                image(
                  sadShape,
                  width / 2,
                  height / 2,
                  height / 1.2,
                  height / 1.2
                );
              } else if (emotion[content] == "surprised") {
                image(
                  surpriseShape,
                  width / 2,
                  height / 2,
                  height / 1.1,
                  height / 1.1
                );
              } else if (emotion[content] == "neutral") {
                image(
                  neutralShape,
                  width / 2,
                  height / 2,
                  height / 1.1,
                  height / 1.1
                );
              }
              image(
                contentimages[vidrand[content]],
                width / 2 - height / 2,
                height / 1.4,
                450,
                450
              );

              textFont(Akira);
              textSize(100);
              text(
                data[vidrand[content]].titolo,
                width / 2 - height / 1.1 / 2,
                height / 2 - height / 1.1 / 2,
                height / 1.1,
                height / 1.1
              );

              textFont(Graphik);
              textSize(40);
              text(
                "in fact, while you were watching...",
                width / 2,
                height / 12
              );

              break;

            case 1:
              if (tempo >= 56) {
                if (second() == 4) {
                  artpage++;
                  tempo = second();
                }
              } else {
                if (second() == tempo + 4) {
                  artpage++;
                  tempo = second();
                }
              }

              if (emotion[content] == "angry") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[1], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  angerShape,
                  width / 2,
                  height / 2,
                  height / 1.1,
                  height / 1.1
                );
              } else if (emotion[content] == "disgusted") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[3], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  disgustShape,
                  width / 2,
                  height / 2,
                  height / 1.4,
                  height / 1.4
                );
              } else if (emotion[content] == "happy") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[0], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  happyShape,
                  width / 2,
                  height / 2,
                  height / 1.2,
                  height / 1.2
                );
              } else if (emotion[content] == "sad") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[4], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  sadShape,
                  width / 2,
                  height / 2,
                  height / 1.2,
                  height / 1.2
                );
              } else if (emotion[content] == "surprised") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[5], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  surpriseShape,
                  width / 2,
                  height / 2,
                  height / 1.1,
                  height / 1.1
                );
              } else if (emotion[content] == "neutral") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[2], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  neutralShape,
                  width / 2,
                  height / 2,
                  height / 1.1,
                  height / 1.1
                );
              }

              textFont(Akira);
              textSize(200);
              text(
                emotion[content],
                width / 2 - height / 1.1 / 2,
                height / 2 - height / 1.1 / 2,
                height / 1.1,
                height / 1.1
              );

              textFont(Graphik);
              textSize(40);
              text(
                "I'm " +
                  round(100 * percentage[content]) +
                  "% sure that you were...",
                width / 2,
                height / 12
              );
              break;

            case 2:
              if (tempo >= 54) {
                if (second() == 6) {
                  artpage++;
                  tempo = second();
                }
              } else {
                if (second() == tempo + 6) {
                  artpage++;
                  tempo = second();
                }
              }
              textFont(Akira);
              textSize(100);
              if (emotion[content] == "angry") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[1], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  angerShape,
                  width / 2,
                  height / 2,
                  height / 1.1,
                  height / 1.1
                );

                text(
                  data[vidrand[content]].anger,
                  width / 2 - height / 1.1 / 2,
                  height / 2 - height / 1.1 / 2,
                  height / 1.1,
                  height / 1.1
                );
              } else if (emotion[content] == "disgusted") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[3], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  disgustShape,
                  width / 2,
                  height / 2,
                  height / 1.4,
                  height / 1.4
                );

                text(
                  data[vidrand[content]].disgust,
                  width / 2 - height / 1.1 / 2,
                  height / 2 - height / 1.1 / 2,
                  height / 1.1,
                  height / 1.1
                );
              } else if (emotion[content] == "happy") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[0], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  happyShape,
                  width / 2,
                  height / 2,
                  height / 1.2,
                  height / 1.2
                );

                text(
                  data[vidrand[content]].happiness,
                  width / 2 - height / 1.1 / 2,
                  height / 2 - height / 1.1 / 2,
                  height / 1.1,
                  height / 1.1
                );
              } else if (emotion[content] == "sad") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[4], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  sadShape,
                  width / 2,
                  height / 2,
                  height / 1.2,
                  height / 1.2
                );

                text(
                  data[vidrand[content]].sadness,
                  width / 2 - height / 1.1 / 2,
                  height / 2 - height / 1.1 / 2,
                  height / 1.1,
                  height / 1.1
                );
              } else if (emotion[content] == "surprised") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[5], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  surpriseShape,
                  width / 2,
                  height / 2,
                  height / 1.1,
                  height / 1.1
                );

                text(
                  data[vidrand[content]].surprise,
                  width / 2 - height / 1.1 / 2,
                  height / 2 - height / 1.1 / 2,
                  height / 1.1,
                  height / 1.1
                );
              } else if (emotion[content] == "neutral") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[2], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  neutralShape,
                  width / 2,
                  height / 2,
                  height / 1.1,
                  height / 1.1
                );

                text(
                  data[vidrand[content]].neutral,
                  width / 2 - height / 1.1 / 2,
                  height / 2 - height / 1.1 / 2,
                  height / 1.1,
                  height / 1.1
                );
              }

              textSize(40);
              text(
                data[vidrand[content]].titolo +
                  ": " +
                  round(100 * percentage[content]) +
                  "% " +
                  emotion[content],
                width / 2,
                height / 12
              );
              break;

            case 3:
              textFont(Akira);
              textSize(100);
              if (emotion[content] == "angry") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[1], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  angerShape,
                  width / 2,
                  height / 2,
                  height / 1.1,
                  height / 1.1
                );

                text(
                  data[vidrand[content]].anger,
                  width / 2 - height / 1.1 / 2,
                  height / 2 - height / 1.1 / 2,
                  height / 1.1,
                  height / 1.1
                );

                push();
                tint(224, 60, 43);
                image(
                  faceAngry[content],
                  width / 2,
                  height / 2,
                  height / 2.5,
                  height / 2.5
                );
                pop();
              } else if (emotion[content] == "disgusted") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[3], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  disgustShape,
                  width / 2,
                  height / 2,
                  height / 1.4,
                  height / 1.4
                );

                text(
                  data[vidrand[content]].disgust,
                  width / 2 - height / 1.1 / 2,
                  height / 2 - height / 1.1 / 2,
                  height / 1.1,
                  height / 1.1
                );
                push();
                tint(160, 206, 17);
                image(
                  faceDisgusted[content],
                  width / 2,
                  height / 2,
                  height / 2.5,
                  height / 2.5
                );
                pop();
              } else if (emotion[content] == "happy") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[0], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  happyShape,
                  width / 2,
                  height / 2,
                  height / 1.2,
                  height / 1.2
                );

                text(
                  data[vidrand[content]].happiness,
                  width / 2 - height / 1.1 / 2,
                  height / 2 - height / 1.1 / 2,
                  height / 1.1,
                  height / 1.1
                );

                push();
                tint(245, 210, 51);
                image(
                  faceHappy[content],
                  width / 2,
                  height / 2,
                  height / 2.5,
                  height / 2.5
                );
                pop();
              } else if (emotion[content] == "sad") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[4], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  sadShape,
                  width / 2,
                  height / 2,
                  height / 1.2,
                  height / 1.2
                );

                text(
                  data[vidrand[content]].sadness,
                  width / 2 - height / 1.1 / 2,
                  height / 2 - height / 1.1 / 2,
                  height / 1.1,
                  height / 1.1
                );

                push();
                tint(96, 88, 237);
                image(
                  faceSad[content],
                  width / 2,
                  height / 2,
                  height / 2.5,
                  height / 2.5
                );
                pop();
              } else if (emotion[content] == "surprised") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[5], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  surpriseShape,
                  width / 2,
                  height / 2,
                  height / 1.1,
                  height / 1.1
                );

                text(
                  data[vidrand[content]].surprise,
                  width / 2 - height / 1.1 / 2,
                  height / 2 - height / 1.1 / 2,
                  height / 1.1,
                  height / 1.1
                );

                push();
                tint(176, 84, 223);
                image(
                  faceSurprised[content],
                  width / 2,
                  height / 2,
                  height / 2.5,
                  height / 2.5
                );
                pop();
              } else if (emotion[content] == "neutral") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[2], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  neutralShape,
                  width / 2,
                  height / 2,
                  height / 1.1,
                  height / 1.1
                );

                text(
                  data[vidrand[content]].neutral,
                  width / 2 - height / 1.1 / 2,
                  height / 2 - height / 1.1 / 2,
                  height / 1.1,
                  height / 1.1
                );

                push();
                tint(114);
                image(
                  faceNeutral[content],
                  width / 2,
                  height / 2,
                  height / 2.5,
                  height / 2.5
                );
                pop();
              }

              textSize(40);
              text(
                data[vidrand[content]].titolo +
                  ": " +
                  round(100 * percentage[content]) +
                  "% " +
                  emotion[content],
                width / 2,
                height / 12
              );

              if (tempo >= 56) {
                if (second() == 4) {
                  content++;
                  artpage = 0;
                  tempo = second();
                }
              } else {
                if (second() == tempo + 4) {
                  content++;
                  artpage = 0;
                  tempo = second();
                }
              }
              break;
          }
          break;
        case 5:
          switch (artpage) {
            case 0:
              if (tempo >= 56) {
                if (second() == 4) {
                  artpage++;
                  tempo = second();
                }
              } else {
                if (second() == tempo + 4) {
                  artpage++;
                  tempo = second();
                }
              }

              image(
                surpriseShape,
                width / 2,
                height / 2,
                height / 1.1,
                height / 1.1
              );

              textFont(Akira);
              textSize(100);
              text(
                "Are you still watching?",
                width / 2 - height / 1.1 / 2,
                height / 2 - height / 1.1 / 2,
                height / 1.1,
                height / 1.1
              );

              break;

            case 1:
              if (tempo >= 56) {
                if (second() == 4) {
                  artpage++;
                  tempo = second();
                }
              } else {
                if (second() == tempo + 4) {
                  artpage++;
                  tempo = second();
                }
              }

              image(
                happyShape,
                width / 2,
                height / 2,
                height / 1.1,
                height / 1.1
              );

              textFont(Akira);
              textSize(100);
              text(
                "Because i was",
                width / 2 - height / 1.1 / 2,
                height / 2 - height / 1.1 / 2,
                height / 1.1,
                height / 1.1
              );

              break;

            case 2:
              if (tempo >= 56) {
                if (second() == 4) {
                  changer++;
                }
              } else {
                if (second() == tempo + 4) {
                  changer++;
                }
              }

              textFont(Akira);
              textSize(100);
              if (emotion[content] == "angry") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[1], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  angerShape,
                  width / 2,
                  height / 2,
                  height / 1.1,
                  height / 1.1
                );

                push();
                tint(224, 60, 43);
                image(
                  faceAngry[content],
                  width / 2,
                  height / 2,
                  height / 2.5,
                  height / 2.5
                );
                pop();
              } else if (emotion[content] == "disgusted") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[3], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  disgustShape,
                  width / 2,
                  height / 2,
                  height / 1.4,
                  height / 1.4
                );

                push();
                tint(160, 206, 17);
                image(
                  faceDisgusted[content],
                  width / 2,
                  height / 2,
                  height / 2.5,
                  height / 2.5
                );
                pop();
              } else if (emotion[content] == "happy") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[0], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  happyShape,
                  width / 2,
                  height / 2,
                  height / 1.2,
                  height / 1.2
                );

                push();
                tint(245, 210, 51);
                image(
                  faceHappy[content],
                  width / 2,
                  height / 2,
                  height / 2.5,
                  height / 2.5
                );
                pop();
              } else if (emotion[content] == "sad") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[4], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  sadShape,
                  width / 2,
                  height / 2,
                  height / 1.2,
                  height / 1.2
                );

                push();
                tint(96, 88, 237);
                image(
                  faceSad[content],
                  width / 2,
                  height / 2,
                  height / 2.5,
                  height / 2.5
                );
                pop();
              } else if (emotion[content] == "surprised") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[5], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  surpriseShape,
                  width / 2,
                  height / 2,
                  height / 1.1,
                  height / 1.1
                );

                push();
                tint(176, 84, 223);
                image(
                  faceSurprised[content],
                  width / 2,
                  height / 2,
                  height / 2.5,
                  height / 2.5
                );
                pop();
              } else if (emotion[content] == "neutral") {
                for (let i = 0; i < 20; i++) {
                  image(emoji[2], randposx[i], randposy[i], 50, 50);
                  randposy[i] += randvel[i];

                  if (randposy[i] > height) {
                    randposx[i] = random(width);
                    randposy[i] = random(-height, 0);
                    randvel[i] = random(1, 6);
                  }
                }
                image(
                  neutralShape,
                  width / 2,
                  height / 2,
                  height / 1.1,
                  height / 1.1
                );

                push();
                tint(114);
                image(
                  faceNeutral[content],
                  width / 2,
                  height / 2,
                  height / 2.5,
                  height / 2.5
                );
                pop();
              }

              text(
                emotion[content],
                width / 2 - height / 1.1 / 2,
                height / 1.2,
                height / 1.1,
                height / 1.1
              );

              textSize(40);
              text(
                "this was your reaction to your reactions",
                width / 2,
                height / 12
              );

              text(
                "it was the last time, i promise =)",
                width / 2,
                height - height / 12
              );
              break;
          }
          break;
      }
      pop();
      break;

    case 6:
      push();
      clear();
      logo.style("left: 50%; top: 10%; height: 7vh");

      push();
      rectMode(CENTER);
      translate(windowWidth / 2, windowHeight / 2 - 100);

      angleMode(DEGREES);
      rotate(-2);
      stroke("#ffffff");
      strokeWeight(2);
      fill("#1e1e1e");
      rect(0, 0, windowWidth / 5, windowHeight / 8);

      rotate(2);
      noStroke();
      fill("#ffffff");
      textSize(width / 32);
      textFont("Akira");
      textAlign(CENTER, CENTER);
      text("I'S ON U", 0, 0);
      pop();

      for (let i = 0; i < nemoji; i++) {
        push();
        translate(xemoji[i], yemoji[i]);
        rotate(emojiangle[i]);

        image(emoji[temoji[i]], 0, 0, emojisize[i], emojisize[i]);
        yemoji[i] += velemoji[i];

        if (yemoji[i] > height + 200) {
          yemoji[i] = random(0, -height);
          xemoji[i] = random(0, width);
          emojisize[i] = 50;
          velemoji[i] = random(1, 5);
          emojiangle[i] = random(0, 360);
        }
        pop();
      }

      push();
      rotate(2);
      rectMode(CENTER);
      noStroke();
      fill("#f5d233");
      rect(
        windowWidth / 2 - 390,
        windowHeight / 2 + 150,
        windowWidth / 7,
        windowHeight / 10
      );
      pop();

      push();
      rotate(-2);
      rectMode(CENTER);
      noStroke();
      fill("#b054df");
      rect(
        windowWidth / 2 + 370,
        windowHeight / 2 + 200,
        windowWidth / 7,
        windowHeight / 10
      );
      pop();

      about.style("background-color", "#ffffff");
      about.style("border", "0vw");
      about.style("color", "#1E1E1E");
      about.style("font-family", "Akira");
      about.style("transform: translate(-50%, -50%)");
      about.size(windowWidth / 7, windowHeight / 10);
      about.position(windowWidth / 2 - 400, windowHeight / 2 + 150);
      about.style("font-size", "1.5vw");
      about.style("cursor", "pointer");

      recap.style("backgound-color", "#ffffff");
      recap.style("border", "0vw");
      recap.style("color", "#1E1E1E");
      recap.style("font-family", "Akira");
      recap.style("transform: translate(-50%, -50%)");
      recap.size(windowWidth / 7, windowHeight / 10);
      recap.position(windowWidth / 2 + 400, windowHeight / 2 + 150);
      recap.style("font-size", "1.5vw");
      recap.style("cursor", "pointer");
      pop();
      break;

    case 7:
      clear();
      rectMode(CORNER);
      textAlign(LEFT, TOP);
      back.style("backgound-color", "#ffffff");
      back.style("border", "0vw");
      back.style("color", "#1E1E1E");
      back.style("font-family", "Akira");
      back.style("transform: translate(-50%, -50%) rotate(3deg)");
      back.size(windowWidth / 16, windowHeight / 16);
      back.position(windowWidth - 150, 100);
      back.style("font-size", "1.5vw");
      back.style("cursor", "pointer");

      for (let i = 0; i < nfaces; i++) {
        push();
        translate(xfaces[i], yfaces[i]);
        rotate(facesangles[i]);

        image(ourfaces[tfaces[i]], 0, 0, facessize[i], facessize[i]);
        yfaces[i] += velfaces[i];

        if (yfaces[i] > height + 200) {
          yfaces[i] = random(0, -height);
          xfaces[i] = random(0, width);
          facessize[i] = random(100, 150);
          velfaces[i] = random(1, 5);
          facesangles[i] = random(0, 360);
        }
        pop();

        push();
        noStroke();
        fill("#ffffff");
        textSize(40);
        textFont("Graphik");
        text(
          "I'S ON U is a web experience built on p5.js with the aim of showing the users the intangible presence of two spheres, the technological and the human one.",
          width / 10,
          height / 2 - 150,
          width - width / 5
        );
        pop();

        push();
        noStroke();
        fill("#ffffff");
        textSize(width / 40);
        textFont("Akira");
        text("TEAM", width / 10, height / 2 - 20, width - width / 5);
        pop();

        push();
        noStroke();
        fill("#ffffff");
        textSize(40);
        textFont("Graphik");
        text(
          "Andrea Corsini, Beatrice Ulivi, Sabrina Morelli, Simone Cerea, Yousef Taffal",
          width / 10,
          height / 2 + 40,
          width - width / 5
        );
        pop();

        push();
        noStroke();
        fill("#ffffff");
        textSize(width / 40);
        textFont("Akira");
        text("FACULTY", width / 10, height / 2 + 130, width - width / 5);
        pop();

        push();
        noStroke();
        fill("#ffffff");
        textSize(40);
        textFont("Graphik");
        text(
          "Creative Coding     A.Y. 2022-2023 Politecnico di Milano",
          width / 10,
          height / 2 + 200,
          430,
          300
        );
        pop();

        push();
        noStroke();
        fill("#ffffff");
        textSize(40);
        textFont("Graphik");
        text(
          "Michele Mauri, Andrea Benedetti, Tommaso Elli",
          width / 10,
          height / 2 + 400,
          1250,
          300
        );
        pop();

        push();

        angleMode(DEGREES);
        rectMode(CENTER);
        noStroke();
        translate(windowWidth / 2, windowHeight / 2);
        rotate(7);
        fill("#f5d233");
        rect(-10, -350, 280, 80);

        pop();

        push();

        angleMode(DEGREES);
        rectMode(CENTER);
        noStroke();
        translate(windowWidth / 2, windowHeight / 2);
        rotate(2);
        rect(0, -350, 280, 80);
        textSize(40);
        textFont("Akira");
        textAlign(CENTER, CENTER);
        fill("#000000");
        text("ABOUT", 0, -350);

        pop();
      }
      break;

    case 8:
      clear();
      rectMode(CORNER);
      back.style("backgound-color", "#ffffff");
      back.style("border", "0vw");
      back.style("color", "#1E1E1E");
      back.style("font-family", "Akira");
      back.style("transform: translate(-50%, -50%) rotate(3deg)");
      back.size(windowWidth / 16, windowHeight / 16);
      back.position(windowWidth - 150, 100);
      back.style("font-size", "1.5vw");
      back.style("cursor", "pointer");

      for (let i = 0; i < 5; i++) {
        button[i].show();
        button[i].style("border", "0vw");
        button[i].style("background-color: transparent");
        button[i].style("transform: translate(-50%, -50%)");
        button[i].size(height / 3.5, height / 3.5);
        button[i].style("cursor", "pointer");
      }

      button[2].position(width / 2, height / 2);
      button[1].position(width / 2 - height / 3.5 - 30, height / 2);
      button[0].position(width / 2 - height / 1.75 - 60, height / 2);
      button[3].position(width / 2 + height / 3.5 + 30, height / 2);
      button[4].position(width / 2 + height / 1.75 + 60, height / 2);

      push();

      angleMode(DEGREES);
      rectMode(CENTER);
      noStroke();
      translate(windowWidth / 2, windowHeight / 2);
      rotate(7);
      fill("#b045df");
      rect(-10, -350, 280, 80);

      pop();

      push();

      angleMode(DEGREES);
      rectMode(CENTER);
      noStroke();
      translate(windowWidth / 2, windowHeight / 2);
      rotate(2);
      rect(0, -350, 280, 80);
      textSize(40);
      textFont("Akira");
      textAlign(CENTER, CENTER);
      fill("#000000");
      text("RECAP", 0, -350);

      pop();

      push();
      noStroke();
      fill("#ffffff");
      textSize(40);
      textFont("Graphik");
      text(
        "Select a content to have a deeper look to the whole range of emotions you showed watching it.",
        width / 10,
        height / 1.3,
        width - width / 5
      );

      pop();

      imageMode(CENTER);
      image(angerShape, width / 2, height / 2, height / 3.5, height / 3.5);
      image(
        angerShape,
        width / 2 - height / 3.5 - 30,
        height / 2,
        height / 3.5,
        height / 3.5
      );
      image(
        angerShape,
        width / 2 - height / 1.75 - 60,
        height / 2,
        height / 3.5,
        height / 3.5
      );
      image(
        angerShape,
        width / 2 + height / 3.5 + 30,
        height / 2,
        height / 3.5,
        height / 3.5
      );
      image(
        angerShape,
        width / 2 + height / 1.75 + 60,
        height / 2,
        height / 3.5,
        height / 3.5
      );

      image(contentimages[vidrand[2]], width / 2, height / 2, 200, 200);
      image(
        contentimages[vidrand[3]],
        width / 2 + height / 3.5 + 30,
        height / 2,
        200,
        200
      );
      image(
        contentimages[vidrand[4]],
        width / 2 + height / 1.75 + 60,
        height / 2,
        200,
        200
      );
      image(
        contentimages[vidrand[0]],
        width / 2 - height / 1.75 - 60,
        height / 2,
        200,
        200
      );
      image(
        contentimages[vidrand[1]],
        width / 2 - height / 3.5 - 30,
        height / 2,
        200,
        200
      );
      push();
      noStroke();
      fill("#ffffff");
      textSize(100);
      textAlign(CENTER);
      textFont("Akira");
      text("3", width / 2, height / 2 - 130);
      text("2", width / 2 - height / 3.5 - 30, height / 2 - 130);
      text("1", width / 2 - height / 1.75 - 60, height / 2 - 130);
      text("4", width / 2 + height / 3.5 + 30, height / 2 - 130);
      text("5", width / 2 + height / 1.75 + 60, height / 2 - 130);
      pop();

      /* if (emotion[content] == "angry") {
        image(angerShape, width / 2, height / 2, height / 1.1, height / 1.1);
      } else if (emotion[content] == "disgusted") {
        image(disgustShape, width / 2, height / 2, height / 1.4, height / 1.4);
      } else if (emotion[content] == "happy") {
        image(happyShape, width / 2, height / 2, height / 1.2, height / 1.2);
      } else if (emotion[content] == "sad") {
        image(sadShape, width / 2, height / 2, height / 1.2, height / 1.2);
      } else if (emotion[content] == "surprised") {
        image(surpriseShape, width / 2, height / 2, height / 1.1, height / 1.1);
      } else if (emotion[content] == "neutral") {
        image(neutralShape, width / 2, height / 2, height / 1.1, height / 1.1);
      } */

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
    console.log("boh");
  }
}

function changeTo2() {
  changer = 2;
}

function changeTo3() {
  changer = 3;
}

function changeTo5() {
  changer = 5;
}

function goToTheAbout() {
  changer = 7;
  about.hide();
  recap.hide();
  back.show();
}

function goBack() {
  changer = 6;
  back.hide();
  about.show();
  recap.show();
}

function goToTheRecap() {
  changer = 8;
  about.hide();
  recap.hide();
  back.show();
}
