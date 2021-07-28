import { createContext, useState } from "react";
import styles from "../ThemeContext/ThemeContext.module.css"


export const ThemeContext = createContext({

})


export function ThemeContextProvider() {

    const [status, setStatus] = useState(false)
    const [dark, setDark] = useState("DarkMode")
    const [pic, setPic] = useState("https://picsum.photos/200/300")
    const HandleStatus = () => {
        setStatus(!status)
        if (!status) {
            setDark("DarkMode")
            setPic("https://picsum.photos/1400/510")

        }
        else {
            setDark("LightMode")
            setPic("https://picsum.photos/1400/500")

        }
    }
    return (
        <>
            <ThemeContext.Provider >
                <div className={styles.body} style={{ background: status ? "black" : "white", color: status ? "white" : "black", }}>
                    <div >
                        <div className={styles.header}>
                            <p>Sign Up</p>
                            <p>Login</p>
                            <p>Home</p>
                            <p onClick={HandleStatus}>{dark}</p>
                        </div>
                    </div>
                    <div className={styles.img}>
                        <img src={pic} alt="pic" />
                    </div>
                    <div className={styles.footer}>
                        <p>Security</p>
                        <p>Privacy</p>
                        <p>Status</p>
                        <p>Terms</p>
                    </div>
                </div>
            </ThemeContext.Provider>
        </>
    )
}