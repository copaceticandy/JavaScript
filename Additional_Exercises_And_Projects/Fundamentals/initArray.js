function initArray(lower, upper, step) {
    var numEntries = Math.floor((upper - lower) / step) + 1;
    return Array.from({ length: numEntries }).map((val, index) => lower + index * step)
}

console.log(initArray(2, 10, 0.5))