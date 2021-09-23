function afn1(_, next) { next("A") }

function afn2(x1, next) { next(x1 + "B") }

function afn3(x2, next) { next(x2 + "C") }

// !!! change below this line
// afn1(null, (x1) => {
//     afn2(x1, (x2) => {
//         afn3(x2, (x3) => {
//             console.log(x3) // Logs "ABC"
//         })
//     })
// })

function series(fns) {
    function recursion(currFns, prim) {
        if (currFns.length === 1) {
            currFns[0](prim, (url) => {
                console.log(url);
            })
            return;
        }
        currFns.shift()(prim, (x1) => {
            recursion(currFns, x1);
        })
    }
    recursion(fns, null)
}

series([afn1, afn2, afn3]);