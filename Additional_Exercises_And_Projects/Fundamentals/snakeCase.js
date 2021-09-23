//120
function snakeCase(str) {
    var regExp = / /g;
    return str.replace(regExp, "_");
}

var str = "Snake case refers to the style of writing in which\n each space is replaced by an underscore character, and the first letter of each word\n written in lowercase. It is a commonly used naming convention in computing, for example for \n variable and subroutine names, and for filenames. One study has found that readers\n can recognize snake case values more quickly than camel case";

console.log(snakeCase(str));