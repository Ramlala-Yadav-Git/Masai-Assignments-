import { useState, useEffect } from "react"
import { ShowInput } from "./ShowInput"
import styles from './show.module.css'
import axios from "axios"
export function ToDo() {
    const [input, setInput] = useState("")

    const [show, setShow] = useState({})

    const [sendData, setSendData] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const handleAdd = () => {

        setShow({ ...show, "todo": input })
        setInput("")
        axios.post("http://localhost:3004/todosList", show)
        //  console.log(show);
        getData()

    }

    const getData = () => {
        axios.get("http://localhost:3004/todosList").then(({ data }) => {
            setSendData([...data])
            //console.log(data);
        })
    }
    return (
        <>
            <div className={styles.main}>
                <div>
                    <input value={input} type="text" name="input" placeholder="+ Add To Do .." onChange={e => setInput(e.target.value)} />
                    <button onClick={() => handleAdd()}>Add</button>
                </div>
                {
                    sendData.map((e) => {
                        return <ShowInput key={e.id} data={e.todo} />
                    })
                }
            </div>
        </>
    )
}