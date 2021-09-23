const Base = require("./promiseC.js");

let a = Base.makeP("a");
// let b = Base.makeP("b");

let e = Base.traceP("e", a.then((val) => {
    throw val;
}, (err) => {
    return err;
})).catch(_ => null);