function testTruth(arr, fn) {
    return arr.every(function(val) {
        return fn(val)
    })
}

console.log(testTruth([4, 0, 3], x => x > 1));