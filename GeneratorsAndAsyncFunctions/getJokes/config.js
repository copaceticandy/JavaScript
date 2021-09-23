async function logJokesAbout(term) {
    var data = await $.getJSON(`https://icanhazdadjoke.com/search?term=${term}`);
    // console.log("Here is the joke data!", data);
    return data;
}

var test = logJokesAbout("spider");
setTimeout(function() {
    console.log(test)
}, 1000)