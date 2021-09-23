function average(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum / array.length;
}

var array = [8, 9, 3, 6, 7, 2, 5, 12];
console.log(average(array));