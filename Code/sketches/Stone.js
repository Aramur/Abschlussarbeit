class Stone {
    stoneLayer = [];
    points = [];

    draw() {
        var pointsToDraw = this.points;
        fill(150)
        beginShape(TESS);
        for (let length = 0; length < pointsToDraw[0].length; length++) {
            vertex(pointsToDraw[0][length], pointsToDraw[1][length])
        }
        endShape(CLOSE);
    }
}

