function afn1(next) { next("A") }

function afn2(next) { next("B") }

function afn3(next) { next("C") }

// !!! change below this line
// afn1(x1 => {
//     afn2(x2 => {
//         afn3(x3 => {
//             console.log(x1, x2, x3) // Logs "A B C"
//         })
//     })
// })

function series(fns) {
    function recursion(currFns, vals) {
        if (currFns.length === 1) {
            currFns[0]((val) => {
                console.log(...vals, val);
            })
            return;
        }
        currFns.shift()((prim) => {
            vals.push(prim);
            recursion(currFns, vals);
        })
    }
    recursion(fns, []);
}

series([afn1, afn2, afn3]);