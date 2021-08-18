const sum_arguments = require("../SumArguments");

describe("testing all sum testcases", () => {
    test("sum of 1,2,3, 4", () => {
        expect(sum_arguments(1, 2, 3, 4)).toBe(10);
    });
    test("sum of 3, 4,9", () => {
        expect(sum_arguments(3, 4, 9)).toBe(16);
    });
    test("sum of 3", () => {
        expect(sum_arguments(3)).toBe(3);
    });
    test("sum of 3, 4,-1", () => {
        expect(sum_arguments(3, 4, -1)).toBe(6);
    });
});