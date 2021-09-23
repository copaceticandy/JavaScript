function map(array,fn){
    for (var i=0;i<array.length;i++){
        array[i]=fn(array[i]);
    }
    return array;
}

console.log(map([1,2,3,4], function(val){
    return val * 2;
}));