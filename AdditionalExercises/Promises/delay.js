function delay(t) {
    return new Promise(resolve => {
        setTimeout(resolve, t);
    })
}

delay(10000).then(_ => console.log("!")) // --!-->