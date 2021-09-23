const { resolve } = require("path");
const Base = require("./promiseC.js");

let a = Base.makeP("a");
let b = Base.makeP("b");


let f = Base.traceP("f",
    Promise.all([
        a.then(_ => true, _ => false),
        b.then(_ => true, _ => false),
    ]).then(([a, b]) => a != b)
).catch(_ => null)