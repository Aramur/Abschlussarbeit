class ChasmManager {
    chasms = [];

    letFirstChasm() {
        var chasm = new Chasm();
        chasm.id = this.chasms.length;
        chasm.x1 = 0;
        chasm.y1 = 0;
        chasm.x2 = width / 12 * 5;
        chasm.y2 = 0;
        chasm.color = this.getColor(chasm.y1, chasm.y2);

        this.chasms.push(chasm);
    }

    drawChasms() {
        for (let chasm = 0; chasm < this.chasms.length; chasm++) {
            this.chasms[chasm].draw();
        }
    }

    letChasm() {
        if (this.chasms[this.chasms.length - 1].y2 < width + 200) {
            var x1 = this.chasms[this.chasms.length - 1].x2;
            var y1 = this.chasms[this.chasms.length - 1].y2;
            var x2 = x1 + Helper.getRandomInt(height / 12, height / 7);
            var y2 = y1 + Helper.getRandomInt(-height / 18, height / 10.5);

            if (y2 + height / 8 < Helper.getYBoarderTop(x2)) {
                y2 += height / 14;
            }
            else if (y2 - height / 8 > Helper.getYBoarderTop(x2)) {
                y2 -= height / 24;
            }

            var color = this.getColor(y1, x1, y2, x2);

            var chasm = new Chasm()
            chasm.x1 = x1;
            chasm.id = this.chasms.length;
            chasm.y1 = y1;
            chasm.x2 = x2;
            chasm.y2 = y2;
            chasm.color = color;

            this.chasms.push(chasm);

            this.chasms = this.chasms.filter(chasm => chasm.x2 >= - 100);
        }
    }

    getColor(y1, x1, y2, x2) {
        var gradient = (y1 - y2) / (x2 - x1) * 35 + 50;
        return gradient, gradient, gradient;
    }

    moveChasm(timeBetweenDraw) {
        for (let chasm = 0; chasm < this.chasms.length; chasm++) {
            this.chasms[chasm].x1 -= 7 / 12 * width / 3000 * timeBetweenDraw;
            this.chasms[chasm].y1 -= 7 / 12 * height / 3000 * timeBetweenDraw;
            this.chasms[chasm].x2 -= 7 / 12 * width / 3000 * timeBetweenDraw;
            this.chasms[chasm].y2 -= 7 / 12 * height / 3000 * timeBetweenDraw;
        }
        for (let points = 2; points <= 3; points++) {
            var filteredChasms = this.chasms.filter(chasm => chasm.x2 >= skierHitbox.skierHitpoints[points].x);
            filteredChasms = filteredChasms.filter(chasm => chasm.x1 <= skierHitbox.skierHitpoints[points].x);


            if (filteredChasms.length >= 1) {
                var chasmWidth = filteredChasms[0].x2 - filteredChasms[0].x1;
                var chasmHeight = filteredChasms[0].y2 - filteredChasms[0].y1;
                var littleWidth = skierHitbox.skierHitpoints[points].x - filteredChasms[0].x1;
                var chasmPoint = filteredChasms[0].y1 + littleWidth / chasmWidth * chasmHeight;

                if (chasmPoint >= skierHitbox.skierHitpoints[points].y) {
                    play = false;
                    htmlCommunication.lostGame();
                }
            }
        }
    }
}

