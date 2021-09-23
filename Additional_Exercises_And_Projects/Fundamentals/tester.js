const rename_keys = (keysMap, obj) => {
    return Object.keys(obj).reduce(
        (acc, key) => ({
            ...acc,
            ... {
                [keysMap[key] || key]: obj[key]
            }
        }), {}
    )
};

const obj = {
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
// const obj = { name: 'Bobo', job: 'Programmer', shoeSize: 100 };

console.log(rename_keys({ name: 'firstName', colour: "Actor" }, obj));