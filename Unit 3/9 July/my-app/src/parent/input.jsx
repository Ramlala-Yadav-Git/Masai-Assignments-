import { useState } from "react";


export function Input() {

    const [data, setData] = useState([])
    const [formData, setFormData] = useState({ name: "", email: "", password: "" })
    const handleChange = (e) => {
        const obj = {
            ...formData,
            [e.target.name]: e.target.value
        }
        setFormData(obj)
        // console.log(formData);
    }
    const handleData = (data) => {

        setData([...data, formData])
        console.log(data);
    }

    return (
        <div>
            <input onChange={(e) => handleChange(e)} type="text" name="name" />
            <input onChange={(e) => handleChange(e)} type="text" name="password" />
            <input onChange={(e) => handleChange(e)} type="text" name="email" />
            <button onClick={() => handleData(data)}>add</button>
        </div>
    )


}