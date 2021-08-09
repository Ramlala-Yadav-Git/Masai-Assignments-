import { MAKE_REGISTER_FAILURE, MAKE_REGISTER_REQUEST, MAKE_REGISTER_SUCCESS } from "./actionTypes";
import axios from 'axios'


export const regReq = () => {
    return {
        type: MAKE_REGISTER_REQUEST
    }
}

export const regSucc = (payload) => {
    return {
        type: MAKE_REGISTER_SUCCESS,
        payload
    }
}

export const regFail = (payload) => {
    return {
        type: MAKE_REGISTER_FAILURE,
        payload
    }
}

export const makeRegReq = (payload) => {
    return (dispatch) => {
        dispatch(regReq);
        const { username, password, description, name, email, mobile } = payload
        axios.post("https://masai-api-mocker.herokuapp.com/auth/register", {
            username: username,
            password: password,
            description: description,
            name: name,
            email: email,
            mobile: mobile,
        }).then((res) => {
            dispatch(regSucc(!res.data.error));
            alert(res.data.message)
        }).catch((res) => {
            dispatch(regFail(res.data.error));
            alert(res.data.err)
        })
    }
}

