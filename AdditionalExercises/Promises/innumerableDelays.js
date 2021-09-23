function delay(timeout) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(null)
        }, timeout)
    })
}

let delays = [1000, 2000, 1000, 2000] // predefined delays

// Promise.resolve()
//     .then(_ => delay(delays[0]).then(console.log("0")))
//     .then(_ => delay(delays[1]).then(console.log("1")))
//     .then(_ => delay(delays[2]).then(console.log("2")))
//     .then(_ => delay(delays[3]).then(console.log("3")))
//     // @_@


delays.reduce((acc, val, index) => {
    return acc.then(() => {
        return delay(val).then(console.log(`${index}`))
    })
}, Promise.resolve())