var chasmManager = new ChasmManager();
var firManager = new FirManager();
var skier = new Skier();
var timeOfLastDraw = Date.now();
var fpsDisplayed = false;

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
  chasmManager.moveChasm(timeBetweenDraw);
  skier.rotate(timeBetweenDraw);
  firManager.letForest();
  firManager.moveForest(timeBetweenDraw);
  chasmManager.drawChasms();
  skier.calculateSkier(timeBetweenDraw);
  firManager.drawForest();


  if (fpsDisplayed) {
    fill(255);
    text(Math.round(frameRate()), windowWidth / 20, windowHeight - windowHeight / 20);
  }

  timeOfLastDraw += timeBetweenDraw;
}

function keyTyped() {
  if (key == 'f') {
    fpsDisplayed = !fpsDisplayed;
  }
}