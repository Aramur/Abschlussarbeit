class Snowflakes {
    static snowflakeImage;
    size;
    speed;
    x;
    y;

    static loadImage() {
        Snowflakes.snowflakeImage = loadImage('pictures/snowflake.png');
    }

    draw() {
        image(Snowflakes.snowflakeImage, this.x, this.y, this.size, this.size);
    }
}