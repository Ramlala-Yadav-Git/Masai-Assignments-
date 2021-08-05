
import { useState } from "react"

export const LoginInput = ({ GetData }) => {


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const HandleSubmit = () => {
        let payLoad = {
            email: email,
            password: password
        }
        GetData(payLoad)
        setPassword("")
        setEmail("")
    }

    return (
        <div>
            <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
            <input type="text" onChange={(e) => setPassword(e.target.value)} value={password} />
            <input type="submit" value="Submit" onClick={HandleSubmit} />
        </div>
    )
}
