
function diff(a, b) {
    if (arguments.length !== 2) {
        return "invalid no of arguments";
    }
    if (typeof a !== "number" || typeof b !== "number") {
        return "invalid";
    }
    return Math.round(Math.abs(b - a));
}

module.exports = diff;