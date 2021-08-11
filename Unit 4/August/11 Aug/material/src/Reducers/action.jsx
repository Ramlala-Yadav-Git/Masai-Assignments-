import { GET_TODO_FAILURE, GET_TODO_SUCCESS, GET_TODO_REQUEST } from "./actionTypes";

import axios from "axios"

export const get_req = () => {
    return {
        type: GET_TODO_REQUEST
    }
}
export const get_succ = (payload) => {
    return {
        type: GET_TODO_SUCCESS,
        payload
    }
}
export const get_fail = () => {
    return {
        type: GET_TODO_FAILURE
    }
}



export const get_todo = (payload) => (dispatch) => {
    dispatch(get_req());

    axios.post("http://localhost:3001/todos", payload);

    axios.get("http://localhost:3001/todos").then((res) => {

        dispatch(get_succ(res.data))
        dispatch(get_succ(res.data))
    }).catch((err) => {
        dispatch(get_fail())
    })


}
export const delet_todo = (payload) => (dispatch) => {
    dispatch(get_req());

    axios.delete("http://localhost:3001/todos/" + payload);

    axios.get("http://localhost:3001/todos").then((res) => {

        dispatch(get_succ(res.data))
        dispatch(get_succ(res.data))
    }).catch((err) => {
        dispatch(get_fail())
    })


}
export const Get_compelted = () => {
    return {
        type: "GET_COMPLETED"
    }
}
export const edit_todo = (payload) => (dispatch) => {
    dispatch(get_req());
    const { id, title } = payload
    axios.patch("http://localhost:3001/todos/" + id, { title: title });

    axios.get("http://localhost:3001/todos").then((res) => {

        dispatch(get_succ(res.data))
    }).catch((err) => {
        dispatch(get_fail())
    })


}
export const toggle_todo = (id) => (dispatch) => {
    dispatch(get_req());

    axios.patch("http://localhost:3001/todos/" + id, { status: true });

    axios.get("http://localhost:3001/todos").then((res) => {

        dispatch(get_succ(res.data))
    }).catch((err) => {
        dispatch(get_fail())
    })


}

// const toggleTodos = (id, status) => {
//     axios.patch("http://localhost:3004/todos/" + id, { status: !status })
// }
