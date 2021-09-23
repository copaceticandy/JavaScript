function fibonacci(num) {
    if (num === 1) {
        return [0]
    }
    if (num === 2) {
        return [0, 1];
    }
    return fibonacci(num - 1).concat(fibonacci(num - 1)[num - 2] + fibonacci(num - 1)[num - 3])
}

console.log(fibonacci(10));