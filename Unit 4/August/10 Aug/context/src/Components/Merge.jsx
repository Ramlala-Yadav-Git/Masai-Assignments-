import { useState } from "react"
import { useMerge } from "../Hooks/useMerge"




export const Merge = () => {

    const payload = {
        name: "",
        email: "",
        password: ""
    }

    const [data] = useMerge(payload)


    const [name, setName] = useState(data.name)
    const [email, setEmail] = useState(data.email)
    const [password, setPassword] = useState(data.password)

    const handleChange = (e) => {
        if (e.target.name === "name") {
            data.name = e.target.value;
            setName(data.name)
        }
        if (e.target.name === "email") {
            data.email = e.target.value;
            setEmail(data.email)
        }
        if (e.target.name === "password") {
            data.password = e.target.value;
            setPassword(data.password)
        }




    }

    const handleClick = () => {
        payload.name = name
        payload.email = email
        payload.password = password

    }

    return <>
        <br />
        <hr />
        <input type="text" placeholder="Type full name" name="name" onChange={(e) => handleChange(e)} />
        <br />
        <br />
        <input type="text" placeholder="Type email" name="email" onChange={(e) => handleChange(e)} />
        <br />
        <br />
        <input type="text" placeholder="Type password" name="password" onChange={(e) => handleChange(e)} />
        <br />
        <br />
        <button onClick={handleClick}>Add</button>
        <hr />



        <div>
            <h4>Merge List</h4>
            {
                data.name !== "" && <p>Name: {name}</p>

            }
            {
                data.email !== "" && <p> Email :{email}</p>
            }

            {
                data.password !== "" &&
                <p>password: {password}</p>}
        </div>


    </>


}