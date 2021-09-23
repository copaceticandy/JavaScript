function Person(firstname, lastname, favouriteColour, favouriteNumber, favouriteFoods) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.favouriteColour = favouriteColour;
    this.favouriteNumber = favouriteNumber;
    this.favouriteFoods = favouriteFoods;
    this.family = [];

}

Person.prototype.fullName = function() {
    return this.firstname + " " + this.lastname;
}

Person.prototype.multiplyFavouriteNumber = function(number) {
    return this.favouriteNumber * number;
}

Person.prototype.toString = function() {
    return this.firstname + " " + this.lastname + ", Favourite Colour: " + this.favouriteColour + ", Favourite Number: " + this.favouriteNumber;
}

Person.prototype.addToFamily = function(obj) {
    if (obj instanceof Person && this.family.indexOf(obj) === -1) {
        this.family.push(obj);
    }
    return this.family.length;
}

var p = new Person("Shana", "Malarkin", "Green", 38);
console.log(p.toString());
p.addToFamily(p);
console.log(p);
console.log(p.family);