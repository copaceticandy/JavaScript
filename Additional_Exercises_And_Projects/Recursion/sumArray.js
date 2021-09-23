function sumArray(arr) {
    if (arr.length === 1) {
        return arr[0];
    }
    return arr.shift() + sumArray(arr);
}

console.log(sumArray([1, 2, 3, 4, 5, 6]))