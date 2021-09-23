function countEvensAndOdds(array){
    var countEvens = 0;
    var countOdds = 0;
    for (var i=0;i<array.length;i++){
        if(array[i]%2==1){
            countOdds++;
        }
        if(array[i]%2==0){
            countEvens++;
        }
    }
    evensAndOdsObj = {
        oddCount : countOdds,
        evenCount : countEvens
    }
    return evensAndOdsObj;
}
console.log(countEvensAndOdds([1,2,3,4,5,6,7]));