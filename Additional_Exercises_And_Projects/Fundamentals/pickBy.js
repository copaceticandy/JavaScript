function pickBy(obj, fn) {
    return Object.keys(obj).reduce((acc, key) => {
        if (fn(obj[key], key)) {
            acc[key] = obj[key]
        }
        return acc;
    }, {})
}
console.log(pickBy({ a: 1, b: '2', c: 3 }, x => typeof x === 'number'))