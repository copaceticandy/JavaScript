function isPalindrome(str) {
    if (str.length < 2) {
        return true;
    }
    var arr = str.split("");
    if (arr.pop() === arr.shift()) {
        return isPalindrome(arr.join(""))
    }
    return false;
}

console.log(isPalindrome("redivider"));