function capitalSentence(string) {
    let regExp = /[A-Z]/g;
    if (string.match(regExp)) {
        return string.match(regExp).join("");
    }
    throw new Error("No Capitals");
}

console.log(capitalSentence("the cat in the hat"));