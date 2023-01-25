class Skier {
    static skierImage;
    static images = [];

    rotation = 0;



    static loadImage() {
        Skier.skierImage = loadImage('pictures/skiertest.png')
        Skier.images.push(loadImage('pictures/ski-5.png'));
        Skier.images.push(loadImage('pictures/ski-4.png'));
        Skier.images.push(loadImage('pictures/ski-3.png'));
        Skier.images.push(loadImage('pictures/ski-2.png'));
        Skier.images.push(loadImage('pictures/ski-1.png'));
        Skier.images.push(loadImage('pictures/ski0.png'));
        Skier.images.push(loadImage('pictures/ski1.png'));
        Skier.images.push(loadImage('pictures/ski2.png'));
        Skier.images.push(loadImage('pictures/ski3.png'));
        Skier.images.push(loadImage('pictures/ski4.png'));
        Skier.images.push(loadImage('pictures/ski5.png'));


    }

    calculateSkier() {

        var positionX = windowWidth / 6;
        var positionY = windowHeight / 4 - 100;

        positionX += 1 / 2 * windowHeight / (this.rotation * 500);
        positionX += 2 / 3 * windowWidth / (this.rotation * 500)

        console.log(positionX, positionY)

        image(Skier.skierImage, positionX, positionY, 150, 150);
        image(Skier.images[this.rotation + 5], positionX, positionY, 150, 150);
    }
}