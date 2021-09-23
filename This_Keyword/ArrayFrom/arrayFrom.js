function arrayFrom(arrayLike) {
    return [].slice.apply(arrayLike);
}

function sample() {
    var arr = arrayFrom(arguments)
    if (!arr.reduce) throw "This is not an array!"
    return arr.reduce(function(acc, next) {
        return acc + next;
    }, 0)
}

console.log(sample(5, 4, 7, 9))