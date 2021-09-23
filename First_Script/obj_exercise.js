var programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

programming.languages.push("Go");
programming.difficulty = 7;
programming.isFun = true;
delete programming.jokes
console.log(programming);

for (var i = 0; i < programming.languages.length; i++) {
    console.log(programming.languages[i]);
}

console.log("---------------------------------");
for (var key in programming) {
    console.log(key + ":");
    console.log(programming[key]);
}
