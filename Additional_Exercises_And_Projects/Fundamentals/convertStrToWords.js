function convertStrToWrds(str) {
    var regExp = /[a-zA-Z]+/g;
    var word = regExp.exec(str);
    var wordArr = [];
    while (word) {
        wordArr.push(word[0]);
        word = regExp.exec(str);
    }
    return wordArr;
}

console.log(convertStrToWrds('I love javaScript!!'));
console.log(convertStrToWrds('python, java, php'))