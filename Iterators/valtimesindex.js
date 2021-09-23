function valTimesIndex(array){
    return array.map(function(val,index){
        return val*index;
    });
}

console.log(valTimesIndex([5,10,15]));