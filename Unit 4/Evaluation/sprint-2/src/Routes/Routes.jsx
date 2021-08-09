import { Navbar } from "./Navbar";

import { Switch, Route } from "react-router";
export const Routes = () => {


    return <>
        <Switch>
            <Navbar />
            <Route exact="/">


            </Route>
        </Switch>

    </>
}