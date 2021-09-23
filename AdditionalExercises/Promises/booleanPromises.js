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

log(orP(Promise.reject(null), Promise.reject(null))) // false
log(orP(Promise.resolve(null), Promise.reject(null))) // true
log(orP(Promise.reject(null), Promise.resolve(null))) // true
log(orP(Promise.resolve(null), Promise.resolve(null))) // true

log(andP(Promise.reject(null), Promise.reject(null))) // false
log(andP(Promise.resolve(null), Promise.reject(null))) // false
log(andP(Promise.reject(null), Promise.resolve(null))) // false
log(andP(Promise.resolve(null), Promise.resolve(null))) // true