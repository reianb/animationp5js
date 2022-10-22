let canvasWidth = 800;
let canvasHeight = 800;

function setup() {
  createCanvas(800, 800);
  rectMode(DEGREES);
}

function draw() {
  let r = (map(mouseX,0,canvasWidth,155,255));
  let g = (map(mouseY,0,canvasHeight,145,250));
  let b = (map(mouseX, 0,canvasWidth,0,90));
  let rectWidth = (map(mouseY, 350, canvasWidth, 350, 600));
  let rectHeight = (map(mouseX, 350, canvasHeight, 350, 600));
  let rotateRect= (map(mouseX,0,canvasWidth, 0, 180));
  //describe('a shade of red that is bordering hot pink', FALLBACK);
  background(150, 0, 50);
  frameRate(3);
  if (mouseIsPressed == false) {
    //describe('hovering over canvas creates 3 different yellow rectangles on the red background that move around the page and rotate on an axis', FALLBACK);
    //describeElement('the shade, x-position, y-position, width, height, and degree of rotation of yellow boxes depend on the x and y coordinates of the mouse. Frame rate is 3 frames per second', FALLBACK);
    //describeElement('the x positions of the rectangles is the y position of the mouse; the y positions of the rectangles are the x position of the mouse', FALLBACK);
    fill(r,g,b);
    noStroke();
    rotate(rotateRect);
    rect(mouseY,mouseX,rectWidth,rectHeight);
    rotate(rotateRect);
    //describeElement('rectangle width and height are 80 pixels more than mouse position; opacity is at 80', FALLBACK);
    fill(r,g,b,80);
    noStroke();
    rect(mouseY+80,mouseX+80,rectWidth,350);
    fill(r,g,b)
    noStroke();
    rect(mouseX,mouseY,rectWidth,350);
  }
  else {
   // describe('pressing the mouse changes the frame rate to 60 fps; the third rectangle with full opacity is removed', FALLBACK);
    //describeElement('the x position and y position of the same rectangles are now the same with the x and y coordinates of the mouse', FALLBACK);
    frameRate(60);
    fill(r,g,b);
    noStroke();
    rect(mouseX,mouseY,rectWidth,rectHeight);
    fill(r,g,b,50);
    noStroke();
    rect(mouseX+80,mouseY+80,rectWidth,350);
    fill(r,g,b)
    noStroke();
    //rect(mouseY,mouse,rectWidth,350);
  }

}
