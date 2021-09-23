function convertToHex(threeDigit) {
    if (threeDigit[0] === "#") {
        return `${threeDigit[0]}${threeDigit[1]}${threeDigit[1]}${threeDigit[2]}${threeDigit[2]}${threeDigit[3]}${threeDigit[3]}`;
    }
    return `#${threeDigit[0]}${threeDigit[0]}${threeDigit[1]}${threeDigit[1]}${threeDigit[2]}${threeDigit[2]}`
}

console.log(convertToHex('#03f'));