class Stones {

    letStones() {
        if (Helper.getRandomInt(1, 30) == 1) {
            var spawnLayerWidth = Helper.getRandomInt(height / 10, height / 5);
            var spawnLayerHeight = Helper.getRandomInt(height / 8, height / 4);
            var x = width - 1000;
            var y = Helper.getRandomInt(Helper.getYBoarderTop(width - 1000), Helper.getYBoarderBottom(width - 1000, 0)) - height / 8;
            beginShape(TESS);
            vertex(x, y)
            vertex(x + spawnLayerWidth, y)
            vertex(x + spawnLayerWidth, y + spawnLayerHeight)
            vertex(x, y + spawnLayerHeight)
            endShape(CLOSE);
        }
    }
}