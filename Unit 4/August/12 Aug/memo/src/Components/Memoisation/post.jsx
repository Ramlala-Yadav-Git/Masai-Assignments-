import { useCallback, useEffect, useState } from "react"

import { MemorisedTodoItmem } from "./postItmes"
import styles from "./post.module.css"
export const Post = () => {

    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [todos, setTodos] = useState([])
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        setInterval(() => {
            setCounter((prev) => {
                return prev + 1
            })
        }, 1000)
    }, [])

    const handleAdd = () => {
        const payload = {
            title: title,
            body: body,
            id: todos.length + 1,
            verify: false,

            status: false
        }
        setTodos([...todos, payload])
        setTitle("")
        setBody("")
    }
    const handleToggle = useCallback((id) => {

        const upDatedTodo = todos.map((item) => {
            return (item.id === id ? {
                ...item, verify: !item.verify
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
            <h3>Counter :{counter}</h3>
        </div>
        <div className={styles.input}>
            <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} placeholder="Add Title" />
            <br />
            <br />
            <textarea type="text" onChange={(e) => setBody(e.target.value)} value={body} placeholder="Add Body" ></textarea>
            <br />

            <button onClick={() => { handleAdd() }}>ADD</button>
        </div>
        <div className={styles.posts}>
            {
                todos.map((e, i) => {

                    return <div key={e.id}>
                        <MemorisedTodoItmem verify={e.verify} title={e.title} status={e.status} handleToggle={handleToggle} body={e.body} id={e.id} handleDelete={handleDelete} />
                    </div>

                })
            }


        </div>
    </>

}