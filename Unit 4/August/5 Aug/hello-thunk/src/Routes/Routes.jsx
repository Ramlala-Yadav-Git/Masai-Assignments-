
import { Route, Switch } from "react-router";
import { Navbar } from "./Navbar";
import { LoginPage } from "../Components/Login/LoginPage";
import { Register } from "../Components/Register/Register";
import { DashBoard } from "../Components/DashBoard/DashBoard";
export const Routes = () => {



    return <>
        <Navbar />
        <Switch>
            <Route exact path="/">
                <Register />
            </Route>
            <Route path="/login">
                <LoginPage />
            </Route>
            <Route exact path="/dashboard">
                <DashBoard />
            </Route>
        </Switch>


    </>

}