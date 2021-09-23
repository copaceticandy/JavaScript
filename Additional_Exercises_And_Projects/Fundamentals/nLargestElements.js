function nLargestElements(arr, n) {
    if (n > arr.length) {
        n = arr.length;
    }
    arrCopy = Object.assign([], arr);
    orderedArr = [];
    while (orderedArr.length < n) {
        orderedArr.push(Math.max(...arrCopy));
        arrCopy.splice(arrCopy.indexOf(Math.max(...arrCopy)), 1);
    }
    return orderedArr;
}

console.log(nLargestElements([1, 2, 3], 4));