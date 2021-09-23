function removeExclamationMarks(sentence) {
    let regExp = /(?<=[a-z]\b)!+/ig
    let newSentence = sentence.replace(regExp, '');
    return newSentence;
}

console.log(removeExclamationMarks("!Hi"));