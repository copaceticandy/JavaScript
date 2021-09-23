$(document).ready(function() {
    var starWarsArray = [{
        title: "",
        openingCrawl: "",
        planets: ""
    }];

    $.ajax({
            method: "GET",
            url: "https://swapi.dev/api/films",
            dataType: "json",
        }).then(function(response) {
            for (let i = 0; i < response.results.length; i++) {
                if (i !== 0) {
                    starWarsArray[i] = Object.assign({}, starWarsArray[0]);
                }
                starWarsArray[i].planets = [];
                starWarsArray[i].title = response.results[i].title;
                starWarsArray[i].openingCrawl = response.results[i].opening_crawl;
                for (let j = 0; j < response.results[i].planets.length; j++) {
                    $.ajax({
                            method: "GET",
                            url: response.results[i].planets[j],
                            dataType: "json",
                        }).then(function(response2) {
                            starWarsArray[i].planets[j] = response2.name;
                        })
                        .catch(function(error) {
                            console.log(error)
                        })
                }
            }
            console.log(starWarsArray);
        })
        .catch(function(error) {
            console.log(error)
        })
})