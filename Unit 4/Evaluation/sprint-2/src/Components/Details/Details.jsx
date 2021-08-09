import { useParams } from "react-router"
import axios from "axios";
import { useState } from "react";
import styles from "../Dashboard/Dashboard.module.css"
export const Details = () => {

    const params = useParams()
    const [data, setData] = useState({})
    const [show, showDta] = useState(false)
    const details = () => {
        axios.get(`http://www.omdbapi.com/?apikey=7e60f6c4&i=${params.id}`).then((res) => {
            console.log(data);
            setData(res.data)
        })
    }
    const showDetails = () => {
        details()
        showDta(!show)
    }


    return <>
        < h1 > Details
        </h1 >
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


                <img src={data.Poster} alt="" />
                <h3>{data.Title}</h3>
                <h3>Actors : {data.Actors}</h3>
                <p>Awards : {data.Awards}</p>
                <p>BoxOffice : {data.BoxOffice}</p>
                <p>Country : {data.Country}</p>
                <p>Director : {data.Director}</p>
                {/* <p>Ratings : {data.Ratings[0].Value}</p> */}

            </div>
        }
    </>
}