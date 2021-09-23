function groupArrayElements(arr, fn) {
    return arr.map((val) => fn(val)).reduce((acc, val) => {
        if (!acc[val]) {
            acc[val] = 1;
            return acc;
        }
        acc[val]++;
        return acc;
    }, {})

}

console.log(groupArrayElements([6, 10, 100, 10], Math.sqrt))