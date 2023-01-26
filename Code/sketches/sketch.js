var chasmManager = new ChasmManager();
var firManager = new FirManager();
var skier = new Skier();

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(20);
  Fir.loadImage();
  Skier.loadImage();
  chasmManager.letFirstChasm();
  firManager.letFirstFir();
}

function draw() {
  background(220);
  chasmManager.letChasm();
  firManager.letForest();
  chasmManager.drawChasms();
  firManager.drawForest();
  skier.calculateSkier();
}

function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    if (skier.rotation <= 4) {
      skier.rotation += 1;
    }

  }
  else if (keyCode == RIGHT_ARROW) {
    if (skier.rotation >= -4) {
      skier.rotation -= 1;
    }
  }
}