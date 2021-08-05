
import axios from "axios";
import { GET_TODOS_FAILURE, GET_TODOS_SUCCESS, GET_TODOS_REQUEST, ADD_TODOS_FAILURE, ADD_TODOS_SUCCESS, ADD_TODOS_REQUEST } from "./actionTypes";


export const getTodosReq = () => {
    return {
        type: GET_TODOS_REQUEST
    }
}
export const getTodosSucc = (payload) => {
    return {
        type: GET_TODOS_SUCCESS,
        payload: payload
    }
}

export const getTodosFail = (payload) => {
    return {
        type: GET_TODOS_FAILURE,
        payload: payload
    }
}
export const addTodosReq = () => {
    return {
        type: ADD_TODOS_REQUEST
    }
}
export const addTodosSucc = (payload) => {
    return {
        type: ADD_TODOS_SUCCESS,
        payload: payload

    }

}
export const addTodosFail = () => {
    return {
        type: ADD_TODOS_SUCCESS,


    }

}

export const getTodos = (payload) => {
    return (dispatch) => {
        dispatch(getTodosReq())

        axios.get("http://localhost:3004/todos").then(({ data }) => {

            dispatch(getTodosSucc(data))
        })
            .catch((err) => {
                dispatch(getTodosFail())
            })
    }
}
export const addTodos = (payload) => {
    return (dispatch) => {
        dispatch(addTodosReq())

        axios.post("http://localhost:3004/todos", payload).then(({ data }) => {


            dispatch(getTodosSucc(data))

        })
            .catch((err) => {
                dispatch(getTodosFail())
            })
    }
}