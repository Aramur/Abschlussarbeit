class SkierHitbox {
    skierHitboxes = [];
    rightSkiFrontCoordinatex;
    rightSkiFrontCoordinatey;
    leftSkiFrontCoordinatex;
    lefttSkiFrontCoordinatey;
    rightSkiBackCoordinatex;
    rightSkiBackCoordinatey;
    leftSkiBackCoordinatex;
    leftSkiBackCoordinatey;

    pushHitboxes() {
        this.skierHitboxes.push({
            rotation: -6,
            rightSkiFrontx: 415, leftSkiFrontx: 432, rightSkiBackx: 24, leftSkiBackx: 48,
            rightSkiFronty: 438, leftSkiFronty: 420, rightSkiBacky: 490, leftSkiBacky: 470
        });
        this.skierHitboxes.push({
            rotation: -5,
            rightSkiFrontx: 411, leftSkiFrontx: 431, rightSkiBackx: 19, leftSkiBackx: 44,
            rightSkiFronty: 457, leftSkiFronty: 437, rightSkiBacky: 437, leftSkiBacky: 453
        });
        this.skierHitboxes.push({
            rotation: -4,
            rightSkiFrontx: 408, leftSkiFrontx: 430, rightSkiBackx: 14, leftSkiBackx: 42,
            rightSkiFronty: 475, leftSkiFronty: 455, rightSkiBacky: 457, leftSkiBacky: 438
        });
        this.skierHitboxes.push({
            rotation: -3,
            rightSkiFrontx: 405, leftSkiFrontx: 428, rightSkiBackx: 15, leftSkiBackx: 42,
            rightSkiFronty: 490, leftSkiFronty: 470, rightSkiBacky: 438, leftSkiBacky: 420
        });
        this.skierHitboxes.push({
            rotation: -2,
            rightSkiFrontx: 405, leftSkiFrontx: 425, rightSkiBackx: 17, leftSkiBackx: 43,
            rightSkiFronty: 508, leftSkiFronty: 492, rightSkiBacky: 425, leftSkiBacky: 407
        });
        this.skierHitboxes.push({
            rotation: -1,
            rightSkiFrontx: 400, leftSkiFrontx: 415, rightSkiBackx: 18, leftSkiBackx: 48,
            rightSkiFronty: 522, leftSkiFronty: 510, rightSkiBacky: 408, leftSkiBacky: 391
        });
        this.skierHitboxes.push({
            rotation: 0,
            rightSkiFrontx: 391, leftSkiFrontx: 408, rightSkiBackx: 19, leftSkiBackx: 42,
            rightSkiFronty: 541, leftSkiFronty: 531, rightSkiBacky: 391, leftSkiBacky: 384
        });
        this.skierHitboxes.push({
            rotation: 1,
            rightSkiFrontx: 375, leftSkiFrontx: 400, rightSkiBackx: 21, leftSkiBackx: 60,
            rightSkiFronty: 560, leftSkiFronty: 545, rightSkiBacky: 377, leftSkiBacky: 362
        });
        this.skierHitboxes.push({
            rotation: 2,
            rightSkiFrontx: 368, leftSkiFrontx: 388, rightSkiBackx: 30, leftSkiBackx: 65,
            rightSkiFronty: 570, leftSkiFronty: 558, rightSkiBacky: 360, leftSkiBacky: 350
        });
        this.skierHitboxes.push({
            rotation: 3,
            rightSkiFrontx: 350, leftSkiFrontx: 375, rightSkiBackx: 37, leftSkiBackx: 72,
            rightSkiFronty: 582, leftSkiFronty: 570, rightSkiBacky: 343, leftSkiBacky: 334
        });
        this.skierHitboxes.push({
            rotation: 4,
            rightSkiFrontx: 330, leftSkiFrontx: 360, rightSkiBackx: 53, leftSkiBackx: 88,
            rightSkiFronty: 590, leftSkiFronty: 582, rightSkiBacky: 337, leftSkiBacky: 334
        });
        this.skierHitboxes.push({
            rotation: 5,
            rightSkiFrontx: 315, leftSkiFrontx: 346, rightSkiBackx: 58, leftSkiBackx: 99,
            rightSkiFronty: 600, leftSkiFronty: 593, rightSkiBacky: 323, leftSkiBacky: 320
        });
        this.skierHitboxes.push({
            rotation: 6,
            rightSkiFrontx: 300, leftSkiFrontx: 330, rightSkiBackx: 69, leftSkiBackx: 108,
            rightSkiFronty: 608, leftSkiFronty: 602, rightSkiBacky: 310, leftSkiBacky: 309
        });
    }

    calculateSkierHitboxes() {
        this.rightSkiFrontCoordinatex = skier.positionX + this.skierHitboxes[skier.rotation + 6].rightSkiFrontx / 4;
        this.rightSkiFrontCoordinatey = skier.positionY + this.skierHitboxes[skier.rotation + 6].rightSkiFronty / 4;
        this.leftSkiFrontCoordinatex = skier.positionX + this.skierHitboxes[skier.rotation + 6].leftSkiFrontx / 4;
        this.leftSkiFrontCoordinatey = skier.positionY + this.skierHitboxes[skier.rotation + 6].lefttSkiFronty / 4;
        this.rightSkiBackCoordinatex = skier.positionX + this.skierHitboxes[skier.rotation + 6].rightSkiBackx / 4;
        this.rightSkiBackCoordinatey = skier.positionY + this.skierHitboxes[skier.rotation + 6].righttSkiBacky / 4;
        this.leftSkiBackCoordinatex = skier.positionX + this.skierHitboxes[skier.rotation + 6].leftSkiBackx / 4;
        this.leftSkiBackCoordinatey = skier.positionY + this.skierHitboxes[skier.rotation + 6].lefttSkiBacky / 4;
    }
}