import { useState } from "react"
import styles from "./Todo.module.css"


const Todo = () => {
    const [input, setInput] = useState("")
    let a: any = []
    const [data, setData] = useState(a)
    let b: number = -1
    const [editId, setEditId] = useState(b)
    const [open, setOpen] = useState(false)
    const [editText, setEditText] = useState("")


    const handleClick = () => {
        let payload = {
            title: input,
            status: false,
            id: Math.random() * 100
        }
        setData([...data, payload])

        setInput("")
    }
    const handleToggle = (id: number) => {
        const toggle = data.map((el: any) => {

            return el.id === id ? { ...el, status: !el.status } : el
        })

        setData([...toggle])

    }
    const handleDelete = (id: number) => {
        const filterData = data.filter((el: any) => {
            return el.id !== id
        })
        setData([...filterData])
    }
    const handleEdit = (id: number) => {
        setOpen(!open)
        setEditId(id)
    }
    const handleSubmit = () => {
        const filterData = data.map((el: any) => {
            return el.id === editId ? { ...el, title: editText } : el
        })

        setData([...filterData])
        setEditText("")
        setOpen(!open)
        setEditId(b)
    }
    return <>
        <div className={styles.todo}>
            <h2>TO DO</h2>

            <input type="text" placeholder="+ Add to do" onChange={(e) => setInput(e.target.value)} value={input} />
            <button onClick={handleClick}>Submit</button>
            {
                data.map((e: any, i: number) => {
                    return <li key={i} >
                        <h3>
                            {e.title}
                        </h3>
                        <p>
                            {e.status ? <p>True</p> : <p>false</p>

                            }
                        </p>
                        <button onClick={() => handleToggle(e.id)}>Toggle</button>
                        <button onClick={() => handleDelete(e.id)}>Delete</button>
                        <button onClick={() => handleEdit(e.id)}>Edit</button>
                    </li>

                })
            }
            {
                open && <div className={styles.edit}>

                    <input type="text" onChange={(e) => setEditText(e.target.value)} value={editText} placeholder="Write here..." />
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            }
        </div>
    </>
}
export { Todo }