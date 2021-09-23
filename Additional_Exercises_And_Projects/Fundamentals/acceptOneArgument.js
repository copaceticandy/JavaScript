function acceptOneArgument(fn, ...args) {
    if (args.length < 2) {
        return fn(...args)
    }
    throw Error("Too many arguments")
}

function addTwo(x) {
    return x + 2;
}

console.log(acceptOneArgument(addTwo, 1));