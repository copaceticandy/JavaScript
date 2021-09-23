function randomInteger(min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

function fetch(url, next) {
    setTimeout(() => next(url), randomInteger(0, 1000))
}

fetch("a", (a1) => {
    fetch("b", (a2) => {
        fetch("c", (a3) => {
            console.log(a1, a2, a3)
        })
    })
});

//Alternative
/*

function check(...vars) {
    console.log(vars.length)
    if (vars.length === 3) {
        console.log(vars)
    } else {
        return function(x) {
            check(x, ...vars)
        }
    }
}
*/