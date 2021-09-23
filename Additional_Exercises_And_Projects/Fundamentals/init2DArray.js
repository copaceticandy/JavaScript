function init2DArray(length, width, vals) {
    array2D = [];
    for (let i = 0; i < width; i++) {
        array2D.push(vals);
    }
    array2D = [array2D];
    for (let i = 1; i < length; i++) {
        array2D.push(array2D[0]);
    }
    return array2D;
}

console.log(init2DArray(3, 5, 2))