function spread(p, fn) {
    p.then((outputs) => {
        fn(...outputs);
    })
}
let p1 = Promise.resolve(5);
let p2 = Promise.resolve(6);

spread(Promise.all([p1, p2]), (v1, v2) => {
    console.log(v1, v2)
})