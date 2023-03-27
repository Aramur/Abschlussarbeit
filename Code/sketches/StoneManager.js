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
            this.points = [
                thisLayer.layerX + Helper.getRandomInt(10, 30) / 100 * thisLayer.layerWidth, thisLayer.layerY + Helper.getRandomInt(10, 30) / 100 * thisLayer.layerHeight,
                thisLayer.layerX + Helper.getRandomInt(70, 90) / 100 * thisLayer.layerWidth, thisLayer.layerY + Helper.getRandomInt(10, 30) / 100 * thisLayer.layerHeight,
                thisLayer.layerX + Helper.getRandomInt(70, 90) / 100 * thisLayer.layerWidth, thisLayer.layerY + Helper.getRandomInt(70, 90) / 100 * thisLayer.layerHeight,
                thisLayer.layerX + Helper.getRandomInt(10, 30) / 100 * thisLayer.layerWidth, thisLayer.layerY + Helper.getRandomInt(70, 90) / 100 * thisLayer.layerHeight,
            ]

            var stone = new Stone();
            stone.stoneLayer = thisLayer;
            stone.points = this.points

            this.stones.push(stone);
        }
        this.stones = this.stones.filter(stone => stone.stoneLayer.layerY >= - height / 4);

    }

    moveStones(timeBetweenDraw) {
        for (let stone = 0; stone < this.stones.length; stone++) {


            for (let point = 0; point < this.stones[stone].points.length / 2; point++) {
                this.stones[stone].points[point * 2] -= 7 / 12 * width / 3000 * timeBetweenDraw;
                this.stones[stone].points[point * 2 + 1] -= 7 / 12 * height / 3000 * timeBetweenDraw;
            }
        }
    }
}
