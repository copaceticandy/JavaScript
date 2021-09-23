self.addEventListener("message", function(ev) {
    if (ev.data === "Start") {
        var obj = { name: "John", surname: "Doe", email: "johndoe@gmail.com", phone: "+44278456731" };
        self.postMessage(obj)
    } else {
        self.postMessage(new Error("Don't know what to do"))
    }

})