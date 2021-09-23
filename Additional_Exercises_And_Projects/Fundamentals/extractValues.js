function extractValues(arr, ...values) {
    return arr.filter(val => !values.includes(val))
}

console.log(extractValues([1, 2, 3, 4], 1, 2));