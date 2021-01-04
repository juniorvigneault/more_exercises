"use strict";

// drawing exercise with bezier curves and vertex
// created a "W" using illustrator to understand where the
// handles of each points are on the grid (see image in assets)
// made with tutorial : [code to type] bezier curves (typography + p5js)
// https://www.youtube.com/watch?v=8-v8a5zJbu4&t=579s
// exrecise by just junior

function setup() {
  createCanvas(1920, 1280)
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
