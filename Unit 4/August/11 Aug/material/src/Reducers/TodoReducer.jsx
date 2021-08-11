import { GET_TODO_FAILURE, GET_TODO_REQUEST, GET_TODO_SUCCESS } from "./actionTypes"

const initState = {
    isLoading: false,
    isError: false,
    todo: [],
    comp: []
}

export const TodoReducer = (state = initState, { payload, type }) => {

    switch (type) {
        case GET_TODO_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case GET_TODO_SUCCESS:

            return {
                ...state,
                isLoading: false,
                isError: false,
                todo: [...payload]
            }
        case "GET_COMPLETED":
            let data = [];
            if (state.todo) {
                data = state.todo.filter((e) => {
                    return e.status === true
                })
            }

            return {
                ...state,
                isLoading: false,
                isError: false,
                comp: [...data]
            }
        case GET_TODO_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }


        default: return state
    }

}