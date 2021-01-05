"use strict";

// drawing exercise with bezier curves and vertex
// created a "W" using illustrator to understand where the
// handles of each points are on the grid (see image in assets)
// made with tutorial : [code to type] bezier curves (typography + p5js)
// https://www.youtube.com/watch?v=8-v8a5zJbu4&t=579s
// exrecise by just junior

let x = -100;
let y = 0;

function setup() {
  createCanvas(1920, 1280)
  background(0);
  stroke(255);
  strokeWeight(80);
  noFill();
  // beginShape();
  strokeCap(SQUARE);
  // vertex(40, 760)
  // vertex(40, 40);
  // bezierVertex(40, 400, 360, 360, 360, 760);
  // vertex(360,40);
  // endShape();

  // first letter : W
  beginShape();
  vertex(x + 100, y + 200)
  bezierVertex(x + 100, y + 400, x + 200, y + 700, x + 200, y + 700);
  bezierVertex(x + 200, y + 700, x + 200, y + 500, x + 300, y + 500);
  bezierVertex(x + 400, y + 500, x + 400, y + 700, x + 400, y + 700);
  bezierVertex(x + 400, y + 700, x + 500, y + 400, x + 500, y + 200);
  endShape();

  // second letter : A
  beginShape();
  vertex(x + 550, y + 800);
  bezierVertex(x + 550, y + 700, x + 750, y + 280, x + 750, y + 280)
  bezierVertex(x + 750, y + 280, x + 850, y + 520, x + 900, y + 800)
  bezierVertex(x + 900, y + 800, x + 650, y + 450, x + 573, y + 700)
  endShape();

  // third letter : R
  beginShape();
  vertex(x + 1100, y + 800);
  bezierVertex(x + 1100, y + 700, x + 1030, y + 550, x + 1075, y + 375);
  bezierVertex(x + 1100, y + 100, x + 1492, y + 230, x + 1450, y + 455);
  bezierVertex(x + 1250, y + 455, x + 1123, y + 400, x + 1060, y + 380);
  bezierVertex(x + 1060, y + 380, x + 1450, y + 600, x + 1450, y + 800);
  endShape();

  // fourth letter : P
  beginShape();
  vertex(x + 1640, y + 225);
  bezierVertex(x + 2052, y + 225, x + 2052, y + 600, x + 1797, y + 510);
  bezierVertex(x + 1652, y + 460, x + 1640, y + 563, x + 1625, y + 800);
  bezierVertex(x + 1525, y + 512, x + 1620, y + 251, x + 1657, y + 218);
  endShape();
}
