function compare(obj1, source) {
    var matchingKeys = [];
    for (let key in obj1) {
        if (key in source) {
            matchingKeys.push(key)
        }
    }
    return matchingKeys;
}

console.log(compare({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true }));