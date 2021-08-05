import { LoginInput } from "./LoginPage"
import { useDispatch, useSelector } from "react-redux"
import { loginUser } from "../Auth/action"
export const Login = () => {
    const dispatch = useDispatch()
    const { isLoading, isAuth, token, isError } = useSelector(state => state.auth)

    const GetData = (data) => {
        dispatch(loginUser(data))
    }
    if (isAuth) {
        ///redirect it and return it

    }
    if (isLoading) {
        /// show loading
    }
    if (isError) {
        /// show error
    }
    return (
        <div>
            <div>
                Token : {token}
            </div>
            <LoginInput GetData={GetData} />
        </div>
    )
}

//request
// response => success & faiure