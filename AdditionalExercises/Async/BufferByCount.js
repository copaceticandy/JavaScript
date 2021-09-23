function bufferByCount(n, fn) {
    let buffer = []
    return function(arg) {
        if (buffer.length < n) {
            buffer.push(arg)
        }
        if (buffer.length == n) {
            fn(buffer)
            buffer = []
        }
    }
}
let log = console.log
let logBuffered = bufferByCount(3, log)

setTimeout(_ => logBuffered(1), 1000)
setTimeout(_ => logBuffered(2), 1500)
setTimeout(_ => logBuffered(3), 2000)

setTimeout(_ => logBuffered(1), 5000)
setTimeout(_ => logBuffered(2), 5500)
setTimeout(_ => logBuffered(3), 7000)

// --1-2-3----------1-2---3--------> t (logBuffered calls)
// ------x----------------x--------> t (log calls)
//       [1, 2, 3]        [1, 2, 3]