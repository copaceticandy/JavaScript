function promisify(afn) {
    return function(...args) {
        return new Promise((resolve, reject) => {
            afn(...args, (err, data) => {
                if (err) reject(err)
                else resolve(data)
            })
        })
    }
}
let asyncDouble = (x, next) => {
    next(null, 2 * x)
}

promisify(asyncDouble)(1)
    .then(console.log) // 2