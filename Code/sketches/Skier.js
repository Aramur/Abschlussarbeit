class Skier {
    static skierImage;
    static images = [];

    rotateCounter = 0;
    rotation = 0;
    positionX = 0;
    positionY = 0;

    static loadImage() {
        Skier.images.push(loadImage('pictures/skier-6.png'));
        Skier.images.push(loadImage('pictures/skier-5.png'));
        Skier.images.push(loadImage('pictures/skier-4.png'));
        Skier.images.push(loadImage('pictures/skier-3.png'));
        Skier.images.push(loadImage('pictures/skier-2.png'));
        Skier.images.push(loadImage('pictures/skier-1.png'));
        Skier.images.push(loadImage('pictures/skier0.png'));
        Skier.images.push(loadImage('pictures/skier1.png'));
        Skier.images.push(loadImage('pictures/skier2.png'));
        Skier.images.push(loadImage('pictures/skier3.png'));
        Skier.images.push(loadImage('pictures/skier4.png'));
        Skier.images.push(loadImage('pictures/skier5.png'));
        Skier.images.push(loadImage('pictures/skier6.png'));
    }

    loadSkier() {
        this.positionX = width / 3;
        this.positionY = height / 3 - height / 8;
    }

    rotate(timeBetweenDraw) {
        if (this.rotateCounter >= 0.03 * timeBetweenDraw) {
            if (keyIsDown(LEFT_ARROW)) {
                if (skier.rotation <= 5) {
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
        this.positionX -= 1 / 2 * windowHeight / (54000 / timeBetweenDraw) * this.rotation;
        this.positionY += 2 / 3 * width / (54000 / timeBetweenDraw) * this.rotation;


    }

    drawSkier() {
        image(Skier.images[this.rotation + 5], this.positionX, this.positionY, height / 4, height / 4);
    }
}