function isValidPassword(password) {
    let regExp = /[!@#\$]/;
    if (password.length > 6 && password.match(regExp)) {
        return true;
    }
    return false;
}
console.log(isValidPassword('win!@'))