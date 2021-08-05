import { useState } from "react"


export const LoginInput = ({ getLoginInput }) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        const payload = {
            username,
            password
        }
        getLoginInput(payload)
        setPassword("");
        setUsername("")
    }

    return <>
        <form onSubmit={handleSubmit}>


            <input type="text" name="username" placeholder="Type username..." onChange={e => setUsername(e.target.value)} value={username} />
            <br />
            <br />


            <input type="text" name="password" placeholder="Type password..." onChange={e => setPassword(e.target.value)} value={password} />
            <br />
            <br />
            <input type="submit" value="Submit" />

        </form>

    </>

}