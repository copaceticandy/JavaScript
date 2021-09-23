function getIntegerRange(num1, num2) {
    if (Math.abs(num1 - num2) < 2) {
        return [];
    }
    return [Math.min(num1, num2) + 1].concat(getIntegerRange(Math.min(num1, num2) + 1, Math.max(num1, num2)))
}

console.log(getIntegerRange(12, 9));