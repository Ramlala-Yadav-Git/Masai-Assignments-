import { useState } from "react"


export const LoginData = ({ getData }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const HandleSubmit = (e) => {
        e.preventDefault()
        const data = {
            email: email,
            password: password
        }
        getData(data)
        setPassword("")
        setEmail("")
    }

    return (
        <>
            <form onSubmit={(e) => HandleSubmit(e)} >

                <input type="text" placeholder="Email..." onChange={(e) => setEmail(e.target.value)} value={email} />
                <input type="password" placeholder="Password..." onChange={(e) => setPassword(e.target.value)} value={password} />
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}