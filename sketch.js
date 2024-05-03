let webcam; // variable for video
let squareSystem = []; 
let scale = 2; // variable to resize video 
let font1; 
let userInput;
let button;
let userLine;

let text1 = [];

function preload(){
  font1 = loadFont('JustBreatheBoldObliqueseven-7vgw.otf');
}


function setup() {
  createCanvas(500, 650);
  textFont(font1);
  textSize(45);
  pixelDensity(1); // fix pixel density for all devices

  webcam =createCapture(VIDEO); // initiating variable for video
  webcam.size(width/scale, height/scale); // video size
  webcam.hide();

  // Input button
  userInput = createInput();
  userInput.position(40, 600); // Where button is
  userInput.style('background','linear-gradient(to bottom, #FFD0D0, #CA8787') // - MIP
  userInput.style('border', '1px solid #A87676'); // - MIP
  userInput.style('color', '#5C3131'); // - MIP
  // button 
  button = createButton('Caption this image');
  button.position(userInput.x + userInput.width, userInput.y); // - button under bar
  button.style('background','linear-gradient(to bottom, #FFD0D0, #CA8787') // - MIP
  button.style('border', '1px solid #A87676'); // - MIP
  button.style('color', '#5C3131'); // - MIP
  button.position(userInput.x, userInput.y + 21);
  button.mousePressed(newLine);
  userInput.changed(newLine); // -Run newLine with other user input 
  userInput.input(() => { 
    if (keyCode === 13) { // - If "enter" key is pressed
    newLine(); // - Run function 
    }
  });

  // for (x = 0; x < 100; x++){
  for (x = 0; x < 200; x++){ // clearer mirror
    let rx = random(430, width - 430);
    let ry = random(430, width - 430);
    // let rr = random(10, 50);
    let rr = random(2, 18); // clearer mirror
    squareSystem[x] = new square(rx, ry, rr);
  }
  background("#F4DEDE");
  fill(255);
  rect(40, 40, 420, 550); // pola
  image(webcam, 70, 70); // video position
}

function draw() {

  for (x = 0; x < squareSystem.length; x++){
    squareSystem[x].move();
    squareSystem[x].show();
    squareSystem[x].checkEdges();
  }

  photoText();
  text2();
}

function text2(){
  textSize(14);
  text("To reset the caption, refresh the page :) ", 170, 640, 400);
}

function newLine(){
  userLine = userInput.value();
  userInput.value('')
  text1.push(userLine);
}

function photoText(){
  for (x = 0; x < text1.length; x++){
    text('" ' + text1[x] + ' "', 90, 500, 400);
  }
}

class square { // Creating a "square" class
  constructor(x, y, r){ // Setting up blue print 
    this.x = x; // Refering to current object (this instant in use)
    this.y = y; //     ""            ""             ""
    this.r = r //         ""              ""               ""
  }
  move(){
    this.x = this.x + random(-8, 8); // Move x position randomly from -4 to 4
    this.y = this.y + random(-8, 8); // Move x position randomly from -4 to 4
  }

  show(){
    let pX = this.x/scale; // - x value divided by scale
    let pY = this.y/scale; // - y value divided by scale
    let pixelColour = webcam.get(pX, pY); // - Get colour of pixer where square is and store it
    fill(pixelColour[0], pixelColour[1], pixelColour[2], 240); // - Get RGB values
    noStroke(); // square w/o stroke 
    rect(this.x, this.y, this.r, this.r); // Make square   
  }

  checkEdges(){ // function to check if squares have reached edge 
    if (this.x < 70){ //if square is more than half way covered on the left 
      this.x = 70; // don't let it get past that 
    } else if (this.x > width - 70){ //if square is more than half way covered on the right 
      this.x = 70 // don't let it get past that 
    }

    if (this.y < 70){ //if square is more than half way covered on the tp 
      this.y = 70; // don't let it get past that 
    } else if (this.y > width - 70){ //if square is more than half way covered on the bottom 
      this.y = width - 70 // don't let it get past that 
    }
  }
}