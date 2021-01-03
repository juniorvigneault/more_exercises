"use strict";

function preload(){
}

function setup() {
  createCanvas(1000, 1000)
  background(0);
  stroke(255);
  strokeWeight(50);
  noFill();
  // beginShape();
  strokeCap(SQUARE);
  // vertex(40, 760)
  // vertex(40, 40);
  // bezierVertex(40, 400, 360, 360, 360, 760);
  // vertex(360,40);
  // endShape();

  beginShape();
  vertex(300,200)
  bezierVertex(300, 400, 400, 700, 400, 700);
  bezierVertex(400, 700, 400, 500, 500, 500);
  bezierVertex(600, 500, 600, 700, 600, 700);
  bezierVertex(600, 700, 700, 400, 700, 200);
  endShape();
}

function draw() {
}
