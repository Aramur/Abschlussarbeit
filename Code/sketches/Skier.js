class Skier {
    static images = [];

    rotateCounter = 0;
    rotation = 0;
    positionX = 0;
    positionY = 0;
    playbuttonRight = false;
    playbuttonLeft = false;

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
        this.positionX = width / 18 * 7;
        this.positionY = height / 3;
    }

    rotate(timeBetweenDraw) {
        if (this.rotateCounter >= 0.03 * timeBetweenDraw) {
            if (keyIsDown(DOWN_ARROW) || this.playbuttonLeft == true) {
                if (skier.rotation <= 5) {
                    skier.rotation += 1;
                }

            }
            if (keyIsDown(UP_ARROW) || this.playbuttonRight == true) {
                if (skier.rotation >= -5) {
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
        this.positionX -= 7 / 12 * height / 3000 * timeBetweenDraw * this.rotation / 10;
        this.positionY += 7 / 12 * width / 3000 * timeBetweenDraw * this.rotation / 10;


    }

    drawSkier() {
        image(Skier.images[this.rotation + 6], this.positionX, this.positionY, height / 4, height / 4);
    }
}