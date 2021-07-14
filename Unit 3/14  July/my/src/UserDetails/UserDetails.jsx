import { useRef, useState } from "react";



export function UserDetails() {

    const [formData, setFormData] = useState({})

    const userRef = useRef()


    const handleSubmit = (e) => {
        e.preventDefault()
    }


    return (
        <div>

            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" name="name" />


            </form>

        </div>
    )


}