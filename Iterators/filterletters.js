// function filterLetters(array,letter){
//     return array.filter(function(val){
//         return val.toLowerCase() === letter.toLowerCase();
//     }).length;
// }

function filterLetters(array,letter){
    return array.reduce(function(acc,val){
        if (val.toLowerCase() === letter.toLowerCase()){
            return ++acc;
        }
        return acc;
    },0)
}

console.log(filterLetters(["a","a","b","c","A"], "A"));