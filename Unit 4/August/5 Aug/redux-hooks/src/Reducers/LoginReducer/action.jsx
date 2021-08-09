import axios from "axios";
import { GET_LOGIN_REQUEST, GET_LOGIN_SUCCESS, GET_LOGIN_FAILURE } from "./actionTypes";


export const getLoginReq = () => {

    return {
        type: GET_LOGIN_REQUEST
    }
}
export const getLoginSucc = (payload) => {

    return {
        type: GET_LOGIN_SUCCESS,
        payload
    }
}
export const getLoginFail = (payload) => {

    return {
        type: GET_LOGIN_FAILURE,
        payload
    }
}

export const login = (payload) => {
    return (dispatch) => {

        dispatch(getLoginReq())
        const { username, password } = payload
        axios.post("https://masai-api-mocker.herokuapp.com/auth/login", {
            username: username,
            password: password,
        }).then((res) => {
            dispatch(getLoginSucc(res))
            alert(`Your Token is ${res.data.token}`)
        }).catch((err) => {
            dispatch(getLoginSucc())
        })

    }
}