import { useSelector } from "react-redux";
import { Link, Redirect, Route } from "react-router-dom";


export function PrivateRoutes({ children, path }) {
    const { isAuth } = useSelector((state) => state.auth);
    console.log(path)
    if (!isAuth) {
        return <Redirect to="/login"></Redirect>
    } else {
        return <>
            <Route exact path={path}>{children}</Route>
        </>
    }
}