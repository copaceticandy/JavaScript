function multipleLetterCount(word) {
    var wordArray = word.toLowerCase().split("");
    var letter;
    var letterCount;
    var obj = {};
    while (wordArray.length>0) {
        letter = wordArray[0];
        letterCount = 0;
        for (var j = 0; j < wordArray.length; j++) {
            if (wordArray[j] === letter) {
                letterCount++;
                wordArray.splice(j, 1);
                j--;
            }
        }
        obj[letter] = letterCount;
    }
    return obj;
}

console.log(multipleLetterCount("hello"));