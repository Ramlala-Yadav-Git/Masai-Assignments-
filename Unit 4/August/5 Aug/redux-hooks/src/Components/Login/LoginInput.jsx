import { useState } from "react"
import { LoadData } from "../../Utills/LocalStorage"





export const LoginInput = ({ GetUserInput }) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            username,
            password
        }
        GetUserInput(payload);
        setPassword("")
        setUsername("")
    }
    let auth = LoadData("auth")
    let data;
    if (auth) {
        data = JSON.parse(LoadData("data"))

        // console.log(data);
    }

    return <>
        <form onSubmit={handleSubmit}>


            <input type="text" placeholder="Enter Your Username...." onChange={e => setUsername(e.target.value)} value={username} />
            <br />
            <br />
            <input type="password" placeholder="Enter Your Password..." onChange={e => setPassword(e.target.value)} value={password} />
            <br /><br />
            <input type="submit" value="Submit" />
        </form>

        {
            auth && <div>
                <h3>Hi, {data.username} Welcome </h3>
            </div>
        }
    </>
}