"use strict";

let circle1 = {
  x: -100,
  y: 200,
  size: 100,
  fill: 255,
  speed: 5,
  ax: 0,
  ay: 0
}

let bg = {
  r: 0,
  g: 0,
  b: 0,
}

function setup() {
  createCanvas(800, 800)
}

function draw() {
  background(bg.r, bg.g, bg.b);

  push();
  ellipseMode(CENTER);
  noStroke();
  fill(circle1.fill)
  ellipse(circle1.x, circle1.y, circle1.size)
  pop();

  moveCircle();
  wrapCircle();
  mapColor();
}

function moveCircle() {
  circle1.x = circle1.x + circle1.speed;
}

function wrapCircle(){
  if(circle1.x > width) {
    circle1.x -= width
  }
  else if (circle1.x < 0) {
    circle1.x += width;
  }
}

function mapColor(){
  bg.r = map(circle1.x, 0, width/2, 0, 255);
  bg.g = map(circle1.x, 0, width/3, 200, 255);
  bg.b = map(circle1.x, width/2, width, 255, 0);

  circle1.fill = map(bg.r, 0, 255, 0, 255);
}
