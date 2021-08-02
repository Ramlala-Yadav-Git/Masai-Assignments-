export const addCount = (data) => {
    return { type: "ADD-COUNT", payLoad: data }
}
export const decCount = (data) => {
    return { type: "DEC-COUNT", payLoad: data }
}
export const reset = (data) => {
    return { type: "RESET", payLoad: data }
}

