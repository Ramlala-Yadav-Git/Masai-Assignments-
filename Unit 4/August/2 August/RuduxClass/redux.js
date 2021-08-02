// action types take the action type as cont and use it everywhere
// const ADD = "ADD-COUNT"

// to make changes in store at any time 

//Reducer
import { createStore } from "redux"
const initialState = {
    count: 0,
    todo: []
}
const reducerFunction = (state = initialState, action) => {
    const { type, payLoad } = action

    switch (action.type) {
        case "ADD-COUNT":
            return {
                ...state,
                count: state.count + payLoad,

            }
        case "DEC-COUNT":
            return {
                ...state,
                count: state.count - payLoad,

            }
        case "RESET":
            return {
                ...state,
                count: 0,

            }
        default: return state
    }

    return state;

}


// actions
// store

// class Store {
//     constructor(reducer, initialState) {
//         this.reducer = reducer;
//         this.state = initialState;
//     }

//     getState() {
//         return this.state;
//     }

//     dispatch(action) {
//         this.state = this.reducer(this.state, action)
//     }
// }



//const store = new Store(reducerFunction, initialState);
const store = new createStore(reducerFunction);


//Dispatching()
// dispatchEvent({ type: "ADD-COUNT", payLoad: 1 }); // for adding
// dispatchEvent({ type: "DEC-COUNT", payLoad: 2 }); //for reducing
// dispatchEvent({ type: "RESET" }); // for resetting

// dispatchEvent({ type: "ADD-TODO", payLoad: { id: 1, title: "learn", status: false } })

const addCount = (data) => {
    return { type: "ADD-COUNT", payLoad: data }
}
const decCount = (data) => {
    return { type: "ADD-COUNT", payLoad: data }
}

store.dispatch(addCount(4));
store.dispatch(decCount(4));
// store.dispatch({ type: "RESET", payLoad: 4 });
console.log(store.getState());