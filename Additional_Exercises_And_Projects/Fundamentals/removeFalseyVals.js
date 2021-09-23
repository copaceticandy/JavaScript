function removeFalseyVals(arr) {
    return arr.filter((val) => {
        return (!!val)
    })
}

console.log(removeFalseyVals([0, null, 2, "hello", "", {},
    []
]));