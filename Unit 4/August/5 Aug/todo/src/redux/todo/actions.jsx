import axios from "axios";
import {
    GET_TODO_FAILURE,
    GET_TODO_REQUEST,
    GET_TODO_SUCCESS,
    TODO_FAILURE,
    TODO_REQUEST,
    TODO_SUCCESS,
} from "./actionTypes";

export function todoSuccess() {
    return { type: TODO_SUCCESS };
}
export function todoRequest() {
    return { type: TODO_REQUEST };
}
export function todoFailure() {
    return { type: TODO_FAILURE };
}
export function getTodoSuccess(payload) {
    return { type: GET_TODO_SUCCESS, payload: payload };
}
export function getTodoRequest() {
    return { type: GET_TODO_REQUEST };
}
export function getTodoFailure() {
    return { type: GET_TODO_FAILURE };
}
export const addTodo = (payload) => (dispatch) => {
    dispatch(todoRequest());
    console.log(payload);
    axios
        .post("http://localhost:3004/todos", payload)
        .then((res) => {
            console.log(res.data);
            dispatch(todoSuccess());
        })
        .catch((e) => {
            dispatch(todoFailure());
        });
};
export const getTodo = () => (dispatch) => {
    dispatch(getTodoRequest());
    axios
        .get("http://localhost:3004/todos")
        .then((res) => {
            console.log(res.data);
            dispatch(getTodoSuccess(res.data));
        })
        .catch((e) => {
            dispatch(getTodoFailure());
        });
};