class FirManager {
    firs = [];
    rows = 12;

    letFirstFir() {
        for (let row = 0; row <= this.rows; row++) {
            this.firs.push([])

            var fir = new Fir();
            fir.id = 0;
            fir.x = -200;
            fir.y = height / 2 - 200 + row * height / 20;
            fir.delete = false;

            this.firs[row].push(fir);
        }
    }

    drawForest() {
        for (let row = 0; row <= this.rows; row++) {
            for (var id = 0; id < this.firs[row].length; id++) {
                this.firs[row][id].draw();
            }
        }
    }

    letForest() {
        for (let row = 0; row <= this.rows; row++) {
            var id = this.firs[row].length - 1;

            if (this.firs[row][id].y < height + 200) {
                var x = this.firs[row][id].x + Helper.getRandomInt(height / 10, height / 7);
                var y = this.firs[row][id].y + Helper.getRandomInt(height / 36, height / 12);

                var triangleWidth = width / 3 * 2;
                var triangleHeight = height / 2 + row * height / 20;
                var yBorder = x / triangleWidth * triangleHeight + triangleHeight - 100;

                if (y + height / 20 < yBorder) {
                    y += 64;
                }
                else if (y - height / 20 > yBorder) {
                    y -= 26;
                }

                var fir = new Fir();
                fir.id = id + 1;
                fir.x = x;
                fir.y = y;
                fir.delete = false;

                this.firs[row] = this.firs[row].filter(fir => fir.x >= - 300);

                this.firs[row].push(fir);
            }
        }
    }

    moveForest(timeBetweenDraw) {
        for (let row = 0; row <= this.rows; row++) {
            for (let fir = 0; fir <= this.firs[row].length - 1; fir++) {
                this.firs[row][fir].x -= 2 / 3 * width / 3000 * timeBetweenDraw;
                this.firs[row][fir].y -= 1 / 2 * height / 3000 * timeBetweenDraw;
            }
        }
    }
}