function convertArrayToObj(arr, fn) {
    uniqueArr = Array.from(new Set(arr));
    return uniqueArr.reduce((acc, val) => {
        acc[val] = [fn(val)];
        return acc
    }, {})
}

var arr1 = [1, 2, 3, 4, 3];

console.log(convertArrayToObj(arr1, Math.sqrt))