Function.prototype.bind = function(obj) {
    var fn = this;
    var args = [].slice.call(arguments, 1);
    // var fnObject = arguments[0].anyFn;
    return function() {
        return fn.apply(obj, args.concat([].slice.call(arguments)));
    }

}

var obj1 = {
    name: "John",
    sayHi: function() {
        return this.name + " says hi"
    }
}

obj2 = {
    name: "Michael"
}

console.log(obj1.sayHi.bind(obj2));