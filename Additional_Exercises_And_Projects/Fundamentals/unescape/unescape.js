//113
document.addEventListener("DOMContentLoaded", function() {
    var body = document.getElementsByTagName("body");
    console.log(unescape(body[0].innerText))
    console.log(body[0].innerText);
    console.log(body);

})

function unescape(text) {
    return text.replace(
        /&|<|>|'|"/g,
        tag =>
        ({
            '&': '&',
            '<': '<',
            '>': '>',
            '\'': '\'',
            '"': '"'
        }[tag] || tag)
    );
}