var numbers = [1,2,3,4,5,6,7,8,9,10];
function displayOddNumbers(){
    for (var i=0;i<numbers.length;i++){
        if (numbers[i]%2){
            console.log("The odd number is: " + numbers[i]);
        }
    }
}
function displayEvenNumbers(){
    for (var i=0;i<numbers.length;i++){
        if (!(numbers[i]%2)){
            console.log("The odd number is: " + numbers[i]);
        }
    }
}
function returnFirstOddNumber(){
    for (var i=0;i<numbers.length;i++){
        if (numbers[i]%2){
            console.log("The first odd number is: " + numbers[i]);
            break;
        }
    }
}

function returnFirstHalf(){
    var firstHalf = numbers.slice(0,(numbers.length/2-1)+1);
    console.log(firstHalf);
}

function returnSecondHalf(){
    var secondHalf = numbers.slice(numbers.length/2,numbers.length);
    console.log(secondHalf);
}

displayOddNumbers();
console.log("---------------------------------");
displayEvenNumbers();
console.log("---------------------------------");
returnFirstOddNumber();
console.log("---------------------------------");
returnFirstHalf();
console.log("---------------------------------");
returnSecondHalf();
