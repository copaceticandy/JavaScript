var logOne = (next) => {
    setTimeout(function() {
        console.log("one!");
        next();
    }, Math.random() * 5000);
}

var logTwo = (next) => {
    setTimeout(function() {
        console.log("two!");
        next();
    }, Math.random() * 2000);
}

inOrder(logOne, logTwo);

async function inOrder(fn1, fn2) {
    fn1(() => {
        fn2(() => {});
    })
}