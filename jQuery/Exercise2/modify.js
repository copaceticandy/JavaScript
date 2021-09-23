$(document).ready(function() {
    // $("#").on('click', function() {
    //     this.preventDefault();
    //     alert("Hooray");
    // });

    $("form").submit(function() {
        // this.preventDefault();
        var row = $("<tr>");
        var rowInput1 = $("<td>", {
            text: $("input").eq(0).val()
        });
        var rowInput2 = $("<td>", {
            text: $("input").eq(1).val()
        });
        $("#title").val("");
        $("#rating").val("");

        var deleteCell = $("<td>");
        var deleteButton = $("<input type=\"submit\" value=\"Delete\" class = \"delete\">");

        deleteButton.on("click", function(e) {
            $(this).parent().parent().remove();
        });

        row.append(rowInput1).append(rowInput2).append(deleteCell.append(deleteButton));
        $("tbody").append(row);

        var $bodyRows = $("tbody>tr");

        $("#title .arrow").click(function(e) {
            var $movies = $("tbody>tr>td:first-child").map(function(i, val) {
                return $(val).text();

            }).sort();


            if ($(e.target).attr("class").includes("up")) {
                $movies.each(function(i, val1) {
                    $bodyRows.each(function(j, val2) {
                        if ($(val2).children().eq(0).text() === val1) {
                            $bodyRows.parent().append($(val2));
                            // break;
                        }
                    });
                });
            } else {
                $movies.each(function(i, val1) {
                    $bodyRows.each(function(j, val2) {
                        if ($(val2).children().eq(0).text() === val1) {
                            $bodyRows.parent().prepend($(val2));
                            // break;
                        }
                    });
                });
            }
        });

        $("#rating .arrow").click(function(e) {
            var $ratings = $("tbody>tr>td:nth-child(2)").map(function(i, val) {
                return $(val).text();

            }).sort(function(a, b) { return b - a });


            if ($(e.target).attr("class").includes("up")) {
                $ratings.each(function(i, val1) {
                    $bodyRows.each(function(j, val2) {
                        if ($(val2).children().eq(1).text() === val1) {
                            $bodyRows.parent().append($(val2));
                            // break;
                        }
                    });
                });
            } else {
                $ratings.each(function(i, val1) {
                    $bodyRows.each(function(j, val2) {
                        if ($(val2).children().eq(1).text() === val1) {
                            $bodyRows.parent().prepend($(val2));
                            // break;
                        }
                    });
                });
            }
        });
        return false;
    })
});