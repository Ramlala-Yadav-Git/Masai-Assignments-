import { Link } from "react-router-dom";



export function Navbar(params) {
    const navs = [
        {
            to: "/", title: "Home"
        },
        {
            to: "/about", title: "About"
        },
        {
            to: "/dashboard", title: "Dashboard"
        },
        {
            to: "/contact", title: "Contact"
        },
        {
            to: "/users", title: "Users"
        },
        {
            to: "/setting", title: "Setting"
        },
        {
            to: "/login", title: "Login"
        }

    ]


    return (
        <>
            <nav style={{ background: "gray", color: "white" }}>
                <ul style={{
                    display: "flex",
                    listStyle: "none",
                    justifyContent: "center",


                }}>
                    {
                        navs.map((e, i) => {
                            return (
                                <li key={i} style={{ padding: 20 }}>
                                    <Link to={e.to}>{e.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </>
    )
}