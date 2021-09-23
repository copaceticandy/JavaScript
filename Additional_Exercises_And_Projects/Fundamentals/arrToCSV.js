function arrayToCSV(objectArray, ...cols) {
    var csv = cols.join(",").toString().concat("\n");
    objectArray.forEach(val => {
        cols.forEach((title) => {
            if (val[title]) {
                csv = csv.concat(val[title].toString() + ",")
            } else { csv = csv.concat(",") }
        })
        csv = csv.slice(0, csv.length - 1).concat('\n');
    })
    return csv;
}

console.log(arrayToCSV([{ x: 100, y: 200 }, { x: 300, y: 400, z: 500 }, { x: 6 }, { y: 7 }], 'x', 'y'));