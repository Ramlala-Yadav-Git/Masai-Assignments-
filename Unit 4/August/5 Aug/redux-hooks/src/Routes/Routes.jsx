import { Route, Switch } from "react-router-dom";
import { Navbar } from "../Components/Navbar/Navbar";
import { RegisterPage } from "../Components/Register/RgisterPage";
import { LoginPage } from "../Components/Login/LoginPage";
import { Home } from "../Components/Home/Home";

export const Routes = () => {





    return <>
        <Navbar />
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/login">
                <LoginPage />
            </Route>
            <Route exact path="/register">
                <RegisterPage />
            </Route>
        </Switch>
    </>
}