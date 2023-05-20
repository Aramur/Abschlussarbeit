class StoneManager {
    stones = [];
    points = [];

    drawStones() {
        for (let stone = 0; stone < this.stones.length; stone++) {
            this.stones[stone].draw();
        }
    }

    letStones() {
        for (let layer = stonelayerManager.stonelayers.length - 1; this.stones.length < stonelayerManager.stonelayers.length; layer++) {
            var thisLayer = stonelayerManager.stonelayers[layer];
            if (thisLayer.layerWidth < thisLayer.layerHeight) {
                this.points = [
                    [
                        thisLayer.layerX + Helper.getRandomInt(45, 55) / 100 * thisLayer.layerWidth,
                        thisLayer.layerX + Helper.getRandomInt(87.3, 97.3) / 100 * thisLayer.layerWidth,
                        thisLayer.layerX + Helper.getRandomInt(45, 55) / 100 * thisLayer.layerWidth,
                        thisLayer.layerX + Helper.getRandomInt(2.7, 12.7) / 100 * thisLayer.layerWidth
                    ],
                    [
                        thisLayer.layerY + Helper.getRandomInt(5, 15) / 100 * thisLayer.layerHeight,
                        thisLayer.layerY + Helper.getRandomInt(10, 20) / 100 * thisLayer.layerHeight,
                        thisLayer.layerY + Helper.getRandomInt(85, 95) / 100 * thisLayer.layerHeight,
                        thisLayer.layerY + Helper.getRandomInt(80, 90) / 100 * thisLayer.layerHeight
                    ]
                ];
            }
            else {
                this.points = [
                    [
                        thisLayer.layerX + Helper.getRandomInt(85, 95) / 100 * thisLayer.layerWidth,
                        thisLayer.layerX + Helper.getRandomInt(80, 90) / 100 * thisLayer.layerWidth,
                        thisLayer.layerX + Helper.getRandomInt(5, 15) / 100 * thisLayer.layerWidth,
                        thisLayer.layerX + Helper.getRandomInt(10, 20) / 100 * thisLayer.layerWidth
                    ],
                    [
                        thisLayer.layerY + Helper.getRandomInt(45, 55) / 100 * thisLayer.layerHeight,
                        thisLayer.layerY + Helper.getRandomInt(87.3, 97.3) / 100 * thisLayer.layerHeight,
                        thisLayer.layerY + Helper.getRandomInt(45, 55) / 100 * thisLayer.layerHeight,
                        thisLayer.layerY + Helper.getRandomInt(2.7, 12.7) / 100 * thisLayer.layerHeight
                    ]
                ];
            }


            var stone = new Stone();
            stone.stoneLayer = thisLayer;
            stone.points = this.points

            this.stones.push(stone);
        }
        this.stones = this.stones.filter(stone => stone.stoneLayer.layerY >= - height / 4);

    }

    moveStones(timeBetweenDraw) {
        for (let stone = 0; stone < this.stones.length; stone++) {
            for (let point = 0; point < this.stones[stone].points[0].length; point++) {
                this.stones[stone].points[0][point] -= 7 / 12 * width / 3000 * timeBetweenDraw;
                this.stones[stone].points[1][point] -= 7 / 12 * height / 3000 * timeBetweenDraw;
            }
        }
        for (let points = 0; points <= 3; points++) {
            var X = skierHitbox.skierHitpoints[points].x;
            var Y = skierHitbox.skierHitpoints[points].y;
            var filteredStones = this.stones.filter(stone => max(stone.points[0]) >= X);
            filteredStones = filteredStones.filter(stone => min(stone.points[0]) <= X);
            filteredStones = filteredStones.filter(stone => max(stone.points[1]) >= Y);
            filteredStones = filteredStones.filter(stone => min(stone.points[1]) <= Y);
            if (filteredStones.length > 0) {
                for (let point = 0; point < filteredStones[0].points[0].length; point++) {
                    var point1x = filteredStones[0].points[0][point];
                    var point1y = filteredStones[0].points[1][point];
                    if (point + 1 < filteredStones[0].points[0].length) {
                        var point2x = filteredStones[0].points[0][point + 1];
                        var point2y = filteredStones[0].points[1][point + 1];
                    }
                    else {
                        var point2x = filteredStones[0].points[0][0];
                        var point2y = filteredStones[0].points[1][0];
                    }

                    if (X <= max(point1x, point2x)) {
                        if (X >= min(point1x, point2x)) {
                            if (Y <= max(point1y, point2y)) {
                                if (Y >= min(point1y, point2y)) {

                                    var stoneWidth = point2x - point1x;
                                    var stoneHeight = point1y - point2y;
                                    var littleWidth = point2x - X;
                                    var stonePoint = point2y + littleWidth / stoneWidth * stoneHeight;

                                    if (point2x >= point1x) {
                                        if (Y > stonePoint) {
                                            play = false;
                                        }
                                    }
                                    else if (Y < stonePoint) {
                                        play = false;
                                    }
                                }
                            }
                        }
                    }
                }
                if (play == false) {
                    htmlCommunication.lostGame();
                }
            }
        }
    }
}
