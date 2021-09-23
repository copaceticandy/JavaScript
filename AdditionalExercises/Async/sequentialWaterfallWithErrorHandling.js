function randomInteger(min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

function chance(p) {
    return randomInteger(0, 100) < p // `p` % of `true`
}

function fetch(url) {
    return function(next) {
        setTimeout(() => {
                let err = chance(10)
                if (err) next("network problems")
                else next(null, url + "!")
            }, randomInteger(800, 1000)) // random delay between 800 and 1000 ms
    }
}

function waterfall(fns, lastFn) {
    function recursion(currFns, prim) {
        if (currFns.length === 0) {
            lastFn(prim);
            return;
        }
        currFns.shift()(prim, (err, val) => {
            if (err) {
                throw err;
            }
            recursion(currFns, val);
        })
    }
    recursion(fns, null);
}

// `$ time node 6.1.tsk.js` should log ~3 seconds
waterfall([
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