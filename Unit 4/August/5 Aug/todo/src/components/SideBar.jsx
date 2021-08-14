import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from 'styled-components'
import { userLogout } from "../redux/auth/actions";
import { getTodo } from "../redux/todo/actions";
const Side = styled.div`
height:100vh;
width: 20vw;
border: 1px solid black;
position: absolute;
left: 0;
top: 0;
&>div:nth-child(1){
    height: 15%;
    width: 100%;
    border-bottom: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
}
&>div:nth-child(2){
    height: 60%;
    width: 100%;
    border-bottom: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
&>div:nth-child(3){
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid black;
    height: 10%;
    width: 100%;
}
&>div:nth-child(4){
    display: flex;
    justify-content: center;
    align-items: center;
    height: 15%;
    width: 100%;
    cursor: pointer;
}
`
const Lin = styled.span`
    
`
const Tab2 = () => {
    return <>
        <Link to="/add">Add Todo</Link>
        <br /><Link to="/summary">Summary</Link>
        <br /><Link to="/task">Task</Link>
    </>
}

export function SideBar() {
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(getTodo());
    }, [dispatch])
    const data = useSelector((state) => state.todo.list)
    const logout = () => {
        dispatch(userLogout());
    }

    const all = data.length;
    const personal = data.filter((e) => {
        return e.type === "PERSONAL"
    })
    const official = data.filter((e) => {
        return e.type === "OFFICIAL"
    })
    const other = data.filter((e) => {
        return e.type === "OTHERS"
    })
    const per = personal.length;
    const off = official.length;
    const oth = other.length;
    return <React.Fragment>

        <Side>
            <div><p>User: Ramlala</p></div>
            <div>
                <Lin>All {all}</Lin>
                <Lin>Personal {per}</Lin>
                <Lin>Offical {off}</Lin>
                <Lin>Others {oth}</Lin>
            </div>
            <div><Tab2 /></div>
            <div>
                <p onClick={logout}>Logout</p>
            </div>
        </Side>
    </React.Fragment>
}