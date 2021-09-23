function afn1(_, next) { next("A") }

function afn2(x1, next) { next(x1 + "B") }

function afn3(x1, x2, next) { next(x1 + x2 + "C") }

// !!! change below this line
// afn1(null, (x1) => {
//     afn2(x1, (x2) => {
//         afn3(x1, x2, (x3) => {
//             console.log(x1, x2, x3) // Logs "A AB AABC"
//         })
//     })
// })

function series(fns) {
    function recursion(currFns, input) {
        if (currFns.length === 1) {
            currFns[0](...input, (url) => {
                console.log(...input, url)
            })
            return;
        }
        currFns.shift()(...input, (url) => {
            if (input[0] === null) {
                recursion(currFns, [url])
            } else {
                recursion(currFns, [...input, url]);
            }
        })
    }
    recursion(fns, [null]);
}

series([afn1, afn2, afn3]);