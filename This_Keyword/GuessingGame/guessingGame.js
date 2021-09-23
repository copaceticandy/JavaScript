function guessingGame(amount) {
    var answer = Math.floor(Math.random() * 11);
    var guesses = 0;
    return function(guess) {
        if (guesses > amount) {
            return "You're all done playing"
        }
        if (guess === answer) {
            guesses = amount + 1;
            return "You got it!"
        }
        if (guess > answer) {
            guesses++;
            return "You're too high'!"
        }
        if (guess < answer) {
            guesses++;
            return "You're too low!"
        }


    }

}

var game = guessingGame(5)
console.log(game(1)) // "You're too low!" 
console.log(game(8)) // "You're too high!"
console.log(game(5)) // "You're too low!"
console.log(game(7)) // "You got it!" 
console.log(game(1)); // "You are all done playing!"
console.log(game(1));