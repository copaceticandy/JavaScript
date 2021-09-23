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

let arr = [];

function seriesAlpha(fns, lastFn) {
    if (fns.length === 0) {
        lastFn(arr);
        return;
    }
    fns.shift()((val) => {
        arr.push(val);
        seriesAlpha(fns, lastFn);
    });
}

// `$ time node 6.1.tsk.js` should log ~3 seconds (see `fetch` implementation)
seriesAlpha([
    fetch("A"), // works first
    fetch("B"), // works second
    fetch("C"), // works third
], (res) => {
    console.log(res) // ["A!", "B!", "C!"]
})