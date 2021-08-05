import { MAKE_LOGIN_FAILED, MAKE_LOGIN_REQUEST, MAKE_LOGIN_SUCCESS } from "./actionTypes";


const initState = {
    isLoading: false,
    isError: false,
    isAuth: false,
    data: []
}

export const LoginReducer = (state = initState, { type, payload }) => {


    switch (type) {
        case MAKE_LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false,
                isAuth: false

            }
        case MAKE_LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                isAuth: true,
                data: payload

            }
        case MAKE_LOGIN_FAILED:
            return {
                ...state,
                isLoading: false,
                isError: true,
                isAuth: false,
                data: payload

            }


        default: return state
    }

}