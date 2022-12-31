var idCounter = 0;
var x1;
var y1;
var x2;
var y2;
var squares = [];
var color2 = '#2a3033';

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(5);

  squares.push({
    id: idCounter,
    x1: 0,
    y1: 0,
    x2: 0,
    y2: windowHeight / 2,
    color: color2,
    delete: false
  })
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function spawn() {
  if (squares[idCounter].y2 < windowHeight + 100) {
    x1 = squares[idCounter].x2;
    y1 = squares[idCounter].y2;
    x2 = x1 + getRandomInt(40, 120);
    y2 = y1 + getRandomInt(-30, 55);

    var triangleWidth = windowWidth * 2 / 3;
    var triangleHeight = windowHeight / 2;
    var borderY = x2 / triangleWidth * triangleHeight + (windowHeight - triangleHeight);

    if (y2 + 150 < borderY) {
      y2 += 50;
    }

    else if (y2 - 150 > borderY) {
      y2 -= 50;
    }

    idCounter += 1;
    if (y1 <= y2) {
      color2 = '#2a3033';
    }
    else {
      color2 = '#6a7175';
    }
    squares.push({
      id: idCounter,
      x1: x1,
      y1: y1,
      x2: x2,
      y2: y2,
      color: color2,
      delete: false
    })
  }
}

function draw() {
  background(220);
  spawn();
  for (var i = 0; i < idCounter; i++) {
    fill(squares[i].color);
    beginShape(TESS);
    vertex(squares[i].x1, squares[i].y1)
    vertex(squares[i].x2, squares[i].y2)
    vertex(squares[i].x2, windowWidth)
    vertex(squares[i].x1, windowHeight)
    endShape(CLOSE);
  }
}



