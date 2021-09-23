document.addEventListener("DOMContentLoaded", function() {
    let button = document.getElementById("jsstyle");
    button.addEventListener("click", function(e) {
        let text = document.getElementById("text");
        text.style.fontSize = "30px";
        text.style.color = "red";
        text.style.fontFamily = "Courier New";
    })

})