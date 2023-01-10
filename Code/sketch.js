var idCounterChasm = 0;
var x1;
var y1;
var x2;
var y2;
var squares = [];
var color2 = '#2a3033';

var fir;
var idCounterForest = 0;
var x;
var y;
var points = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(5);
  fir = loadImage('pictures/fir.png');

  squares.push({
    id: idCounterChasm,
    x1: 0,
    y1: 0,
    x2: 0,
    y2: windowHeight / 2,
    color: color2,
    delete: false
  })
  points.push({
    id: idCounterForest,
    x: windowWidth / 3,
    y: -150,
    delete: false
  })
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function letChasm() {
  if (squares[idCounterChasm].y2 < windowHeight + 100) {
    x1 = squares[idCounterChasm].x2;
    y1 = squares[idCounterChasm].y2;
    x2 = x1 + getRandomInt(40, 100);
    y2 = y1 + getRandomInt(-26, 64);

    var triangleWidth = windowWidth * 2 / 3;
    var triangleHeight = windowHeight / 2;
    var borderY = x2 / triangleWidth * triangleHeight + (windowHeight - triangleHeight);

    if (y2 + 100 < borderY) {
      y2 += 50;
    }

    else if (y2 - 100 > borderY) {
      y2 -= 50;
    }

    idCounterChasm += 1;
    if (y1 <= y2) {
      color2 = '#2a3033'; //color(150);
    }
    else {
      color2 = '#6a7175';
    }
    squares.push({
      id: idCounterChasm,
      x1: x1,
      y1: y1,
      x2: x2,
      y2: y2,
      color: color2,
      delete: false
    })
  }
}

function letForest() {
  x = points[idCounterForest].x + getRandomInt(90, 120);
  y = points[idCounterForest].y + getRandomInt(-39, 96);
  idCounterForest += 1;
  points.push({
    id: idCounterForest,
    x: x,
    y: y,
    delete: false
  })
}

function draw() {
  background(220);
  letChasm();
  letForest();
  for (var i = 0; i < idCounterChasm; i++) {
    fill(squares[i].color);
    beginShape(TESS);
    vertex(squares[i].x1, squares[i].y1)
    vertex(squares[i].x2, squares[i].y2)
    vertex(squares[i].x2, windowWidth)
    vertex(squares[i].x1, windowHeight)
    endShape(CLOSE);
  }
  for (var i = 0; i < idCounterForest; i++) {
    image(fir, points[i].x, points[i].y, 200, 200);
  }
}