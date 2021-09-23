function chainAsync(fns) {
    let curr = 0;

    function next() {
        fns[curr++](next);
    }
    next();
}

chainAsync([
    next => {
        console.log('0 seconds');
        setTimeout(next, 1000);
    },
    next => {
        console.log('Hello');
        setTimeout(next, 1000);
    },
    () => {
        console.log('1 second');
    }
]);