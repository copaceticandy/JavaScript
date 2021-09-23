function targetValue(obj, key) {
    if (key in obj) {
        return obj[key]
    }
    // var nestedObjs = [];
    var valCheck;
    for (let val in obj) {
        if (typeof obj[val] === "object") {
            if (targetValue(obj[val], key) === "No such key exists") {
                continue
            } else {
                return targetValue(obj[val], key);
            }
        }
    }
    return "No such key exists";

}

var object1 = {
    name: "john",
    surname: "doe",
    address: {
        street: "gilmore",
        suburb: "levine",
        city: "gotham",
        degree: {
            University: "Harvard",
            Major: "Botony",
            Department: "Environmental Sciences",
            Faculty: "Science"
        },
        country: {
            officalName: "USA",
            president: "Barack Obama",
            anthem: "Star Spangled Banner"
        }
    }
}

console.log(targetValue(object1, "president"))