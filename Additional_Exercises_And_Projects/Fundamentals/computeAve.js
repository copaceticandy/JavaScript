//57
function computeAve(arr, fn) {
    return arr.map(fn).reduce((acc, val, index) => {
        return (acc * index + val) / (index + 1);
    })
}

console.log(computeAve([1, 4, 9, 16, 25], Math.pow));