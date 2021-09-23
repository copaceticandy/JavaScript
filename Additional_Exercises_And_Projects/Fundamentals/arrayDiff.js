function arrayDiff(arr1, arr2, fn) {
    var arr1Map = arr1.map(fn);
    return arr2.map((val, index) => {
        return fn(val) - arr1Map[index];
    })
}

console.log(arrayDiff([2.1, 1.2], [2.3, 3.4], Math.floor))