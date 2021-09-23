function onlyCapitalLetters(word){
    var upperCaseWord = word.toUpperCase();
    var upperCaseString = "";
    //return word[2]===upperCaseWord[2];
    for (var i=0;i<word.length;i++){
        if(word[i]===upperCaseWord[i]){
            upperCaseString = upperCaseString + word[i];
        }
    }
    return upperCaseString;
}

console.log(onlyCapitalLetters("Amazing"));