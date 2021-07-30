import { Link } from "react-router-dom"
import styles from "../Navbar/Navbar.module.css"

export function Navbar(params) {


    const links = [

        {
            to: "/men",
            title: "MEN"
        },
        {
            to: "/women",
            title: "WOMEN"
        },
        {
            to: "/kids",
            title: "KIDS"
        },
        {
            to: "/home&living",
            title: "HOME & LIVING"
        },
        {
            to: "/beauty",
            title: "BEAUTY"
        },

    ]

    const user = [
        {
            to: "/profile",
            title: "Profile"
        },
        {
            to: "/wishlist",
            title: "Wishlist"
        },
        {
            to: "/bag",
            title: "Bag"
        },
        {
            to: "/login",
            title: "Login"
        },

    ]

    return (

        <div className={styles.Navbar}>
            <div className={styles.logo}>
                <Link to={"/"}>
                    <img src="https://cdn.freelogovectors.net/svg08/myntra-logo-freelogovectors.net.svg" alt="img" />
                </Link>


            </div>
            <div className={styles.category}>
                <ul >

                    {
                        links.map((el, i) => {
                            return <li key={i}>
                                <Link to={el.to} className={styles.decoration} >{el.title}</Link>
                            </li>
                        })
                    }
                </ul>
            </div>
            <div className={styles.user}>
                <ul>{
                    user.map((el, i) => {
                        return <li key={i}>
                            <Link to={el.to} className={styles.decoration}> {el.title}</Link>
                        </li>
                    })
                }</ul>
            </div>
        </div>
    )
}
