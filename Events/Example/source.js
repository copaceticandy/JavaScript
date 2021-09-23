document.addEventListener("DOMContentLoaded", foo2)
function foo2() {
    var buttons = document.getElementsByTagName("button");

    function alertData() {
        alert("You just clicked a button");
    }

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", alertData);
    }

    // since we have named our function, we know which one to remove
    setTimeout(foo, 10000);

    function foo() {
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].removeEventListener("click", alertData);
        }
    }
}