function isEven(number){
    if(number%2){
        return false;
    }
    return true;
}

function isOdd(number){
    if(number%2){
        return true;
    }
    return false;
}

function isPrime(number){
    if(number%2){
        var size = Math.floor(number/2);
        
    }
    else{
        return false;
    }

    for(var i=3;i<size;i++){
        if(number%i===0){
            return false;
        }
    }
    return true;
}

function numberFact(number,callback){
    return callback(number);
}

console.log(numberFact(13,isEven));