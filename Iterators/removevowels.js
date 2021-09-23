function removeVowels(word){
    var wordArray = word.split("");
    var vowels = ["a","e","i","o","u"];
    return wordArray.reduce(function(acc,val,index){
        if(vowels.find(function(val2){
            return val.toLowerCase() === val2.toLowerCase();
        })){
            wordArray.splice(index,1);
        }
        return wordArray;
    },[]).join("");
}

console.log(removeVowels("amazing"));