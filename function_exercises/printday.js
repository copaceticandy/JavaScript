function printDay(num){
    if (num>7 || num < 1){
        return undefined
    }
    var obj = {
        1 : "Monday",
        2 : "Tuesday",
        3 : "Wednesday",
        4 : "Thursday",
        5 : "Friday",
        6 : "Saturday",
        7 : "Sunday"
    }
    return obj[num.toString()];
}

console.log(printDay(32));