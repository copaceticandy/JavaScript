function countNumbers(string) {
    let regExp = /[0-9]/g;
    if (string.match(regExp)) {
        return string.match(regExp).length;
    };
    return 0;
}

console.log(countNumbers("cat in the hat"));