function convertToSafeInt(num) {
    if (Number.isNaN(num)) {
        throw Error(`${num} is not a number`)
    }
    if (Number.isSafeInteger(num)) {
        return num
    }
    if (Number.isSafeInteger(Math.round(num))) {
        return Math.round(num);
    }
    return `${num} can't be converted to safe integer`
}