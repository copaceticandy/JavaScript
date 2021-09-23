function vowelCount(word){
    var wordArray = word.split("");
    var vowels = ["a","e","i","o","u"];
    return wordArray.reduce(function(acc,val){
        if(vowels.find(function(val2){
            return val.toLowerCase() === val2.toLowerCase();
        })){
            if(val in acc){
                acc[val]++;
            }
            else{
            acc[val] = 1;
            }
        }
        return acc;
    },{});
}

console.log(vowelCount("incredible"));