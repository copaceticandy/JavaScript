document.addEventListener("DOMContentLoaded", function() {
    console.log(document.getElementById("form1"))
    let button = document.getElementById("form1");
    button.addEventListener("click", function(e) {
        e.preventDefault();
        let inputArray = e.target.parentElement.querySelectorAll("input");
        console.log(`${inputArray[0].value} ${inputArray[1].value}`);
    })

})