//153
function reverseCharOrder(str) {
    var reverseStr = "";
    for (let i = str.length - 1; i > -1; i--) {
        reverseStr += str[i];
    }
    return reverseStr;
}

console.log(reverseCharOrder("hello"))