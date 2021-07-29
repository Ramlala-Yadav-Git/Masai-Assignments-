import React from "react"
import styled from "styled-components"
import axios from "axios"
import { useContext } from "react"
import { AuthContext } from "./AuthData"
const Container = styled.div`
width: 100vw;
height: 40px;
background: #2d2d2d;
display: flex;
justify-content: flex-end;
align-items: center;
& >button{
    margin:0 20px;
    background: #ccc;
    padding: 5px;
    border-radius: 3px;
}
`
const Section = styled.div`
`
export function Auth() {
    const value = useContext(AuthContext);
    console.log(value);

    const postLogin = () => {
        axios.post("https://reqres.in/api/api/login", {
            "email": "Ramlala71524@gmail.com",
            "password": "engineer"
        }).then(res => {
            value.setIsAuth(true);
            value.setToken(res.data.id)
        })
    }
    const postLogout = () => {
        value.setIsAuth(false);
        value.setToken("")
    }

    return <>
        <Container>
            {
                value.isAuth ? <button onClick={postLogout}>Logout</button> : <button onClick={postLogin}>Login</button>
            }
        </Container>
        <Section>
            <p>Login Status: {value.isAuth ? "True" : "False"}</p>
            <p>{value.token.length !== 0 ? "Token : " + value.token : ""}</p>
        </Section>
    </>
}