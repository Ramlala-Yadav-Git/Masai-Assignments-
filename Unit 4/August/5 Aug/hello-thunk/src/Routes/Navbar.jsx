import { Link } from "react-router-dom"

export const Navbar = () => {


    return <>
        <div style={{
            display: "flex", width: 500, justifyContent: "space-between", margin: "auto", fontWeight: "bolder", marginBottom: 40,
            marginTop: 40
        }}>
            <Link to="/">Register</Link>
            <Link to="login">Login</Link>
            <Link to="dashboard">DashBoard</Link>
        </div>

    </>
}