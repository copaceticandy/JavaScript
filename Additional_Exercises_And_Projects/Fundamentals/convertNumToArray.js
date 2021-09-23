function convertNumToArray(num) {
    return num.toString().split("").map(val => parseInt(val));
}

console.log(convertNumToArray(123456));