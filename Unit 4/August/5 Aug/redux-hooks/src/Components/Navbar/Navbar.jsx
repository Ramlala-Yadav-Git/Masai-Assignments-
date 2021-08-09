import { Link } from "react-router-dom"


export const Navbar = () => {

    let links = [
        {
            to: "/",
            title: "Home"

        },
        {
            to: "/register",
            title: "Register"

        },
        {
            to: "/login",
            title: "Login"

        }
    ]

    return <>
        <div>
            <ul style={{ display: "flex", listStyle: "none", justifyContent: "center" }}>
                {
                    links.map((e, i) => {
                        return <li key={i} style={{ padding: 10, fontWeight: "bold", color: "red" }}>
                            <Link to={e.to}>{e.title}</Link>
                        </li>

                    })
                }
            </ul>
        </div>


    </>
}