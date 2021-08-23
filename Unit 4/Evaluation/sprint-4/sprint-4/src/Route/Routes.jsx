
import { Route, Link, Switch } from "react-router-dom"
import { BookProperty } from "../Components/BookProperty/BookProperty"
import { SubmissionForm } from "../Components/BookProperty/SubmissionForm"
import { UsdConverter } from "../Components/usdConverter/usdConverterInput"
export const Routes = () => {





    return <>
        <Navbar />
        <div>
            <Switch>
                <Route exact path="/">
                    <BookProperty />
                </Route>
                <Route path="/usd">
                    <UsdConverter />
                </Route>
                <Route path="/submitForm">
                    <SubmissionForm />
                </Route>
            </Switch>
        </div>

    </>
}

const Navbar = () => {


    return <>
        <div>
            <Link to="/">Book Property</Link>
            <Link to="/usd">USD Converter</Link>
        </div>
    </>
}