//155
function arrayFilter(arr, predicate) {
    arr.filter(val => !predicate(val))
}