function nodeify(pfn) {
    return function(...args) {
        pfn(...args.slice(0, args.length - 1)).then((val, rej) => {
            args[args.length - 1](rej, val);
        })
    }
}

function promiseAsyncOne(x) {
    return Promise.resolve(x)
}

nodeify(promiseAsyncOne)(1, (err, data) => {
    if (err) throw err
    else console.log(data) // 2
})