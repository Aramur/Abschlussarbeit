var chasmManager = new ChasmManager();
var firManager = new FirManager();
var skierHitbox = new SkierHitbox();
var skier = new Skier();
var stonelayerManager = new StonelayerManager();
var stoneManager = new StoneManager();
var slalomManager = new SlalomManager();
var slalomLines = new SlalomLines();
var firebaseManager = new FirebaseManager();
var play = true;
var spawnSpeed = 2;
var score = 0;
var meters = 0;
var modus = 'stones';
var won = false;
var wonCounter = 0;
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
  Slalom.loadImage();
  chasmManager.letFirstChasm();
  firManager.letFirstFir();
  skier.loadSkier();
  firebaseManager.initialize();

  for (times = 0; times <= 20; times++) {
    chasmManager.letChasm();
    firManager.letForest();
  }
}

function draw() {
  const timeBetweenDraw = Date.now() - timeOfLastDraw;

  if (play == true) {
    if (meters > 50) {
      if (Number.isInteger(meters / 1000) == true) {
        modus = 'change';
      }
      else if (Number.isInteger((meters - 50) / 1000) == true) {
        modus = 'slalom';
      }
    }

    background(220);
    skier.rotate(timeBetweenDraw);
    skier.calculateSkier(timeBetweenDraw);
    skierHitbox.calculateSkierHitboxes();
    chasmManager.letChasm();
    chasmManager.moveChasm(timeBetweenDraw);
    firManager.letForest();
    firManager.moveForest(timeBetweenDraw);
    if (modus == 'stones') {
      stonelayerManager.letStonelayers(timeBetweenDraw);
      stoneManager.letStones();
      meters++;
    }
    else if (modus == 'slalom') {
      slalomManager.letPoles();
      slalomLines.calculateLine();
    }
    else if (modus == 'change') {
      meters++;
    }
    stonelayerManager.moveStoneLayers(timeBetweenDraw);
    stoneManager.moveStones(timeBetweenDraw);
    slalomManager.movePoles(timeBetweenDraw);
    slalomLines.drawLine();
    chasmManager.drawChasms();
    stoneManager.drawStones();
    slalomManager.drawPoles('before');
    skier.drawSkier();
    slalomManager.drawPoles('after');
    firManager.drawForest();

    fill(255);
    textSize(height / 20)
    text(score, width * 9 / 10, height / 10);
    if (won == true) {
      text('+500', width * 9 / 10, height / 6);
      wonCounter++;
      if (wonCounter >= 50) {
        won = false;
        wonCounter = 0;
      }
    }

    if (fpsDisplayed) {
      stonelayerManager.drawStonelayers();

      fill(255);
      text(Math.round(frameRate()), width / 20, height - height / 20);

      stroke('black')
      strokeWeight(10);
      for (let points = 0; points <= 3; points++) {
        point(skierHitbox.skierHitpoints[points].x, skierHitbox.skierHitpoints[points].y)
      }
    }
    score += 1;

    timeOfLastDraw += timeBetweenDraw;
  }
  else {
    document.getElementById("score").innerHTML = 'Score:' + score;
    document.querySelectorAll('p').forEach(p => {
      p.style.fontSize = height / 30 + 'px';
    })
    document.querySelectorAll('h4').forEach(p => {
      p.style.fontSize = height / 30 + 'px';
    })
    document.getElementById("home").style.zIndex = 1;
  }
}

function keyTyped() {
  if (key == '*') {
    fpsDisplayed = !fpsDisplayed;
  }
}