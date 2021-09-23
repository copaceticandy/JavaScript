function afn(x, next) {
    setTimeout(_ => next(x), Math.random() * 1000)
}

let xs = ["A", "B", "C"]

// !!! change below this line
// let rs = []
// for (let x of xs) {
//     afn(x, (r) => {
//         rs.push(r)
//         if (rs.length == xs.length) {
//             console.log(rs) // Logs "A B C" in any order with random delays
//         }
//     })
// }

function parallel(inputs, fn) {
    function recursion(currInputs) {
        if (currInputs.length === 0) {
            return;
        }
        fn(currInputs.shift(), (val) => {
            console.log(val);
        })
        recursion(currInputs);
    }
    recursion(inputs);
}

parallel(xs, afn)