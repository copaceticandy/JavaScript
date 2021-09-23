var namesAndHobbies = {
    elie: "JavaScript",
    matt: "jogging",
    janey: "table building",
    tim: "sailing"
}

// Output should be:
// JavaScript => elie
// jogging => matt
// table building => janey
// sailing => tim


namesAndHobbies.Joey = "Legos";

for (var key in namesAndHobbies) {
    console.log(namesAndHobbies[key] + " => " + key);
}
if ("Joey" in namesAndHobbies){
    console.log("Joey: " + namesAndHobbies.Joey)
}