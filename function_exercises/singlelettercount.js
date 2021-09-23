function singleLetterCount(word,letter){
    word = word.toLowerCase();
    letter = letter.toLowerCase();
    var lettercount = 0;
    for(var i=0;i<word.length;i++){
        if(word[i]===letter){
            lettercount++;
        }
    }
    return lettercount;
}

console.log(singleLetterCount("hello lord lilliepop","o"));