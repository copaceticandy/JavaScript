function median(arr) {
    var arrSorted = arr.sort((a, b) => b - a);
    if (arrSorted.length % 2 === 0) {
        return (arrSorted[arrSorted.length / 2] + arrSorted[(arrSorted.length / 2) - 1]) / 2;
    }
    return arrSorted[Math.floor(arrSorted.length / 2)]
}

console.log(median([5, 6, 50, 1, -5]))
console.log(median([1, 2, 3, 4, 5]))
console.log(median([1, 2, 3, 9, 5, 6]))