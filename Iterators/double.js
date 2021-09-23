function double(array) {
    for (var i = 0; i < array.length; i++) {
        array[i] = array[i] * 2;
    }
}

var array1 = [1, 2, 3, 4]
double(array1);

console.log(array1);