import { ADD_TOODOS_FAILURE, GET_TOODOS_SUCCESS, GET_TOODOS_FAILURE, GET_TOODOS_REQUEST, ADD_TOODOS_REQUEST, ADD_TOODOS_SUCCESS } from "./actionTypes"




export const getTodos = () => {

}
export const getTodosRequest = () => {
    return {
        type: GET_TOODOS_REQUEST,

    }

}
export const addTodosRequest = () => {
    return {
        type: ADD_TOODOS_REQUEST,


    }

}
export const getTodosSuccess = (data) => {
    return {
        type: GET_TOODOS_SUCCESS,
        payLoad: data,
    }
}
export const addTodosSuccess = (data) => {

    return {
        type: ADD_TOODOS_SUCCESS,

    }
}
export const getTodosFailure = (err) => {
    return {
        type: GET_TOODOS_FAILURE,
        payLoad: err
    }
}
export const addTodosFailure = (err) => {
    return {
        type: ADD_TOODOS_FAILURE,
        payLoad: err
    }
}