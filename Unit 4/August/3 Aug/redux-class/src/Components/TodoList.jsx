import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { AddTodo, removeTodo, ToggleTodo, getTodo, SetEdit } from "../Store/action";
import axios from "axios";
import { v4 as uuid } from "uuid";
import { useState, useEffect } from "react";
import styles from "../module/todo.module.css";
import styled from "styled-components";
const TodoWrapper = styled.div`

& > div {
border: 1px solid gray;
padding: 10px;
margin: auto;
margin-top: 10px;
width: 500px;
border-radius: 10px;

}
`
export const TodoList = () => {
    const state = useSelector(state => state.data)
    const dispatch = useDispatch()
    const [title, setTitle] = useState("")
    const [edit, setEdit] = useState(false)
    const [editedText, setEditedText] = useState("")
    const [editId, setEditId] = useState("")
    useEffect(() => {
        GetTodos()
    }, [])
    const HandleAdd = () => {
        const payLoad = {
            id: uuid(),
            status: false,
            title: title
        }
        dispatch(AddTodo(payLoad))
        setTitle("");

    }
    const HandleToggle = (id) => {
        dispatch(ToggleTodo(id))
    }
    const HandleRemove = (id) => {
        dispatch(removeTodo(id))
    }
    const HandleEdit = (id) => {
        setEdit(!edit)
        setEditId(id)
    }
    const HandleSubmit = () => {


        const payLoad = {
            id: editId,
            title: editedText,

        }

        dispatch(SetEdit(payLoad))
        setEdit(!edit)
    }

    const GetTodos = () => {
        axios.get("http://localhost:3001/todos").then(({ data }) => {
            dispatch(getTodo(data))
        })

    }


    return (
        <>
            <input type="text" placeholder="+ ADD TODO" onChange={(e) => setTitle(e.target.value)} value={title} />
            <button onClick={HandleAdd}>Add</button>
            <div>
                {
                    edit && <div className={styles.edit}>
                        <textarea name="textarea" onChange={(e) => setEditedText(e.target.value)}></textarea>
                        <button onClick={HandleSubmit}>Submit</button>
                    </div >
                }
                <TodoWrapper>
                    {
                        state.map((e) => {

                            return <div key={e.id}>
                                {e.status ? <p className={styles.true}> {e.title}</p> :
                                    <p className={styles.false}>{e.title}</p>}

                                <button onClick={() => HandleToggle(e.id)}>Toggle</button>
                                <button onClick={() => HandleRemove(e.id)}>Remove</button>
                                <button onClick={() => HandleEdit(e.id)}>Edit</button>
                            </div>
                        })
                    }
                </TodoWrapper>
            </div>
        </>
    )
}