import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTodosRequest, getTodosFailure, getTodosSuccess, addTodosFailure, addTodosRequest, addTodosSuccess } from "../store/app/action";
import { TodoInput } from "./TodosInput";
import axios from "axios"
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";


export const Todos = () => {
    const dispatch = useDispatch()

    const state = useSelector((state) => ({
        todos: state.todos.todos,
        loading: state.todos.loading,
        err: state.todos.err,
        login: state.auth.login
    }));
    const { todos, loading, err } = state;
    // console.log(todos);


    const getTodos = () => {
        dispatch(getTodosRequest());
        axios.get("http://localhost:3001/todos").then(({ data }) => {

            dispatch(getTodosSuccess(data))

        })
            .catch((err) => {
                dispatch(getTodosFailure(err))
            })

    }



    const HandleSubmit = (data) => {
        const payLoad = {
            title: data,
            status: false
        }
        dispatch(addTodosRequest())
        axios.post("http://localhost:3001/todos", payLoad).then(() => {
            console.log(data);
            dispatch(addTodosSuccess())
            getTodos()
        })
            .catch((err) => {
                dispatch(addTodosFailure(err))
            })

    }
    useEffect(() => {

        getTodos()
    }, [dispatch])

    return (
        <>
            <TodoInput HandleSubmit={HandleSubmit} />

            <div>
                {loading ? <h5>Loading...</h5>


                    : err ? <h5>Something went wrong</h5> :


                        todos.map((el) => {
                            return <div key={el.id}>
                                <h3> {el.title}</h3>

                            </div>
                        })
                }
            </div>
        </>
    )


}