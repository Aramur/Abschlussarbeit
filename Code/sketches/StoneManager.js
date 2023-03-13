class StoneManager {
    stones = [];
    layerX;
    layerY;
    layerWidth;
    layerHeight;

    letStones() {
        if (Helper.getRandomInt(1, 1) == 1) {
            this.layerWidth = Helper.getRandomInt(height / 10, height / 5);
            this.layerHeight = Helper.getRandomInt(height / 8, height / 4);
            this.layerX = width - 1000;
            this.layerY = Helper.getRandomInt(0, height);

            var stone = new Stones()
            stone.layerX = this.layerX;
            stone.layerY = this.layerY;
            stone.layerWidth = this.layerWidth;
            stone.layerHeight = this.layerHeight;

            this.stones.push(stone);
        }
    }

    drawStones() {
        for (let stone = 0; stone < this.stones.length; stone++) {
            this.stones[stone].draw();
        }
    }
}