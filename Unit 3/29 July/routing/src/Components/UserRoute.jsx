
import { Link } from "react-router-dom";


export function UserRoute(params) {
    return (
        <div style={{ display: "flex", listStyle: "none", justifyContent: "center" }}>
            {
                [1, 2, 3, 4, 5].map((e, i) => {
                    return (
                        <li key={i} style={{ padding: 10, fontWeight: "bold" }}>
                            <Link to={`/users/${e}`}>User :: {e}</Link>
                        </li>
                    )
                })
            }
        </div>
    )

}