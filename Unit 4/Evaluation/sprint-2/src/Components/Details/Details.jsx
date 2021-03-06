import { useParams } from "react-router"
import axios from "axios";
import { useState } from "react";
import styles from "../Dashboard/Dashboard.module.css"
import { Link } from "react-router-dom";
export const Details = () => {

    const params = useParams()
    const [data, setData] = useState({})
    const [show, showDta] = useState(false)
    const [actor, setActor] = useState("")
    const details = () => {
        axios.get(`http://www.omdbapi.com/?apikey=7e60f6c4&i=${params.id}`).then((res) => {
            console.log(res.data.Actors.substr(0, 5));
            setActor(res.data.Actors.substr(0, 5))
            setData(res.data)
        })
    }
    const showDetails = () => {
        details()
        showDta(!show)
    }


    return <>

        {!show ?
            <div className={styles.detailsButton}>
                <button onClick={showDetails}>Show Details</button>
            </div>
            : <div className={styles.detailsButton}>
                <button onClick={showDetails}>Hide Details</button>
            </div>
        }
        {show &&
            <div className={styles.details}>

                <div>
                    <img src={data.Poster} alt="" />
                </div>
                <div className={styles.des}>
                    <h3>{data.Title}</h3>
                    <Link to={`${params.id}/${actor}`}>
                        <h3 >Actors : {data.Actors}</h3>
                    </Link>
                    <p>Awards : {data.Awards}</p>
                    <p>BoxOffice : {data.BoxOffice}</p>
                    <p>Country : {data.Country}</p>
                    <p>Director : {data.Director}</p>
                    <p>Storyline : {data.Plot}</p>
                </div>
            </div>
        }
    </>
}