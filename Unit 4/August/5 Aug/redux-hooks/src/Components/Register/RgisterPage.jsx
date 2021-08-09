import { RegisterInput } from "./RegisterInput";
import { useSelector, useDispatch } from "react-redux";

import { makeRegReq } from "../../Reducers/RegReducer/action";
import { Redirect } from "react-router-dom";

export const RegisterPage = () => {

    const dispatch = useDispatch()
    const state = useSelector(state => state.Reg)
    console.log(state);

    const { isLoading, isError, token } = state
    const GetRegInput = (payload) => {

        dispatch(makeRegReq(payload))
    }
    if (token) {
        return <Redirect to="/login" />
    }
    if (isLoading) {
        return <h4>Loading....</h4>
    }
    if (isError) {
        return <h4>Something Went Wrong....</h4>
    }

    return <>
        <RegisterInput GetRegInput={GetRegInput} />

    </>
}