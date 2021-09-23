var t = setInterval(() => {
    let time = new Date();
    console.log(time.toLocaleTimeString());
    // console.log(`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`);
}, 2000);

setTimeout(() => {
    clearInterval(t)
}, 30000);