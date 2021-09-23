function expand(array, number) {
    if (typeof number !== "number") {
        throw new Error(number + " is not a number");
    } else if (number < 1) {
        throw new Error(number + " is a negative number");
    } else if (number % 1 !== 0) {
        throw new Error(number + " is not a positive integer");
    } else if (typeof array !== "object") {
        throw new Error("You have not entered an array");
    }
    let arrayLength = array.length;
    for (let i = 0; i < number - 1; i++) {
        for (let j = 0; j < arrayLength; j++) {
            array.push(array[j]);
        }
    }
    return array;

}

let arr = [1, 2, 5, 8];
console.log(expand(arr, 3));