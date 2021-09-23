function Vehicle(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isRunning = false;
}

Vehicle.prototype.turnOn = function() {
    this.isRunning = true;
}

Vehicle.prototype.turnOff = function() {
    this.isRunning = false;
}

var rarri = new Vehicle("Ferrari", "F50", 2005);

rarri.__proto__.honk = function() {
    if (this.isRunning === true) {
        console.log("beep")
    }
}

var lambo = new Vehicle("Lamborghini", "Diablo", 2006);

lambo.turnOn();
lambo.honk();

// rarri.turnOn();
// rarri.turnOff();
// rarri.honk();