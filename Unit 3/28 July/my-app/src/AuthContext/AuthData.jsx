import { createContext, useState } from "react"
import React from "react"
import { Auth } from "./Auth";
export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false);
    const [token, setToken] = useState("")
    return <AuthContext.Provider value={{ isAuth, setIsAuth, token, setToken }}>
        {children}
        <Auth />
    </AuthContext.Provider>
}