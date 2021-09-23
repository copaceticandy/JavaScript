$(document).ready(function() {
    $("li").filter(function(i, el) {
        return $(el).text()[0] === "-"
            // returns true if the first character in the text is a minus sign,
            // i.e. this checks whether or not the number is negative
    }).css('color', 'red');
    // We've chained filter 
});