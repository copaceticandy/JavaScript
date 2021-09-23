document.addEventListener("DOMContentLoaded", function() {
    let button = document.getElementById("button");
    console.log(button);
    button.addEventListener("click", function() {
        let xhrObject = new XMLHttpRequest();
        xhrObject.onreadystatechange = function() {
            if (this.readyState === XMLHttpRequest.DONE) {
                if (this.status === 200) {
                    let data = JSON.parse(this.responseText);
                    alert();
                }
            }
        }
        xhrObject.open("GET", "index.html", true);
        xhrObject.send();
    })
})