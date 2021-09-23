function comparArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    };
    if (arr1 === arr2) {
        return true;
    };
    return arr1.every((val, index) => {
        if (val !== arr2[index]) {
            if ((typeof val === "object") && (typeof arr2[index] === "object")) {
                if (Array.isArray(val) && Array.isArray(arr2[index])) {
                    return comparArrays(val, arr2[index]);
                }
                return comparArrays(Object.entries(val), Object.entries(arr2[index]));
            }
            return false;
        }
        return true;
    })
}

var arr1 = [1, 2, 3, {
        dog: "german shepard",
        address: {
            country: "Canada",
            state: "Quebec",
            city: "Montreal",
            street: "Jones"
        }
    },
    [1, 2, 5]
];
var arr2 = [1, 2, 3, {
        dog: "german shepard",
        address: {
            country: "Canada",
            state: "Quebec",
            city: "Montreal",
            street: "Jones"
        }
    },
    [1, 2, 5]
];
console.log(comparArrays(arr1, arr2));