
import { Route, Link, Switch } from "react-router-dom"
import { Home } from "../Components/BookProperty/Home"
import { SubmissionForm } from "../Components/BookProperty/SubmissionForm"
import { UsdConverter } from "../Components/usdConverter/usdConverterInput"
import styles from "../Components/BookProperty/BookProperty.module.css"
export const Routes = () => {





    return <>
        <Navbar />
        <div>
            <Switch>
                <Route exact path="/">
                    <Home />
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
        <div >
            <Link className={styles.navbar} to="/">Book Property</Link>
            <Link className={styles.navbar} to="/usd">USD Converter</Link>
        </div>
    </>
}