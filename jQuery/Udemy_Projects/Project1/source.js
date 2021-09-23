$(document).ready(function() {
        $(".link").on("click", function(e) {
            $(".link").parent().toggleClass("hide show");
            console.log("Link clicked");
        })

    }

)