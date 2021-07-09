import React from "react"
import { v4 as uuid } from "uuid"
import { TodosItem } from "./Todositem"
function TodosList({ Todos, ToggleTodos }) {

    return <>
        {Todos.map((el) => {
            return <TodosItem key={uuid()} items={el} toggle={ToggleTodos} />
        })}
    </>
}
export { TodosList }