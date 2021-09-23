function sortArrayElements(arr, fn) {
    arr.reduce((acc, val) => {
        if (acc[fn(val)]) {
            acc[fn(val)].push(val);
        } else {
            acc[fn(val)] = [val];
        }
        return acc;
    }, {})
}