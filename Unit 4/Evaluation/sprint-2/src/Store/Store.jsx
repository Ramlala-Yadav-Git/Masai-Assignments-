

import { createStore, compose, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { DeshReducer } from "../Reducers/DashBoardReducer/DashReducer";
const combineRed = combineReducers({
    Dash: DeshReducer
})

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(combineRed, composeEnhancers(applyMiddleware(thunk)))