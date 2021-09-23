function reject(array,fn){
    var rejectArray=[];
    for (var i=0;i<array.length;i++){
        if(fn(array[i])===false){
            rejectArray.push(array[i]);
        }
    }
    return rejectArray;

}

console.log(reject([2,3,4,5], function(val){
    return val % 2 === 0;
}));