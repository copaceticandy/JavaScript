//154
function createObject(inputObj, fn) {
    var outputObj = {};
    for (let key in inputObj) {
        if (fn(inputObj[key], key)) {
            outputObj[key] = inputObj[key];
        }
    }
    return outputObj;
}