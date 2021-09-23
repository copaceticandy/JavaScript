let log = (p) => p.then(_ => console.log(true), _ => console.log(false));

let orP = (p1, p2) => {
    let rejArr = [];
    return new Promise((res, rej) => {
        [p1, p2].map((prom) => {
            return prom.then((accept) => {
                res(accept)
            }, (reject) => {
                rejArr.push(reject);
                if (rejArr.length == 2) {
                    rej(rejArr);
                }
            })
        })
    })
}

let andP = (p1, p2) => {
    return Promise.all([p1, p2]);
}

// let dividedArray = [];
// if (allargs.length % 2) {
//     dividedArray[0] = allargs.splice(0, 1);
// } else {
//     dividedArray[0] = Promise.resolve(true);
// }

// while (allargs.length > 0) {
//     dividedArray.push(allargs.splice(0, 2));
// }
function allP(allArgs) {
    if (allArgs.length === 1) {
        return allArgs[0];
    } else if (allArgs.length === 0) {
        return Promise.resolve(null);
    }
    return allP([andP(...allArgs.splice(0, 2)), ...allArgs]);
}

function anyP(allArgs) {
    if (allArgs.length === 1) {
        return allArgs[0];
    } else if (allArgs.length === 0) {
        return Promise.reject(null);
    }
    return anyP([orP(...allArgs.splice(0, 2)), ...allArgs]);
}


// let anyP

log(anyP([])) // false
log(anyP([Promise.resolve(null)])) // true
log(anyP([Promise.reject(null)])) // false
log(anyP([Promise.reject(null), Promise.resolve(null)])) // true

// log(allP([])) // true
// log(allP([Promise.resolve(null)])) // true
// log(allP([Promise.reject(null)])) // false
// log(allP([Promise.reject(null), Promise.resolve(null)])) // false