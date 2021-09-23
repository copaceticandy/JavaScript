$(document).ready(function() {
    var isError = false;
    var isFnameError = false;
    var isLnameError = false;
    var isEmailError = false;
    var isPasswordError = false;

    var $errorMessageName = $("<span>");
    $errorMessageName.addClass("error");
    $errorMessageName.text(" Please provide us with a first name");

    var $errorMessageSurname = $("<span>")
    $errorMessageSurname.addClass("error");
    $errorMessageSurname.text(" Please provide us with a last name");

    var $errorMessageEmail = $("<span>")
    $errorMessageEmail.addClass("error");
    $errorMessageEmail.text(" This is not a valid email");

    var $errorMessageEmail = $("<span>")
    $errorMessageEmail.addClass("error");
    $errorMessageEmail.text(" This is not a valid email");

    var $errorMessagePassword = $("<span>")
    $errorMessagePassword.addClass("error");
    $errorMessagePassword.text(" Please provide us with a password with 6 or more characters");

    var regexEmail = /[\w\.+]@[a-z0-9]+\.[a-z0-9]/i;


    $("form").on("submit", function(e) {
        e.preventDefault();
        if ($("#firstname").val() === "" && isFnameError === false) {
            isFnameError = true;
            $("#firstname").prev().addClass("error");
            $("#firstname").addClass("error");
            $("#firstname").after($errorMessageName);
        } else if ($("#firstname").val() !== "" && isFnameError === true) {
            $errorMessageName.remove();
            $("#firstname").prev().removeClass("error");
            $("#firstname").removeClass("error");
            isFnameError = true;
        }
        if ($("#lastname").val() === "" && isLnameError === false) {
            isLnameError = true;
            $("#lastname").after($errorMessageSurname);
            $("#lastname").prev().addClass("error");
            $("#lastname").addClass("error");
        } else if ($("#lastname").val() !== "" && isLnameError === true) {
            $errorMessageSurname.remove();
            $("#lastname").prev().removeClass("error");
            $("#lastname").removeClass("error");
            isLnameError = true;
        }
        if (!regexEmail.test($("#email").val()) && isEmailError === false) {
            isEmailError = true;
            $("#email").after($errorMessageEmail);
            $("#email").prev().addClass("error");
            $("#email").addClass("error");
        } else if (regexEmail.test($("#email").val()) && isEmailError === true) {
            isEmailError = false;
            $errorMessageEmail.remove();
            $("#email").prev().removeClass("error");
            $("#email").removeClass("error");
        }
        if ($("#password").val().length < 6 && isPasswordError === false) {
            isPasswordError = true;
            $("#password").after($errorMessagePassword);
            $("#password").prev().addClass("error");
            $("#password").addClass("error");
        } else if ($("#password").val().length > 6 && isPasswordError === true) {
            isPasswordError = false;
            $errorMessagePassword.remove();
            $("#password").prev().addClass("error");
            $("#password").addClass("error");
        }


    })

})