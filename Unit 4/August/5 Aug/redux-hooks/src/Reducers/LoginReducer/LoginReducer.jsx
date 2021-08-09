
import { GET_LOGIN_REQUEST, GET_LOGIN_SUCCESS, GET_LOGIN_FAILURE } from "./actionTypes";
import { SaveData, LoadData } from "../../Utills/LocalStorage";
let auth = LoadData("auth");


const initState = {
    isAuth: auth || false,
    isLoading: false,
    isError: false,
    data: [],
    token: ""

}

export const LoginReducer = (state = initState, { type, payload }) => {


    switch (type) {

        case GET_LOGIN_REQUEST:
            return {
                ...state,
                isAuth: false,
                isError: false,
                isLoading: true,

            }
        case GET_LOGIN_SUCCESS:
            SaveData("auth", !payload.data.error)

            SaveData("data", payload.config.data)
            SaveData("token", payload.data.token)
            return {
                ...state,
                isAuth: true,
                isError: false,
                isLoading: false,
                data: [payload]

            }
        case GET_LOGIN_FAILURE:
            return {
                ...state,
                isAuth: false,
                isError: true,
                isLoading: false,

            }

        default: return state;
    }
}