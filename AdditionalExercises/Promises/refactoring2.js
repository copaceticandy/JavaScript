// function afnX(i, next) {
//     setTimeout(() => {
//         next("x") // gets x from... somewhere, possibly using i
//     }, 300)
// }

// function afnY(i, next) {
//     setTimeout(() => {
//         next("y") // gets y from... somewhere, possibly using i
//     }, 400)
// }

// function afnZ(i, next) {
//     setTimeout(() => {
//         next("z") // gets z from... somewhere, possibly using i
//     }, 500)
// }

// function delay(time, val) {
//     return new Promise(res => {
//         setTimeout(() => {
//             res(val)
//         }, time)
//     })
// }

// let afns = [
//     (i) => delay(600, "x"),
//     (i) => delay(400, "y"),
//     (i) => delay(500, "z"),
// ]

// Promise.all(afns.map((fn, i) => fn(i)))
//     .then(rs => {
//         console.log("x + y + z:", rs[0] + rs[1] + rs[2]) // after ~500 ms
//     })

// let afns = [afnX, afnY, afnZ]

// let rs = []
// for (let i = 0; i < afns.length; i++) {
//     afns[i](i, (r) => {
//         rs.push(r)
//         if (rs.length == afns.length) {
//             console.log("x + y + z:", rs[0] + rs[1] + rs[2]) // after ~500 ms
//         }
//     })
// }

let rs = [];


let a = new Promise((res) => {
    setTimeout(() => {
        res("x") // gets x from... somewhere, possibly using i
    }, 600)
}).then((val) => {
    rs.push(val);
    // return 1;
})

let b = new Promise((res) => {
    setTimeout(() => {
        res("y") // gets x from... somewhere, possibly using i
    }, 400)
}).then((val) => {
    rs.push(val);
    // return 1;
})

let c = new Promise((res) => {
    setTimeout(() => {
        res("z") // gets x from... somewhere, possibly using i
    }, 500)
}).then((val) => {
    rs.push(val);
    // return 1;
})

Promise.all([a, b, c]).then(() => { console.log("x + y + z:", rs[0] + rs[1] + rs[2]) });