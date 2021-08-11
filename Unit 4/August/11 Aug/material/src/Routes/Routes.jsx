import { Route, Switch } from "react-router-dom"
import { TodoList } from "../Todo/Todo"
import { Completed } from "../Todo/Completed"

export const Routes = () => {



    return <>
        <Switch>
            <Route exact path="/">
                <TodoList />
            </Route>

            <Route path="/completed">
                <Completed />
            </Route>
        </Switch>

    </>
}