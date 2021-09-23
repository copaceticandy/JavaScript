//60

function invokeObjectFunction(key, fn, ...args) {
    return function intermediate() {
        if (key[fn].length <= args.concat(...arguments).length) {
            return key[fn](...args.concat(...arguments));
        }
        args = args.concat(...arguments);
        return intermediate
    }
}


const freddy = {
    user: 'fred',
    greet: function(greeting, punctuation) {
        return greeting + ' ' + this.user + punctuation;
    }
};
console.log(invokeObjectFunction(freddy, 'greet')("Howdie"));