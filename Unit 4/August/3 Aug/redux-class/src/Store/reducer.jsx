import { ADDTODO, REMOVETODO, TOGGLETODO, ADDCOUNT, REDCOUNT, GETTODO, EDIT } from "./actionTypes"

const initialState = {
    count: 0,
    data: [

    ]
}

export const reducer = (state = initialState, action) => {

    switch (action.type) {

        case ADDTODO:

            return {
                ...state,
                data: [...state.data, action.payLoad]
            }
        case TOGGLETODO:
            const toggledTodo = state.data.map((e) => e.id === action.payLoad ? { ...e, status: !e.status } : e)

            return {
                ...state,
                data: toggledTodo
            }
        case EDIT:

            const edit = state.data.map((e) => e.id === action.payLoad.id ? { ...e, title: action.payLoad.title } : e)

            return {
                ...state,
                data: edit
            }
        case REMOVETODO:
            const removeTodo = state.data.filter((e) => {
                return e.id !== action.payLoad
            })

            return {
                ...state,
                data: removeTodo
            }
        case ADDCOUNT:


            return {
                ...state,
                count: state.count + 1
            }
        case REDCOUNT:


            return {
                ...state,
                count: state.count - 1
            }
        case GETTODO:
            return {
                ...state,
                data: [...action.payLoad]
            }

        default:
            return state


    }


}