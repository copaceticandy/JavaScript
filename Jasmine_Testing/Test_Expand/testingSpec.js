describe("Expand", function() {
    let arr;
    beforeEach(function() {
        arr = ["x", "y", 1, 7];
    });
    it("returns an error if the second argument is not a positive integer", function() {
        expect(function() {
            expand(arr, 1.5)
        }).toThrow(Error("1.5 is not a positive integer"));
    });
    it("duplicates the array according to the second argument", function() {
        expect(expand(arr, 3)).toEqual(["x", "y", 1, 7, "x", "y", 1, 7, "x", "y", 1, 7])
    });
    it("it leaves the array unchanged if the second argument is 1", function() {
        expect(expand(arr, 1)).toEqual(["x", "y", 1, 7])
    });
});