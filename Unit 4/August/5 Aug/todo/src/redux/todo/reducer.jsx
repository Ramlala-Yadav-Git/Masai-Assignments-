import {
    GET_TODO_FAILURE,
    GET_TODO_REQUEST,
    GET_TODO_SUCCESS,
    TODO_FAILURE,
    TODO_REQUEST,
    TODO_SUCCESS,
} from "./actionTypes";
const initState = {
    list: [],
};
export const todoReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case TODO_REQUEST:
            return {
                list: [],
            };
        case TODO_SUCCESS:
            return {
                list: [],
            };

        case TODO_FAILURE:
            return {
                list: [],
            };
        case GET_TODO_REQUEST:
            return {
                list: [],
            };
        case GET_TODO_SUCCESS:
            return {
                list: [...payload],
            };

        case GET_TODO_FAILURE:
            return {
                list: [],
            };

        default:
            return state;
    }
};