function bufferByTime(time, fn) {
    let buffer = [];
    let t = setTimeout(() => {
        fn(buffer);
        buffer = [];
    }, time)
    return function(val) {
        if (buffer.length === 0 && t._destroyed === true) {
            setTimeout(() => {
                fn(buffer);
                buffer = [];
            }, time);
            buffer.push(val);
        } else {
            buffer.push(val);
        }
    }
}

let log = console.log
let logBuffered = bufferByTime(3000, log)

setTimeout(_ => logBuffered(1), 1000)
setTimeout(_ => logBuffered(2), 1500)
setTimeout(_ => logBuffered(3), 3000)

setTimeout(_ => logBuffered(1), 4100)
setTimeout(_ => logBuffered(2), 5500)

// --1-2-3----------1-2-----------> t (logBuffered calls)
// -------x--------------x--------> t (log calls)
//        [1, 2, 3]      [1, 2]