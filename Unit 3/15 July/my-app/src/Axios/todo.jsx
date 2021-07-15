import { useEffect, useState } from "react"


export function Todo(params) {
    useEffect(() => {

    }, [])
    const [input, setInput] = useState()

    const [show, setShow] = useState([])

    const handleSubmit = () => {
        setShow([...show, input])
        console.log(show);
    }
    return (
        <div>
            <input type="text" name="name" onChange={
                (e) => { setInput(e.target.value) }
            } />
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