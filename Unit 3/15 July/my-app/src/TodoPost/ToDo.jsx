import { useEffect, useState } from "react"
import axios from "axios"

export function Todo() {
    useEffect(() => {

    }, [])
    const [input, setInput] = useState()

    const [show, setShow] = useState([])




    const handleSubmit = () => {
        axios.post("http://localhost:3000/todos").then(({ data }) => {
            console.log(data);
        })

        setShow([...show, input])
        setInput("")
    }
    return (
        <div>
            <input value={input} type="text" name="name" onChange={
                (e) => { setInput(e.target.value) }
            } placeholder="+ Add To Do" />
            <button onClick={() => handleSubmit()}>Submit</button>
            <div>
                {
                    show.map((e) => {
                        return <p>{e}</p>
                    })
                }
            </div>
        </div>
    )

}