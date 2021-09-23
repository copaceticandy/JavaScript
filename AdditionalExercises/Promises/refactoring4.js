// function afnX(next) {
//     setTimeout(() => {
//         next("x") // gets x from... somewhere
//     }, 500)
// }

// function afnY(x, next) {
//     setTimeout(() => {
//         next("y") // gets y from... somewhere, possibly using x
//     }, 500)
// }

// function afnZ(x, y, next) {
//     setTimeout(() => {
//         next("z") // gets z from... somewhere, possibly using x and y
//     }, 500)
// }

// afnX(x => {
//     console.log("x:", x)
//     afnY(x, (y) => {
//         console.log("x + y:", x + y)
//         afnZ(x, y, (z) => {
//             console.log("x + y + z:", x + y + z)
//         })
//     })
// })

function delay(time, val) {
    return new Promise((res) => {
        setTimeout(() => {
            res(val)
        }, time)
    })
}

function recursh(arr, input = "") {
    if (arr.length !== 0) {
        delay(500, arr.shift()).then((data) => {
            input += data;
            console.log("x:", input)
            recursh(arr, input);
        })
    }
}

recursh(["x", "y", "z"]);