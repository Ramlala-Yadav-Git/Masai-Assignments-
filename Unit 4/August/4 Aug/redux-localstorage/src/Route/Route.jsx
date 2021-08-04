
import { Route, Switch, Link, Redirect } from "react-router-dom"
import { Todos } from "../components/Todos"
import { Login } from "../components/Login"
import { useSelector } from "react-redux"
export const RoutePath = () => {
    const state = useSelector((state) => ({
        token: state.auth.token
    }))

    console.log(state.token);
    const HandleClick = () => {

    }

    return <>
        <div style={{ display: "flex", width: "20%", margin: "auto", textAlign: "center" }}>
            <div style={{ margin: 10, fontWeight: "bold" }} onClick={() => HandleClick}>
                <Link to="/">TODO</Link>
            </div>
            <div style={{ margin: 10, fontWeight: "bold" }} onClick={() => HandleClick}>
                <Link to="/login">Login</Link>

            </div>
        </div>
        <Switch>
            <Route exact path="/">
                {
                    state.token === "" ? <Login /> : <Todos />
                }

            </Route>
            <Route path="/login">
                <Login />
            </Route>
        </Switch>

    </>
}