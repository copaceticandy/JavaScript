function setInterval(fn, time, ...inputs) {
    let isIntClear = false;
    let obj = {
        clearInterval: function() {
            isIntClear = true;
        }
    }

    function timer() {
        setTimeout(() => {
            if (isIntClear) {
                return
            }
            fn(...inputs);
            timer();
        }, time);
    }
    timer();
    return obj;
}



let t = setInterval(() => {
    console.log(new Date())
}, 2000)

setTimeout(_ => {
    t.clearInterval() // Alternated API, see a hint below
}, 7000)

console.log(t);