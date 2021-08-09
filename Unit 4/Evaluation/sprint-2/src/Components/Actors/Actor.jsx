import styles from "../Dashboard/Dashboard.module.css"
import { useParams } from "react-router"
export const Actor = () => {

    const params = useParams()

    return <>
        <div className={styles.actor}>

            <h1>Actor Details</h1>
            <div>
                <h3>Actor Name: {params.name}</h3>
                <p>Age: {Math.floor(Math.random() * 100)}</p>
                <p>Debute Year: {1980 + Math.floor(Math.random() * 20)}</p>
            </div>
        </div>

    </>
}