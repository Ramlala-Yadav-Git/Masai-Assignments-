import { LOGIN_SUCCESS, LOGIN_REQUEST, LOGIN_FAILURE } from "./actionTypes";
import axios from "axios"


export const loginReq = () => {
    return {
        type: LOGIN_REQUEST
    }


}
export const loginSucc = (payLoad) => {
    return {
        type: LOGIN_SUCCESS,
        payLoad
    }


}
export const loginFail = (payLoad) => {
    return {
        type: LOGIN_FAILURE,
        payLoad
    }


}
export const loginUser = (payLoad) => {
    return (dispatch) => {
        dispatch(loginReq())
        axios.post("https://reqres.in/api/login", payLoad).then((data) =>
            dispatch(loginSucc(data.data.token))
        )
            .catch(res => dispatch(loginFail("err")))

    }
}