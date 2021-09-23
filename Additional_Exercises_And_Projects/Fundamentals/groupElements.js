function groupElements(arr, fn) {
    return arr.reduce((acc, val) => {
        if (!acc[fn(val)]) {
            acc[fn(val)] = [val];
        } else {
            acc[fn(val)] = acc[fn(val)].concat(val);
        }
        return acc;
    }, {})
}

function isGreaterThanFive(num) {
    return num > 5;
}

console.log(groupElements([6.1, 4.2, 6.3], Math.floor))