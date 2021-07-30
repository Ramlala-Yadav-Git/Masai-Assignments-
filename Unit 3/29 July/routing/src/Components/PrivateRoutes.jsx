import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";

import { AuthContext } from "../Context/AuthContext";

export function PrivateRoutes({ path, children }) {

    const { authed } = useContext(AuthContext)

    if (!authed) {

        return <Redirect to="/login" />
    }
    return <>

        <Route path={path}>{children}</Route>
    </>

}
