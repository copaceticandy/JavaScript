function car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.numWheels = 4;
    console.log(this);
}

// new car("honda", "ballade", "2002");

function Motorcycle(make, model, year) {
    car.apply(this, arguments);
    this.numWheels = 2;
}

var firstMotorCycle = new Motorcycle("suzuki", "x50", 2005);

console.log(firstMotorCycle);