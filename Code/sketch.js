function setup() {
  createCanvas(displayWidth, displayHeight);
  frameRate(1);
}

var idCounter = 0;
var x;
var y;
var points = [];

points.push({
  id: idCounter,
  x: 0,
  y: 600,
  delete: false
})

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function spawn() {
  x = points[idCounter].x + getRandomInt(25, 100);
  y = points[idCounter].y + getRandomInt(-50, 50);
  idCounter += 1;
  points.push({
    id: idCounter,
    x: x,
    y: y,
    delete: false
  })
  console.log(x, y)
}

function draw() {
  background(220);
  spawn();
  fill('red');
  beginShape(TESS);
  for (var i = 0; i < idCounter; i++) {
    vertex(points[i].x, points[i].y)
  }
  vertex(displayWidth, displayHeight)
  vertex(0, displayHeight)
  endShape(CLOSE);
}



