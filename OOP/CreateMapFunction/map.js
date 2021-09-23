Array.prototype.map = function(callback, obj = this) {
    var newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray[i] = callback(obj[i], i, this);
    }
    return newArray;
}

var arr = [1, 2, 3, 4];

var arr2 = arr.map(function(val, i, bar) {
    return val * i + bar[3];
})

console.log(arr2);