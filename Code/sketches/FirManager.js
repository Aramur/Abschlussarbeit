class FirManager {
    idCounter = 0;
    firs = [];

    letFirstFir() {
        var fir = new Fir();
        fir.id = this.idCounter;
        fir.x = windowWidth / 3 - 120;
        fir.y = -150;
        fir.delete = false;

        this.firs.push(fir);
    }

    drawForest() {
        for (var i = 0; i < this.idCounter; i++) {
            this.firs[i].draw();
        }
    }


    letForest() {
        var x = this.firs[this.idCounter].x + Helper.getRandomInt(90, 120);
        var y = this.firs[this.idCounter].y + Helper.getRandomInt(-39, 96);

        this.idCounter += 1;

        var fir = new Fir();
        fir.id = this.idCounter;
        fir.x = x;
        fir.y = y;
        fir.delete = false;

        this.firs.push(fir);
    }
}