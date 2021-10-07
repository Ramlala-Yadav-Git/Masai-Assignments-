import { applyMiddleware, combineReducers, createStore } from "redux";
import { authReducer } from "./reducers"
import thunk from "redux-thunk";

const rootReducer = combineReducers({
	users: authReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));
