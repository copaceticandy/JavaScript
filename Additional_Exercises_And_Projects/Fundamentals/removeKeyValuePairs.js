function removeKeyValuePairs(obj, ...keys) {
    keys.reduce((acc, key) => {
        if (key in obj) {
            delete obj[key];
            return obj;
        } else {
            for (let key2 in obj) {
                if (typeof obj[key2] === "object") {
                    if (removeKeyValuePairs(obj[key2], key2) === "Not found") {}
                }
            }

        }
    })
}