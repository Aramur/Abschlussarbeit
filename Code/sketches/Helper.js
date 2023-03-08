class Helper {
    static getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    static getYBoarderTop(xCoordinate) {
        var triangleWidthTop = width * 7 / 12;
        var triangleHeightTop = height * 7 / 12;
        return triangleHeightTop - (width - xCoordinate) / triangleWidthTop * triangleHeightTop + height / 7;
    }
    static getYBoarderBottom(xCoordinate, row) {
        var triangleWidthBottom = width / 12 * 5;
        var triangleHeightBottom = height / 12 * 5 + row * height / 20;
        return xCoordinate / triangleWidthBottom * triangleHeightBottom + triangleHeightBottom - height / 8;
    }
}
