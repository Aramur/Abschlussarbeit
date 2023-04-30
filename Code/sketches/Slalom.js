class Slalom {
    static images = [];
    x;
    y;
    type;

    static loadImage() {
        Slalom.images.push(loadImage('pictures/start.png'));
        Slalom.images.push(loadImage('pictures/Torrot.png'));
        Slalom.images.push(loadImage('pictures/Torblau.png'));
        Slalom.images.push(loadImage('pictures/ziel.png'));
    }

    draw() {
        if (this.type == 'start') {
            image(Slalom.images[0], this.x, this.y, height / 2, height / 2);
        }
        else if (this.type == 'rot') {
            image(Slalom.images[1], this.x, this.y, height / 4, height / 4);
        }
        else if (this.type == 'blau') {
            image(Slalom.images[2], this.x, this.y, height / 4, height / 4);
        }
        else if (this.type == 'ziel') {
            image(Slalom.images[3], this.x, this.y, height / 2, height / 2);
        }
    }
}