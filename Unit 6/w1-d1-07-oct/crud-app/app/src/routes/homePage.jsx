

import { Route, Switch } from "react-router";
import { Home } from "../components/Home";
import { User } from "../components/users"

export const Routes = () => {




    return <>
        <Switch>
            <Route exact path="/">

                <Home />
            </Route>
            <Route path={`/:id`}>
                <User />
            </Route>


        </Switch>
    </>

}