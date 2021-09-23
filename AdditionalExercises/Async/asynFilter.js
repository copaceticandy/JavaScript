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

function filter(xs, filterFn, lastFn) {

    let x;

    function recursion(arrXs, finalOutput) {
        if (!arrXs.length) {
            return lastFn(null, finalOutput);
        }
        x = arrXs.splice(0, 1);
        filterFn(x)((noFilter) => {
            if (noFilter) {
                fetch(x)((error, output) => {
                    if (error) {
                        return lastFn(error);
                    }
                    finalOutput.push(output);
                    return recursion(arrXs, finalOutput);
                })
            } else {
                return recursion(arrXs, finalOutput);
            }
        })
    }

    recursion(xs, []);
}


let skipBs = (x) => (next) => next(x != "B")

filter(["A", "B", "C"], skipBs, (err, res) => {
    if (err) throw err
    console.log(res) // ["A", "C"]
})