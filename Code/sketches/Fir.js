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
        image(Fir.firImage, this.x, this.y, windowHeight / 5, windowHeight / 5);
    }


}