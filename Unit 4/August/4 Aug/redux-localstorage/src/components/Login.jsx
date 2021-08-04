import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { LoginData } from "./loginData"
import { Redirect } from "react-router-dom"
import { AuthFail, AuthSucc, AuthReq } from "../store/auth/action"

export const Login = () => {

    const dispatch = useDispatch()

    const state = useSelector(state => ({
        loading: state.auth.loading,
        err: state.auth.err,
        token: state.auth.token,
        login: state.auth.login

    }))
    const HandleData = (data) => {


        if (data.email === "ram" && data.password === "123") {

            let payLoad = {
                err: false,
                token: "abcd234",
                loading: true,
                login: true

            }
            dispatch(AuthSucc(payLoad))
            localStorage.setItem("authData", JSON.stringify(payLoad));

            return <Redirect to="/" />



        }

    }
    if (state.login) {
        return <Redirect to="/" />
    }
    return (

        <>
            <LoginData getData={HandleData} />
        </>
    )


}