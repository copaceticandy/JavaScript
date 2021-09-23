//110

//110
function union(arr1, arr2) {
    var uniqueSet = [];
    var isRepeated = false;
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1.length; j++) {
            if (i !== j) {
                if (arr1[i] === arr1[j]) {
                    isRepeated = true;
                    break;
                }
            } else {
                continue;
            }
        }
        if (!isRepeated) {
            uniqueSet.push(arr1[i])
        }
        isRepeated = false;
    }
    for (let i = 0; i < arr2.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (i !== j) {
                if (arr2[i] === arr2[j]) {
                    isRepeated = true;
                    break;
                }
            } else {
                continue;
            }
        }
        if (!isRepeated) {
            uniqueSet.push(arr2[i])
        }
        isRepeated = false;
    }
    return Array.from(new Set(uniqueSet));
}

var a1 = [2, 2, 2, 2, 3];
var a2 = [2, 2, 2, 2, 4];

console.log(union(a1, a2));