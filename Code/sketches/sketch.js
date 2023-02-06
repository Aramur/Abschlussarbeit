var chasmManager = new ChasmManager();
var firManager = new FirManager();
var skier = new Skier();
var timeOfLastDraw = Date.now();

function setup() {
  createCanvas(windowWidth, windowHeight);
  Fir.loadImage();
  Skier.loadImage();
  chasmManager.letFirstChasm();
  firManager.letFirstFir();
  skier.loadSkier();
}

function draw() {
  const timeBetweenDraw = Date.now() - timeOfLastDraw;

  background(220);
  chasmManager.letChasm();
  firManager.letForest();
  skier.rotate(timeBetweenDraw);
  chasmManager.drawChasms();
  firManager.drawForest();
  skier.calculateSkier(timeBetweenDraw);

  timeOfLastDraw += timeBetweenDraw;
}
