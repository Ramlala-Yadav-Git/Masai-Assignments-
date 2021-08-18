function test(description, callback) {
    console.log(description);
    callback();
}

function expect(received) {
    let { income, saving } = received;
    function taxValue(expected) {
        let interest = 0;

        if (income < 500000) {
            income = Math.floor(income - 0.5 * saving);
        } else if (income < 1000000) {
            income = Math.floor(income - 0.3 * saving);
        } else {
            if (0.1 * saving < 50000) {
                income = Math.floor(income - 0.1 * saving);
            } else {
                income = income - 50000;
            }
        }
        if (income < 250000) {
            interest = 0;
        } else if (income >= 250000 && income < 500000) {
            interest = Math.floor(0.1 * income);
        } else if (income >= 500000 && income < 1000000) {
            interest = Math.floor(0.2 * income);
        } else {
            interest = Math.floor(0.3 * income);
        }

        if (interest === expected) {
            console.log("Test is passed");
        } else {
            console.log("Test is failed");
            console.log(`processed value ${interest} expected value ${expected}`);
        }
    }
    return { taxValue };
}

test("Time to String", function () {
    expect({ income: 240000, saving: 120000 }).taxValue(0);
    expect({ income: 250000, saving: 120000 }).taxValue(0);
    expect({ income: 500000, saving: 30000 }).taxValue(49100);
    expect({ income: 1000000, saving: 100000 }).taxValue(198000);
    expect({ income: 750000, saving: 120000 }).taxValue(142800);
    expect({ income: 2000000, saving: 200000 }).taxValue(594000);
    expect({ income: 230000, saving: 10000 }).taxValue(0);
    expect({ income: 257000, saving: 12500 }).taxValue(25075);
});