class SlalomManager {
    poles = []

    letPoles() {
        if (this.poles.length == 0) {
            var pole = new Slalom();
            pole.x = width + height / 4;
            pole.y = Helper.getRandomInt(Helper.getYBoarderTop(width + height / 4) + height / 12, Helper.getYBoarderBottom(width + height / 4, 0) - height / 5);
            pole.type = 'start';

            this.poles.push(pole);
        }
        var lastPole = this.poles[this.poles.length - 1];
        if (lastPole.x <= width + height / 4) {
            if (lastPole.type != 'ziel') {
                var x = width + height / 2;
                var y;
                var type;

                if (lastPole.type == 'start') {
                    type = 'rot'
                    y = Helper.getRandomInt(lastPole.y + (593 + 640) / 640 * height / 3, Helper.getYBoarderBottom(lastPole.x + 30 / 640 * height / 3, 0) - height / 6);
                    console.log(y)
                }
                if (lastPole.type == 'rot') {
                    type = 'blau'
                    y = Helper.getRandomInt(Helper.getYBoarderTop(lastPole.x + 120 / 640 * height / 4) + height / 12, lastPole.y + (443 - 640) / 640 * height / 4);
                }
                if (lastPole.type == 'blau') {
                    type = 'rot'
                    y = Helper.getRandomInt(lastPole.y + (632 + 640) / 640 * height / 4, Helper.getYBoarderBottom(lastPole.x + 30 / 640 * height / 4, 0) - height / 6);
                }

                var pole = new Slalom();
                pole.x = x;
                pole.y = y;
                pole.type = type;

                this.poles.push(pole);
            }
        }

    }
    drawPoles() {
        for (let pole = 0; pole < this.poles.length; pole++) {
            this.poles[pole].draw();
        }
    }
    movePoles(timeBetweenDraw) {
        for (let pole = 0; pole < this.poles.length; pole++) {
            this.poles[pole].x -= 7 / 12 * width / 3000 * timeBetweenDraw;
            this.poles[pole].y -= 7 / 12 * height / 3000 * timeBetweenDraw;
        }
    }
}