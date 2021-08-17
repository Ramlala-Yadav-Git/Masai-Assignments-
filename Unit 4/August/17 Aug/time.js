function test(description, callback) {
    console.log(description);
    callback();
}

function expect(received) {
    function timeToString(expected) {
        const hours = Math.floor(received / 3600000);
        received = received % 3600000;
        const minutes = Math.floor(received / 60000);
        received = received % 60000;
        const seconds = Math.floor(received / 1000);
        let st = "";
        if (hours !== 0) {
            if (hours === 1) {
                st += hours + " hour ";
            } else {
                st += hours + " hours ";
            }
        }
        if (minutes !== 0) {
            if (minutes === 1) {
                st += minutes + " minute ";
            } else {
                st += minutes + " minutes ";
            }
        }
        if (seconds !== 0) {
            if (seconds === 1) {
                st += seconds + " second ";
            } else {
                st += seconds + " seconds ";
            }
        }
        st = st.trim();
        if (st === expected) {
            console.log("Test is passed");
        } else {
            console.log("Test is failed");
            console.log(`processed value ${st} expected value ${expected}`);
        }
    }
    return { timeToString };
}

test("Time to String", function () {
    expect(5200).timeToString("5 seconds");
    expect(60000).timeToString("1 minute");
    expect(180000).timeToString("3 minutes");
    expect(200000).timeToString("3 minutes 20 seconds");
    expect(3600000).timeToString("1 hour");
    expect(7200000).timeToString("2 hours");
});