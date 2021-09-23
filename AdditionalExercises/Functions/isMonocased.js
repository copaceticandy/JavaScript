function isMonocased(s) {
    let sCopy = s.replace(/[\W\d]/g, "");
    let reg = /[A-Z]/;
    let [a, ...b] = [...sCopy];
    if (!reg.test(a)) {
        reg = /[a-z]/;
    }
    return b.every(function(val) {
        return reg.test(val);
    })

}

console.log(isMonocased("ABC")) // true
console.log(isMonocased("abc")) // true
console.log(isMonocased("aBc")) // false
console.log(isMonocased("A, A")) // true
console.log(isMonocased("A, a")) // false
console.log(isMonocased(""))