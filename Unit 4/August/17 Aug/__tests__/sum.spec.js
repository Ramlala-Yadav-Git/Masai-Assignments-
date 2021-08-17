
const sum = require("../sum")
describe("testing the functionality of sum function", function (params) {
    test("adds 1+2 equal 3", () => {
        expect(sum(1, 2)).toBe(3);
    })
    test("adds 1+(-2) equal -1", () => {
        expect(sum(1, -2)).toBe(-1);
    })
    test("adds 1+(-2) equal -1", () => {
        expect(sum(1, "-2")).toBe("invalid arguments");
    })

})