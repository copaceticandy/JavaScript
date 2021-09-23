function printFirstAndLast(array){
    array.forEach(function(val){
        console.log(val[0]+val[val.length-1])
    });
}

printFirstAndLast(['awesome','example','of','forEach']);