//145

function randomizeOrder(arr) {
    if (arr.length === 1) {
        return arr[0];
    }
    var index = Math.floor(Math.random() * arr.length);
    return [arr[index]].concat(randomizeOrder([...arr.slice(0, index), ...arr.slice(index + 1)]));
}

console.log(randomizeOrder([1, 2, 3, 4]));

//alt solution

// function randomizeOrder(arr) {
//     var randomArray = [];
//     arr.reduce((acc) => {
//         randomArray.push(acc.splice(Math.floor(Math.random() * acc.length), 1)[0]);
//         return acc;
//     }, Object.assign([], arr))
//     return randomArray;
// }

// console.log(randomizeOrder([1, 2, 3, 4]));