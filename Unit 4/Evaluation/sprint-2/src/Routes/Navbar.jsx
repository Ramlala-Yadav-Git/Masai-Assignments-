import { Link } from "react-router-dom"

export const Navbar = () => {

    const links = [
        {
            to: "dahsboard",
            title: "Dashboard"
        }
    ]

    return <>
        {
            links.map((e, i) => {
                return <div key={i}>
                    <Link to={e.to}>{e.title}</Link>

                </div>
            })
        }

    </>
}