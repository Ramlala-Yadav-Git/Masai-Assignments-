
import { ADDTODO, REMOVETODO, TOGGLETODO, ADDCOUNT, REDCOUNT, GETTODO, EDIT } from "./actionTypes"

export const AddTodo = (payLoad) => {


    return (
        {
            type: ADDTODO,
            payLoad: payLoad

        }
    )

}

export const ToggleTodo = (payLoad) => {


    return (
        {
            type: TOGGLETODO,
            payLoad
        }




    )

}
export const removeTodo = (payLoad) => {


    return (
        {
            type: REMOVETODO,
            payLoad
        }




    )

}
export const getTodo = (payLoad) => {

    return (
        {
            type: GETTODO,
            payLoad
        }




    )

}
export const SetEdit = (payLoad) => {

    return (
        {
            type: EDIT,
            payLoad
        }




    )

}
export const addCount = (payLoad) => {


    return (
        {
            type: ADDCOUNT,
            payLoad
        }




    )

}
export const redCount = (payLoad) => {


    return (
        {
            type: REDCOUNT,
            payLoad
        }




    )

}