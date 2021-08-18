function test(description, callback) {
    console.log(description);
    callback();
}

function expect(received) {
    function __validate(rec) {
        if (rec.length < 6) {
            console.log("Password should be atleast 8 letters long");
            return false;
        }
        const val = {
            number: true,
            alpha: true,
            upperCase: true,
            lowerCase: true,
        };
        for (var i = 0; i < rec.length; i++) {
            if (val.alpha || val.lowerCase || val.upperCase || val.number) {
                if (rec[i].match(/[a-z]/g)) {
                    val.lowerCase = false;
                } else if (rec[i].match(/[A-Z]/g)) {
                    val.upperCase = false;
                } else if (rec[i].match(/[0-9]/g)) {
                    val.number = false;
                } else {
                    val.alpha = false;
                }
            }
        }
        if (val.number) {
            console.log("Number is missing");
            return false;
        }
        if (val.alpha) {
            console.log("Symbols is missing");
            return false;
        }
        if (val.lowerCase) {
            console.log("Lowercase is missing");
            return false;
        }
        if (val.upperCase) {
            console.log("Uppercase is missing");
            return false;
        }

        return true;
    }

    function validate(expected) {
        let value = __validate(received);
        if (value === expected) {
            console.log("passed");
        } else {
            console.log("failed");
        }
    }
    return { validate };
}

test("password validator", function () {
    expect("5sdflsdkfldssaiukjhldJ").validate(false);
    expect("sdsaiukjhldJksdjfkdsj").validate(false);
    expect("jhldJ").validate(false);
    expect("5#kdsJ").validate(true);
    expect("5iukjh@ld").validate(false);
    expect("aiukjhldJ").validate(false);
    expect("5s@sdOddJ").validate(true);
    expect("}dddsldJ").validate(false);
    expect("523245454!J").validate(false);
    expect("5sJ4").validate(false);
});