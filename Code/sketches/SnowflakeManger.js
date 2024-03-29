class SnowflakeManager {
    snowflakes = [];

    letSnowflakes() {
        for (let times = 0; times <= 8; times++) {
            var snowflake = new Snowflakes();
            snowflake.size = height / Helper.getRandomInt(30, 35);
            snowflake.speed = Math.random() * (height / 5000 - height / 7000) + height / 7000;
            snowflake.x = Helper.getRandomInt(-width * 0.05, width * 1.04);
            snowflake.y = Helper.getRandomInt(- height / 15, - height / 5);

            this.snowflakes.push(snowflake)
        }
        this.snowflakes = this.snowflakes.filter(snowflake => snowflake.y <= height * 1.25);
    }

    drawSnowflakes(timeBetweenDraw) {
        for (let snowflake = 0; snowflake < this.snowflakes.length; snowflake++) {
            this.snowflakes[snowflake].y += this.snowflakes[snowflake].speed * timeBetweenDraw;
            this.snowflakes[snowflake].draw();
        }
    }
}