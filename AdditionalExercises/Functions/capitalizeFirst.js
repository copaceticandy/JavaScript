function capitalizeFirst(s) {
    let [a, ...b] = [...s];
    return [a.toUpperCase(), ...b].join("");
}

console.log(capitalizeFirst("alpha")); // "Alpha"
console.log(capitalizeFirst("beta"));