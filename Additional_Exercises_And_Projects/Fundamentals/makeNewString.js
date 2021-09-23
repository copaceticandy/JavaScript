function makeNewString(str, fn) {
    return str.split("").map(fn).join("");
}

console.log(makeNewString("hello", (x) => (x.replace(x, "f"))))