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
                    let err = chance(40)
                    if (err) next("Error 500")
                    else next(null, url + "!")
                } else {
                    next("Error 404")
                }
            }, randomInteger(800, 1000)) // random delay between 800 and 1000 ms
    }
}

function parallel(fns, lastFn) {
    let data = [];
    // let err = Array(fns.length).fill(false);
    for (let i = 0; i < fns.length; i++) {
        fns[i]((error, url) => {
            if (error) {
                data.push(error);
                // lastFn(error, data);
            } else {
                data.push(url);
            }
            if (data.length === fns.length) {
                if ((/\/data\//).test(data)) {
                    lastFn(null, data);
                } else {
                    lastFn(data, null)
                }
            }
        })
    }
}

parallel([
        fetch("/data/1"),
        fetch("/data/2")
    ],
    (err, data) => {
        if (err) {
            throw err;
        }
        console.log(...data)

    })