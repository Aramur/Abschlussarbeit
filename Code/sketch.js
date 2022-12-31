function setup() {
  createCanvas(displayWidth, displayHeight);
  frameRate(1);
}

var idCounter = 0;
var x1
var y1
var x2
var y2
var x3
var y3
var triangles = [];

triangles.push({
  id: idCounter,
  x1: 0,
  y1: 0,
  x2: 0,
  y2: 600,
  x3: 0,
  y3: 0,
  delete: false
})

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function move() {

}

function spawn() {
  x1 = triangles[idCounter].x2;
  y1 = triangles[idCounter].y2;
  x2 = x1 + getRandomInt(25, 100);
  y2 = y1 + getRandomInt(-50, 50);
  console.log(x1, y1, x2, y2);
  if (y1 > y2) {
    x3 = x2;
    y3 = y1;
  }
  else {
    x3 = x1;
    y3 = y2;
  }
  fill('red')
  triangle(x1, y1, x2, y2, x3, y3);
  triangles.push({
    id: idCounter,
    x1: x1,
    y1: y1,
    x2: x2,
    y2: y2,
    x3: x3,
    y3: y3,
    delete: false
  })
  idCounter += 1;
}
function draw() {
  background(220);
  //points.forEach(point => move())//
  spawn();
}



