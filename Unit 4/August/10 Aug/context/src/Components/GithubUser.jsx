

import { useState } from "react";
import { useGithubFetch } from "../Hooks/useGithubFetch";


export const GithubUser = () => {
    const [quary, setQuary] = useState("")
    const [loading, error, data] = useGithubFetch(`https://api.github.com/search/users?q=${quary || "masai"}`)
    if (loading) {
        return <h3>Loading....</h3>
    }
    if (error) {
        return <h3>Something Went Wrong..</h3>
    }

    const handleQuary = (e) => {
        if (quary !== "") {
            setTimeout(() => {
                setQuary(e.target.value)
            }, 1000)
        }
        else {
            setQuary(e.target.value)
        }

    }
    return <>
        <h4>Github Users</h4>
        <input type="text" onChange={(e) => handleQuary(e)} />

        <ul style={{ listStyle: "none" }}>
            {
                data.items && data.items.map((e) => {
                    return <li key={e.id}>
                        {e.login}
                    </li>
                })
            }
        </ul>

    </>


}