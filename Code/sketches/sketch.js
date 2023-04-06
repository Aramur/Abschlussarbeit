var chasmManager = new ChasmManager();
var firManager = new FirManager();
var skierHitbox = new SkierHitbox();
var skier = new Skier();
var stonelayerManager = new StonelayerManager();
var stoneManager = new StoneManager();
var firebaseManager = new FirebaseManager();
var play = true;
var score = 0;
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
  firebaseManager.initialize();
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
    stonelayerManager.letStonelayers(timeBetweenDraw);
    stoneManager.letStones();
    stonelayerManager.moveStoneLayers(timeBetweenDraw);
    stoneManager.moveStones(timeBetweenDraw);
    chasmManager.drawChasms();
    stoneManager.drawStones();
    skier.drawSkier();
    firManager.drawForest();

    score += 1
    fill(255);
    text(score, width * 19 / 20, height / 20);


    if (fpsDisplayed) {
      //stonelayerManager.drawStonelayers();

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
  else {
    document.getElementById("home").style.zIndex = 1;
  }
}

function keyTyped() {
  if (key == '*') {
    fpsDisplayed = !fpsDisplayed;
  }
}



