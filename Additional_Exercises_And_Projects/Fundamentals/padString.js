function padString(str, len, padding) {
    if (str.length < len) {
        return padString(`${padding}${str}${padding}`, len, padding)
    }
    return "".concat(str);
}

console.log(padString("star", 20, "*"))