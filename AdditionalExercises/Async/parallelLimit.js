function randomInteger(min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

function chance(p) {
    return randomInteger(0, 100) < p // `p` % of `true`
}

function fetch(url) {
    return function(next) {
        let err = chance(2)
        setTimeout(() => {
                if (err) next("network problems")
                else next(null, url + "!") // change URL somehow to differentiate and keep track at the same time
            }, randomInteger(800, 2000)) // random delay between 800 and 1000 ms
    }
}

function parallelLimit(limit, fns, lastFn) {

    function recursion(currFns, output) {
        if (currFns.length === 0) {
            return lastFn(null, output);
        }
        let isError = false;
        for (let i = 0; i < limit; i++) {
            if (!isError) {
                if (currFns.length > 0) {
                    let fn = currFns[0];
                    currFns = currFns.slice(1, currFns.length);
                    fn((error, input) => {
                        if (error) {
                            isError = true;
                            return lastFn(error, []);
                        }
                        output.push(input);
                        if (output.length === fns.length) {
                            return lastFn(null, output);
                        } else if (output.length % limit === 0) {
                            recursion(currFns, output);
                        }
                    })
                } else {
                    break;
                }
            } else {
                break;
            }
        }
    }
    recursion(fns, [])
}


// $ time node test.js should be ~2s; with 0.9 * 0.9 * 0.9 chance of error
parallelLimit(2, [
    fetch("A"), // \ work in parallel
    fetch("B"), // /
    fetch("C"), // works after previous
    fetch("D"), // /
    fetch("E"),
    fetch("F"), // /
    fetch("G"),
    fetch("H"), // /
    fetch("I")
], (err, res) => {
    if (err) throw err
    console.log(res) // ["A!", "B!", "C!"] or ["B!", "A!", "C!"]
})