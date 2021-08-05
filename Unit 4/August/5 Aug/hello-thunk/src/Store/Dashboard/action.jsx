
import axios from "axios"
import { MAKE_SEARCH_REQUEST, MAKE_SEARCH_FAILURE, MAKE_SEARCH_SUCCESS } from "./actionTypes"

export const makeSearchReq = () => {
    return {

        type: MAKE_SEARCH_REQUEST
    }
}
export const makeSearchSucc = (payload) => {
    return {

        type: MAKE_SEARCH_SUCCESS,
        payload
    }
}
export const makeSearchFail = () => {
    return {

        type: MAKE_SEARCH_FAILURE,

    }
}

export const searchReq = (payload) => {

    return (dispatch) => {
        dispatch(makeSearchReq())
        const { search } = payload
        axios.get("https://api.github.com/search/users", {
            params: {
                q: search,
            },
        })
            .then((res) => {

                dispatch(makeSearchSucc(res.data.items));
            })
            .catch((err) => {
                dispatch(makeSearchFail(err.message));
                alert(err.message);
            });

    }
}