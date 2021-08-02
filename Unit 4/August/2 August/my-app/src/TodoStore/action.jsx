export function ADDTODO(data) {

    return {
        type: "ADDTODO",
        payLoad: {
            data: data,
            id: Math.floor(Math.random() * 5000),
            status: false
        }
    }
}
export function REMOVETODO(data, list) {

    return {
        type: "REMOVETODO",
        payLoad: {
            id: data,
            status: false,
            list: list
        }
    }
}
export function TOGGLETODO(data, list) {

    return {
        type: "TOGGLETODO",
        payLoad: {
            id: data,
            status: false,
            list: list
        }
    }
}