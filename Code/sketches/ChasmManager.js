class ChasmManager {
    idCounter = 0;
    chasms = [];

    letFirstChasm() {
        var chasm = new Chasms();
        chasm.id = this.idCounter;
        chasm.x1 = 0;
        chasm.y1 = 0;
        chasm.x2 = 0;
        chasm.y2 = windowHeight / 2;
        chasm.color = this.getColor(chasm.y1, chasm.y2);
        chasm.delete = false;

        this.chasms.push(chasm);
    }

    drawChasms() {
        for (var i = 0; i < this.idCounter; i++) {
            this.chasms[i].draw();
        }
    }

    letChasm() {
        if (this.chasms[this.idCounter].y2 < windowHeight + 100) {
            var x1 = this.chasms[this.idCounter].x2;
            var y1 = this.chasms[this.idCounter].y2;
            var x2 = x1 + Helper.getRandomInt(40, 100);
            var y2 = y1 + Helper.getRandomInt(-26, 64);

            var triangleWidthChasm = windowWidth * 2 / 3;
            var triangleHeightChasm = windowHeight / 2;
            var borderYChasm = x2 / triangleWidthChasm * triangleHeightChasm + (windowHeight - triangleHeightChasm);

            if (y2 + 100 < borderYChasm) {
                y2 += 50;
            }
            else if (y2 - 100 > borderYChasm) {
                y2 -= 50;
            }

            this.idCounter += 1;

            var color = this.getColor(y1, y2);

            var chasm = new Chasms()
            chasm.x1 = x1;
            chasm.id = this.idCounter;
            chasm.y1 = y1;
            chasm.x2 = x2;
            chasm.y2 = y2;
            chasm.color = color;
            chasm.delete = false;

            this.chasms.push(chasm);
        }
    }

    getColor(y1, y2) {
        if (y1 <= y2) {
            return '#2a3033'; //color(150);
        }
        else {
            return '#6a7175';
        }
    }
}