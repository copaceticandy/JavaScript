var testString = "Reverse string";
var notAString = [3, "throw", 7];

describe("reverseString", function() {
    it("reverses a string", function() {
        expect(testString.reverseString()).toBe("gnirts esreveR")
    });
    it("only acts on strings", function() {
        expect(function() {
            notAString.reverseString()
        }).toThrow()
    });
})