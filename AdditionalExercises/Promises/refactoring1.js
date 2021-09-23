//Using async functions

// setTimeout(() => {
//     console.log("one")
//     setTimeout(() => {
//         console.log("two")
//         setTimeout(() => {
//             console.log("three")
//         }, 1000)
//     }, 500)
// }, 1000)

//Using promises

new Promise(res => {
    setTimeout(() => {
        console.log("one");
        res(1);
    }, 1000)
}).then((data) => {
    return new Promise(res => {
        setTimeout(() => {
            console.log("two");
            res(1);
        }, 2000)
    })
}).then((data) => {
    return new Promise(res => {
        setTimeout(() => {
            console.log("three");
            res(1);
        }, 1000)
    })
})