//135
function sumOfPowers(lastNum, pow = 2, start = 1) {
    sum = 0;
    for (let i = start; i < lastNum + 1; i++) {
        sum += Math.pow(i, pow);
    }
    return sum;
}

console.log(sumOfPowers(10, 3, 5));