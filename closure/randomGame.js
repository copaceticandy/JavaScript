function randomGame() {
    var count = 1;
    function foo() {
        if (Math.random() > 0.75) {
            clearInterval(t);
            console.log("We picked a random number greater than 0.75 after " + count + " seconds.");
        }
        else {
            count++;
        }
    }
    var t = setInterval(foo, 1000);
}

randomGame();