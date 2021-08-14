import React from "react"
import { useDispatch } from "react-redux"
import styled from 'styled-components'
import { v4 as uuid } from 'uuid'
import { addTodo } from "../redux/todo/actions"
const Side = styled.div`
height:100vh;
width: 80vw;
border: 1px solid black;
border-left: none;
position: absolute;
left: 20vw;
top: 0;
display: flex;
justify-content: space-evenly;
align-items: center;
flex-direction: column;
&>div{
    width: 90%;
    border: 1px solid black;
    height: 20%;
    display: flex;
    justify-content: space-evenly;
}
&>div:nth-child(1){
    height:50%;
}
&>div:nth-child(1)>div{
    display: flex;
    justify-content: center;
    flex-direction: column;
}
&>div>select{
    height: 40px;
}
`


export function AddTodos() {
    const [title, setTitle] = React.useState("")
    const [description, setDescription] = React.useState("")
    const [date, setDate] = React.useState("")
    const [subTask, setSubTask] = React.useState("")
    const [subTaskList, setSubTaskList] = React.useState([]);
    const [type, setType] = React.useState("OFFICIAL")
    const [progress, setProgress] = React.useState("TODO")
    const initPayload = {
        title: "",
        date: "",
        task: [],
        description: "",
        type: "OFFICIAL",
        progress: "TODO",
    }
    const handleToggle = (id) => {
        const toggleTask = subTaskList.map((e) => {
            if (id === e.id) {
                e.status = !e.status;
            }
            return e;
        })
        setSubTaskList([...toggleTask]);
    }
    const handleDelete = (id) => {
        const toggleTask = subTaskList.filter((e) => {
            return id !== e.id;
        })
        setSubTaskList([...toggleTask]);
    }
    const dispatch = useDispatch();
    const handleAdd = () => {
        const payload = {
            title: title,
            date: date,
            task: subTaskList,
            description: description,
            type: type,
            progress: progress,
        }
        dispatch(addTodo({ ...initPayload, ...payload }));
        setDate("");
        setSubTaskList([]);
        setTitle("");
        setProgress("TODO");
        setType("OFFICIAL");
        setDescription("");
    }

    return <React.Fragment>
        <Side>
            <div>
                <div>
                    <input value={title} onChange={(e) => {
                        setTitle(e.target.value)
                    }} placeholder="Title"></input>
                    <textarea value={description} onChange={(e) => {
                        setDescription(e.target.value)
                    }} placeholder="Description"></textarea>
                </div>
                <div>
                    <span>
                        <input value={subTask} onChange={(e) => {
                            setSubTask(e.target.value)
                        }} placeholder="Add Subtask"></input><button onClick={(e) => {
                            const block = {
                                task: subTask,
                                status: false,
                                id: uuid()
                            }
                            setSubTaskList([...subTaskList, block]);
                            setSubTask("");
                        }}>ADD</button>
                    </span>
                    {
                        subTaskList.map((e) => {
                            return <span key={e.id}>

                                <p> <input onChange={() => {
                                    handleToggle(e.id);
                                }} checked={e.status} type="checkbox" /> {e.task} <button onClick={() => {
                                    handleDelete(e.id)
                                }}>delete</button></p>

                            </span>
                        })
                    }
                </div>
                <div>
                    <span>Date<input value={date} onChange={(e) => {
                        setDate(e.target.value)
                    }} placeholder="Add Date"></input></span>
                    <span><button onClick={() => { handleAdd() }}>Create a new task</button></span>
                </div>
            </div>
            <div>
                <select value={progress} onChange={(e) => {
                    setProgress(e.target.value)
                    console.log(e.target.value)
                }}>
                    <option>TODO</option>
                    <option>INPROGRESS</option>
                    <option>DONE</option>
                </select>
            </div>
            <div>
                <select value={type} onChange={(e) => {
                    setType(e.target.value)
                    console.log(e.target.value)
                }}>
                    <option>OFFICIAL</option>
                    <option>PERSONAL</option>
                    <option>OTHERS</option>
                </select>
            </div>

        </Side>
    </React.Fragment>
}