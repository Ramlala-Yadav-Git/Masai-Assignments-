

function sum(a, b) {
    if (arguments.length !== 2) {
        return ("invalid no of arguments")
    }
    if (typeof a !== 'number' || typeof b !== "number") {
        return ("invalid arguments")
    }
    return a + b

}

module.exports = sum