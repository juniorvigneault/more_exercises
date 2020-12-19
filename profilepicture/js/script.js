"use strict";

let emoji;

function preload(){
  emoji = loadImage(`assets/images/emoji.png`)
}

function setup() {
  createCanvas(800, 800)
  noCursor();
}

function draw() {

  push();
  imageMode(CENTER);
  image(emoji, mouseX, mouseY, emoji.width, emoji.height)
  pop();
}
