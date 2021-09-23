//ES5 code
function add(a, b) {
    if (a === 0) a = 0
    else {
        a = a || 10
    }
    if (b === 0) b = 0
    else {
        b = b || 10
    }
    return a + b
}

//ES2015 code

function add(a = 10, b = 10) {
    return a + b
}

console.log(add(5, 0));