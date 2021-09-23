function filterArray(arr, keys, fn) {
    return arr.reduce((acc, val) => {
        if (fn(val)) {
            keys.forEach(key => {
                acc[key] = val[key];
            });
        }
        return acc;
    }, [])
}

const data = [{
        id: 1,
        name: 'john',
        age: 24
    },
    {
        id: 2,
        name: 'mike',
        age: 50
    }
];

console.log(filterArray(data, ['id', 'name'], item => item.age > 24));