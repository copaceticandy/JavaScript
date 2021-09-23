//Case 1: Nested styled

f1(a) // We have `a`, we need `z`
    .then(x => {
        return f2(a, x).then((y) => {
            return f3(a, x, y)
        })
    })
    .then(z => console.log(z))


//Case 2: flat style

f1(a)
    .then(x => {
        return [a, x, f2(a, x)]
    })
    .then((yArr) => {
        let [a, x, y] = yArr;
        return y.then((yarg) => {
            return f3(a, x, yarg)
        })
    })
    .then(z => console.log(z));


// Case 3: Global variable

let a;
let g = [a];

f1(a).then(x => {
    g.push(x);
    return f2(a, x);
}).then((y) => {
    return f2(a, g[1], y)
}).then((z) => {
    console.log(z);
})

// Case 4: Using async await
//if functions take promise arguments

async function getZ(a) {
    let x = await f1(a);
    let y = await f2(a, x);
    let z = await f3(a, x, y);
    console.log(z);
}