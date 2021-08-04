import { AUTH_REQ, AUTH_FAIL, AUTH_SUCC } from './actionTypes'
const init = JSON.parse(localStorage.getItem("authData"));
const initialState = {
    token: "",
    loading: false,
    err: false
}

export const authReducer = (state = (init ? init : initialState), { type, payLoad }) => {
    switch (type) {
        case AUTH_REQ:
            return {
                ...state,
                loading: true
            }
        case AUTH_SUCC:
            return {
                ...state,
                loading: false,
                token: payLoad
            }
        case AUTH_FAIL:
            return {
                ...state,
                err: payLoad
            }

        default:
            return state
    }
}