var arr = [];
Array.isArray(arr); // true
Array.isArray("Hello"); // false

var nestedArr = [
    "Elie",
    ["Matt", ["Tim"]],
    ["Colt", ["Whiskey", ["Janey"], "Tom"]],
    "Lorien"
];

function countVowels(array) {
    var count = 0;
    if (Array.isArray(array)) {
        for (var i = 0; i < array.length; i++) {
            count = count + countVowels(array[i]);
        }
    }
    else {
        for (var i = 0; i < array.length; i++) {
            if (array[i].toLowerCase() === "a" || array[i].toLowerCase() === "e" || array[i].toLowerCase() === "i" ||
                array[i].toLowerCase() === "o" || array[i].toLowerCase() === "u") {
                count = count + 1;
            }
        }
    }
    return count;
}


console.log(countVowels(nestedArr));