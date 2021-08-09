import { GET_MOVIE_FAILURE, GET_MOVIE_REQUEST, GET_MOVIE_SUCCESS } from "./actionTypes";

const initState = {
    isLoading: false,
    isError: false,
    data: [],

}

export const DeshReducer = (state = initState, { type, payload }) => {


    switch (type) {
        case GET_MOVIE_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false,
            }
        case GET_MOVIE_SUCCESS:
            console.log(payload);
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: [...payload]
            }
        case GET_MOVIE_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
            }

        default: return state
    }
}