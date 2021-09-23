document.addEventListener("DOMContentLoaded", function() {
    let ele = document.querySelector("#test");
    let button = document.querySelector("#myButton");
    ele.addEventListener("click", function() {
        ele.select();
        document.execCommand("copy");
    })
})