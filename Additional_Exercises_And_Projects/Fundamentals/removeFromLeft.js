function removeFromLeft(arr, ...elements) {
    for (j = 0; j < elements.length; j++) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == elements[j]) {
                arr.splice(i, 1);
                break;
            }
        }
    }
    return arr;
}
console.log(removeFromLeft([1, 2, 3, 4, 5, 6], 1, 4, 5))