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

console.log(isPrime(8));