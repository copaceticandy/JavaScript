describe("sumEvenArguments", function() {
    let arr;
    beforeEach(function() {
        arr = ["x", "y", 1, 7];
    });
    it("returns an error if any of the arguments are not numbers", function() {
        expect(function() { sumEvenArguments(1, 1.5, "dog") }).toThrow(Error("Some or all of your inputs are not valid numbers"))
    })
    it("sums even numbers only", function() {
        expect(sumEvenArguments(5.7, 3, -6, 7, 4, 2, 12)).toBe(12)
    });
    it("does not consider NaN to be a number", function() {
        expect(function() { sumEvenArguments(NaN, 1, 5) }).toThrow(Error("Some or all of your inputs are not valid numbers"))
    });
    it("throws an error if there are no arguments", function() {
        expect(function() {
            sumEvenArguments()
        }).toThrow(Error("You have not provided any arguments"))
    });
});