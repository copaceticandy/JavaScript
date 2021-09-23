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

function parallel(fns, lastFn) {
    let arr = [];
    let error = "";

    for (fn of fns) {
        if (!error) {
            fn((errMessage, val) => {
                if (errMessage !== null) {
                    lastFn(errMessage, arr);
                    error = errMessage;
                    return;
                }
                arr.push(val);
                if (arr.length === fns.length) {
                    lastFn(error, arr);
                }
            })
        }
    }
}

parallel([
    fetch("A"), // \
    fetch("B"), //  | work in parallel
    fetch("C"), // /
], (err, res) => {
    if (err) throw err
    console.log(res) // ["A!", "B!", "C!"] or ["A!", "C!", "B!"] or ...
})