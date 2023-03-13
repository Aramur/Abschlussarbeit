class StoneManager {
    stones = [];
    layerX;
    layerY;
    layerWidth;
    layerHeight;
    let = true;

    letStones(timeBetweenDraw) {
        if (Helper.getRandomInt(1, timeBetweenDraw / 15) == 1) {
            this.layerWidth = Helper.getRandomInt(height / 10, height / 5);
            this.layerHeight = Helper.getRandomInt(height / 8, height / 4);
            this.layerX = width;
            this.layerY = Helper.getRandomInt(0, height + 500);

            var filteredChasms = chasmManager.chasms.filter(chasm => chasm.x2 >= this.layerX);
            filteredChasms = filteredChasms.filter(chasm => chasm.x1 <= this.layerX + this.layerWidth);

            for (let chasm = 0; chasm < filteredChasms.length; chasm++) {
                if (filteredChasms[chasm].x1 <= filteredChasms[chasm].x2) {
                    if (this.layerY <= filteredChasms[chasm].y2) {
                        this.let = false;
                    }
                }
                else if (this.layerY <= filteredChasms[chasm].y1) {
                    this.let = false;
                }
            }

            var filteredForest = firManager.firs[0].filter(fir => fir.x + height / 4 >= this.layerX);
            filteredForest = filteredForest.filter(fir => fir.x <= this.layerX + this.layerWidth);


            for (let fir = 0; fir < filteredForest.length; fir++) {
                if (filteredForest[fir].y + 550 / 5120 * height <= this.layerY + this.layerHeight) {
                    this.let = false;
                }
            }

            if (this.let == true) {
                var stone = new Stones()
                stone.layerX = this.layerX;
                stone.layerY = this.layerY;
                stone.layerWidth = this.layerWidth;
                stone.layerHeight = this.layerHeight;

                this.stones.push(stone);
            }

            this.let = true;
        }
    }


    drawStones() {
        for (let stone = 0; stone < this.stones.length; stone++) {
            this.stones[stone].draw();
        }
    }

    moveStone(timeBetweenDraw) {
        for (let stone = 0; stone < this.stones.length; stone++) {
            this.stones[stone].layerX -= 7 / 12 * width / 3000 * timeBetweenDraw;
            this.stones[stone].layerY -= 7 / 12 * height / 3000 * timeBetweenDraw;
        }
    }
}
