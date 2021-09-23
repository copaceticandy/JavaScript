//150

function runPromises(promises) {
    console.log(promises)
    if (promises.length === 1) {
        return promises[0]();
    }
    return promises[0]().then(() => {
        return runPromises(promises.slice(1))
    })
}

// const delay = d => new Promise(r => {
//     setTimeout(() => {
//         r(console.log("Resolved"));
//     }, d)
// });
const delay = d => new Promise(r => {
    setTimeout(() => {
        console.log(`Resolved after ${d} seconds`);
        r("Resolved")
    }, d);
})

runPromises([() => delay(10000), () => delay(5000)]);


// const runPromisesInSeries = ps => {
//     return ps.reduce((p, next) => {
//         return p().then((output) => {
//             console.log(output);
//             return 10;
//         })
//     })
// };

// const delay = d => new Promise(r => setTimeout(() => {
//     r("Success")
// }, d));

// // Executes each promise sequentially, taking a total of 3 seconds to complete

// runPromisesInSeries([() => delay(10000), () => delay(5000)]);
// Executes each promise sequentially, taking a total of 3 seconds to complete

// runPromises([delay(5000), delay(1000)]);