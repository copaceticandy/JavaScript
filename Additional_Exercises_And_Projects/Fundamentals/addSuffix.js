//122
function addSuffix(num) {
    var key = {
        1: "st",
        2: "nd",
        3: "rd",
        4: "th",
        5: "th",
        6: "th",
        7: "th",
        8: "th",
        9: "th",
        0: "th",
    }
    var stringedNum = num.toString();
    if (stringedNum[stringedNum.length - 2] === "1") {
        return stringedNum + "th"
    }
    return stringedNum + key[stringedNum[stringedNum.length - 1]];
}

console.log(addSuffix(311));