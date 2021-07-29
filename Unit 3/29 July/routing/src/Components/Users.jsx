import { useParams } from "react-router"

export function Users() {

    const params = useParams()

    return (
        <h4>User : {params.id}</h4>
    )
}