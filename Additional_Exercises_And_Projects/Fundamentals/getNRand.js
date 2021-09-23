function getNRand(start, end, num) {
    randArray = [];
    for (let i = 0; i < num; i++) {
        randArray.push(Math.floor(Math.random() * (end - start + 1) + start));
    }
    return randArray;
}

console.log(getNRand(2, 7, 10));