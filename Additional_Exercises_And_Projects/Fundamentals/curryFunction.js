function curryFunction(fn, ...initialArgs) {
    return function intermediate(...remainingArgs) {
        if (initialArgs.concat(remainingArgs).length >= fn.length) {
            return fn(...initialArgs.concat(remainingArgs));
        }
        initialArgs = initialArgs.concat(remainingArgs);
        return intermediate;
    }
}

function sum(a, b, c) {
    return a + b * c;
}

console.log(curryFunction(sum, 3));
console.log(curryFunction(sum, 3)());
console.log(curryFunction(sum, 3)()(8, 4));