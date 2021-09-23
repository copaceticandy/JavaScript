//143
function alphabeticalOrder(str) {
    return str.split("").sort().join("");
}

var str = "A function that defines";

console.log(alphabeticalOrder(str));