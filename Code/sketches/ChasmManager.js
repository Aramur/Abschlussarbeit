class ChasmManager {
    chasms = [];

    letFirstChasm() {
        var chasm = new Chasm();
        chasm.id = this.chasms.length;
        chasm.x1 = 0;
        chasm.y1 = 0;
        chasm.x2 = width / 3;
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
            var y2 = y1 + Helper.getRandomInt(-height / 38, height / 14);

            var triangleWidth = width * 2 / 3;
            var triangleHeight = height / 2;
            var yBorder = triangleHeight - (width - x2) / triangleWidth * triangleHeight + height / 18;

            if (y2 + 100 < yBorder) {
                y2 += 64;
            }
            else if (y2 - 100 > yBorder) {
                y2 -= 26;
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
        var gradient = (y1 - y2) / (x2 - x1) * 35 + height / 17;
        return gradient, gradient, gradient;
    }

    moveChasm(timeBetweenDraw) {
        for (let chasm = 0; chasm < this.chasms.length; chasm++) {
            this.chasms[chasm].x1 -= 2 / 3 * width / 3000 * timeBetweenDraw;
            this.chasms[chasm].y1 -= 1 / 2 * height / 3000 * timeBetweenDraw;
            this.chasms[chasm].x2 -= 2 / 3 * width / 3000 * timeBetweenDraw;
            this.chasms[chasm].y2 -= 1 / 2 * height / 3000 * timeBetweenDraw;
        }
    }
}

