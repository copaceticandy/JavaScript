function randomInteger(min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

function chance(p) {
    return randomInteger(0, 100) < p // `p` % of `true`
}

function fetch(url) {
    return function(next) {
        let err = chance(10)
        setTimeout(() => {
                if (err) next("network problems")
                else next(null, url + "!") // change URL somehow to differentiate and keep track at the same time
            }, randomInteger(800, 1000)) // random delay between 800 and 1000 ms
    }
}

function map(xs, mapFn, lastFn) {
    let isError = false;
    let finalOutput = [];
    for (x of xs) {
        if (!isError) {
            mapFn(x)((error, output) => {
                if (error) {
                    lastFn(error);
                    isError = true;
                    return;
                }
                finalOutput.push(output);
                if (finalOutput.length === xs.length) {
                    lastFn(null, finalOutput);
                }

            })
        }
    }
}

map(["A", "B", "C"], fetch, (err, res) => {
    if (err) throw err
    console.log(res) // ["A!", "B!", "C!"] or ["A!", "C!", "B!"] or ...
})