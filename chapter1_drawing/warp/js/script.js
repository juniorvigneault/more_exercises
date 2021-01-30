"use strict";

// drawing exercise with bezier curves and vertex
// created a "W" using illustrator to understand where the
// handles of each points are on the grid (see image in assets)
// made with tutorial : [code to type] bezier curves (typography + p5js)
// https://www.youtube.com/watch?v=8-v8a5zJbu4&t=579s
// exrecise by just junior

let x = 400;
let y = 400;
let cnv;
let canvasX;
let canvasY;

function setup() {
  cnv = createCanvas(1500,1000)
  canvasX = (windowWidth - width) / 2;
  canvasY = (windowHeight - height) / 2;
  cnv.position(canvasX, canvasY);

}

function draw(){
  background(255)

  push();
  stroke(0);
  strokeWeight(90);
  noFill()
  strokeCap(SQUARE);
  scale(0.5)
  drawWord();
  scale(0.4)
  pop();
}

  function drawWord(){
   // let pt1 = mouseX;

    beginShape();
    vertex(x + 100, y + 200)
    bezierVertex(x + mouseX, y + 400, x + 200, y + 700, x + 200, y + 700);
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
    bezierVertex(x + 1290, y + 455, x + 1125, y + 388, x + 1060, y + 380);
    bezierVertex(x + 1060, y + 380, x + 1450, y + 600, x + 1450, y + 800);
    endShape();

    // fourth letter : P
    beginShape();
    vertex(x + 1680, y + 225);
    bezierVertex(x + 2092, y + 225, x + 2092, y + 600, x + 1837, y + 510);
    bezierVertex(x + 1692, y + 460, x + 1680, y + 563, x + 1665, y + 800);
    bezierVertex(x + 1565, y + 512, x + 1660, y + 251, x + 1707, y + 216);
    endShape();
  }
