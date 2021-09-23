//139
function arrayOfLines(str) {
    return str.match(/[^\n]+/g)
}

var str = "Write a JavaScript program to perform stable\n sorting of an array, preserving the \ninitial indexes of items when their\n values are the same. Do not mutate\n the original array, but returns a\n new array instead."
console.log(arrayOfLines(str));