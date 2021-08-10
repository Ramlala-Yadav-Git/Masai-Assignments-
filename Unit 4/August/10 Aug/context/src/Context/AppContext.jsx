
import React from "react";

import { createContext, useReducer } from "react";

export const Appcontext = createContext()



const initState = {
    count: 0
}

export const constants = {
    INCREAMENT: "INCREAMENT",
    DECREAMENT: "DECREAMENT"
}

const reducer = (state, action) => {

    switch (action.type) {
        case constants.INCREAMENT:
            return {
                ...state,
                count: state.count + action.payload
            }
        case constants.DECREAMENT:
            return {
                ...state,
                count: state.count + action.payload
            }
        default: return state
    }
}



export function AppContextProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initState)


    return <>
        <Appcontext.Provider value={[state, dispatch]}>
            {children}
        </Appcontext.Provider>
    </>
}
