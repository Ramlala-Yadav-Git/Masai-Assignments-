import { useState } from "react"


export const TodoInput = ({ HandleSubmit }) => {

    const [data, setData] = useState("")
    const [sendData, setSendData] = useState("");
    const HandleData = (e) => {

        e.preventDefault()
        setSendData(data)

        HandleSubmit(data)
        setData("");
    }

    return <div>

        <form onSubmit={(e) => HandleData(e)}>
            <input type="text" placeholder="+ ADD TODOS " onChange={(e) => setData(e.target.value)} value={data} />
            <input type="submit" />

        </form>
    </div>
}