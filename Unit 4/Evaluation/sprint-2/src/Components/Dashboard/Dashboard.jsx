import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { movieList } from "../../Reducers/DashBoardReducer/action";
import styles from "../Dashboard/Dashboard.module.css"

export const Dashboard = () => {
    const state = useSelector(state => state.Dash)
    const [quary, setQuary] = useState("")
    const [page, setPage] = useState(1)
    const dispatch = useDispatch()

    const handleSearch = () => {
        getData()
    }
    const getData = () => {
        console.log(quary);

        dispatch(movieList({ quary, page }))
        setQuary("")
        console.log(state);
    }

    return <>
        <h1>Hi THis is Dashboard</h1>
        <input type="text" placeholder="Search here your Quary" onChange={(e) => setQuary(e.target.value)} value={quary} />
        <button onClick={handleSearch}>Search</button>
        <div className={styles.movieContainer}>


            {
                state.data.data && state.data.data.Search.map((e) => {
                    return <div key={e.imdbID} >
                        <img src={e.Poster} alt="poster" />

                        <h2> {e.Title}</h2>
                        <h4>Relese Year: {e.Year}</h4>

                    </div>
                })
            }


        </div>
        <div>
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