// function largestCommonFactor(num1, num2) {
//     if (num1 % Math.min(num1, num2) === 0 && num2 % Math.min(num1, num2) === 0) {
//         return Math.min(num1, num2);
//     }
//     return largestCommonFactor(Math.min(num1, num2), Math.abs(num1 - num2));
// }

// console.log(largestCommonFactor(2154, 458))

var gcd = function(a, b) {
    if (!b) {
        return a;
    }

    return gcd(b, a % b);
};
console.log(gcd(2154, 458));