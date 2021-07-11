import { useState } from "react"
import { v4 as uuid } from "uuid"
import styles from "./style.module.css"
import { List } from "./list"
import { ShowComp } from "./showCompleted"
export function ToDoInput() {
    const [input, setInput] = useState("")
    const handleInput = (e) => {
        setInput(e.target.value)

    }
    const [inputList, setInputList] = useState([])


    const handleClick = () => {

        const payLoad = {
            id: uuid(),
            title: input
        }
        setInputList([...inputList, payLoad])

        setInput("")

    }
    const handleRemove = (id) => {
        const filterData = inputList.filter((e) => {
            //  console.log(id);
            return e.id !== id;
        })

        setInputList(filterData)

    }
    const [completed, setCompleted] = useState([])
    const handleDone = (id) => {

        let a = document.getElementById(id)
        a.style.color = "green"
        a.style.textDecoration = "line-through"

        const filterData = inputList.filter((e) => {

            return e.id !== id;
        })
        const c = inputList.filter((e) => {

            return e.id === id;
        })


        setCompleted([...completed, ...c])
        setInputList(filterData)
        //console.log();
    }

    const [show, setShow] = useState(completed)
    const ShowCompleted = () => {
        let comp = document.getElementsByClassName(styles.comp)[0]
        comp.style.display = "block"

        if (completed.length === 0) {
            setShow([{ title: "Not Any Task Compleated" }])
        }
        else {
            setShow(completed)
        }

        console.log(completed);

    }
    return <>
        <div className={styles.todo}>
            <div className={styles.input}>
                <input onChange={(e) => handleInput(e)} type="text" name="name" placeholder="+ Add to-do" value={input} />
                <button onClick={() => { handleClick() }}>ADD</button>
                <button onClick={() => { ShowCompleted() }}>Show Completed</button>
            </div>
            <div className={styles.inputList}>
                {
                    inputList.map((e) => {
                        return <List title={e.title} id={e.id} key={e.id} handleRemove={handleRemove} handleDone={handleDone} />
                    })
                }
            </div>
            <div className={styles.completed}>
                <h3 className={styles.comp}>Completed</h3>
                {
                    (show.map((e) => {
                        return <ShowComp title={e.title} id={e.id} key={e.id} />
                    }))

                }

            </div>
        </div>
    </>
}