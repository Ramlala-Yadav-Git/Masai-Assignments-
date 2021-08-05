import { LoginInput } from "./LoginInput";
import { useSelector, useDispatch } from "react-redux";
import { makeLog } from "../../Store/Login/action";
import { Redirect } from "react-router-dom";

export const LoginPage = () => {

    const state = useSelector(state => state.Log)
    const dispatch = useDispatch()
    const getLoginInput = (payload) => {
        dispatch(makeLog(payload))
    }


    if (state.isLoading) {
        return <h4>Loading Data...</h4>
    }
    if (state.isError) {
        return <h4>Something Went Wrong..</h4>
    }
    if (state.isAuth) {
        return <Redirect to="/dashboard" />
    }
    // if (!state.isAuth) {
    //     return <Redirect to="/" />
    // }

    return <>
        <h4>Fill Details for login</h4>
        <LoginInput getLoginInput={getLoginInput} />
    </>
}