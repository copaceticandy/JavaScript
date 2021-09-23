const Base = require("./promiseC.js");

let a = Base.makeP("a");
let b = Base.makeP("b");


let d = Base.traceP("d", Promise.race([a, b.then((pass) => {
    return pass
}, (fail) => {
    return a;
})])).catch(_ => null);