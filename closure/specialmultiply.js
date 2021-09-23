function specialMultiply(){
    if(arguments.length<2){
        firstNumber = arguments[0];
        return intermediate;
    }
    return arguments[0]*arguments[1];
    function intermediate(number){
        return number*firstNumber;
    }
}

var mid = specialMultiply(15);
console.log(specialMultiply(3)(4));