import { Link } from "react-router-dom"


export function DynamicRoute(params) {
    const links = [
        {
            to: "/",
            title: "Home"
        },
        {
            to: "/products",
            title: "Products"
        }


    ]

    return (
        <ul style={{ fontWeight: "bold", display: "flex", listStyle: "none", background: "gray", color: "red", padding: 7, justifyContent: "center" }}>
            {
                links.map((el, i) => {
                    return <li key={i} style={{ paddingRight: 10, textDecoration: "none", color: "red" }}>
                        <Link to={el.to}>{el.title}</Link>
                    </li>
                })
            }
        </ul>
    )
}