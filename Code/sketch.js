function setup() {
  createCanvas(displayWidth, displayHeight);
  frameRate(1);
}

var idCounter = 0;
var x1;
var y1;
var x2;
var y2;
var squares = [];

squares.push({
  id: idCounter,
  x1: 0,
  y1: 0,
  x2: 0,
  y2: 600,
  delete: false
})

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function spawn() {
  x1 = squares[idCounter].x2;
  y1 = squares[idCounter].y2;
  x2 = x1 + getRandomInt(25, 100);
  y2 = y1 + getRandomInt(-25, 50);
  idCounter += 1;
  squares.push({
    id: idCounter,
    x1: x1,
    y1: y1,
    x2: x2,
    y2: y2,
    delete: false
  })
}

function draw() {
  background(220);
  spawn();
  for (var i = 0; i < idCounter; i++) {
    fill('red');
    beginShape(TESS);
    vertex(squares[i].x1, squares[i].y1)
    vertex(squares[i].x2, squares[i].y2)
    vertex(squares[i].x2, displayHeight)
    vertex(squares[i].x1, displayHeight)
    endShape(CLOSE);
  }
}



