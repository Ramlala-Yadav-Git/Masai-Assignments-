import { createContext } from "react";

import { useReducer } from "react";

export const TodoAppContext = createContext()


const initState = {
    isLoading: false,
    isError: false,
    data: []
}
export const contest = {
    GET_REQ: "GET_REQ",
    GET_DATA: "GET_DATA",
    GET_FAIL: "GET_FAIL"
}

const reducer = (state, action) => {

    switch (action.type) {
        case contest.GET_REQ:
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case contest.GET_DATA:
            return {
                ...state,
                data: [...state.data, action.payload],
                isLoading: false,
                isError: false
            }
        case contest.GET_FAIL:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        default: return state
    }
}

export function TodoAppContextProvider({ children }) {

    const [state, dispatch] = useReducer(reducer, initState)


    return <>
        <TodoAppContext.Provider value={[state, dispatch]}>
            {children}
        </TodoAppContext.Provider>

    </>
}
