function numberCompare(num1,num2){
    if (num1>num2){
        return "First is greater than second";
    }
    if (num2>num1){
        return "Second is greater than first";
    }
    return "Numbers are equal"
}

console.log(numberCompare(10,10));