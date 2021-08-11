
import { TodoInput } from "./TodoInput"
import Button from "@material-ui/core/Button"
import { get_todo, Get_compelted } from "../Reducers/action";

import { useState } from "react"
import { Redirect } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import { delet_todo, edit_todo, toggle_todo } from "../Reducers/action";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { Link } from "@material-ui/core";
import { useEffect } from "react";
import axios from "axios";


export function TodoList() {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const [completed, setCompleted] = useState(false);
    const [edit, setEdit] = useState(false)
    const [editData, setEditData] = useState("")
    const [editId, setEditId] = useState("")

    const handleEdit = (id) => {
        setEdit(!edit)
        setEditId(id)


    }
    const handleDelete = (id) => {
        dispatch(delet_todo(id))


    }
    const handleToggle = (id) => {
        dispatch(toggle_todo(id))

    }
    const handleCompleted = () => {
        dispatch(Get_compelted())
        setCompleted(!completed)
        setTimeout(() => {
            setCompleted(!completed)
        }, 1000)
    }

    const GetTodo = (data) => {
        const payload = {
            status: false,
            title: data,

        }

        dispatch(get_todo(payload))


    }

    const handleSub = () => {
        let payload = {
            id: editId,
            title: editData
        }
        dispatch(edit_todo(payload))
        setEdit(!edit)
    }
    if (completed) {
        return <Redirect to="/completed" />
    }


    return (<>
        <TodoInput GetTodo={GetTodo} />

        <div>
            {
                state.todo.todo && state.todo.todo.map((el, i) => {
                    return <div key={el.id} style={{ border: "1px solid gray", width: "50%", margin: "auto", borderRadius: "10px", marginTop: "10px" }}>
                        <h5>{el.title}</h5>
                        <EditIcon style={{ color: "blue", marginRight: "10px", cursor: "pointer" }} onClick={() => handleEdit(el.id)} />
                        <DeleteForeverIcon style={{ color: "red", cursor: "pointer", marginRight: "10px" }} onClick={() => handleDelete(el.id)} />
                        <CheckCircleIcon style={{ color: "green", cursor: "pointer" }} onClick={() => handleToggle(el.id)} />
                    </div>
                })
            }
        </div>


        <Button variant="contained" color="primary" style={{ marginTop: "10px" }} onClick={handleCompleted}>
            Show Completed
        </Button>

        {
            edit && <div style={{ position: "absolute", top: "100px", right: "20px", borderRadius: "10px" }}>
                <textarea name="text" onChange={(e) => setEditData(e.target.value)} value={editData} style={{ width: "300px", height: "100px" }}></textarea>
                <br />
                <Button variant="contained" color="primary" style={{ marginTop: "10px" }} onClick={handleSub}>
                    Submit
                </Button>
            </div>
        }

    </>
    )
}

