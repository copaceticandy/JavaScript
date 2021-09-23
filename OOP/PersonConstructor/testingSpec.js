describe("PersonClass", function() {
    var p;
    p = new Person("Shana", "Malarkin", "Green", 38);
    it("has a fullname method that returns a person's name and surname", function() {
        expect(p.fullName()).toBe("Shana Malarkin");
    })
    it("has a toString() method that shows a persons formatted details", function() {
        expect(p.toString()).toBe("Shana Malarkin, Favourite Colour: Green, Favourite Number: 38");
    })
    it("has an addToFamily function that adds a Person object to the family array and returns the array length and doesn't create duplicates", function() {
        expect(p.addToFamily(p)).toBe(1);
        expect(p.family).toEqual([p]);
    })
    it("will not create a duplicate family member", function() {
        expect(p.addToFamily(p)).toBe(1);
    })
})