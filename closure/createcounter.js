function createCounter(){
    var count = 0;
    return function counter (){
        return ++count;
    }
}

var firstCounter = createCounter();
var secondCounter = createCounter();
console.log(firstCounter());
console.log(firstCounter());
console.log(secondCounter());
console.log(secondCounter());