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

let dummy = 0;


// function waterfallAlpha(fns, lastFn) {
//     fns[0](dummy, (val) => {
//         fns[1](val, (val2) => {
//             fns[2](val2, (val3) => {
//                 lastFn(val3);
//             });
//         });
//     });
// };

function waterfallAlpha(fns, lastFn) {
    if (fns.length === 0) {
        lastFn(dummy);
        return;
    }
    fns.shift()(dummy, (val) => {
        dummy = val;
        waterfallAlpha(fns, lastFn);
    })
}


// `$ time node 6.1.tsk.js` should log ~3 seconds (see `fetch` implementation)
waterfallAlpha([
        (_, next) => { fetch("A")(next) },
        (a, next) => {
            console.log(a);
            fetch("B")(next)
        },
        (b, next) => {
            console.log(b);
            fetch("C")(next)
        },
    ], (c) => console.log(c)) // "C!"