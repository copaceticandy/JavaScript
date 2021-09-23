try{
    if(Math.random() >= 0.5){
        throw "Let's make an error!";
    }
    console.log("Whew...we made it.");
    console.log("We can only get here if the random number is <0.5");
}
catch(e){
    console.log("The error is",e);
    console.log("We can only get here if an error was thrown. Random number is greater than or equal to 0.5")
}
console.log("Moving on...");