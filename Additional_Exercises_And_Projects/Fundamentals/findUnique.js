function findUnique(arr1, arr2) {
    return arr1.reduce((acc, val, index) => {
        if (arr1.every((val3, index3) => {
                if (index !== index3) {
                    return (val3 !== val)
                }
                return true
            }) &&

            arr2.every((val2) => {
                return (val2 !== val);
            })) {
            // console.log(acc, val);
            acc.push(val);
        }
        return acc;
    }, [])
}

console.log(findUnique([1, 2, 3, 4], [2, 3, 5, 5]));