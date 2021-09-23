//167
function lessThanTest(arr, testVal) {
    return (arr.filter(val => val <= testVal).length / arr.length) * 100;
}

console.log(lessThanTest([0, 1, 2, 3, 4, 5, 6, 7], 3))