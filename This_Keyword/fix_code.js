function dummy(fn) {
    return fn();
}

var obj = {
    fullName: "Harry Potter",
    person: {
        sayHi: function() {
            dummy(function() {
                console.log("This person's name is " + this.fullName);
            }.bind(obj))
        }
    }
}

// obj.person.sayHi.call(obj)

// var obj2 = {
//     fullname: "John Doe"
// }


// function() {
//     console.log(this);
// }

// let sayHi = function() {
//     console.log("This person's name is " + this.fullName)
// }

// sayHi.bind(obj)();

obj.person.sayHi();

// dummy2();


// var hi = obj.person.sayHi.bind(obj);

// obj.fullName = "John Snow";

// hi();





// console.log(obj.person.sayHi());

// var obj = {
//     firstName: "Elie",
//     sayHi: function() {
//         setTimeout(function() {
//             console.log(this.firstName + " says hi!");
//         }.bind(obj), 1000);
//     }
// }

// obj.sayHi();