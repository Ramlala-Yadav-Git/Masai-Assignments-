
import { TodosInput } from "./TodosInput"
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getTodos, addTodos } from "../../Store/TodosStore/action";

export const TodosList = () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch();

    const { todos } = state
    const { isLoading, isError, isAuth } = todos

    useEffect(() => {
        GetTodos()
    }, [dispatch])

    const GetTodos = () => {
        dispatch(getTodos())
    }


    const GetInput = (data) => {
        let payload = {
            title: data
        }
        dispatch(addTodos(payload))
        GetTodos()
    }

    if (isLoading) {
        return <h4>...Loading</h4>
    }
    if (isError) {
        return <h4>Something went Wrong</h4>
    }
    return <>

        <TodosInput GetInput={GetInput} />

        <div>
            {
                todos.todos.map((el) => {
                    return <div key={el.id}>
                        <p>{el.title}</p>
                    </div>
                })}

        </div>

    </>
}

