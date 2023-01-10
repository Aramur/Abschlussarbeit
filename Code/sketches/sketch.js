var idCounterChasm = 0;
var x1chasm;
var y1chasm;
var x2chasm;
var y2chasm;
var chasms = [];
var colorchasm = '#2a3033';

var fir;
var idCounterForest = 0;
var xforest1;
var yforest1;
var points = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(5);
  fir = loadImage('pictures/fir.png');

  var square = new Chasms();
  square.id = idCounterChasm;
  square.x1 = 0;
  square.y1 = 0;
  square.x2 = 0;
  square.y2 = windowHeight / 2;
  square.color = colorchasm;
  square.delete = false;

  chasms.push(square);

  points.push({
    id: idCounterForest,
    x: windowWidth / 3 - 120,
    y: -150,
    delete: false
  })
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function letChasm() {
  if (chasms[idCounterChasm].y2 < windowHeight + 100) {
    x1chasm = chasms[idCounterChasm].x2;
    y1chasm = chasms[idCounterChasm].y2;
    x2chasm = x1chasm + getRandomInt(40, 100);
    y2chasm = y1chasm + getRandomInt(-26, 64);

    var triangleWidthChasm = windowWidth * 2 / 3;
    var triangleHeightChasm = windowHeight / 2;
    var borderYChasm = x2chasm / triangleWidthChasm * triangleHeightChasm + (windowHeight - triangleHeightChasm);

    if (y2chasm + 100 < borderYChasm) {
      y2chasm += 50;
    }

    else if (y2chasm - 100 > borderYChasm) {
      y2chasm -= 50;
    }

    idCounterChasm += 1;
    if (y1chasm <= y2chasm) {
      colorchasm = '#2a3033'; //color(150);
    }
    else {
      colorchasm = '#6a7175';
    }
    var square = new Chasms()
    square.x1 = x1chasm;
    square.id = idCounterChasm;
    square.y1 = y1chasm;
    square.x2 = x2chasm;
    square.y2 = y2chasm;
    square.color = colorchasm;
    square.delete = false;

    chasms.push(square);
  }
}

function letForest() {
  xforest1 = points[idCounterForest].x + getRandomInt(90, 120);
  yforest1 = points[idCounterForest].y + getRandomInt(-39, 96);
  idCounterForest += 1;
  points.push({
    id: idCounterForest,
    x: xforest1,
    y: yforest1,
    delete: false
  })

  var triangleWidthForest1 = windowWidth * 2 / 3;
  var triangleHeightForest1 = windowHeight / 2;
  var borderYForest1 = xforest1 / triangleWidthForest1 * triangleHeightForest1 + (windowHeight - triangleHeightForest1);
}

function draw() {
  background(220);
  letChasm();
  letForest();
  for (var i = 0; i < idCounterChasm; i++) {
    chasms[i].draw();
  }
  for (var i = 0; i < idCounterForest; i++) {
    image(fir, points[i].x, points[i].y, 200, 200);
  }

}