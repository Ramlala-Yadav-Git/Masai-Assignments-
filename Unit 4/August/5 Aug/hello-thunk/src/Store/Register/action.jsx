import { GET_REGISTER_FAILED, GET_REGISTER_SUCCESS, GET_REGISTER_REQUEST } from "./actionTypes";
import axios from 'axios'
export const getRegReq = () => {
    return {
        type: GET_REGISTER_REQUEST
    }
}
export const getRegSucc = (payload) => {
    return {
        type: GET_REGISTER_SUCCESS,
        payload: payload
    }
}
export const getRegFail = (payload) => {
    return {
        type: GET_REGISTER_FAILED,
        payload: payload
    }
}

export const getReg = (payload) => {
    return (dispatch) => {
        dispatch(getRegReq());
        const { username, password, description, name, email, mobile } = payload
        axios.post("https://masai-api-mocker.herokuapp.com/auth/register", {
            username: username,
            password: password,
            description: description,
            name: name,
            email: email,
            mobile: mobile,
        }).then((res) => {

            dispatch(getRegSucc(res.data.error))

            alert(res.data.message)
            localStorage.setItem("data", JSON.stringify(res))
        })
            .catch((err) => {

                dispatch(getRegFail("something went wrong"))
                alert(err.data.message)
            })
    }
}