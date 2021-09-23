setTimeout(_ => console.log("A"), 0)
setTimeout(_ => console.log("B"), 0)
setImmediate(_ => console.log("C"))
setImmediate(_ => console.log("D"))