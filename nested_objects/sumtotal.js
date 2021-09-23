var nestedArr = [[1, 2], [3, 4], [5, 6]];

function sumTotal() {
    var total = 0;
    for (var i = 0; i < nestedArr.length; i++) {
        for (var j = 0; j < nestedArr[i].length; j++) {
            total = total + nestedArr[i][j]
        }
    }
    return total;
}

console.log(sumTotal());