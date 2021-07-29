
import { DynamicRoute } from "./DynamicRoute";
import { Switch, Route } from "react-router";
import { Home } from "../DynamicRoute/Home";
import { Products } from "./Products"
import { ProductDetails } from "../DynamicRoute/ProductDetails"

export function DynamicPath() {

    return (
        <>
            <DynamicRoute />
            <Switch>

                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/products">
                    <Products />
                </Route>
                <Route path="/products/:id">
                    <ProductDetails />
                </Route>

            </Switch>
        </>
    )
}