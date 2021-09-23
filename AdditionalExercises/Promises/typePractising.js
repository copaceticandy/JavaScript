//Case 1: Parallel

Promise.all([f1(a), f2(a), f3(a)]).then((vars) => {
    return f4(...vars);
}).then(q => console.log(q));

//Case 2: Parallel where possible

f0(a).then((b) => {
    return Promise.all([f1(b), f2(b), f3(b)]).then((all) => {
        return f4(b, ...all)
    })
}).then(q => console.log(q));