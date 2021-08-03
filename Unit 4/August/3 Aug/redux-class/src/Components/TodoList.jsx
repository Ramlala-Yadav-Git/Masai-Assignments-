import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { AddTodo, removeTodo, ToggleTodo } from "../Store/action";

import { v4 as uuid } from "uuid";
import { useState } from "react";
export const TodoList = () => {
    const state = useSelector(state => state.data)
    const dispatch = useDispatch()
    const [title, setTitle] = useState("")
    const HandleAdd = () => {
        const payLoad = {
            id: uuid(),
            status: false,
            title: title
        }
        dispatch(AddTodo(payLoad))
        setTitle("");

    }
    const HandleToggle = (id) => {
        dispatch(ToggleTodo(id))
    }
    const HandleRemove = (id) => {
        dispatch(removeTodo(id))
    }

    return (
        <>
            <input type="text" placeholder="+ ADD TODO" onChange={(e) => setTitle(e.target.value)} value={title} />
            <button onClick={HandleAdd}>Add</button>
            <div>
                {
                    state.map((e) => {
                        return <div key={e.id}>
                            <p> title : {e.title} status:{`${e.status}`}</p>
                            <button onClick={() => HandleToggle(e.id)}>Toggle</button>
                            <button onClick={() => HandleRemove(e.id)}>Remove</button>
                        </div>
                    })
                }
            </div>
        </>
    )
}