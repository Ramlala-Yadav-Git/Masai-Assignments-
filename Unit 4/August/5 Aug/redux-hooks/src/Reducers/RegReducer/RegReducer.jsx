import { MAKE_REGISTER_FAILURE, MAKE_REGISTER_SUCCESS, MAKE_REGISTER_REQUEST } from "./actionTypes";

const initState = {
    isAuth: false,
    isLoading: false,
    isError: false,
    token: "",
    data: []

}

export const RegReucer = (state = initState, { type, payload }) => {




    switch (type) {
        case MAKE_REGISTER_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false,
                isAuth: false,
            }
        case MAKE_REGISTER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                isAuth: true,
                token: payload

            }
        case MAKE_REGISTER_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                isAuth: false,
            }




        default: return state
    }
}