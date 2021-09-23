function afn(x, fn) {
    setTimeout(fn, Math.random() * 5000, x)
}

let xs = ["A", "B", "C"]

let rs = []
for (let x of xs) {
    afn(x, (r) => {
        rs.push(r)
        if (rs.length == xs.length) {
            console.log(rs) // Logs "A B C" in any order with random delays
        }
    })
}