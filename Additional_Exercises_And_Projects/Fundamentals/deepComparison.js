function deepCompare(entry1, entry2) {
    if (entry1 === entry2) {
        return true;
    }
    if (typeof entry1 === "object" && typeof entry2 === "object") {
        if (Array.isArray(entry1) === Array.isArray(entry2)) {
            if (Object.entries(entry1).every((keyValPair) => {
                    if (typeof keyValPair[1] === "object" && (keyValPair[0] in entry2)) {
                        return deepCompare(keyValPair[1], entry2[keyValPair[0]]);
                    }
                    return ((keyValPair[0] in entry2) && (keyValPair[1] === entry2[keyValPair[0]]))
                }) && (Object.keys(entry1).length === Object.keys(entry2).length)) {
                return true;
            }
        }
    }
    return false;
}

var obj1 = {
    0: "pizza",
    1: "coca-cola",
    2: {
        country: "Japan",
        city: "Tokyo",
        street: "10 Murikami",
    },
    3: {
        name: "Harvard",
        country: "USA",
        state: "Boston"
    }
};

var obj2 = ["pizza", "coca-cola", {
    country: "Japan",
    city: "Tokyo",
    street: "10 Murikami",
}, {
    name: "Harvard",
    country: "USA",
    state: "Boston"
}];

// var obj1 = "hello";
// var obj2 = "hello";


console.log(deepCompare(obj1, obj2))