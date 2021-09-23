var favouriteFoods = ["pizza", "ice-cream"];
function randomFood() {
    if (Math.random() >= 0.5) {
        console.log(favouriteFoods[0]);
    }
    else { console.log(favouriteFoods[1]); }
}

randomFood();