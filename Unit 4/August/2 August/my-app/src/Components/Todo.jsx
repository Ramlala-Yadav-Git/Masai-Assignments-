import { store } from "../TodoStore/store"
import { ADDTODO, REMOVETODO, TOGGLETODO } from "../TodoStore/action"
import { useState } from "react"

export const TodoList = () => {

    const [input, setInput] = useState("")
    const [list, setList] = useState([])
    const handleClick = () => {
        store.dispatch(ADDTODO(input));
        setList(store.getState().list)
        console.log(store.getState().list);
    }


    return (
        <>

            <div>
                <input type="text" placeholder="+ Add TODO" onChange={(e) => {
                    setInput(e.target.value)
                }} />
                <button onClick={
                    () => handleClick()

                }>ADD</button>
            </div>
            <div>

                {
                    list.map((e, i) => {

                        return <>
                            <div key={i}>
                                <p>TODO : {e.data}  STATUS :{`${e.status}`}</p>

                                <button onClick={() => {
                                    store.dispatch(REMOVETODO(e.id, list))
                                    setList(store.getState().list)
                                }} > Remove </button>

                                <button onClick={() => {
                                    store.dispatch(TOGGLETODO(e.id, list));


                                    setList(store.getState().list)
                                }}>Toggle</button>
                            </div>
                        </>

                    })
                }

            </div>
        </>
    )
}