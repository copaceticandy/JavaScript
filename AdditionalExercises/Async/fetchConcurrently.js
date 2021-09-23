function randomInteger(min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

function fetch(url, next) {
    setTimeout(() => next(url), randomInteger(0, 1000))
}

//Alternative

/*
let g = check;


function check(...vars) {
    if (vars.length === 3) {
        console.log(...vars)
    } else {
        return g = function(x) {
            check(x, ...vars)
        }
    }
}
*/

let arr = [];

function g(vars) {
    arr.push(vars);
    if (arr.length === 3) {
        console.log(...arr);
    }
}
fetch("a", (x) => {
    g(x);
});

fetch("b", (x) => {
    g(x);
});
fetch("c", (x) => {
    g(x);
})