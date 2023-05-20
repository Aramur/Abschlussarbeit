class Stone {
    stoneLayer = [];
    points = [];

    draw() {
        fill(115)
        beginShape(TESS);
        for (let length = 0; length < this.points[0].length; length++) {
            vertex(this.points[0][length], this.points[1][length])
        }
        endShape();
    }
}
