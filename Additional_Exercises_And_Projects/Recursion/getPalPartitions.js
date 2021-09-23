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


function getPalPartitions(str) {
    if (str.length === 0) {
        return [];
    }
    if (str.length < 2) {
        return [str];
    }
    var strArray = str.split("");
    if (isPalindrome(str)) {
        strArray.pop();
        strArray.shift();
        return [str].concat(getPalPartitions(strArray.join("")));
    }
    if (!isPalindrome(str)) {
        strArray.pop();
        strArray.shift();
        return getPalPartitions(strArray.join(""));
    }
}

console.log(getPalPartitions("banana"));