"use strict";


// exercise by just junior

let marginx;
let marginy;
let size;
let x;
let y;

function setup() {
  createCanvas(720, 480);
  background(0);

  marginx = width/4
  marginy = height/1000
  size = 300;
  x = width - size - marginx;
  y = height - size - marginy;

  rectMode(CENTER);
  beginShape();
  rect(x, y, size, size)
  beginContour();
  rect(200,200,100,100);
  endContour();
  endShape();
}
