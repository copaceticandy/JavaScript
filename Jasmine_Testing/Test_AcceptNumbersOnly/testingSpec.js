describe("Expand", function() {
    let arr;
    beforeEach(function() {
        arr = ["x", "y", 1, 7];
    });
    it("returns false if any of the arguments are not numbers", function() {
        expect(function() {
            acceptNumbersOnly(1, 1.5, "dog").toBe(false)
        })
    });
    it("returns true is all the arguments are numbers", function() {
        expect(acceptNumbersOnly(5, 3, -9, 6.8)).toBe(true)
    });
    it("does not consider NaN to be a number", function() {
        expect(acceptNumbersOnly(NaN, 1, 5)).toEqual(false)
    });
    it("throws an error if there are no arguments", function() {
        expect(function() {
            acceptNumbersOnly()
        }).toThrow(Error("You have not provided any arguments"))
    });
});