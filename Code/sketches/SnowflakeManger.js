class SnowflakeManager {
    snowflakes = [];

    letSnowflakes(timeBetweenDraw) {
        for (let times = 0; times <= 10; times++) {
            var snowflake = new Snowflakes();
            snowflake.size = height / Helper.getRandomInt(30, 35);
            snowflake.speed = Math.random() * (height / 5000 * timeBetweenDraw - height / 7000 * timeBetweenDraw) + height / 7000 * timeBetweenDraw;
            snowflake.x = Helper.getRandomInt(-width * 0.05, width * 1.04);
            snowflake.y = Helper.getRandomInt(- height / 15, - height);

            this.snowflakes.push(snowflake)
        }
        this.snowflakes = this.snowflakes.filter(snowflake => snowflake.y <= height * 1.25);
    }

    drawSnowflakes() {
        for (let snowflake = 0; snowflake < this.snowflakes.length; snowflake++) {
            this.snowflakes[snowflake].y += this.snowflakes[snowflake].speed
            this.snowflakes[snowflake].draw();
        }
    }
}