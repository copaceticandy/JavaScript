function promiseState(p) {
    let iterab = [p, Promise.resolve(1)];
    return Promise.race(iterab).then((resolution) => {
        if (resolution === 1) {
            return "pending"
        }
        return "fulfilled"
    }, () => {
        return "rejected"
    })
}

let x = Promise.resolve("!")
let y = Promise.reject("?")
let z = new Promise(_ => null)

promiseState(x).then(console.log) // fulfilled
promiseState(y).then(console.log) // rejected
promiseState(z).then(console.log) // pending