function authenticateUserNames(userNamesArray) {
    let regExp = /(^[a-z\d]{6,10}$)/;
    let testNum = /\d/;
    let testLetter = /[a-z]/;
    if (userNamesArray.some((val) => {
            if (val.match(regExp)) {
                return !(testNum.test(val) && testLetter.test(val))
            }
            return true;
        })) {
        return false;
    }
    return true;
    //Alternative approach
    // let regExp2 = /^(?=.*[a-z])(?=.*[0-9])[a-z\d]{6,10}$/;
    // if (userNamesArray.some((val) => {
    //         return !val.match(regExp2)
    //     })) {
    //     return false
    // }
    // return true
}

console.log(authenticateUserNames(['john123sjk1', 'alex222', 'sandra1']));