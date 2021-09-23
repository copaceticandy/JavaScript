// function extractKey(array,key){
//     return array.map(function(obj){
//         return obj[key];
//     });
// }

function extractKey(array,key){
    return array.reduce(function(acc,obj){
        acc.push(obj[key]);
        return acc;
    },[]);
}

console.log(extractKey([{name: "Elie", isInstructor:true},{name: "Tim", isInstructor:true},{name: "Matt", isInstructor:true}], "name"));