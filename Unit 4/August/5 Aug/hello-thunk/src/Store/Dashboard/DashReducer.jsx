
import { MAKE_SEARCH_FAILURE, MAKE_SEARCH_SUCCESS, MAKE_SEARCH_REQUEST } from "./actionTypes"


const initState = {
    isLoading: false,
    isError: false,
    isAuth: false,
    data: []
}

export const DashReducer = (state = initState, { type, payload }) => {

    switch (type) {
        case MAKE_SEARCH_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false,
                isAuth: false,

            }
        case MAKE_SEARCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                isAuth: true,
                data: payload

            }
        case MAKE_SEARCH_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                isAuth: false,

            }
        default: return state
    }
}