function getLongest(...objs) {
    var longArray = objs.reduce((acc, val) => {
        if ((Array.from(acc[0]).length - Array.from(val).length) < 0) {
            acc[0] = val;
        } else if ((Array.from(acc).length - Array.from(val).length) === 0 && acc.includes(val)) {
            acc.push(val)
        }
        return acc;
    }, [objs[0]])

    if (longArray.length > 1) {
        return longArray;
    }
    return longArray[0];
}

console.log(getLongest("foobae", 'foobar'));