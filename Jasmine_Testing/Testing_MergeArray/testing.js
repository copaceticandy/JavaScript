function mergeArrays(arr1, arr2) {
    let arr1Copy = arr1.slice();
    for (let i = 0; i < arr1.length; i++) {
        if (isNaN(arr1[i])) {
            throw new Error("The first array has non number elements");
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        if (isNaN(arr2[i])) {
            throw new Error("The second array has non number elements");
        }
        arr1Copy.push(arr2[i]);
    }
    return arr1Copy.sort(function(a, b) { return a - b });
}