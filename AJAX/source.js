$(document).ready(function() {
    var apiKeyParam = "api_key=A4rhEqB5UcVepoV8wAehf8LaYKrzNYiz";
    $('form').on('submit', function(e) {
        e.preventDefault();
        var $searchParam = $("#search").val();
        $("#search").val("");
        var check = "https://api.giphy.com/v1/gifs/search?q=" + $searchParam + "&" + apiKeyParam;
        console.log(check);
        $.ajax({
            method: "GET",
            url: "https://api.giphy.com/v1/gifs/search?q=" + $searchParam + "&" + apiKeyParam + "&limit=200",
            dataType: "json",
        }).then(function(response) {
            var imageNumber = Math.floor(Math.random() * response.data.length).toString();
            var $giph = $("<iframe>");
            var $url = response.data[imageNumber].embed_url;
            $giph.attr("src", $url);
            $("div").append($giph);
        }).catch(function(error) {
            console.log(error);
        })

        $('#remove-giph').on('click', function() {
            $("div").empty();
        })


    })
});