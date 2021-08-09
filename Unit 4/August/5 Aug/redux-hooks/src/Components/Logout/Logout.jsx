
import { useState } from "react"
import { SaveData } from "../../Utills/LocalStorage"
export const Logout = () => {
    const [user, setUser] = useState(false)

    const handleLogOut = () => {
        SaveData("auth", false)
        SaveData("data", "")
    }


    return <>


        <button onClick={handleLogOut}>Logout</button>
    </>
}