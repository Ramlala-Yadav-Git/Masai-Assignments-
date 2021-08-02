
import '../App.css';
import { store } from "../store/store"
import { addCount, decCount, reset, multiply, divide } from "../store/action"
import { useState } from "react"
export function Calculator2() {
    const { count } = store.getState()
    const [userInput, setUserInput] = useState("")
    const [act, setAct] = useState("")
    const [value, setValue] = useState(0)
    const handleSubmit = () => {
        if (userInput === "") {
            alert("Please Input From the Inputbox")
        }
        else {
            setAct(userInput);
            let m = "You have Submitted " + act;
            alert(m)
            setUserInput("")
        }

    }

    return (
        <div className="App">


            <h1>
                {value}
            </h1>
            <div>
                <input type="number" name="input" onChange={(e) => { setUserInput(e.target.value) }} value={userInput} />
                <button onClick={() => handleSubmit()}>Submit</button>
            </div>
            <button onClick={() => {
                store.dispatch(addCount(Number(act)))
                setValue(store.getState().count)
            }}>+</button>
            <button onClick={() => {
                store.dispatch(decCount(Number(act)))
                setValue(store.getState().count)
            }}>-</button>
            <button onClick={() => {
                store.dispatch(multiply(Number(act)))
                setValue(store.getState().count)
            }}>*</button>
            <button onClick={() => {
                store.dispatch(divide(Number(act)))
                setValue(store.getState().count)
            }}>/</button>
            <button onClick={() => {
                store.dispatch(reset(Number(0)))
                setValue(store.getState().count)
            }}>Reset</button>


        </div>
    );
}

