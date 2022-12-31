var idCounter = 0;
var x1;
var y1;
var x2;
var y2;
var squares = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(5);

  squares.push({
    id: idCounter,
    x1: 0,
    y1: 0,
    x2: 0,
    y2: windowHeight / 2,
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
    x2 = x1 + getRandomInt(25, 100);
    y2 = y1 + getRandomInt(-25, 50);

    var triangleTopWidth = windowWidth * 11 / 10 * 2 / 3;
    var triangleTopHeight = windowHeight * 11 / 10 / 2;
    var borderTopY = x2 / triangleTopWidth * triangleTopHeight + (windowHeight - triangleTopHeight);

    var triangleBottomWidth = windowWidth * 9 / 10 * 2 / 3;
    var triangleBottomHeight = windowHeight * 9 / 10 / 2;
    var borderBottomY = x2 / triangleBottomWidth * triangleBottomHeight + (windowHeight - triangleBottomHeight);

    if (y2 < borderTopY) {
      y2 += 50;
    }

    else if (y2 > borderBottomY) {
      y2 -= 50;
    }
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

  console.log(x1, y1, x2, y2)
}

function draw() {
  background(220);
  spawn();
  for (var i = 0; i < idCounter; i++) {
    fill('red');
    beginShape(TESS);
    vertex(squares[i].x1, squares[i].y1)
    vertex(squares[i].x2, squares[i].y2)
    vertex(squares[i].x2, windowWidth)
    vertex(squares[i].x1, windowHeight)
    endShape(CLOSE);
  }
}



