import { useState } from "react"

import { useContext } from "react"
import { useHistory } from "react-router-dom"
import { AuthContext } from "../Context/AuthContext"
export function Login(params) {
    let history = useHistory()
    const [name, setName] = useState("")
    const [pass, setPass] = useState("")
    const context = useContext(AuthContext)

    const HandleSubmit = (e) => {
        e.preventDefault()
        if (name === "ram" && pass === "123") {
            context.handleLogin()

            setName("")
            setPass("")
            // history.push("/users")
            history.goBack()
        }
        else {
            // console.log(history);
            alert("Wrong Pass")
        }

    }

    return (
        <form onSubmit={HandleSubmit} style={{ textAlign: "center" }}>
            <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
            <input type="password" onChange={(e) => setPass(e.target.value)} value={pass} />
            <button type="submit">Login</button>

        </form>
    )
}