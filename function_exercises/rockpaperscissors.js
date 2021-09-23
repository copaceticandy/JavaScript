// var userResponse = prompt("Please choose either rock, paper or scissors");

function rockPaperScissors(user) {
    var obj = {
        rock: 0,
        paper: 1,
        scissors: 2
    };
    if (Object.keys(obj).indexOf(user.toLowerCase())===-1) {
        return "You have not entered a valid input try again.";
    }
    computer = Math.floor(Math.random() * 3);
    var mapScores = {
        "1": 1,
        "-1": 0,
        "-2": 1,
        "2": 0
    };
    if (mapScores[(Object.keys(obj).indexOf(user.toLowerCase()) - computer).toString()] === 1) {
        return "You won: " + user.toLowerCase() + " beats " + Object.keys(obj)[computer];
    }
    if (mapScores[(Object.keys(obj).indexOf(user.toLowerCase()) - computer).toString()] === 0) {
        return "I won: " + Object.keys(obj)[computer] + " beats " + user.toLowerCase();
    }
    return "Tie! We both did " + user.toLowerCase();
}

// alert(rockPaperScissors("userResponse"));
console.log(rockPaperScissors("rock"));