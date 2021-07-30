import { useParams } from "react-router"
import { Redirect } from "react-router"
import { useContext, useState, useEffect } from "react"
import { AuthContext } from "../Context/AuthContext"
import axios from "axios"

export function Users() {
    const [user, setUser] = useState("")
    const params = useParams()
    // console.log(params);
    const context = useContext(AuthContext)
    useEffect(() => {
        getData()
    }, [params])

    const getData = () => {
        axios.get(`https://reqres.in/api/users/${params.id}`).then(({ data }) => {
            //console.log(data.data);
            setUser(data.data)
        })
    }


    return (
        <><div style={{ textAlign: "center" }}>
            <img style={{ borderRadius: "50%" }} src={user.avatar} alt="avatar" />
            <h4>Name: {user.first_name} {user.last_name}</h4>
            <h4>Email: {user.email}</h4>
        </div>
        </>
    )

}