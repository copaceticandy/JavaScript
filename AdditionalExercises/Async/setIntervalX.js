function setIntervalX(fn, delay) {
    let t;
    let obj = {
        stopped: false,
        stop: function() {
            clearTimeout(t);
            obj.stopped = true;
        }
    }

    function intermediate() {
        t = setTimeout(() => {
            fn();
            intermediate();
        }, delay)
    }
    intermediate();
    return obj;
}

let t = setIntervalX(_ => console.log("!"), 1000)
console.log(t.stopped)
setTimeout(_ => {
    t.stop() // `clearInterval(t)` won't work with custom `t` so we change the API
    console.log(t.stopped)
}, 3010)

// Expected log:
// false
// !
// !
// !
// true