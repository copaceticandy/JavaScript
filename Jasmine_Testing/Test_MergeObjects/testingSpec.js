describe("mergeOBJECTS", function() {
    it("merges two objects to make one object", function() {
        expect(mergeObjects({ dog: "woof", num: 25 }, { age: 26, sex: "male" })).toEqual({ dog: "woof", num: 25, age: 26, sex: "male" })
    });
    it("if a key is repeated the value in the second object will be used", function() {
        expect(mergeObjects({ age: 16, num: 25 }, { age: 26, sex: "male" })).toEqual({ age: 26, num: 25, sex: "male" })
    });
    it("throws an error if either of the arguments are not objects", function() {
        expect(function() {
            mergeObjects([7, NaN, 5], { age: 26, sex: "male" })
        }).toThrow()
    });
})