var chasmManager = new ChasmManager();
var firManager = new FirManager();

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(5);
  Fir.loadImage();
  chasmManager.letFirstChasm();
  firManager.letFirstFir();
}

function draw() {
  background(220);
  chasmManager.letChasm();
  firManager.letForest();
  chasmManager.drawChasms();
  firManager.drawForest();
}