function splitArrayArrayTruthy(arr1, arr2) {
    var truthy = arr1.concat(arr2);
    var falsey = [];
    for (let i = 0; i < truthy.length; i++) {
        if (!!truthy[i] === false) {
            falsey.push(truthy.splice(i, 1)[0]);
            i--;
        }
    }
    return { truthy: truthy, falsey: falsey }

}

var arr1 = [1, 3, 0, null, undefined, {}];
var arr2 = ["hello", "", [], 25];

console.log(splitArrayArrayTruthy(arr1, arr2));