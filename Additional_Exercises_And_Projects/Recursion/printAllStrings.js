function printAllStrings(set, len) {
    var setCheck = new Set(set);
    var comboArray = Array.from(setCheck);
    var setArray = Array.from(setCheck);



    // if (len === 1) {
    //     return setArray;
    // }

    // for (let i = 0; i < comboArray.length; i++) {
    //     for (let j = 0; j < setArray.length; j++) {
    //         if (j === 0) {
    //             comboArray[i * setArray.length] = comboArray[i * setArray.length].concat(setArray[j]);
    //         } else {
    //             comboArray.splice(i * setArray.length + j, 0, comboArray[i * setArray.length].concat(setArray[j]))
    //         }
    //     }

    // }
    // printAllStrings(set)

    return growCombo(comboArray, setArray, len)

}

function growCombo(comboArray, setArray, len) {
    originalLength = comboArray.length
    if (len !== 1) {
        for (let i = 0; i < originalLength; i++) {
            var source = comboArray[i * setArray.length];
            for (let j = 0; j < setArray.length; j++) {
                if (j === 0) {
                    comboArray[i * setArray.length] = source.concat(setArray[j]);
                } else {
                    comboArray.splice(i * setArray.length + j, 0, source.concat(setArray[j]))
                }
            }
        }
        return growCombo(comboArray, setArray, len - 1)
    } else {
        return comboArray;
    }
}

var set = new Set(["a", "b", "c"]);
length = 2;

console.log(printAllStrings(set, length));