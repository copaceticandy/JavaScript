let d = new Date()

let throttle = (time, fn) => {
    let lock = false;
    return function() {
        if (!lock) {
            t = setTimeout(() => {
                fn();
                lock = false;
            }, time);
            lock = true;
        }
    }
}

let log = () => console.log(new Date() - d)
let logThrottled = throttle(1000, log)

setInterval(() => {
    logThrottled()
}, 500)