

import { login } from "../../Reducers/LoginReducer/action"
import { LoginInput } from "./LoginInput";
import { useSelector, useDispatch } from "react-redux";



export const LoginPage = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.Login)
    const { isAuth, isLoading, isError, token } = state

    const GetUserInput = (payload) => {
        dispatch(login(payload))

    }
    if (isLoading) {
        return <h4>Loading please wait .....</h4>
    }
    if (isError) {
        return <h4>Something went wrong please try again .....</h4>
    }

    return <>
        <LoginInput GetUserInput={GetUserInput} />

    </>
}