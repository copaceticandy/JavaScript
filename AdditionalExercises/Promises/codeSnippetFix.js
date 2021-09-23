let x = 1;
let f = (x) => 2 * x;
let g = (y) => y + 1;

// Case 1

Promise.resolve(x)
    .catch(console.error) // !
    .then(f)
    .catch(console.error) // !
    .then(g)
    .catch(console.error) // !

// Instead of using catch handle the error in the then functions

//------------------------------------------------------------------------------------------------------------------------------------------

// Case 2

new Promise((resolve, reject) => {
        try { resolve(x) } // !
        catch (e) { reject(e) } // !
    })
    .then(x => {
        try { return f(x) } // !
        catch (e) { throw e } // !
    })
    .then(y => {
        try { return g(y) } // !
        catch (e) { throw e } // !
    })

//No need to use try catch in the first promise. In fact this is actually incorrect. In the then functions you don't need to use try and catch you can just handle the errors with a second function as a second argument to the then functions

let randomPick = (xs) => {
    return xs[Math.floor(Math.random() * xs.length)];
}