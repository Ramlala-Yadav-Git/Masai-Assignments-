import { store } from "./store/store.js";
import { addCount, decCount, reset } from "./store/action.js";


store.dispatch(addCount(3))
store.dispatch(decCount(3))
// store.dispatch(reset(1))


console.log(store.getState());

