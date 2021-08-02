// /Reducer
import { ADD, DEC, RESET } from "./actionTypes.js"

const initialState = {
    count: 0,
    todo: []
}


export const reducerFunction = (state = initialState, action) => {
    const { type, payLoad } = action

    switch (action.type) {
        case ADD:
            return {
                ...state,
                count: state.count + payLoad,

            }
        case DEC:
            return {
                ...state,
                count: state.count - payLoad,

            }
        case RESET:
            return {
                ...state,
                count: 0,

            }
        default: return state
    }


}