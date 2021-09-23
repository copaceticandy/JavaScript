function uncap(str) {
    return str.replace(str[0], str[0].toLowerCase());
}

var str = "Hello";

console.log(uncap(str));
console.log(str)