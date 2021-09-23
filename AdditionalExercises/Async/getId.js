function randomInteger(min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

function chance(p) {
    return randomInteger(0, 100) < p // `p` % of `true`
}

function fetch(url) {
    return function(next) {
        setTimeout(() => {
                if (url == "/id") {
                    let err = chance(10)
                    if (err) next("Error 500")
                    else next(null, randomInteger(1, 10))
                } else if (url.startsWith("/data/")) {
                    let err = chance(10)
                    if (err) next("Error 500")
                    else next(null, url + "!")
                } else {
                    next("Error 404")
                }
            }, randomInteger(800, 1000)) // random delay between 800 and 1000 ms
    }
}
let error = "";
let currVal;

function waterfall(fns, lastFn) {
    if (fns.length === 0) {
        lastFn(error, currVal);
        return;
    }
    fns.shift()(currVal, (error, val) => {
        if (error) {
            lastFn(error, currVal);
            return;
        }
        currVal = val;
        waterfall(fns, lastFn);
    })
}


waterfall([
    (_, next) => fetch("/id")(next), // => random id
    (id, next) => fetch("/data/" + id)(next), // => :id!
], (err, result) => {
    if (err) throw err
    console.log(result) // "1!" | "2!" | ...
})