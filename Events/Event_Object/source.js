document.addEventListener("DOMContentLoaded", foo2);

function foo2() {
    var ul = document.querySelector("ul");

    // how many event listeners?
    ul.addEventListener("click", function(event){
        alert("You just clicked on " + event.target.innerText);
    });
}