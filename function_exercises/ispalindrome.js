function isPalindrome(word){
    word = word.split(" ").join("").toLowerCase();
    for (var i=0;i<word.length;i++){
        if(word[i]!==word[word.length-1-i]){
            return false;
        }
    }
    return true;
}

console.log(isPalindrome('a man a plan a canal Panama')); // false
//isPalindrome('tacocat'); // true
// isPalindrome('hannah'); // true
// isPalindrome('robert');