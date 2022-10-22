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
  background(150, 0, 50);
  frameRate(3);
  if (mouseIsPressed == false) {
    fill(r,g,b);
    noStroke();
    rotate(rotateRect);
    rect(mouseY,mouseX,rectWidth,rectHeight);
    rotate(rotateRect);
    fill(r,g,b,80);
    noStroke();
    rect(mouseY+80,mouseX+80,rectWidth,350);
    fill(r,g,b)
    noStroke();
    rect(mouseX,mouseY,rectWidth,350);
  }
  else {
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
