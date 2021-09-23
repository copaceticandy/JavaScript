//ES5 code

// function double(arr){
//     return arr.map(function(val){
//         return val*2
//     });
// }

//ES2015

function double(arr) {
    return arr.map(val => val * 2);
}

console.log(double([2, 3, 5, 9]))