let { inspect } = require("util");

function stat(ps, perc) {
    let resArr = [];
    let rejArr = [];
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
                resArr.push(val)
                if ((resArr.length / ps.length) * 100 >= perc) {
                    res(resArr)
                }
            }, (error) => {
                rejArr.push(error);
                if ((rejArr.length / ps.length) * 100 > (100 - perc)) {
                    rej(rejArr);
                }
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

stat([delay(2000), Promise.reject(1), Promise.reject(100)], 50)
    .then(x => console.log(`resolved as ${inspect(x)}`))
    .catch(e => {
        console.error(`rejected as ${inspect(e)}`)
    })