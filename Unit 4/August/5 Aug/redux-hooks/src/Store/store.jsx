import { createStore, compose, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { LoginReducer } from "../Reducers/LoginReducer/LoginReducer"
import { RegReucer } from "../Reducers/RegReducer/RegReducer"
const combineRed = combineReducers({
    Reg: RegReucer,
    Login: LoginReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store = createStore(combineRed,
    composeEnhancers(applyMiddleware(thunk)));