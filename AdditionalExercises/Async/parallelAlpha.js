function randomInteger(min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

function fetch(url) {
    return function(next) {
        setTimeout(() => {
            next(url + "!")
        }, randomInteger(800, 1000))
    }
}

function parallelAlpha(fns, lastFn) {
    let arr = [];
    for (fn of fns) {
        fn((input) => {
            arr.push(input);
            if (arr.length === fns.length) {
                lastFn(arr)
            }
        })
    }
}

// `$ time node 6.1.tsk.js` should log ~1 second (see `fetch` implementation)
parallelAlpha([
    fetch("A"), // \
    fetch("B"), //  | work in parallel
    fetch("C"), // /
], (res) => {
    console.log(...res) // ["A!", "B!", "C!"] or ["A!", "C!", "B!"] or ...
})