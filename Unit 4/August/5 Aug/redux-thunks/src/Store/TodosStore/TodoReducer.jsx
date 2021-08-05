

import { GET_TODOS_FAILURE, GET_TODOS_SUCCESS, GET_TODOS_REQUEST, ADD_TODOS_FAILURE, ADD_TODOS_SUCCESS, ADD_TODOS_REQUEST } from "./actionTypes";

const initState = {
    isLoading: false,
    isError: false,
    isAuth: false,
    todos: [

    ]
}

export const TodosReducer = (state = initState, { type, payload }) => {

    switch (type) {
        case GET_TODOS_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case GET_TODOS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                todos: [...payload],
                isError: false

            }
        case GET_TODOS_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,

            }
        case ADD_TODOS_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case ADD_TODOS_SUCCESS:

            return {
                ...state,
                isLoading: false,
                isError: false


            }
        case ADD_TODOS_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,

            }


        default:
            return state



    }
}



