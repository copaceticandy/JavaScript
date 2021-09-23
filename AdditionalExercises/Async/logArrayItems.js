function logArray(xs) {
    if (!xs.length) {
        return
    }
    let [x, ...xsRest] = xs
    console.log(x)
    setImmediate(() => { logArray(xsRest) }); // fails somewhere around 8000–9000'th call
}

function range(n) {
    return [...Array(n).keys()]
}

logArray(range(10000));