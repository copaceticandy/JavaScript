// function addKeyAndValue(array,key,value){
//     array.forEach(function(object,index){
//         object[key] = value;
//     });
//     console.log(this)
//     return array;
// }

function addKeyAndValue(array,key,value){
    return array.reduce(function(acc,object,index){
        acc[index][key] = value;
        return acc;
    },array);
}

console.log(addKeyAndValue([{name: 'Elie'},{name: 'Tim'},{name: 'Elie'}], "isInstructor", true));