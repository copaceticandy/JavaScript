let d = new Date()

let debounce = (time, fn) => {
    let t;
    return function() {
        clearTimeout(t);
        t = setTimeout(fn, time);
    }
}

let log = () => console.log(new Date() - d)
let logDebounced = debounce(1000, log)

setTimeout(logDebounced, 10)
setTimeout(logDebounced, 20)
setTimeout(logDebounced, 2000)
setTimeout(logDebounced, 2010)

// !!-------!!--------> t (logDebounced calls)
// ----x--------x-----> t (log calls)
//    ~1s      ~3s