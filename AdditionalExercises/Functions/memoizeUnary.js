function memoizeUnary(fn) {
    let cache = {}
    return function(arg) {
        if (arg in cache) {
            return cache[arg];
        }
        cache[arg] = fn(arg);
        return cache[arg];
    }
}

function double(x) {
    console.log("@double") // we put a log here to see how many calls occur
    return 2 * x // expensive calculation (emulation)
}

let memoizedDouble = memoizeUnary(double)
console.log(memoizedDouble(1)) // @double log
console.log(memoizedDouble(1)) // !!! (no @double log)
console.log(memoizedDouble(2)) // @double log