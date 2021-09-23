//136
function allPerms(str) {
    if (str.length === 1) {
        return [str];
    }
    var perms = [];
    for (let i = 0; i < str.length; i++) {
        perms = perms.concat(dotAppend(str[i], allPerms(str.slice(0, i) + str.slice(i + 1))));
    }
    return perms;
}

function dotAppend(char, arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = char + arr[i];
    }
    return arr;
}

console.log(allPerms("debt"))

//alternative approach

// const stringPermutations = str => {
//     if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
//     return str
//         .split('')
//         .reduce(
//             (acc, letter, i) =>
//             acc.concat(stringPermutations(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)), []
//         );
// };

// console.log(stringPermutations('debt'))