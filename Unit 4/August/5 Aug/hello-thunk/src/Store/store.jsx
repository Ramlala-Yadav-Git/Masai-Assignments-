
import { createStore, compose, applyMiddleware, combineReducers } from "redux"

import { RegReducer } from "./Register/RegReducer";
import { LoginReducer } from "./Login/LoginReducer";
import { DashReducer } from "./Dashboard/DashReducer";
import thunk from "redux-thunk"
const combine = combineReducers({
    Reg: RegReducer,
    Log: LoginReducer,
    Dash: DashReducer

})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(combine,
    composeEnhancers(applyMiddleware(thunk))
);