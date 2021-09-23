function setTimeout(fn, time, ...arg) {
    let t = setInterval(() => {
        fn(...arg);
        clearInterval(t);
    }, time); // stupid but possible, ~4 lines of code/

}

function multiply(num1, num2) {
    console.log(num1 * num2);
}
setTimeout(multiply, 10000, 5, 8)