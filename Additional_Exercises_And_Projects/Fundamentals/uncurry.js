//114
function uncurry(fn, n) {
    return function(...args) {
        if (args.length >= n) {
            return args.reduce((intermediate, arg) => {
                return intermediate(arg);
            }, fn)
        }
        throw Error("Insufficient arguments");
    }
}

function add(x) {
    return function(y) {
        return function(z) {
            return x + y + z;
        }
    }
};
console.log(uncurry(add, 2)(1));
// console.log(add(1)(2)(3));