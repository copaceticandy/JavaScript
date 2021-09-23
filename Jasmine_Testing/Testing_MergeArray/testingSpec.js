describe("mergeArrays", function() {
    it("merges two arrays to make one array", function() {
        expect(mergeArrays([1, 2], [3, 4])).toEqual([1, 2, 3, 4])
    });
    it("sorts the entries in the merged array", function() {
        expect(mergeArrays([7, 12, 5], [5, 9, 4])).toEqual([4, 5, 5, 7, 9, 12])
    });
    it("throws an error if the arrays don't comprise exclusively of numbers", function() {
        expect(function() {
            mergeArrays([7, NaN, 5], [5, 9, 4])
        }).toThrow()
    });
})