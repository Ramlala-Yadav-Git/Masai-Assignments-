import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import { authReducer } from "./auth/authReducer"
import { reducer } from "./app/reducer"

const rootReducer = combineReducers({
    auth: authReducer,
    todos: reducer
})
// middlewerwe helps to reuce thing one after another  >>
const logger1 = store => next => action => {
    console.log("middle1", store);
    return next(action)
}

const logger2 = store => next => action => {
    console.log("middle2");
    return next(action)
}
export const store = createStore(
    rootReducer,
    compose(
        //applyMiddleware(logger1, logger2),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

);
