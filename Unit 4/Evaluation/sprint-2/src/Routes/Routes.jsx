import { Navbar } from "./Navbar";
import { Dashboard } from "../Components/Dashboard/Dashboard";

import { Switch, Route } from "react-router";
export const Routes = () => {


    return <>
        <Navbar />
        <Switch>


            <Route exact path="/">
                <Dashboard />

            </Route>
        </Switch>

    </>
}