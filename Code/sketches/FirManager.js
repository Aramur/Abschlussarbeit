class FirManager {
    firs = [];
    rows = 9;

    letFirstFir() {
        for (let row = 0; row <= this.rows; row++) {
            this.firs.push([])

            var fir = new Fir();
            fir.id = 0;
            fir.x = windowWidth / 3 - 300 + row * 120;
            fir.y = -200;
            fir.delete = false;

            this.firs[row].push(fir);
        }
    }

    drawForest() {
        for (let row = this.rows; row >= 0; row--) {
            for (var id = 0; id < this.firs[row].length; id++) {
                this.firs[row][id].draw();
            }
        }
    }

    letForest() {
        for (let row = 0; row <= this.rows; row++) {
            var id = this.firs[row].length - 1;
            console.log(id);
            if (this.firs[row][id].x < windowWidth + 200) {
                var x = this.firs[row][id].x + Helper.getRandomInt(75, 120);
                var y = this.firs[row][id].y + Helper.getRandomInt(-26, 64);

                var triangleWidth = windowWidth * 2 / 3 - row * 120;
                var triangleHeight = windowHeight / 2 - row * 50;
                var yBorder = triangleHeight - (windowWidth - x) / triangleWidth * triangleHeight - 100;

                if (y + 50 < yBorder) {
                    y += 50;
                }
                else if (y - 50 > yBorder) {
                    y -= 64;
                }

                var fir = new Fir();
                fir.id = id + 1;
                fir.x = x;
                fir.y = y;
                fir.delete = false;

                this.firs[row] = this.firs[row].filter(fir => fir.y >= - 300);

                this.firs[row].push(fir);
            }
        }
    }

    moveForest() {
        for (let row = 0; row <= this.rows; row++) {
            for (let fir = 0; fir <= this.firs[row].length - 1; fir++) {
                this.firs[row][fir].x -= 2 / 3 * windowWidth / 500;
                this.firs[row][fir].y -= 1 / 2 * windowHeight / 500;
            }
        }
    }
}