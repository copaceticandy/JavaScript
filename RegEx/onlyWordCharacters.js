function onlyWordCharacters(str) {
    let regExp = /[\sa-z0-9]+/ig;
    if (str.match(regExp)) {
        return str.match(regExp).join("");
    }
    return "Not a string!"
}

console.log(onlyWordCharacters("lqURG{VT HERE}Nk"));