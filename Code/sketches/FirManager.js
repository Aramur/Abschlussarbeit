class FirManager {
    idCounter = 0;
    firs = [];

    letFirstFir() {
        var fir = new Fir();
        fir.id = this.idCounter;
        fir.x = windowWidth / 3;
        fir.y = -170;
        fir.delete = false;

        this.firs.push(fir);
    }

    drawForest() {
        for (var i = 0; i < this.idCounter; i++) {
            this.firs[i].draw();
        }
    }


    letForest() {
        if (this.firs[this.idCounter].x < windowWidth + 200) {
            var x = this.firs[this.idCounter].x + Helper.getRandomInt(75, 120);
            var y = this.firs[this.idCounter].y + Helper.getRandomInt(-26, 64);

            var triangleWidth = windowWidth * 2 / 3;
            var triangleHeight = windowHeight / 2;
            var yBorder = triangleHeight - (windowWidth - x) / triangleWidth * triangleHeight - 170; //170 = pictureHeight - empty room

            if (y + 50 < yBorder) {
                y += 50;
            }
            else if (y - 50 > yBorder) {
                y -= 50;
            }

            this.idCounter += 1;

            var fir = new Fir();
            fir.id = this.idCounter;
            fir.x = x;
            fir.y = y;
            fir.delete = false;

            this.firs.push(fir);
        }
    }
}