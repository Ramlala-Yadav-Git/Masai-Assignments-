import axios from "axios";
import { useState } from "react";
import { List } from "./List";

export function GitHub() {

    const [input, setInput] = useState("")

    const [name, setName] = useState("")

    const [todosList, setTodosList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const HandleSearch = () => {

        try {
            setIsLoading(true);
            axios.get("https://api.github.com/search/users", {
                params: {
                    q: name
                }
            }).then(({ data }) => {
                // console.log(data.items)
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
                <input type="text" name="search" onChange={(e) => setName(e.target.value)} />
                <button onClick={() => { HandleSearch() }}>Search</button>
            </div>
            <div>
                {
                    todosList.map((e) => {
                        return <List key={e.id} user={e.login} />
                    })
                }
                <List />
            </div>
        </>
    )


}