function mergeObjects(obj1, obj2) {
    if (typeof obj1 !== "object" || Array.isArray(obj1) || typeof obj2 !== "object" || Array.isArray(obj2)) {
        throw new Error("One or both of the arguments are not objects.");
    }
    let obj1Copy = {};
    for (let key in obj1) {
        obj1Copy[key] = obj1[key];
    }
    for (let key in obj2) {
        obj1Copy[key] = obj2[key];
    }
    return obj1Copy;
}