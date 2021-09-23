function hexaColourCode() {
    var hexKey = {
        0: "0",
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
    };
    var hexaCode = "#";
    for (let i = 0; i < 6; i++) {
        hexaCode = hexaCode.concat(hexKey[Math.floor(Math.random() * 16)]);
    }
    return hexaCode;
}

console.log(hexaColourCode());