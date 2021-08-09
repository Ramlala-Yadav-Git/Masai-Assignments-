import { Navbar } from "./Navbar";
import { Dashboard } from "../Components/Dashboard/Dashboard";
import { Details } from "../Components/Details/Details";
import { Switch, Route } from "react-router";
export const Routes = () => {


    return <>
        <Navbar />

        <Switch>


            <Route exact path="/">
                <Dashboard />
            </Route>
            <Route path="/details/:id">
                <Details />
            </Route>
        </Switch>

    </>
}