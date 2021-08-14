import React from "react"
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components'
import { getTodo } from "../redux/todo/actions";
const Side = styled.div`
height:100vh;
width: 80vw;
border: 1px solid black;
border-left: none;
position: absolute;
left: 20vw;
top: 0;
display: flex;
flex-direction: column;
`
const Title = styled.h3`
margin-left: 10vw;
margin-top: 20px;
`

export function TodosSummary() {
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(getTodo());
    }, [dispatch])
    const data = useSelector((state) => state.todo.list)

    const todo = data.filter((e) => {
        return e.progress === "TODO"
    })
    const inProgress = data.filter((e) => {
        return e.progress === "INPROGRESS"
    })
    const done = data.filter((e) => {
        return e.progress === "DONE"
    })
    console.log(data);
    console.log(todo, inProgress, done);
    return <React.Fragment>
        <Side>
            <h3 style={{ margin: "10vh 0 0 10vw" }}>Summary</h3>
            <Title>TODO {todo.length}</Title>
            <Title>DONE {done.length}</Title>
            <Title>INPROGRESS {inProgress.length}</Title>

        </Side>
    </React.Fragment>
}