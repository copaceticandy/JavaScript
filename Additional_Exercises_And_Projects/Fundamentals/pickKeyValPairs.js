function pickKeyValPairs(obj, keys) {
    return keys.reduce((acc, key) => {
        acc[key] = obj[key];
        return acc;
    }, {})
}

console.log(pickKeyValPairs({ a: 1, b: '2', c: 3 }, ['a', 'c']))