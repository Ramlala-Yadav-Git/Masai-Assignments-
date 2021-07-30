import { Route, Switch } from "react-router-dom";
import { Dashboard } from "../Components/Dashboard"
import { About } from "../Components/About"
import { Contact } from "../Components/Contact"
import { Home } from "../Components/Home"
import { Users } from "../Components/Users"
import { Navbar } from "../Components/Navbar"
import { UserRoute } from "../Components/UserRoute"
import { Login } from "./Login"
import { PrivateRoutes } from "./PrivateRoutes"
import { Setting } from "./Setting"


///RegEx
function Router() {
    return (
        <div >
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <PrivateRoutes path="/dashboard">
                    <Dashboard />
                </PrivateRoutes>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/setting">
                    <Setting />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <PrivateRoutes exact path="/users">
                    <UserRoute />
                </PrivateRoutes>
                <PrivateRoutes path="/users/:id">
                    <Users />
                </PrivateRoutes>
                <Route path="/login">
                    <Login />
                </Route>
                <Route>
                    404 Page Not Found
                </Route>
            </Switch>

        </div>
    );
}

export default Router;


