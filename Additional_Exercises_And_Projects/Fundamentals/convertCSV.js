function convertCSV(inputString) {
    var twoDArray = inputString.split('\n');
    for (let i = 0; i < twoDArray.length; i++) {
        twoDArray[i] = twoDArray[i].split(",");
    }
    return twoDArray;
}

var str = "abc,def,ghi,jkl\nmno,pqr,stu,vwx,yz";

console.log(convertCSV(str));