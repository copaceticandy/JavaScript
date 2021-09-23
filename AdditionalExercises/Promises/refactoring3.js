// let c = setInterval(() => {
//     console.log(Math.random())
// }, 1000)

// setTimeout(() => {
//     clearInterval(c)
// }, 5100)

let t;

function delay(time) {
    return new Promise((res) => {
        t = setTimeout(() => {
            res(Math.random())
        }, time)
    })
}


function repeat(prom, int, elapsed = 0) {
    if (elapsed < 5000) {
        prom.then((val) => {
            console.log(val);
            elapsed += int;
            repeat(delay(int), int, elapsed)
        })
    }
}

repeat(delay(1000), 1000);