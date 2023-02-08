class FirManager {
    firs = [];
    rows = 12;

    letFirstFir() {
        for (let row = 0; row <= this.rows; row++) {
            this.firs.push([])

            var fir = new Fir();
            fir.id = 0;
            fir.x = -200;
            fir.y = windowHeight / 2 - 200 + row * 45;
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

            if (this.firs[row][id].y < windowHeight + 200) {
                var x = this.firs[row][id].x + Helper.getRandomInt(75, 120);
                var y = this.firs[row][id].y + Helper.getRandomInt(-26, 64);

                var triangleWidth = windowWidth / 3 * 2;
                var triangleHeight = windowHeight / 2 + row * 45;
                var yBorder = x / triangleWidth * triangleHeight + triangleHeight - 100;

                if (y + 45 < yBorder) {
                    y += 64;
                }
                else if (y - 45 > yBorder) {
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
                this.firs[row][fir].x -= 2 / 3 * windowWidth / 3000 * timeBetweenDraw;
                this.firs[row][fir].y -= 1 / 2 * windowHeight / 3000 * timeBetweenDraw;
            }
        }
    }
}