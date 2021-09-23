//ES5 code

// var obj = {
//     numbers: {
//         a: 1,
//         b: 2
//     } 
// }

// var a = obj.numbers.a;
// var b = obj.numbers.b;

//ES2015 code

var obj = {
    numbers: {
        a: 1,
        b: 2
    }
}

var { a, b } = obj.numbers;

console.log(a, b);