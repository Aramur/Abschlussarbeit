class Chasm {
    id;
    x1;
    y1;
    x2;
    y2;
    color;

    draw() {
        fill(this.color);
        noStroke();
        beginShape(TESS);
        vertex(this.x1, this.y1)
        vertex(this.x2, this.y2)
        vertex(this.x2, 0)
        vertex(this.x1, 0)
        endShape(CLOSE);
    }
}
