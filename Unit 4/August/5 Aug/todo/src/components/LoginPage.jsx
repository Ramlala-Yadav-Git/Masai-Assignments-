import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { loginUser } from "../redux/auth/actions";

export function LoginPage() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const dispatch = useDispatch();
    const { isAuth } = useSelector((state) => state.auth)
    const handleSubmit = () => {
        const payload = {
            username, password
        }
        console.log(payload)
        dispatch(loginUser(payload));
        setUsername("");
        setPassword("");

    }
    if (isAuth) {
        return <Redirect to="/task"></Redirect>
    }
    return <React.Fragment>
        <h2>Login Page</h2>
        <form onSubmit={(e) => {
            e.preventDefault()
            handleSubmit();
        }}>

            <input placeholder="Enter your Username" value={username} type="text" onChange={(e) => {
                setUsername(e.target.value)
            }} />
            <br />
            <br />
            <input placeholder="Enter your Password" value={password} type="password" onChange={(e) => {
                setPassword(e.target.value)
            }} />
            <br />
            <br />

            <input value="Login" type="submit" />

        </form>
    </React.Fragment>
}