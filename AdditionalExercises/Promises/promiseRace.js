// My version of promise.race

let { inspect } = require("util")

function race(ps) {
    ps = ps.map((val) => {
        if (inspect(val).startsWith("Promise")) {
            return val;
        } else {
            return Promise.resolve(val);
        }
    });
    return new Promise((res, rej) => {
        ps.map((prom) => {
            return prom.then((val) => {
                res(val);
            }, (error) => {
                rej(error);
            });
        });
    });
}

function delay(timeout) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(timeout)
        }, timeout)
    })
}

race([delay(2000), Promise.reject(1), 2])
    .then(x => console.log(`resolved as ${inspect(x)}`))
    .catch(e => console.error(`rejected as ${e}`))