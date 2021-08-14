import React from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from 'styled-components'
import { getTodo } from "../redux/todo/actions"
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
&>div{
    width: 20vw;
    border: 1px solid black;
    height: 95vh;
}
`
const Title = styled.h3`
display: flex;
justify-content: center;
padding: 10px;
border-bottom: 1px solid black;
`

export function TodosTask() {
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
            <div>
                <Title>TODO</Title>
                {
                    todo.map((e) => {
                        return <div>
                            <h4>{e.title}</h4>
                            <p>{e.type}</p>
                            <p>{e.description}</p>
                            <p>{e.date}</p>
                            {e.task.map((et) => {
                                return <>
                                    <span><input checked={et.status} type="checkbox" />{et.task}</span>
                                </>
                            })}
                        </div>
                    })
                }
            </div>
            <div>
                <Title>IN PROGRESS</Title>
                {
                    inProgress.map((e) => {
                        return <div>
                            <h4>{e.title}</h4>
                            <p>{e.type}</p>
                            <p>{e.description}</p>
                            <p>{e.date}</p>
                            {e.task.map((et) => {
                                return <>
                                    <span><input checked={et.status} type="checkbox" />{et.task}</span>
                                </>
                            })}
                        </div>
                    })
                }
            </div>
            <div>
                <Title>DONE</Title>
                {
                    done.map((e) => {
                        return <div>
                            <h4>{e.title}</h4>
                            <p>{e.type}</p>
                            <p>{e.description}</p>
                            <p>{e.date}</p>
                            {e.task.map((et) => {
                                return <>
                                    <span><input checked={et.status} type="checkbox" />{et.task}</span>
                                </>
                            })}
                        </div>
                    })
                }
            </div>

        </Side>
    </React.Fragment>
}