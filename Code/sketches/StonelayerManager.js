class StonelayerManager {
    stonelayers = [];
    layerX;
    layerY;
    layerWidth;
    layerHeight;
    layerHeightTopBoarder;
    layerHeightBottomBoarder;
    biggestY;
    checkedLayerY;
    let = true;

    drawStonelayers() {
        for (let stone = 0; stone < this.stonelayers.length; stone++) {
            this.stonelayers[stone].draw();
        }
    }

    letStonelayers(timeBetweenDraw) {
        if (Helper.getRandomInt(1, timeBetweenDraw * spawnSpeed) == 1) {
            var size = Helper.getRandomInt(1200, 800) / 100;
            this.layerWidth = height / size * 2;
            this.layerHeight = width / size;
            this.layerX = width + height / 4;

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
                    if (filteredChasms[chasm].y1 >= chasmPoint1) {
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
                var littleWidth = this.layerX + this.layerWidth - filteredChasms[0].x1;
                var chasmPoint2 = filteredChasms[0].y1 + littleWidth / chasmWidth * chasmHeight;
            }

            this.layerHeightTopBoarder = max(chasmPoint0, chasmPoint1, chasmPoint2);


            var filteredForest = firManager.firs[0].filter(fir => fir.x + height / 4 >= this.layerX);
            filteredForest = filteredForest.filter(fir => fir.x <= this.layerX + this.layerWidth);

            var firLine = 0;
            for (let fir = 0; fir < filteredForest.length; fir++) {
                if (filteredForest[fir].y + height / 8 >= firLine) {
                    firLine = filteredForest[fir].y + 300 / 2560 * height;
                }
            }

            this.layerHeightBottomBoarder = firLine;

            this.checkedLayerY = false
            var filteredStonelayers = this.stonelayers.filter(stone => stone.layerX + stone.layerWidth >= this.layerX)
            for (let escape = 0; this.checkedLayerY == false; escape++) {
                this.checkedLayerY = true;
                this.layerY = Helper.getRandomInt(this.layerHeightTopBoarder, this.layerHeightBottomBoarder - this.layerHeight);
                for (let stone = 0; stone < filteredStonelayers.length; stone++) {
                    if (filteredStonelayers[stone].layerY <= this.layerY + this.layerHeight) {
                        if (filteredStonelayers[stone].layerY >= this.layerY) {
                            this.checkedLayerY = false;
                        }
                    }
                    if (filteredStonelayers[stone].layerY + filteredStonelayers[stone].layerHeight <= this.layerY + this.layerHeight) {
                        if (filteredStonelayers[stone].layerY + filteredStonelayers[stone].layerHeight >= this.layerY) {
                            this.checkedLayerY = false;

                        }
                    }
                    if (filteredStonelayers[stone].layerY <= this.layerY) {
                        if (filteredStonelayers[stone].layerY + filteredStonelayers[stone].layerHeight >= this.layerY + this.layerHeight) {
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
                var stonelayer = new Stonelayer()
                stonelayer.layerX = this.layerX;
                stonelayer.layerY = this.layerY;
                stonelayer.layerWidth = this.layerWidth;
                stonelayer.layerHeight = this.layerHeight;

                this.stonelayers.push(stonelayer);
            }
            this.let = true;
        }
        this.stonelayers = this.stonelayers.filter(stone => stone.layerY >= - height / 4);
    }

    moveStoneLayers(timeBetweenDraw) {
        for (let stone = 0; stone < this.stonelayers.length; stone++) {
            this.stonelayers[stone].layerX -= 7 / 12 * width / 3000 * timeBetweenDraw;
            this.stonelayers[stone].layerY -= 7 / 12 * height / 3000 * timeBetweenDraw;
        }
    }
}