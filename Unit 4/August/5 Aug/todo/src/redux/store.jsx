import { applyMiddleware, combineReducers, createStore } from "redux";
import { authReducer } from "./auth/reducer";
import thunk from "redux-thunk";
import { todoReducer } from "./todo/reducer";
const reducer = combineReducers({ auth: authReducer, todo: todoReducer });
export const store = createStore(reducer, applyMiddleware(thunk));