let red = 212;

function convertToHex(arg, hexArray) {
    if (hexArray.length === 0 && arg === 0) {
        return "00";
    }
    if (arg === 0) {
        return hexArray.join("");
    }
    let power = 0;
    let divisor = Math.pow(16, power);

    let hexObj = {
        0: "1",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "a",
        11: "b",
        12: "c",
        13: "d",
        14: "e",
        15: "f"
    }

    while ((arg / divisor) > 1) {
        power++;
        divisor = Math.pow(16, power);
    }
    let factor = 1;
    while ((factor * Math.pow(16, power - 1)) <= arg) {
        factor++;
    }
    if (hexArray.length === 0) {
        hexArray = Array(power).fill("0");
    }
    hexArray[hexArray.length - power] = hexObj[(factor - 1).toString()];
    return convertToHex(arg - ((factor - 1) * Math.pow(16, power - 1)), hexArray)
}

console.log(convertToHex(red, []));