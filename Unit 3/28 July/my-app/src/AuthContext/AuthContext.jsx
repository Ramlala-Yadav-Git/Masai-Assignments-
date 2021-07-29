import { createContext } from "react"

export const Auth = createContext({
    HandleSubmit: () => {

    }
})


export function AuthProvider({ children }) {
    let a = "ram"
    const HandleSubmit = () => {
        console.log("fjhskj");
    }

    return (
        <Auth.Provider value={{ HandleSubmit, a }}>
            {children}
        </Auth.Provider>
    )
}