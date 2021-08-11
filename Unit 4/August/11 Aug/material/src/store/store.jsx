
import { createStore, compose, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { TodoReducer } from "../Reducers/TodoReducer";
const combineRed = combineReducers({
    todo: TodoReducer
})

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(combineRed, composeEnhancers(applyMiddleware(thunk)))