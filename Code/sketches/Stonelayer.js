class Stonelayer {
    layerX;
    layerY;
    layerWidth;
    layerHeight;

    draw() {
        beginShape(TESS);
        vertex(this.layerX, this.layerY)
        vertex(this.layerX - this.layerWidth, this.layerY)
        vertex(this.layerX - this.layerWidth, this.layerY + this.layerHeight)
        vertex(this.layerX, this.layerY + this.layerHeight)
        endShape(CLOSE);
    }
}