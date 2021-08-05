
import { createStore, compose, applyMiddleware, combineReducers } from "redux"
import { AuthReducer } from "../Auth/AuthReducer"
import { TodosReducer } from "./TodosStore/TodoReducer";
import thunk from "redux-thunk"
const combine = combineReducers({
    auth: AuthReducer,
    todos: TodosReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(combine,
    composeEnhancers(applyMiddleware(thunk))
);