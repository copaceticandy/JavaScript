// Create an object called shape that has the type property and a getType() method. Define a Triangle() constructor function whose prototype is shape. Objects created with Triangle() should have three own properties—a, b, and c, representing the lengths of the sides of a triangle. Add a new method to the prototype called getPerimeter().

function Shape() {

}

Shape.prototype.getType = function() {
    return this.type;
}
Shape.prototype.getPerimeter = function() {
    return this.sides.reduce((acc, val) => {
        return acc += val
    }, 0)
}

function Triangle(...sides) {
    if (sides.length < 3) {
        throw "Not enough sides provided for Triangle"
    } else if (sides.length > 3) {
        console.log("You have added provided more than three sides. Discarding all extra entries")
    }
    this.sides = sides.slice(0, 3);
    this.type = "triangle";
}

Triangle.prototype = Object.create(Shape.prototype);

let test = new Triangle(4, 5, 7)
console.log(test.getType())