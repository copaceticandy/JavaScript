function delay(timeout) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(null)
        }, timeout)
    })
}

function range(n) {
    return [...Array(n).keys()]
}

function fetch(d) {
    return delay(1000).then(_ => ({ d }))
}

function divideRange(arr, divLength, newArr) {
    if (arr.length > divLength) {
        newArr.push(arr.splice(0, divLength));
        return divideRange(arr, divLength, newArr);
    } else {
        newArr.push(arr);
        return newArr;
    }
}

function makeNfetches(numFetches, maxFetches) {
    return divideRange(range(numFetches), maxFetches, []).reduce((acc, val) => {
        return acc.then((output) => {
            console.log(output);
            return Promise.all(val.map(fetch));
        })
    }, Promise.resolve())
}

// console.log(divideRange(range(50), 20, []))
// console.log(range(20))

let r = makeNfetches(50, 20); // fetches 22 at once :(
r.then(console.log)