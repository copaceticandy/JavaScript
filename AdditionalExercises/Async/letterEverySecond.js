let letters = ["a", "b", "c"];
var count = 0;

var t = setInterval(function() {
    if (count === letters.length) {
        clearInterval(t);
    } else {
        console.log(letters[count]);
        count++;
    }
}, 1000)