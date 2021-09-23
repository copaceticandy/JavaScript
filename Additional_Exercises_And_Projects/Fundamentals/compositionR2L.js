function compositionR2L(args, ...fns) {
    if (fns.length === 1) {
        return fns[0](args)
    }
    return compositionR2L([fns[fns.length - 1](...args)], ...fns.slice(0, fns.length - 1))
}

var arr = [100, 6];
console.log(compositionR2L(arr, Math.log10, Math.max))

//Other solution

// var test = function(...fns) {
//     return fns.reduce(function(f, g) {
//         return function(...args) {
//             f(g(...args))
//         }
//     })
// }