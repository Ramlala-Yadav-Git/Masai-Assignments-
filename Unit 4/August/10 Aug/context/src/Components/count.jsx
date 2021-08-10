import { useContext } from "react"
import { Appcontext, constants } from "../Context/AppContext"



export function Count() {
    const [state, dispatch] = useContext(Appcontext)
    const handleAdd = (amout) => {
        dispatch({
            type: constants.INCREAMENT,
            payload: amout
        })
    }
    const handleRed = (amout) => {
        dispatch({
            type: constants.DECREAMENT,
            payload: amout
        })
    }
    return (
        <>
            <h1> {state.count}</h1>


            <button onClick={() => { handleAdd(-1) }}>Decrease</button>
            <button onClick={() => { handleRed(1) }}>Increase</button>
        </>
    )
}