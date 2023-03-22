var chasmManager = new ChasmManager();
var firManager = new FirManager();
var skierHitbox = new SkierHitbox();
var skier = new Skier();
var stonelayerManager = new StonelayerManager();
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
    skier.rotate(timeBetweenDraw);
    skier.calculateSkier(timeBetweenDraw);
    skierHitbox.calculateSkierHitboxes();
    chasmManager.letChasm();
    chasmManager.moveChasm(timeBetweenDraw);
    firManager.letForest();
    firManager.moveForest(timeBetweenDraw);
    chasmManager.drawChasms();
    skier.drawSkier();
    firManager.drawForest();
    stonelayerManager.letStonelayers(timeBetweenDraw);
    stonelayerManager.moveStone(timeBetweenDraw);
    stonelayerManager.drawStonelayers();
  }


  if (fpsDisplayed) {
    fill(255);
    text(Math.round(frameRate()), width / 20, height - height / 20);

    stroke('black')
    strokeWeight(10);
    for (let points = 0; points <= 3; points++) {
      point(skierHitbox.skierHitpoints[points].x, skierHitbox.skierHitpoints[points].y)
    }
  }

  timeOfLastDraw += timeBetweenDraw;
}

function keyTyped() {
  if (key == 'f') {
    fpsDisplayed = !fpsDisplayed;
  }
}