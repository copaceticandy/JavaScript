document.addEventListener("DOMContentLoaded", foo);

function foo() {
    var body = document.getElementsByTagName("body")[0];
    var h1 = document.getElementById("change_heading");
    h1.innerText = "Hello World";
    // var colours = ["brown","green","blue","yellow"];
    var sectElement = document.getElementsByTagName("section")[0];
    var sectChildren = sectElement.children;
    for (var i = 0; i < sectChildren.length; i++) {
        sectChildren[i].addEventListener("mouseover", foo2);
    }
    var newEl = document.createElement("div");
    newEl.setAttribute("class", "purple");
    newEl.style.backgroundColor = newEl.getAttribute("class");
    sectElement.appendChild(newEl);

    function foo2(event) {
        body.style.color = event.target.classList[0];
    }

    function foo3() {
        var timer = setInterval(foo4, 10);
        function reset(){
            car1.style.marginLeft = "0px";
            car2.style.marginLeft = "0px";
        }
        function foo4() {
            if (Math.random() >= 0.5) {
                car1Count++;
                car1.style.marginLeft = car1Count.toString() + "px";
                if (car1Count > window.innerWidth) {
                    alert("Car 1 is the winner!");
                    clearInterval(timer);
                    reset();
                }
            }
            else {
                car2Count++;
                car2.style.marginLeft = car2Count.toString() + "px";
                if (car2Count > window.innerWidth) {
                    alert("Car 2 is the winner!");
                    clearInterval(timer);
                    reset();
                }
            }
        }
        var car1 = document.querySelector(".car1");
        var car2 = document.querySelector(".car2");
        var car1Count = 0;
        var car2Count = 0;
    }
    var startButton = document.querySelector("button");
    startButton.addEventListener("click", foo3)
};