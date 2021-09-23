function validateMexicanNumber(number) {
    let regExp = /^(\(5[56]\)(\s?\d{2}){3})|5[56](\s?\d{2}){3}$/;
    if (number.match(regExp)) {
        return "Valid number"
    }
    throw Error("Not a valid number")
}

console.log(validateMexicanNumber("99956485"));