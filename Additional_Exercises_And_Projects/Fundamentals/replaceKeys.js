function replaceKeys(obj, replaceObj) {
    for (let oldKey in replaceObj) {
        if (oldKey in obj) {
            // Object.defineProperty(obj, oldKey, Object.getOwnPropertyDescriptor(obj, replaceObj[oldKey]));
            obj[replaceObj[oldKey]] = obj[oldKey];
            delete obj[oldKey];
            if ("recursionEntered" in replaceObj) {
                delete replaceObj.recursionEntered;
                delete replaceObj[oldKey];
                return oldKey;
            }
            delete replaceObj[oldKey];
        } else {
            for (let key in obj) {
                if (typeof obj[key] === "object") {
                    let newObj = {};
                    newObj[oldKey] = replaceObj[oldKey];
                    newObj.recursionEntered = true;
                    var check = replaceKeys(obj[key], newObj);
                    if (check in replaceObj) {
                        delete replaceObj[check];
                    }
                }
            }
        }
    }
    if (!("recursionEntered" in replaceObj)) {
        if (Object.entries(replaceObj).length !== 0) {
            let keys = "";
            for (let key in replaceObj) {
                if (keys.length === 0) {
                    keys = key;
                } else {
                    keys = `${keys}, ${key}`;
                }
            }
            throw Error(`The following keys could not be found in the object: ${keys}`)
        }
    }
    return obj;
}

var obj = {
    name: 'Bobo',
    job: {
        company: "IBM",
        occupation: 'Programmer',
        team: "research"
    },
    favourites: {
        sport: "football",
        food: "pizza",
        drink: "rum",
        colour: "brown"
    },
    shoeSize: 100
};
console.log(replaceKeys(obj, { name: 'firstName', alcohol: 'liquor' }));