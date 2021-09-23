String.prototype.reverseString = function() {
    var newString = "";
    for (let i = this.length - 1; i > -1; i--) {
        newString = newString + this[i];
    }
    return newString;
}

// var test = [5, 8, 10];
// console.log(test.reverseString())