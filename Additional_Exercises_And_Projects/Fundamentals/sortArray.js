//137
function sortArray(arr) {
    if (arr.length === 1) {
        return arr[0];
    }
    var min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        min = Math.min(min, arr[i]);
    }
    return [arr[arr.indexOf(min)]].concat(sortArray(arr.slice(0, arr.indexOf(min)).concat(arr.slice(arr.indexOf(min) + 1))));
}

console.log(sortArray([1, 3, 4, 7, 2, 6, 5]));