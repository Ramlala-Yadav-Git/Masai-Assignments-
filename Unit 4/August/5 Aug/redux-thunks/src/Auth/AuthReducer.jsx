import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGIN_REQUEST } from "./actionTypes";
import { loadData, saveData } from "../LocalStorage/localStorage";

const initState = {
    isAuth: false,
    token: loadData("token") || "",
    isLoading: false,
    isError: false
}

export const AuthReducer = (state = initState, { type, payLoad }) => {
    switch (type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case LOGIN_SUCCESS:
            saveData("token", payLoad)
            return {
                ...state,
                token: payLoad,
                isAuth: true,
                isLoading: false,
                isError: false
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                token: "",
                isLoading: false,
                isError: true,
            }

        default:
            return state
    }

}