function isPalindrome(s) {
    return [...s.toLowerCase()].every(function(val, i) {
        return val === s[s.length - 1 - i].toLowerCase();
    })
}

console.log(isPalindrome("Able was I ere I saw Elba"));