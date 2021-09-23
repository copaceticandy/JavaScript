function rotate (array,number){
    var remainder = 0;
    var dummyArray = [];
    for(var i=0; i<array.length;i++){
        if(number>(array.length-(i+1))){
            remainder =(number-(array.length-(i+1)))%array.length;
            if (remainder===0){
                remainder = array.length;
            }
            console.log(remainder);
            // console.log(dummyArray[i],i);
            dummyArray[remainder-1] = array[i];
        }
        else{
            dummyArray[i+number]= array[i];
        }
    }
    return dummyArray;
}
console.log(rotate([1,2,3],8));