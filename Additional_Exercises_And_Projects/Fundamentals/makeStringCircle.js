function makeStringCircle(size) {
    if (size % 2 === 0) {
        throw Error("The size of your circle must be odd")
    }

    var circleStr = "";
    for (i = 0; i < Math.floor(size / 2); i++) {
        circleStr += " ";
    }

    circleStr += "*";
    var vert = size;
    var hor = 0;
    while (hor <= Math.floor(size / 2)) {
        circleStr += " \v*"
        hor++;
    }
    return circleStr;
}
console.log(makeStringCircle(5));