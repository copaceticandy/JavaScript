function createCalculator(){
    Obj = {
        add: function(num1=1,num2=1){
            return num1+num2;
        },
        subtract: function(num1=1,num2=1){
            return num1-num2;
        },
        multiply: function(num1=1,num2=1){
            return num1*num2;
        },
        divide: function(num1=1,num2=1){
            return num1/num2;
        }
    }
    return Obj;
}

console.log(calc.divide(12,2));
var calc = createCalculator();