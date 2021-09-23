function lastElement(array){
    if(array.length===0){
        return undefined;
    }
    return array[array.length-1];
}

console.log(lastElement(["hello","Cher","Do You","Believe In Life After Love"]));