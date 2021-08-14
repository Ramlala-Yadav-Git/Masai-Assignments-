import React from "react"
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/auth/actions";

export function RegisterPage() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [mobile, setMobile] = React.useState("");
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [description, setDescription] = React.useState("");
    const dispatch = useDispatch();
    const handleSubmit = () => {
        const payload = {
            name, email, mobile, username, password, description
        }
        console.log(payload)
        dispatch(registerUser(payload));
        setName("");
        setEmail("");
        setMobile("");
        setUsername("");
        setPassword("");
        setDescription("");

    }
    return <React.Fragment>
        <div style={{ position: "relative" }}>

            <h2>Register Page</h2>
            <form onSubmit={(e) => {
                e.preventDefault()
                handleSubmit();
            }}>
                <input placeholder="Enter your Name" value={name} type="text" onChange={(e) => {
                    setName(e.target.value)
                }} />
                <br />
                <input placeholder="Enter your Email" value={email} type="text" onChange={(e) => {
                    setEmail(e.target.value)
                }} />
                <br />
                <input placeholder="Enter your Mobile no." value={mobile} type="number" onChange={(e) => {
                    setMobile(e.target.value)
                }} />
                <br />
                <input placeholder="Enter your Username" value={username} type="text" onChange={(e) => {
                    setUsername(e.target.value)
                }} />
                <br />
                <input placeholder="Enter your Password" value={password} type="password" onChange={(e) => {
                    setPassword(e.target.value)
                }} />
                <br />
                <input placeholder="Enter your Description" value={description} type="text" onChange={(e) => {
                    setDescription(e.target.value)
                }} />
                <br />
                <input value="Register" type="submit" />

            </form>
        </div>
    </React.Fragment>
}