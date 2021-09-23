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


function series(fns, lastFn) {
    function recursion(currFns, arr) {
        if (currFns.length === 0) {
            lastFn(false, arr);
            return;
        }
        currFns.shift()((error, val) => {
            if (error) {
                lastFn(error);
                return;
            }
            arr.push(val);
            recursion(currFns, arr)
        })
    }
    recursion(fns, [])
}

// `$ time node 6.1.tsk.js` should log ~3 seconds
series([
    fetch("A"), // works first
    fetch("B"), // works second
    fetch("C"), // works third
], (err, res) => {
    if (err) throw err
    console.log(res) // ["A!", "B!", "C!"]
})