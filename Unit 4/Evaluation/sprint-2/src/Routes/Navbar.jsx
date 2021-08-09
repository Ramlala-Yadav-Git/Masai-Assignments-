import { Link } from "react-router-dom"
import { useParams } from "react-router"
export const Navbar = () => {
    const params = useParams()
    const links = [
        {
            to: "/",
            title: "Dashboard"
        }
    ]
    console.log(params);

    return <>
        {
            links.map((e, i) => {
                return <div key={i}>
                    {/* <Link to={e.to}>{e.title}</Link> */}


                </div>
            })
        }

    </>
}