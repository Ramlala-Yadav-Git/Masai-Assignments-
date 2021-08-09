import { Navbar } from "./Navbar";
import { Dashboard } from "../Components/Dashboard/Dashboard";
import { Details } from "../Components/Details/Details";
import { Switch, Route } from "react-router";
import { Actor } from "../Components/Actors/Actor";
export const Routes = () => {


    return <>
        <Navbar />

        <Switch>


            <Route exact path="/">
                <Dashboard />
            </Route>
            <Route exact path="/details/:id">
                <Details />
            </Route>
            <Route path="/details/:id/:name">
                <Actor />
            </Route>
        </Switch>

    </>
}