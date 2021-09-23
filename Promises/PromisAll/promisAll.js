function promiseAll(array) {
    return new Promise(function(resolve, reject) {
        var resolveArray = [];
        array.forEach((val, index) => {
            val.then((data) => {
                resolveArray[index] = data
            }).catch((error) => {
                resolveArray[index] = { rejected: error }
            })
        });
        if ("rejected" in resolveArray) {
            reject(resolveArray);
        } else {
            accept(resolveArray);
        }
    })
}