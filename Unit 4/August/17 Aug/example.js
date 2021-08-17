

function test(des, callback) {
    console.log(des);
    callback()

}

function expect(recieved) {
    function toBe(expected) {
        if (recieved === expected) {
            console.log("Test has Passed");
            return true
        }
        else {
            console.log("test has failed!");
            console.log("Expected", expected);
            console.log("recieved", recieved);
            return false
        }

    }


    function toBelessThanOrEqual(expected) {
        if (recieved <= expected) {
            console.log("test has passed");
            return true
        }
        else {
            console.log("Test has failed!");
            console.log("recieved", recieved);
            return false
        }
    }
    function __toEqual(exp, rec) {
        let flag = true
        let expectedLength = Object.keys(exp).length
        let recievedLength = Object.keys(rec).length
        if (expectedLength !== recievedLength) {
            return false
        }
        for (let key in exp) {
            if (typeof exp[key] === "object" && typeof rec[key] === "object") {
                flag = __toEqual(exp[key], rec[key])
                if (!flag) {
                    break
                }
                else if (exp[key] !== rec[key]) {
                    return false
                }
            }
        }
        return flag
    }

    function toEqual(expected) {
        const isEqual = __toEqual(expected, recieved)
        if (isEqual) {
            console.log("test has passed");
        }
        else {
            console.log("test has failed");
        }

    }
    return { toBe, toBelessThanOrEqual, toEqual }
}
function sum(a, b) {
    return a + b
}

test("check if sum(3,4) is 7", function () {
    expect(sum(3, 4)).toBe(7)
})
test("{a:10}", function () {
    expect({ a: 1, b: [1, 2, [1, 2], [1, 2]] }).toEqual({ a: 1, b: [1, 2, [1, 2], [1, 2]] })
})





