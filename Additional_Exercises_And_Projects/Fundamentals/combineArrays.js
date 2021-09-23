function combineArrays(arr1, arr2) {
    // var arrayPairs = [];
    // for (let i = 0; i < arr1.length; i++) {
    //     for (let j = 0; j < arr2.length; j++) {
    //         arrayPairs.push([arr1[i], arr2[j]])
    //     }
    // }
    // return arrayPairs;

    return arr1.reduce((acc, val) => {
        arr2.reduce((acc2, val2) => {
            acc2.push([val, val2])
            return acc2;
        }, acc)
        return acc;
    }, [])
}

console.log(combineArrays([1, 2], [1, 2]));