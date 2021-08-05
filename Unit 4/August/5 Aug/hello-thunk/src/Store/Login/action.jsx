import axios from "axios";
import { MAKE_LOGIN_FAILED, MAKE_LOGIN_REQUEST, MAKE_LOGIN_SUCCESS } from "./actionTypes";



export const loginReq = () => {
    return {
        type: MAKE_LOGIN_REQUEST
    }
}

export const loginSucc = (payload) => {
    return {
        type: MAKE_LOGIN_SUCCESS,
        payload: payload
    }
}

export const loginFail = (payload) => {
    return {
        type: MAKE_LOGIN_FAILED,
        payload: payload
    }
}

export const makeLog = (payload) => {
    return (dispatch) => {
        dispatch(loginReq());
        const { username, password } = payload
        // console.log(payload);
        console.log(username, password);
        axios.post("https://masai-api-mocker.herokuapp.com/auth/login", {
            username: username,
            password: password,
        }).then((res) => {
            dispatch(loginSucc(res))
            alert(`Your Token is ${res.data.token}`)
        }).catch((err) => {
            dispatch(loginFail())
        })
    }
}