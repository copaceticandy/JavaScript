function sumEvenArguments() {

    if (arguments.length === 0) {
        throw new Error("You have not provided any arguments");
    }

    //Method 1
    // let evenSum = 0;
    // for (let i = 0; i < arguments.length; i++) {
    //     if (arguments[i] % 2 === 0) {
    //         evenSum += arguments[i];
    //     }
    // }
    // return evenSum;

    //Method 2

    return [].slice.call(arguments).reduce(function(acc, value) {
        if (isNaN(value)) {
            throw new Error("Some or all of your inputs are not valid numbers");
        }
        if (value % 2 === 0) {
            return acc + value;
        }
        return acc;
    }, 0)
}

// console.log(sumEvenArguments(1, 2, 3, 4));