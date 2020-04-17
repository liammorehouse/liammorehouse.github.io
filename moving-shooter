let px = 200; //PLAYER X
let py = 200; //PLAYER Y
let psv = 3; //PLAYER SPEED VALUE
let bx = px; //BULLET X
let by = py; //BULLET Y
let slopeX = 0;
let slopeY = 0;
let rx = 200;
let ry = 100;
let a = 0;
let b = 0;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

//SHOOT FUNCTION
function mousePressed() {
  slopeX = (px - mouseX)/25;
  slopeY = (py - mouseY)/25;
  bx = px;
  by = py;
  //ellipse(x, y, 20, 20);
}

//PLAYER MOVEMENT FUNCTION
function keyPressed() {
  if (key == 'a') {
    a = -psv
    b = 0
  } else if (key == 'd') {
    a = psv
    b = 0
  } else if (key == 'w') {
    b = -psv
    a = 0
  } else if (key == 's') {
    b = psv
    a = 0
  }
}

function draw() {  
  background(255, 100, 0);
  
  //PLAYER
  fill(150);
  ellipse(px, py, 40, 40);
  //fill(255);
  //ellipse(200, 400, 20, 20);
  
  //PLAYER MOVEMENT
  px += a;
  py += b;
  
  //KEEPING PLAYER IN BOUNDS
  if (px <= 0) {
    px = 0;
  } else if (px >= 400) {
    px = 400;
  }
  if (py <= 0) {
    py = 0;
  } else if (py >= 400) {
    py = 400;
  }
  
  //BULLET
  noStroke();
  fill(255);
  ellipse(bx, by, 15, 15);
  
  //BLUE ENEMY
  fill(0, 0, 255);
  ellipse(rx, ry, 20, 20);
  if (abs(bx-rx) <= 15 && abs(by-ry) <= 15){
    rx = random(20, 380);
    ry = random(20, 200);
  }
  
  //MAKE THE BULLET MOVE
  bx -= slopeX;
  by -= slopeY;
}
