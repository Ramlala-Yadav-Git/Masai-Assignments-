import { useState } from "react";

export function Form() {
    const [formData, setData] = useState({ name: "", age: "", password: "" })

    const handleOnChange = (e) => {

        const data = {
            ...formData,
            [e.target.name]: e.target.value,
        }
        setData(data)

    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleOnChange} type="text" name="name" />
            <input type="submit" name="submit" />
        </form>
    )


}