import { createContext, useState } from "react";

export const Auth = createContext({
    count: 0,
    handleChange: () => { },
    handleMinus: () => { },
    handleColor: () => { }

});
export const AuthContextProvider = ({ children }) => {

    const [count, setCount] = useState(50)

    const [color, setColor] = useState(false)

    const handleChange = () => {
        setCount((p) => {
            return p + 1;
        })
    }
    const handleMinus = () => {
        setCount((p) => {
            return p - 1;
        })
    }
    const handleColor = () => {
        setColor(!color)
    }
    return (
        <Auth.Provider value={{ count, handleChange, handleMinus, handleColor, color }}>
            {children}
        </Auth.Provider>
    )




}