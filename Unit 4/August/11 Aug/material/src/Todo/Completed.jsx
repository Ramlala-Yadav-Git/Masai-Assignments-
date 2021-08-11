import Button from "@material-ui/core/Button"
import { useState } from "react"
import { Redirect } from "react-router-dom"
import { useSelector } from "react-redux"
import axios from "axios"


export const Completed = () => {
    const [back, setBack] = useState(false)
    const state = useSelector(state => state.todo.comp)

    console.log(state);


    const handleClick = () => {
        setBack(!back)
        setTimeout(() => {
            setBack(false)
        }, 1000)
    }
    if (back) {
        return <Redirect to="/" />
    }

    return <>
        <h1>Compleated</h1>

        <div>
            {
                state &&

                state.map((e, i) => {

                    return <div>
                        <h3>
                            {e.title}
                        </h3>
                    </div>

                })
            }
        </div>

        <Button variant="contained" color="primary" style={{ marginTop: "10px", marginRight: "10px" }} onClick={handleClick}>
            Back
        </Button>


    </>
}