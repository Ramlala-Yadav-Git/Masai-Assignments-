function test(description, callback) {
    console.log(description);
    callback();
}

function expect(received) {
    function __toEqual(exp, rec) {
        let flag = true;
        let expectedLength = Object.keys(exp).length;
        let receivedLength = Object.keys(rec).length;
        if (expectedLength !== receivedLength) {
            return false;
        }
        if (Array.isArray(exp) !== Array.isArray(rec)) {
            return false;
        }
        for (key in exp) {
            if (typeof exp[key] === "object" && typeof rec[key] === "object") {
                flag = __toEqual(exp[key], rec[key]);
                if (!flag) {
                    break;
                }
            }
            if (exp[key] !== rec[key]) {
                return false;
            }
        }
        return flag;
    }

    function toEqual(expected) {
        const isEqual = __toEqual(expected, received);
        if (isEqual) {
            console.log("Test is passed");
        } else {
            console.log("Test is failed", "expected:", expected, `received:`, received);

        }
    }
    return { toEqual };
}

test("Check object", function () {
    expect({}).toEqual({});
    expect([]).toEqual([]);
    expect({ a: 1, b: 2 }).toEqual({ a: 1, b: 2 });
    expect([1, 2, 3]).toEqual([1, 2, 3]);
    expect({ a: 1, b: { c: 1, d: 2 } }).toEqual({ a: 1, b: { c: 1, d: 2 } });
    expect([1, 2, [1, 2]]).toEqual([1, 2, [1, 2]]);
    expect({ a: 1, b: { c: 1, d: 2 } }).toEqual({ a: 1, b: { r: 1, d: 2 } });
    expect([1, 2, [1, 3]]).toEqual([1, 2, [1, 2]]);
});