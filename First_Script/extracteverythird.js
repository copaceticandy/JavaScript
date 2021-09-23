function extractEveryThird(array) {
    var k = 0;
    var threeArray = [];
    if (array.length < 3) {
        return threeArray;
    }
    for (var i = 2; i < array.length; i = i+3) {
        threeArray[k] = array[i];
        k = k + 1;
    }
    return threeArray;

}
console.log(extractEveryThird(["a","b","c","d"]));