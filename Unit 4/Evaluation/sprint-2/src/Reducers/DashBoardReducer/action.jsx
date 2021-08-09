import axios from "axios";
import { GET_MOVIE_FAILURE, GET_MOVIE_REQUEST, GET_MOVIE_SUCCESS } from "./actionTypes";


export const movieReq = () => {

    return {
        type: GET_MOVIE_REQUEST
    }
}
export const movieSucc = (payload) => {

    return {
        type: GET_MOVIE_SUCCESS,
        payload
    }
}
export const movieFail = (payload) => {

    return {
        type: GET_MOVIE_FAILURE,
        payload
    }
}
export const movieList = (payload) => {
    return (dispatch) => {

        dispatch(movieReq());

        axios.get(`http://www.omdbapi.com/?apikey=7e60f6c4&s=${payload.quary}&page=${payload.page}`).then((res) => {

            dispatch(movieSucc(res.data.Search))
        })
            .catch((err) => {
                dispatch(movieFail(err))
            })

    }
}
