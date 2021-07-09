import React, { useState } from "react"
import { TodosInput } from "./Todosinput"
import { TodosList } from "./TodosList"
function Todos() {
    const [Todos, setTodos] = useState([])
    const HandleTodos = (item) => {
        setTodos([...Todos, item])
    }
    const ToggleTodos = (item) => {
        item.id = !item.id
    }
    return <>
        <TodosInput HandleTodos={HandleTodos} />
        <TodosList Todos={Todos} ToggleTodos={ToggleTodos} />
    </>
}
export { Todos };