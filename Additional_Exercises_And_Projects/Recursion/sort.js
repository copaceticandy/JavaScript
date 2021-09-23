function sort(arr) {
    if (arr.length === 1) {
        return arr[0];
    }
    var lowestVal = arr[0];
    var index = 0;
    for (let i = 1; i < arr.length - 1; i++) {
        if (lowestVal > arr[i]) {
            lowestVal = arr[i];
            index = i;
        }
    }
    arr.splice(index, 1);
    return [lowestVal].concat(sort(arr))
}

console.log(sort([34, 7, 23, 32, 5, 62]));