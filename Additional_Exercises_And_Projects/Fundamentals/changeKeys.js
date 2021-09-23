function changeKeys(obj, fn) {
    return Object.keys(obj).reduce((acc, key) => {
        var val = obj[key];
        if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
            val = changeKeys(obj[key], fn);
        }
        if (acc[fn(key)]) {
            acc[fn(key)].push(val)

        } else {
            acc[fn(key)] = [val];
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

console.log(changeKeys(obj1, (x) => { return x + "a" })["2a"][0]["countrya"])