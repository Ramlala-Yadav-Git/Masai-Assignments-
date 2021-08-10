


import { useContext, useState } from "react";
import { contest, TodoAppContext } from "../Context/TodoAppContext";



export function TodoList() {
    const [data, setData] = useState("")
    const [state, dispatch] = useContext(TodoAppContext)

    const handleClick = () => {
        dispatch({
            type: contest.GET_REQ,
        })
        dispatch({
            type: contest.GET_DATA,
            payload: data
        })
        dispatch({
            type: contest.GET_FAIL,
        })
        setData("")

    }

    if (state.isLoading) {
        return <h2>Loading...</h2>
    }

    return <>
        <h1>Todo List</h1>

        <input type="text" placeholder="+ Add Your TODO" onChange={(e) => setData(e.target.value)} value={data} />
        <button onClick={handleClick}>Add</button>
        <div>
            {
                state.data && state.data.map((e, i) => {
                    return <div key={i}>
                        <p>{e}</p>
                    </div>
                })
            }
        </div>
    </>
}