
import { RegisterInput } from "./Registerinput"
import { useDispatch, useSelector } from "react-redux"
import { getReg } from "../../Store/Register/action"
import { Redirect } from "react-router-dom"

export const Register = () => {

    const dispatch = useDispatch()
    const state = useSelector(state => state.Reg);

    // console.log(state);
    const { isLoading, isError, isAuth, token } = state;

    const getInput = (data) => {

        dispatch(getReg(data))

        // console.log(payload);

    }

    if (isLoading) {
        return <h5>....Loading</h5>
    }

    if (isError) {
        return <h5>Something Went Wrong</h5>
    }
    if (isAuth) {
        return <Redirect to="/login" />
    }

    return (
        <>
            <h3>Fill your data carefully for Rgister Yourself..</h3>
            <RegisterInput getInput={getInput} />

        </>
    )
}