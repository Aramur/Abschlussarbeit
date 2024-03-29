class SlalomManager {
    poles = []

    letPoles() {
        if (this.poles.length == 0) {
            var pole = new Slalom();
            pole.x = width + height / 10;
            pole.y = Helper.getRandomInt(Helper.getYBoarderTop(width + height / 4), Helper.getYBoarderBottom(width + height / 4, 0) - height / 1.8);
            pole.type = 'start';

            this.poles.push(pole);

            var pole = new Slalom();
            pole.x = this.poles[0].x + width / 5;
            pole.y = this.poles[0].y + 0.57735 * (width / 5) + height / 5;
            pole.type = 'rot';

            this.poles.push(pole);
        }
        else if (this.poles.length == 7) {
            if (this.poles[6].x <= width + height / 4) {
                var pole = new Slalom();
                pole.x = width * 1.5;
                pole.y = Helper.getRandomInt(Helper.getYBoarderTop(width + width / 2) + height / 12, Helper.getYBoarderBottom(width * 1.5, 0) - height / 2);
                pole.type = 'ziel';

                this.poles.push(pole);
            }
        }
        var lastPole = this.poles[this.poles.length - 1];
        if (lastPole.x <= width + height / 4) {
            if (lastPole.type != 'ziel') {
                var x = lastPole.x + Helper.getRandomInt(width / 4, width / 6)
                var y;
                var type;

                if (Helper.getYBoarderTop(lastPole.x) + height / 6 >= lastPole.y) {
                    x = lastPole.x + width / 4;
                }
                else if (Helper.getYBoarderBottom(lastPole.x, 0) - height / 3 <= lastPole.y) {
                    x = lastPole.x + width / 4;
                }

                if (lastPole.type == 'rot') {
                    type = 'blau'
                    y = lastPole.y - 0.57735 * (x - lastPole.x);
                }
                if (lastPole.type == 'blau') {
                    type = 'rot'
                    y = lastPole.y + 0.57735 * (x - lastPole.x);
                }
                y += (x - lastPole.x) * height / width;
                x += width / 10;
                y += height / 10;

                var pole = new Slalom();
                pole.x = x;
                pole.y = y;
                pole.type = type;

                this.poles.push(pole);
            }
        }
    }

    drawPoles(timeing) {
        for (let pole = 0; pole < this.poles.length; pole++) {
            if (this.poles[pole].type == 'rot' || this.poles[pole].type == 'blau') {
                var x1 = this.poles[pole].x + 10 / 640 * height / 4;
                var y1 = this.poles[pole].y + 632 / 640 * height / 4;
                var x2 = this.poles[pole].x + 110 / 640 * height / 4;
                var y2 = this.poles[pole].y + 438 / 640 * height / 4;
            }
            else if (this.poles[pole].type == 'start' || this.poles[pole].type == 'ziel') {
                var x1 = this.poles[pole].x + 15 / 640 * height / 2;
                var y1 = this.poles[pole].y + 590 / 640 * height / 2;
                var x2 = this.poles[pole].x + 130 / 640 * height / 2;
                var y2 = this.poles[pole].y + 335 / 640 * height / 2;
            }
            var a = (y2 - y1) / (x2 - x1);
            var b = y1 - (a * x1);
            var testY = a * (skier.positionX + 175 / 640 * height / 4) + b;

            if (timeing == 'before') {
                if (testY >= skier.positionY + 175 / 640 * height / 4) {
                    this.poles[pole].draw();
                }
            }
            if (timeing == 'after') {
                if (testY <= skier.positionY + 175 / 640 * height / 4) {
                    this.poles[pole].draw();
                }
            }
        }
    }

    movePoles(timeBetweenDraw) {
        for (let pole = 0; pole < this.poles.length; pole++) {
            this.poles[pole].x -= 7 / 12 * width / 3000 * timeBetweenDraw;
            this.poles[pole].y -= 7 / 12 * height / 3000 * timeBetweenDraw;
        }
    }
}