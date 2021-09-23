//ES5 code

// var person = {
//     fullName: "Harry Potter",
//     sayHi: function() {
//         setTimeout(function() {
//             console.log("Your name is " + this.fullName)
//         }.bind(this), 1000)
//     }
// }

//ES2015 code


var person = {
    fullName: "Harry Potter",
    sayHi() {
        setTimeout(() => {
            console.log("Your name is " + this.fullName)
        }, 1000)
    }
}

person.sayHi();