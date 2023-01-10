class Fir {
    static firImage;
    id;
    x;
    y;
    delete;

    static loadImage() {
        Fir.firImage = loadImage('pictures/fir.png')
    }

    draw() {
        image(Fir.firImage, this.x, this.y, 200, 200);
    }


}