class Skier {
    static skierImage;
    static images = [];

    rotateCounter = 0;
    rotation = 0;
    positionX = 0;
    positionY = 0;

    static loadImage() {
        Skier.skierImage = loadImage('pictures/skiertest.png')
        Skier.images.push(loadImage('pictures/ski-5.png'));
        Skier.images.push(loadImage('pictures/ski-4.png'));
        Skier.images.push(loadImage('pictures/ski-3.png'));
        Skier.images.push(loadImage('pictures/ski-2.png'));
        Skier.images.push(loadImage('pictures/ski-1.png'));
        Skier.images.push(loadImage('pictures/ski0.png'));
        Skier.images.push(loadImage('pictures/ski1.png'));
        Skier.images.push(loadImage('pictures/ski2.png'));
        Skier.images.push(loadImage('pictures/ski3.png'));
        Skier.images.push(loadImage('pictures/ski4.png'));
        Skier.images.push(loadImage('pictures/ski5.png'));
    }

    loadSkier() {
        if (this.positionX == 0) {
            this.positionX = windowWidth / 3;
        }
        if (this.positionY == 0) {
            this.positionY = windowHeight / 3 - 100;
        }
    }

    rotate(timeBetweenDraw) {
        if (this.rotateCounter >= 0.03 * timeBetweenDraw) {
            if (keyIsDown(LEFT_ARROW)) {
                if (skier.rotation <= 4) {
                    skier.rotation += 1;
                }

            }
            if (keyIsDown(RIGHT_ARROW)) {
                if (skier.rotation >= -4) {
                    skier.rotation -= 1;
                }
            }
            this.rotateCounter = 0;
        }
        else {
            this.rotateCounter += 1;
        }
    }


    calculateSkier(timeBetweenDraw) {
        this.positionX -= 1 / 2 * windowHeight / (30000 / timeBetweenDraw) * this.rotation;
        this.positionY += 2 / 3 * windowWidth / (30000 / timeBetweenDraw) * this.rotation;

        image(Skier.images[this.rotation + 5], this.positionX, this.positionY, 150, 150);
        image(Skier.skierImage, this.positionX, this.positionY, 150, 150);
    }
}