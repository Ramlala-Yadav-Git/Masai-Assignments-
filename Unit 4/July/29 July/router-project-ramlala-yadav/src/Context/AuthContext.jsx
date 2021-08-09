import { createContext } from "react";


export const AuthContext = createContext({
    authed: "",
});

export function AuthContextProvider({ children }) {
    const value = {
        authed: false
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )

}