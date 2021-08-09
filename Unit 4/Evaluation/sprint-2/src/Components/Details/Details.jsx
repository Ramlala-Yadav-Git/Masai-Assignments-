import { useParams } from "react-router"
import axios from "axios";
import { useState } from "react";
export const Details = () => {

    const params = useParams()
    const [data, setData] = useState({})
    const showDetails = () => {
        axios.get(`http://www.omdbapi.com/?apikey=7e60f6c4&i=${params.id}`).then((res) => {
            console.log(data);
            setData(res.data)
        })
    }


    return <>
        < h1 > Details page</h1 >
        <button onClick={showDetails}>Show Details</button>

        <div>

            <img src={data.Poster} alt="" />
            <h3>{ }</h3>
        </div>
    </>
}