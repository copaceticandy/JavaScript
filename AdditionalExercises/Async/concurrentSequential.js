function afn1(fn) { fn("A") } // ~ 1 line of code
function afn2(x1, fn) { fn(x1 + "-B"); } // ~ 1 line of code
function afn3(x1, x2, fn) { fn(x2 + "-C"); } // ~ 1 line of code

afn1((x1) => {
    afn2(x1, (x2) => {
        afn3(x1, x2, (x3) => {
            console.log(x1, x2, x3) // Logs "A A-B A-B-C"
        })
    })
})