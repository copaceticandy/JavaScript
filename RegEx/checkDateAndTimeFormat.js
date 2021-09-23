function checkDateAndTimeFormat(date) {
    let regExp = /\d{2}-\d{2}-\d{4} \d{2}:\d{2}/;
    if (date.match(regExp)) {
        let numArray = date.split(/[:-\s]/);
        if (parseInt(numArray[0]) > 31) {
            throw Error("This is not a valid day of the month")
        }
        if (parseInt(numArray[1]) > 12) {
            throw Error("This is not a valid month")
        }
        if (parseInt(numArray[0]) > 28 && parseInt(numArray[1]) === 2) {
            throw Error("February only has 28 days")
        }
        if (parseInt(numArray[0]) === 31 && numArray[1].match(/[46911]/)) {
            throw Error("This month only has 30 days")
        }
        if (parseInt(numArray[3]) > 23 || parseInt(numArray[4]) > 59) {
            throw Error("This is not a valid time")
        }
        return true
    }
    return false
}

console.log(checkDateAndTimeFormat("31-06-2016 01:12"));