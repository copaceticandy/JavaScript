function invokeMax(fn, counter) {
    return function() {
        if (counter == 0) {
            return "Maxed Out!"
        }
        counter--;
        return fn(arguments[0], arguments[1]);
    }
}

function add(a, b) {
    return a + b
}

var addOnlyThreeTimes = invokeMax(add, 2);
console.log(addOnlyThreeTimes(1, 2)) // 3
console.log(addOnlyThreeTimes(7, 5)) // 4
console.log(addOnlyThreeTimes(1, 2)) // 3
console.log(addOnlyThreeTimes(1, 2))