import {
    REGISTER_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
} from "./actionTypes";
import axios from "axios";

export function registerSuccess() {
    return { type: REGISTER_SUCCESS };
}
export function registerRequest() {
    return { type: REGISTER_REQUEST };
}
export function registerFailure() {
    return { type: REGISTER_FAILURE };
}
export function loginSuccess(payload) {
    return { type: LOGIN_SUCCESS, payload };
}
export function loginRequest() {
    return { type: LOGIN_REQUEST };
}
export function loginFailure() {
    return { type: LOGIN_FAILURE };
}
export const loginUser = (payload) => (dispatch) => {
    dispatch(loginRequest());
    const { username, password } = payload;
    axios
        .post("https://masai-api-mocker.herokuapp.com/auth/login", {
            username: username,
            password: password,
        })
        .then((res) => {
            console.log(res);
            dispatch(loginSuccess(res.data));
            alert("Your token is " + res.data.token);
        })
        .catch((err) => {
            dispatch(loginFailure(err.message));
            alert(err.message);
        });
};
export const registerUser = (payload) => (dispatch) => {
    dispatch(registerRequest());
    const { username, password, description, name, email, mobile } = payload;
    axios
        .post("https://masai-api-mocker.herokuapp.com/auth/register", {
            username: username,
            password: password,
            description: description,
            name: name,
            email: email,
            mobile: mobile,
        })
        .then((res) => {
            console.log(res.data);
            if (res.data.error) {
                dispatch(registerFailure(res.data.message));
                alert(res.data.message);
            } else {
                dispatch(registerSuccess());
                alert(res.data.message);
            }
        });
};
export const userLogout = (payload) => (dispatch) => {
    dispatch(loginFailure());
};