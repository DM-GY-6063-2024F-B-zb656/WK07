// TODO: strings and text
//       iterate letters
//       iterate words


let mString = "Computers and networks are more than mere tools: They are like living things, themselves.";

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  
  textSize(16);

  let mWords = mString.split(" ");
  print(mWords);
  // print(mString, mString.length, mString.toLowerCase()); 
  //if you do the .length to a string, it counts every character in the string
  //.toLowerCase obviously turns it into all lowercase

  textAlign(LEFT,TOP);
  // text(mString, 100, 100);
  // rect(100,100,200,10);

  // for(let idx = 0; idx < mString.length; idx++) {
  //   let mChar = mString[idx];

  //   //let x = random(width);
  //   //let y = random(height);

  //   let pos = map(idx, 0, mString.length, 0, height);

  //   if (mChar < 'c') {
  //     textSize(60);
  //   } else{
  //     textSize(16);
  //   }

  //   text(mChar, pos, pos);
  // }

  for(let idx = 0; idx < mWords.length; idx++) {
    let pos = map(idx, 0, mWords.length, 0, width);

    if(mWords[idx] == "are") {
      textSize(65);
    } else {
      textSize(16);
    }
    
    text(mWords[idx], pos, pos);
  }
}

function draw() {}
