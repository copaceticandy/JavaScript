function Parent(firstName, lastName, favoriteColor, favoriteFood) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteFood = favoriteFood;
}

function Child(firstName, lastName, favoriteColor, favoriteFood) {
    Parent.apply(this, arguments);
}

var orlando = new Child("Orlando", "Bloom", "Cyan", "Sushi");

console.log(orlando);

console.log(Child.prototype)
console.log(orlando.__proto__)