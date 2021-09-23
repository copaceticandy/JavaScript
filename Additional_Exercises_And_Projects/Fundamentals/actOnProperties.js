function actOnProperties(obj, fn) {
    for (let key in obj) {
        console.log(fn(obj[key]));
    }
}

actOnProperties({ foo: 16, a: 25 }, Math.sqrt);