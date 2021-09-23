function functionComposition(...fns) {
    return function comp(...arg) {
        if (fns.length === 1) {
            return fns[0](...arg);
        }
        return comp(fns.splice(0, 1)[0](...arg))
    }
}

// //alternative solution

// function functionComposition(...fns) {
//     return function(...x) {
//         return fns.reduce((acc, fn) => {
//             if (acc.length > 0) {
//                 return fn(...acc);
//             }
//             return fn(acc);
//         }, x)
//     }
// }

// var pipeFunctions = function(...fns) {
//     return fns.reduce(function(f, g) {
//         return function(...args) {
//             return g(f(...args))
//         }
//     })
// }

const add5 = x => x + 5;
const multiply = (x, y) => x * y;
// const divideBy3 = (x, y) => x / y
const multiplyAndAdd5 = functionComposition(multiply, add5)

console.log(multiplyAndAdd5(2, 5))