
import '../App.css';
import { store } from "../store/store"
import { addCount, decCount } from "../store/action"
import { useState } from "react"
export function Calculator1() {
    const { count } = store.getState()
    const [value, setValue] = useState(0)

    return (
        <div className="App">


            <h1>
                {value}
            </h1>
            <button onClick={() => {
                store.dispatch(addCount(1))
                setValue(store.getState().count)
                console.log(store.getState().count);
            }}>+</button>
            <button onClick={() => {
                store.dispatch(decCount(1))
                setValue(store.getState().count)
                console.log(store.getState().count);
            }}>-</button>


        </div>
    );
}

