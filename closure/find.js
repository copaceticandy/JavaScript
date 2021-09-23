function find(array,foo){
    for (var i=0;i<array.length;i++){
        if(foo(array[i])){
            return array[i];
        }
    }
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

console.log(find([8,11,4,27], isPrime));