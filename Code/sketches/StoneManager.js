class StoneManager {
    stones = [];
    layerX;
    layerY;
    layerWidth;
    layerHeight;
    layerHeightTopBoarder;
    layerHeightBottomBoarder;
    biggestY;
    checkedLayerY;
    let = true;

    letStones(timeBetweenDraw) {
        if (Helper.getRandomInt(1, timeBetweenDraw) == 1) {
            this.layerWidth = Helper.getRandomInt(height / 10, height / 5);
            this.layerHeight = Helper.getRandomInt(height / 8, height / 4);
            this.layerX = width + 200;

            var filteredChasms = chasmManager.chasms.filter(chasm => chasm.x2 >= this.layerX);
            filteredChasms = filteredChasms.filter(chasm => chasm.x1 <= this.layerX);
            if (filteredChasms.length >= 1) {
                var chasmWidth = filteredChasms[0].x2 - filteredChasms[0].x1;
                var chasmHeight = filteredChasms[0].y2 - filteredChasms[0].y1;
                var littleWidth = this.layerX - filteredChasms[0].x1;
                var chasmPoint0 = filteredChasms[0].y1 + littleWidth / chasmWidth * chasmHeight;
            }

            var filteredChasms = chasmManager.chasms.filter(chasm => chasm.x2 >= this.layerX);
            filteredChasms = filteredChasms.filter(chasm => chasm.x1 <= this.layerX + this.layerWidth);
            var chasmPoint1 = 0;
            for (let chasm = 0; chasm < filteredChasms.length; chasm++) {
                if (filteredChasms[chasm].x1 >= this.layerX) {
                    if (filteredChasms[chasm].y1 <= chasmPoint1) {
                        chasmPoint1 = filteredChasms[chasm].y1;
                    }
                }
                if (filteredChasms[chasm].x2 <= this.layerX + this.layerWidth) {
                    if (filteredChasms[chasm].y2 >= chasmPoint1) {
                        chasmPoint1 = filteredChasms[chasm].y1;
                    }
                }
            }

            var filteredChasms = chasmManager.chasms.filter(chasm => chasm.x2 >= this.layerX + this.layerWidth);
            filteredChasms = filteredChasms.filter(chasm => chasm.x1 <= this.layerX + this.layerWidth);
            if (filteredChasms.length >= 1) {
                var chasmWidth = filteredChasms[0].x2 - filteredChasms[0].x1;
                var chasmHeight = filteredChasms[0].y2 - filteredChasms[0].y1;
                var littleWidth = this.layerX - filteredChasms[0].x1;
                var chasmPoint2 = filteredChasms[0].y1 + littleWidth / chasmWidth * chasmHeight;
            }

            this.layerHeightTopBoarder = max(chasmPoint0, chasmPoint1, chasmPoint2);


            var filteredForest = firManager.firs[0].filter(fir => fir.x + height / 4 >= this.layerX);
            filteredForest = filteredForest.filter(fir => fir.x <= this.layerX + this.layerWidth);

            var firLine = 0;
            for (let fir = 0; fir < filteredForest.length; fir++) {
                if (filteredForest[fir].y >= firLine) {
                    firLine = filteredForest[fir].y;
                }
            }

            this.layerHeightBottomBoarder = firLine;

            this.checkedLayerY = false
            var filteredStones = this.stones.filter(stone => stone.layerX + stone.layerWidth >= this.layerX)
            for (let escape = 0; this.checkedLayerY == false; escape++) {
                this.checkedLayerY = true;
                this.layerY = Helper.getRandomInt(this.layerHeightTopBoarder, this.layerHeightBottomBoarder - this.layerHeight);
                for (let stones = 0; stones < filteredStones.length; stones++) {
                    if (filteredStones[stones].layerY <= this.layerY + this.layerHeight) {
                        if (filteredStones[stones].layerY >= this.layerY) {
                            this.checkedLayerY = false;
                        }
                    }
                    if (filteredStones[stones].layerY + filteredStones[stones].layerHeight <= this.layerY + this.layerHeight) {
                        if (filteredStones[stones].layerY + filteredStones[stones].layerHeight >= this.layerY) {
                            this.checkedLayerY = false;

                        }
                    }
                    if (filteredStones[stones].layerY <= this.layerY) {
                        if (filteredStones[stones].layerY + filteredStones[stones].layerHeight >= this.layerY + this.layerHeight) {
                            this.checkedLayerY = false;

                        }
                    }
                }
                if (escape >= 10) {
                    this.checkedLayerY = true;
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
