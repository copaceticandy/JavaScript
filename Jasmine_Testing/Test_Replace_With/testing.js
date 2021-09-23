function replaceWith(word, find, replace) {
    let wordArray = word.split("");
    let index = wordArray.indexOf(find);

    if (index === -1) {
        throw new Error("Letter " + find + " not in " + word + ".");
    }
    while (index > -1) {
        wordArray[index] = replace;
        index = wordArray.indexOf(find);
    }
    return wordArray.join("");

}