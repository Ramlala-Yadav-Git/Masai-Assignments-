import { useState } from "react"
import axios from "axios";
export function GitHubUser() {
    const [search, setSearch] = useState("")

    const [name, setName] = useState("")

    const HandleChange = () => {
        setName(search);
        try {
            setIsLoading(true);
            axios.get("https://api.github.com/search/users", {
                params: {
                    q: name
                }
            }).then(({ data }) => {
                console.log(data.items)
                setTodosList([...data.items])
            })
        }
        catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            <div>
                <input type="text" name="search" onChange={(e) => setSearch(e.target.value)} />
                <button onClick={() => HandleChange()}>Search</button>
            </div>
        </>
    )
}