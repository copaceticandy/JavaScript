function acceptNumbersOnly() {
    if (arguments.length === 0) {
        throw new Error("You have not provided any arguments");
    }
    let isNumber = true;
    for (let i = 0; i < arguments.length; i++) {
        if (isNaN(arguments[i])) {
            isNumber = false;
            break;
        }
    }
    return isNumber;
}