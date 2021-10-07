import {
	GET_DATA_FAILURE,
	GET_DATA_REQUEST,
	GET_DATA_SUCCESS,
} from "./actionTypes";

const initState = {
	data: [],
	pages: 0,
};
export const authReducer = (state = initState, { type, payload }) => {
	switch (type) {

		case GET_DATA_REQUEST:
			return {
				...state,
			};
		case GET_DATA_SUCCESS:
			// console.log(payload, "jgslkgdjlkdsjlk")
			return {
				...state,
				data: [...payload],
			};
		case GET_DATA_FAILURE:
			return {
				...state,
			};
		default:
			return state;
	}
};
