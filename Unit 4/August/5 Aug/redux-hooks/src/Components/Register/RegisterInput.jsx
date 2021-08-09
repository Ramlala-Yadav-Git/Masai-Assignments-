import { useState } from "react"



export const RegisterInput = ({ GetRegInput }) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [mobile, setMobile] = useState("")
    const [description, setDescription] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault();
        let payload = {
            name,
            email,
            mobile,
            password,
            username,
            description

        }

        GetRegInput(payload);

        setName("")
        setPassword("")
        setUsername("")
        setMobile("")
        setEmail("")
        setDescription("")
    }





    return <div>
        <form onSubmit={(e) => { handleSubmit(e) }} >
            <input type="text" name="name" placeholder="Enter Your Full Name.." onChange={(e) => setName(e.target.value)} value={name} />
            <br />
            <br />

            <input type="email" name="email" placeholder="Enter Your Email.." onChange={(e) => setEmail(e.target.value)} value={email} />
            <br />
            <br />

            <input type="text" name="password" placeholder="Enter Your Password" onChange={(e) => setPassword(e.target.value)} value={password} />
            <br />
            <br />

            <input type="text" name="username" placeholder="Enter Username..." onChange={(e) => setUsername(e.target.value)} value={username} />
            <br />
            <br />

            <input type="number" name="mobile" placeholder="Enter Mobile No..." onChange={(e) => setMobile(e.target.value)} value={mobile} />
            <br />
            <br />

            <textarea name="description" placeholder="Description..." onChange={(e) => setDescription(e.target.value)} value={description} >

            </textarea>
            <br />
            <br />

            <input type="submit" />
        </form>
    </div>


}