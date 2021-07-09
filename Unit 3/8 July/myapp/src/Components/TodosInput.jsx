import React from "react"
import { v4 as uuid } from "uuid"

function TodosInput({ HandleTodos }) {
    let [text, setText] = React.useState("")
    return <div>
        <input type="text"
            value={text}
            placeholder="Enter Todo"
            onChange={(e) => setText(e.target.value)} />
        <button onClick={() => {
            const payload = {
                id: uuid(),
                title: text,
                status: false
            };
            HandleTodos(payload)
            setText("")
        }}>Add Todos</button>
    </div>
}
export { TodosInput };