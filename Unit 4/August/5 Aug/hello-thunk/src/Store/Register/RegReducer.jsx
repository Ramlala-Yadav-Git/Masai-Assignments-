import { GET_REGISTER_FAILED, GET_REGISTER_REQUEST, GET_REGISTER_SUCCESS } from "./actionTypes";

const initState = {
    isLoading: false,
    isError: false,
    isAuth: false,
    token: "",
    status: ""

}

export const RegReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case GET_REGISTER_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false,
                isAuth: false


            }
        case GET_REGISTER_SUCCESS:

            return {
                ...state,
                isLoading: false,
                isError: false,
                isAuth: true,
                token: payload,
                status: payload
            }
        case GET_REGISTER_FAILED:
            return {
                ...state,
                isLoading: false,
                isError: true,
                isAuth: false,
                token: ""
            }



        default: return state
    }

}