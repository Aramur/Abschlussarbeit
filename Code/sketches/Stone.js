class Stone {
    stoneLayer = [];
    points = [];

    draw() {
        var pointsToDraw = this.points;
        fill(150)
        beginShape(TESS);
        for (let length = pointsToDraw.length / 2; length > 0; length--) {
            vertex(pointsToDraw[length * 2 - 2], pointsToDraw[length * 2 - 1])
        }
        endShape(CLOSE);
    }
}

