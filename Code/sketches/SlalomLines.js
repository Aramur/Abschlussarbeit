class SlalomLines {
    x1;
    y1;
    x2;
    y2;
    color;
    counter = 0;

    calculateLine() {
        console.log(this.counter)
        var pole = slalomManager.poles[this.counter];
        if (pole.type == 'blau') {
            this.x1 = pole.x + 104 / 640 * height / 4 + height;
            this.y1 = pole.y + 434 / 640 * height / 4 - width;
            this.x2 = pole.x + 104 / 640 * height / 4;
            this.y2 = pole.y + 434 / 640 * height / 4;
        }
        else if (pole.type == 'rot') {
            this.x1 = pole.x + 10 / 640 * height / 4;
            this.y1 = pole.y + 632 / 640 * height / 4;
            this.x2 = pole.x + 10 / 640 * height / 4 - height;
            this.y2 = pole.y + 632 / 640 * height / 4 + width;
        }
        else if (pole.type == 'start' || pole.type == 'ziel') {
            this.x1 = pole.x + 10 / 640 * height / 2;
            this.y1 = pole.y + 585 / 640 * height / 2;
            this.x2 = pole.x + 123 / 640 * height / 2;
            this.y2 = pole.y + 330 / 640 * height / 2;
        }

        if (skier.rotation < 0) {
            var oneOrThree = 0;
            var zeroOrTwo = 2;
        }
        else {
            var oneOrThree = 3;
            var zeroOrTwo = 1;
        }

        if (pole.type == 'rot' || pole.type == 'blau') {
            var x11 = pole.x + 10 / 640 * height / 4;
            var y11 = pole.y + 632 / 640 * height / 4;
            var x21 = pole.x + 110 / 640 * height / 4;
            var y21 = pole.y + 438 / 640 * height / 4;
        }
        else if (pole.type == 'start' || pole.type == 'ziel') {
            var x11 = pole.x + 15 / 640 * height / 2;
            var y11 = pole.y + 590 / 640 * height / 2;
            var x21 = pole.x + 130 / 640 * height / 2;
            var y21 = pole.y + 335 / 640 * height / 2;
        }
        var a1 = (y21 - y11) / (x21 - x11);
        var b1 = y11 - (a1 * x11);
        var testY = a1 * (skierHitbox.skierHitpoints[zeroOrTwo].x) + b1;

        if (skierHitbox.skierHitpoints[zeroOrTwo].y >= testY) {
            if (pole.type !== 'rot') {
                var x12 = skierHitbox.skierHitpoints[0].x
                var y12 = skierHitbox.skierHitpoints[0].y;
                var x22 = skierHitbox.skierHitpoints[1].x;
                var y22 = skierHitbox.skierHitpoints[1].y;

                var a2 = (y22 - y12) / (x22 - x12);
                var b2 = y12 - (a2 * x12);
                var testX = (b1 - b2) / (a2 - a1)

                if (pole.type == 'blau') {
                    if (testX < x21) {
                        this.slalomEnd()
                    }
                }
                else if (testX > x21) {
                    this.slalomEnd()
                }
            }


            if (pole.type !== 'blau') {
                var x12 = skierHitbox.skierHitpoints[2].x
                var y12 = skierHitbox.skierHitpoints[2].y;
                var x22 = skierHitbox.skierHitpoints[3].x;
                var y22 = skierHitbox.skierHitpoints[3].y;

                var a2 = (y22 - y12) / (x22 - x12);
                var b2 = y12 - (a2 * x12);
                var testX = (b1 - b2) / (a2 - a1)

                if (pole.type == 'rot') {
                    if (testX > x11) {
                        this.slalomEnd()
                    }
                }
                else if (testX < x11) {
                    this.slalomEnd()
                }
            }
        }
        testY = a1 * (skierHitbox.skierHitpoints[oneOrThree].x) + b1;
        if (skierHitbox.skierHitpoints[oneOrThree].y >= testY && pole.type !== 'ziel' && modus == 'slalom') {
            this.counter += 1
        }
        else if (skierHitbox.skierHitpoints[oneOrThree].y >= testY && pole.type == 'ziel' && modus == 'slalom') {
            score += 500;
            this.slalomEnd()
            won = true
        }
    }

    drawLine() {
        if (modus == 'slalom') {
            strokeWeight(height / 125)
            var pole = slalomManager.poles[this.counter];
            if (pole.type == 'blau') {
                stroke(12, 0, 198, 50);
            }
            else if (pole.type == 'rot') {
                stroke(198, 0, 0, 50);
            }
            else if (pole.type == 'start' || pole.type == 'ziel') {
                stroke(14, 194, 20, 100);
            }
            line(this.x1, this.y1, this.x2, this.y2);
        }
    }
    slalomEnd() {
        modus = 'stones';
        this.counter = 0;
        slalomManager.poles = [];
        meters++;
        spawnSpeed -= 0.1
    }
}