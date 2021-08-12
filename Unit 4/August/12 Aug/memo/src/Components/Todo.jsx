import { useCallback, useState } from "react"

import { MemorisedTodoItmem } from "./TodoItems"
export const Todo = () => {

    const [text, setText] = useState("")
    const [todos, setTodos] = useState([])

    const handleChange = (e) => {
        setText(e.target.value)
    }
    const handleAdd = () => {
        const payload = {
            title: text,
            id: todos.length + 1,
            status: false
        }
        setTodos([...todos, payload])
        setText("")
    }
    const handleToggle = useCallback((id) => {

        const upDatedTodo = todos.map((item) => {
            return (item.id === id ? {
                ...item, status: !item.status
            } : item);

        })
        setTodos(upDatedTodo)
    }, [todos])
    const handleDelete = useCallback((id) => {
        const upDatedTodo = todos.filter((e) => {
            return e.id !== id;
        })


        setTodos(upDatedTodo)
    }, [todos])




    return <>
        <div>
            <input type="text" onChange={handleChange} value={text} />

            <button onClick={() => { handleAdd() }}>ADD</button>
        </div>
        <div>
            {
                todos.map((e, i) => {

                    return <div key={e.id}>
                        <MemorisedTodoItmem title={e.title} status={e.status} handleToggle={handleToggle} id={e.id} handleDelete={handleDelete} />
                    </div>

                })
            }


        </div>
    </>

}