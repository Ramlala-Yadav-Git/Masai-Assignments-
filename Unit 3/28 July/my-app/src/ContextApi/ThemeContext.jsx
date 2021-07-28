import { createContext, useState } from "react";

export const Theme = createContext("light");

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState("blue")

    const handleChange = () => {

    }
    const handleMinus = () => {

    }
    return (
        <ThemeProvider.Provider value={{
            theme, handleChange, handleMinus
        }}>
            {children}
        </ThemeProvider.Provider>
    )




}