import { GET_TOODOS_REQUEST, GET_TOODOS_FAILURE, GET_TOODOS_SUCCESS, ADD_TOODOS_FAILURE, ADD_TOODOS_SUCCESS, ADD_TOODOS_REQUEST } from "./actionTypes"
const initialState = {
    todos: [],
    loading: false,
    err: false
}
export function reducer(state = initialState, action) {

    const { type, payLoad } = action
    switch (type) {
        case GET_TOODOS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_TOODOS_SUCCESS:
            return {
                ...state,
                loading: false,
                todos: [...payLoad]
            }
        case GET_TOODOS_FAILURE:
            return {
                ...state,
                loading: false,
                err: payLoad
            }
        case ADD_TOODOS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ADD_TOODOS_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case ADD_TOODOS_FAILURE:
            return {
                ...state,
                loading: false,
                err: payLoad
            }

        default:
            return state

    }
}