function sumArray(arr, fn) {
    return arr.map((val2) => {
        return fn(val2);
    }).reduce((acc, val2) => {
        return acc + val2;
    })
}
console.log(sumArray([1, 2, 3, 4, 5], function(x) { return 2 * x }));