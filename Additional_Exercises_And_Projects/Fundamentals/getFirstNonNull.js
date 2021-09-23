function getFirstNonNull(...args) {
    return args.find((val) => {
        return (typeof val !== "undefined" && val !== null)
    })
}

// console.log(getFirstNonNull(null, undefined, undefined, 3, null, 5))
var str2 = "hello";