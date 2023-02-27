var chasmManager = new ChasmManager();
var firManager = new FirManager();
var skierHitbox = new SkierHitbox();
var skier = new Skier();
var play = true;
var timeOfLastDraw = Date.now();
var fpsDisplayed = false;
var canvasHeightDisplacement = 0;
var canvasWidthDisplacement = 0;
var skiGradient = 0.425;

function setup() {
  if (windowHeight / windowWidth < skiGradient) {
    canvasWidthDisplacement = windowWidth - windowHeight / skiGradient;
  }
  else if (windowHeight / windowWidth > skiGradient) {
    canvasHeightDisplacement = windowHeight - windowWidth * skiGradient;
  }

  let cnv = createCanvas(windowWidth - canvasWidthDisplacement, windowHeight - canvasHeightDisplacement);
  cnv.position(canvasWidthDisplacement / 2, canvasHeightDisplacement / 2)

  skierHitbox.pushHitboxes();
  Fir.loadImage();
  Skier.loadImage();
  chasmManager.letFirstChasm();
  firManager.letFirstFir();
  skier.loadSkier();
}

function draw() {
  const timeBetweenDraw = Date.now() - timeOfLastDraw;

  if (play == true) {
    background(220);
    skierHitbox.calculateSkierHitboxes();
    chasmManager.letChasm();
    chasmManager.moveChasm(timeBetweenDraw);
    skier.rotate(timeBetweenDraw);
    skier.calculateSkier(timeBetweenDraw);
    firManager.letForest();
    firManager.moveForest(timeBetweenDraw);
    chasmManager.drawChasms();
    skier.drawSkier();
    firManager.drawForest();
  }


  if (fpsDisplayed) {
    fill(255);
    text(Math.round(frameRate()), width / 20, height - height / 20);
  }

  timeOfLastDraw += timeBetweenDraw;
}

function keyTyped() {
  if (key == 'f') {
    fpsDisplayed = !fpsDisplayed;
  }
}