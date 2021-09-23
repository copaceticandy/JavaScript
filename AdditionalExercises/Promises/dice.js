function randomInteger(min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

function chance(p) {
    return new Promise((res, rej) => {
        if (p >= randomInteger(0, 100)) {
            res(true);
        } else { res(false) }
    });
}

chance(50).then(_ => console.log("!")) // --!-->