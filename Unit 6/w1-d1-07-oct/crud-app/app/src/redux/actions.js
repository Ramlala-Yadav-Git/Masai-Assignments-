import {
	GET_DATA_FAILURE,
	GET_DATA_REQUEST,
	GET_DATA_SUCCESS,
	GET_QUERY_DATA,
} from "./actionTypes";
import axios from "axios";

export const getRequest = () => {
	return { type: GET_DATA_REQUEST };
};
export const getSuccess = (students) => {
	return { type: GET_DATA_SUCCESS, payload: students };
};
export const getFailure = () => {
	return { type: GET_DATA_FAILURE };
};
export const getData = (payload) => (dispatch) => {
	// console.log(payload);
	const {
		age,
		city,
		gender,
		page,
		sort
	} = payload
	try {
		dispatch(getRequest());
		axios
			.get(`http://localhost:2345/users?page=${page}&city=${city}&age=${age}&gender=${gender}&sort=${sort}`)
			.then((res) => {
				dispatch(getSuccess(res.data.users));
				// console.log(res.data.users)

			});
	} catch (e) {
		dispatch(getFailure());
	}
};
export const getQuery = (payload) => {
	console.log(payload);
	return { type: GET_QUERY_DATA };
};
