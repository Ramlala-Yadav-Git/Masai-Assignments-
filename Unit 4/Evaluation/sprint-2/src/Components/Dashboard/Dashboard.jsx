import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { movieList } from "../../Reducers/DashBoardReducer/action";
import styles from "../Dashboard/Dashboard.module.css"
import { Redirect } from "react-router";

export const Dashboard = () => {
    const state = useSelector(state => state.Dash)
    const [quary, setQuary] = useState("")
    const [page, setPage] = useState(1)
    const dispatch = useDispatch()

    useEffect(() => {
        getData()
    }, [page])
    const handleSearch = () => {
        getData()
    }
    const getData = () => {


        dispatch(movieList({ quary, page }))


    }
    const showDetails = (title) => {
        alert(title)
    }

    return <>
        <h1>Hi THis is Dashboard</h1>
        <input type="text" placeholder="Search here your Quary" onChange={(e) => setQuary(e.target.value)} value={quary} />
        <button onClick={handleSearch}>Search</button>
        <div className={styles.movieContainer}>


            {
                state.data && state.data.map((e, i) => {
                    return <div key={e.imdbID} >
                        <img src={e.Poster} alt="poster" onClick={() => showDetails(e.Title)} />

                        <h2> {e.Title}</h2>
                        <h4>Relese Year: {e.Year}</h4>

                    </div>
                })
            }




        </div>
        <div className={styles.page}>
            <button onClick={() => {
                setPage((e) => {
                    console.log(e);
                    if (e === 1) { return 5 }
                    return e - 1;
                })
            }}>Prev</button>
            <button
                onClick={() => {
                    setPage((e) => {

                        if (e === 5) { return 1 }
                        return e + 1;
                    })
                }}
            >Next</button>
        </div>

    </>
}