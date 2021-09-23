const SHORT_DELAY = 1000;
const LONG_DELAY = 2000;

let data = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// var count1 = 0;
// var count2 = 0;


// for (let numbers of data) {
//     setTimeout(_ => {
//         for (let number of numbers) {
//             setTimeout(_ => {
//                 console.log(number)
//             }, SHORT_DELAY * count1)
//             count1++;
//         }
//     }, LONG_DELAY * count2)
//     count2++;
// }

function logData(data) {
    if (!data.length) {
        return
    }
    let [numbers, ...rest] = data
    numbers.forEach((number, i) => {
        setTimeout(
            _ => {
                console.log(number)
                if (i == numbers.length - 1) {
                    setTimeout(_ => {
                        logData(rest)
                    }, LONG_DELAY)
                }
            },
            SHORT_DELAY * i
        )
    })
}

logData(data)