function getNthElements(arr, n) {
    var nthArray = [];
    for (let i = n - 1; i < arr.length; i = i + n) {
        nthArray.push(arr[i]);
    }
    return nthArray;
}

console.log(getNthElements([1, 2, 3, 4, 5, 6], 2));