//ES5 code 

// var arr = [1,2]
// var temp = arr[0]
// arr[0] = arr[1]
// arr[1] = temp

//ES2015 code

var arr = [1, 2];
var [a, b] = arr;
arr = [b, a];

console.log(arr);