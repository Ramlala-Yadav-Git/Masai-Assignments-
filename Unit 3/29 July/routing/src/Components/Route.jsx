import { Route, Switch } from "react-router-dom";
import { Dashboard } from "../Components/Dashboard"
import { About } from "../Components/About"
import { Contact } from "../Components/Contact"
import { Home } from "../Components/Home"
import { Users } from "../Components/Users"
import { Navbar } from "../Components/Navbar"
import { UserRoute } from "../Components/UserRoute"
///RegEx
function Router() {
    return (
        <div >
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/dashboard">
                    <Dashboard />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route exact path="/users">
                    <UserRoute />
                </Route>
                <Route path="/users/:id">
                    <Users />
                </Route>
                <Route>
                    404 Page Not Found
                </Route>
            </Switch>

        </div>
    );
}

export default Router;


