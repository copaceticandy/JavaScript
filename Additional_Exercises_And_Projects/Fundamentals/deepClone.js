function deepClone(obj) {
    return Object.entries(obj).reduce((acc, val) => {
        console.log(val[1])
        if (typeof val[1] === "object") {
            acc[val[0]] = deepClone(val[1]);
        } else {
            acc[val[0]] = val[1];
        }
        return acc;
    }, {})
}

var obj1 = {
    0: "pizza",
    1: "coca-cola",
    2: {
        country: {
            country: "Japan",
            planet: "Earth",
            galaxy: "Milky Way",
            universe: "The Universe"
        },
        city: "Tokyo",
        street: "10 Murikami",
    },
    3: {
        name: "Harvard",
        country: "USA",
        state: "Boston"
    }
};

console.log(deepClone(obj1))