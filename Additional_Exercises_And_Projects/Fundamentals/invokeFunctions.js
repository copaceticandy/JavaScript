function invokeFunctions(argsArr, ...fns) {
    return fns.reduce((acc, fn) => {
        acc[fn.name] = fn.apply(this, argsArr)
        return acc;
    }, { arguments: argsArr })
}

console.log(invokeFunctions([1, 12, 16.4], Math.max, Math.min, Math.sin));