import { Navbar } from "../Navbar/Navbar";
import { Home } from "../Components/Home";
import { Women } from "../Components/Women";
import { Men } from "../Components/Men";
import { Kids } from "../Components/Kids";
import { Beauty } from "../Components/Beauty";
import { Profile } from "../Components/Profile";
import { Wishlist } from "../Components/Wishlist";
import { Bag } from "../Components/Bag";
import { HomeAndLiving } from "../Components/Home&Living";
import { Login } from "../Login/Login"
import { Switch, Route } from "react-router";
import { Footer } from "../Footer/Footer";
export function Routes(params) {

    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/men">
                    <Men />
                </Route>
                <Route path="/women">
                    <Women />
                </Route>
                <Route path="/kids">
                    <Kids />
                </Route>

                <Route path="/home&living">
                    <HomeAndLiving />
                </Route>
                <Route path="/beauty">
                    <Beauty />
                </Route>
                <Route path="/profile">
                    <Profile />
                </Route>
                <Route path="/wishlist">
                    <Wishlist />
                </Route>
                <Route path="/Bag">
                    <Bag />
                </Route>

                <Route path="/login">
                    <Login />
                </Route>
            </Switch>
            <Footer />
        </>
    )
}