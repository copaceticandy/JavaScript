//107
function getUnique(arr, compareFn) {
    return arr.reduceRight((acc, val) => {
        if (compareFn(val) && !acc.includes(val)) {
            acc.push(val);
        }
        return acc;
    }, [])
}