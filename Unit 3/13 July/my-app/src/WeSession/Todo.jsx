import { useEffect, useState } from "react";
import axios from "axios";

export function Todos() {

    const [text, settext] = useState("")
    const [todosList, settodosList] = useState([])

    useEffect(() => {
        setTimeout(() => {
            getTodos()
        }, 1000)

    }, [todosList]);

    const getTodos = () => {
        try {
            axios.get("http://localhost:3004/todos").then(({ data }) => {
                settodosList(data)
            })
        }
        catch (error) {
            console.log(error);
        }
    }
    const saveTodos = () => {

        const payLoad = {
            title: text,
            status: true,
        }
        axios.post("http://localhost:3004/todos", payLoad);
        getTodos();
        settext("")

    }
    const handleRemove = (a) => {

        axios.delete("http://localhost:3004/todos/" + a).then(({ data }) => {

        });
        getTodos();


    }




    return (
        <div>
            <input type="text" value={text} onChange={
                (e) => { settext(e.target.value) }
            } />
            <button
                onClick={
                    saveTodos
                }
            >Add</button>
            <div>
                {
                    todosList.map((e) => {
                        return <div key={e.id}>
                            <p>{e.title}</p>
                            <p>{e.status}</p>
                            <button onClick={
                                () => handleRemove(e.id)
                            }>Remove</button>
                        </div>
                    })
                }
            </div>
        </div>
    )
}