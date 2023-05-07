var snowflakeManager = new SnowflakeManager();
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
var transparence = 0;
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
  Snowflakes.loadImage();
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
  background(220);
  if (play == true) {
    if (meters > 50) {
      if (Number.isInteger(meters / 1000) == true) {
        modus = 'change';
      }
      else if (Number.isInteger((meters - 50) / 1000) == true) {
        modus = 'slalom';
      }
    }
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

    if (fpsDisplayed) {
      stonelayerManager.drawStonelayers();

      fill(255);
      text(Math.round(frameRate()), width / 20, height - height / 20);
    }
    score += 1;
    document.getElementById("home").style.zIndex = -1;
  }
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
  if (play == false) {
    if (transparence <= 255) {
      transparence += 0.5;
    }
    background(220, transparence)
    snowflakeManager.letSnowflakes(timeBetweenDraw);
    snowflakeManager.drawSnowflakes(timeBetweenDraw);

    document.getElementById("score").innerHTML = 'Score:' + score;
    document.querySelectorAll('p').forEach(p => {
      p.style.fontSize = height / 25 + 'px';
    })
    document.querySelectorAll('h4').forEach(h4 => {
      h4.style.fontSize = height / 25 + 'px';
    })
    document.querySelectorAll('button').forEach(button => {
      button.style.fontSize = height / 35 + 'px';
    })
    document.querySelectorAll('input').forEach(input => {
      input.style.fontSize = height / 35 + 'px';
    })
    document.getElementById("home").style.zIndex = 1;
  }

  timeOfLastDraw += timeBetweenDraw;
}

function keyTyped() {
  if (key == '*') {
    fpsDisplayed = !fpsDisplayed;
  }
}