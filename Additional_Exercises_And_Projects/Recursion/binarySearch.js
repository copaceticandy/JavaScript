Array.prototype.binarySearch = function(num) {
    if (this[0] === num) {
        return 0;
    }
    if (this[this.length - 1] === num) {
        return this.length - 1;
    }
    var arrLower = this.slice(0, Math.floor(this.length / 2));
    var arrUpper = this.slice(Math.floor(this.length / 2), this.length + 1);
    if (num > arrLower[arrLower.length - 1]) {
        return Math.floor(this.length / 2) + arrUpper.binarySearch(num);
    }
    return arrLower.binarySearch(num);
}

// Array.prototype.binarySearch = function(num) {
//     console.log(this);
//     for (let i = 0; i < this.length; i++) {
//         this[i] = this[i] + num;
//     }
//     return this;
// }

var arr = [1, 3, 6, 9, 21, 56];
console.log(arr.binarySearch(3));