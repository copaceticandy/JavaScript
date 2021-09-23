let { inspect } = require("util");

function makeP(name) {
    return new Promise((res, rej) => {
            setTimeout(() => {
                if (Math.random() < 0.5) {
                    res(name);
                } else {
                    rej(null);
                }
            }, Math.random() * 1000)
        })
        // resolve or reject randomly with 50% probability for each
}

function traceP(name, p) {
    return p.then(x => {
        console.log(`${inspect(name)} resolved to ${inspect(x)}`)
        return x
    }, (e) => {
        console.log(`${inspect(name)} rejected`)
        throw e
    })
}

// console.log("Hello");


// let a = traceP("a", makeP("a"));
// let b = traceP("b", makeP("b"));

// let c = traceP("c", Promise.all([a, b])).catch(_ => null);
module.exports = { makeP, traceP };