//125
function toDecimal(num) {
    var stringedNum = num.toString();
    if (stringedNum.includes(".")) {
        for (let i = stringedNum.indexOf(".") - 3; i > -1; i = i - 3) {
            console.log(i);
            if (stringedNum[i - 1] && !stringedNum[i - 1].match(/[\+-]/)) {
                stringedNum = stringedNum.slice(0, i) + "," + stringedNum.slice(i);
            }
        }
    } else {
        for (let i = stringedNum.length - 3; i > -1; i = i - 3) {
            if (stringedNum[i - 1] && !stringedNum[i - 1].match(/[\+-]/)) {
                stringedNum = stringedNum.slice(0, i) + "," + stringedNum.slice(i);
            }
        }
    }
    return stringedNum;
}

console.log(toDecimal(-512343213767687.56749))