// document.addEventListener("DOMContentLoaded",function(){

// })

$(function() {
    $.ajax({
        method: "GET",
        url: "http://api.flickr.com/services/feeds/photos_public.gne",
        data: {
            tags: "cat",
            tagmode: "any",
            format: "json"
        }
    }).then(function(response) {
        var body = document.querySelector("body");
        body.innerText = response;
    })
})