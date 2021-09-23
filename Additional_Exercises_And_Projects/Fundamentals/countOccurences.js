function countOccurences(arr, val) {
    return arr.reduce((acc, val2) => {
        if (val2 === val) {
            acc++
        }
        return acc;
    }, 0)
}

var arr1 = [1, 2, 3, 4, 5, 5, 6, 5, 7, 8, 3, 4];
console.log(countOccurences(arr1, 5));