
import { useState } from "react"
export const TodosInput = ({ GetInput }) => {

    const [todo, setTodo] = useState("")

    const HandleClick = () => {
        GetInput(todo);
        setTodo("")
    }


    return <div>
        <input type="text" placeholder="+ Add Your TODO .." onChange={(e) => setTodo(e.target.value)} value={todo} />
        <button onClick={HandleClick}>Submit</button>
    </div>
}