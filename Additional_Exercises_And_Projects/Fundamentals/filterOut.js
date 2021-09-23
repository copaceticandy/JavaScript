function filterOut(arr, fn) {
    return arr.filter(val => fn(val));
}