// TODO:
//   look at dimensions
//   resize
//   filter

let mImg;

function preload() {
  mImg = loadImage("../assets/arara.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  print(mImg.width, mImg.height);

  mImg.resize(0, height); //the zero just makes it scale the image proportionally

  image(mImg, 0, 0);

  mImg.loadPixels();

  for(let idx = 0; idx < mImg.pixels.length; idx += 4) {
    let redVal = mImg.pixels[idx + 0];
    let greenVal = mImg.pixels[idx + 1];
    let blueVal = mImg.pixels[idx + 2];
    let alphaVal = mImg.pixels[idx + 3];

    let pixelIsRed = redVal > greenVal && redVal > blueVal && redVal > 5;

    if(!pixelIsRed) {
      mImg.pixels[idx + 1] = 0;
      mImg.pixels[idx + 2] = 0;
    }
  }

  mImg.updatePixels();

  image(mImg, 0, 0);

}

function draw() {}
