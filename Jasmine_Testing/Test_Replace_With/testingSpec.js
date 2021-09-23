describe("replaceWith", function() {
    it("returns replaced string", function() {
        expect(replaceWith("hello", "h", "f")).toBe("fello");
    });
    it("is case sensistive", function() {
        expect(function() {
            replaceWith("hello", "H", "f")
        }).toThrow(Error("Letter H not in hello."));
    });
    it("must replace all occurances of the letter", function() {
        expect(replaceWith("hello", "l", "r")).toBe("herro");
    });
});