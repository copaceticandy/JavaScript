//61

function castArray(entry) {
    if (Array.isArray(entry)) {
        return entry;
    }
    if (typeof entry === "object") {
        return Object.entries(entry).map((val) => val[1])
    }
    return [entry];
}

var obj = {
    age: 25,
    hair: 'long',
    beard: true
}
console.log(castArray(obj));