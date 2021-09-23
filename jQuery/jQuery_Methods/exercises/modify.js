$(document).ready(function() {
    console.log("Let's get ready to party with jQuery!")
    $("article").attr("class", "image-center");
    $("article p:last-of-type").remove();
    $("#title").css("font-size", Math.round(100 * Math.random()).toString() + "px");
    var content = { text: "Hey I just added something to the list with jQuery" };
    var $addToList = $("<li>", content);
    $("ol").append($addToList);
    $("aside").empty();
    var $asidePar = $("<p>", { text: "We sincerely apologise for the existence of the list. That was so silly. Sorry." });
    $("aside").append($asidePar);
    var rgb = ["255", "255", "255"];

    // for (var i = 0; i < $("input").length; i++) {
    //     rgb[i] = $("input").eq(i).val();
    // }
    for (var i = 0; i < $("input").length; i++) {
        $("input").eq(i).change(function() {
            if ($(this).parent().text().replace(/\s+/g, '') === "Red") {
                rgb[0] = $(this).val();
            } else if ($(this).parent().text().replace(/\s+/g, '') === "Blue") {
                rgb[2] = $(this).val();
            } else {
                rgb[1] = $(this).val();
            }
            $("body").css("background-color", "rgb(" + rgb[0].toString() + "," + rgb[1].toString() + "," + rgb[2].toString() + ")");
        });
    }
    $("img").click(function() {
        $(this).remove();
    })
});