var chasmManager = new ChasmManager();

var fir;
var idCounterForest = 0;
var xforest1;
var yforest1;
var points = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(5);
  fir = loadImage('pictures/fir.png');
  chasmManager.letFirstChasm();

  points.push({
    id: idCounterForest,
    x: windowWidth / 3 - 120,
    y: -150,
    delete: false
  })
}

function letForest() {
  xforest1 = points[idCounterForest].x + Helper.getRandomInt(90, 120);
  yforest1 = points[idCounterForest].y + Helper.getRandomInt(-39, 96);
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
  chasmManager.letChasm();
  letForest();
  chasmManager.drawChasms();
  for (var i = 0; i < idCounterForest; i++) {
    image(fir, points[i].x, points[i].y, 200, 200);
  }

}