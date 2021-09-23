function luhnCheck(num) {
    var length = num.toString().length;
    return num.toString().split("").reduceRight((acc, val, index) => {
        console.log(acc);
        if ((length - index) % 2 === 0) {
            var multiplier = 2;
        } else {
            var multiplier = 1;
        }
        if ((val * multiplier) > 9) {
            return acc = acc + parseInt((val * multiplier).toString()[0]) + parseInt((val * multiplier).toString()[1]);
        } else {
            return acc = acc + (val * multiplier);

        }
    }, 0)
}

var id = 8709255374082;

console.log(luhnCheck(id));