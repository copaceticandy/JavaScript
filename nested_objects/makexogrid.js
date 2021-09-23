function makeXOGrid(rows, columns) {
    var count = -1;
    var array2 = [];
    for (var j = 0; j < rows; j++) {
        var array1 = [];
        for (var i = 0; i < columns; i++) {
            count ++;
            if (count % 2) {
                array1[i]="O";
            }
            else {
                array1[i] = "X";
            }
        }
        array2.push(array1);
    }
    return array2;
}

console.log(makeXOGrid(7, 5));