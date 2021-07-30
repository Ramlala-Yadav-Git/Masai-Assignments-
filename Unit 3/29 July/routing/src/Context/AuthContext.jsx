

import { createContext, useState } from "react";

export const AuthContext = createContext({
    token: "",
    handleLogin: () => { },
    authed: ""
})

export function AuthContextProvider({ children }) {
    const [authed, setAuthed] = useState(false);
    const handleLogin = () => {
        setAuthed(true)
    }

    return (
        <AuthContext.Provider value={{
            handleLogin, authed, setAuthed
        }}>
            {children}
        </AuthContext.Provider>
    )

}