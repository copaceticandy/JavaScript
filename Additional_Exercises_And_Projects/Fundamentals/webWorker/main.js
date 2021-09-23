document.addEventListener("DOMContentLoaded", function() {
    if (window.Worker) {
        console.log("Web worker exists")

        let worker = new Worker("web-worker.js");
        console.log(worker);
        worker.addEventListener("message", function(ev) {
            console.log(ev.data)
        });
        worker.addEventListener("error", function(ev) {
            console.log(ev.data);
        })
        worker.postMessage("Start");
    } else {
        console.log("web-worker does not exit")
    }
})