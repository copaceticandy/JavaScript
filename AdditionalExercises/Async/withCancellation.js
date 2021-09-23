function withCancelation(fn) {
    let cancelled = false;

    let intermediate = function() {
        if (!cancelled) {
            fn(...arguments);
        }
    }
    intermediate.cancel = () => {
        cancelled = !cancelled;
    }
    return intermediate
}

let fn = withCancelation(x => {
    setTimeout(_ => console.log(x), 1000)
})

fn("A") // logs "A"
fn.cancel()
fn("B") // doesn't log
fn.cancel();
fn("C");