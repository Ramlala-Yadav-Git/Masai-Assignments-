import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { movieList } from "../../Reducers/DashBoardReducer/action";
import styles from "../Dashboard/Dashboard.module.css"
import { Redirect } from "react-router";
import { Link } from "react-router-dom";

export const Dashboard = () => {
    const state = useSelector(state => state.Dash)
    const [quary, setQuary] = useState("")
    const [page, setPage] = useState(1)
    const [data, setData] = useState(state.data)
    const [sort, setSort] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        getData()
    }, [page])
    const handleSearch = () => {
        getData()

    }
    const getData = () => {


        dispatch(movieList({ quary, page }))
        setData(state.data)
        //setData(state.data)

    }
    const showDetails = (title) => {

        return <Redirect to="/details/" />
    }
    const handleSort = () => {
        let sortedData = state.data.sort((a, b) => {
            return Number(a.Year) - Number(b.Year);
        })
        setData(sortedData)

    }
    return <>
        <div className={styles.items}>
            <h1>Welcome TO Dashboard</h1>
            <input type="text" placeholder="Search here your Quary" onChange={(e) => setQuary(e.target.value)} value={quary} />
            <button onClick={handleSearch}>Search</button>
            <button onClick={handleSort}>Short BY RELEASE DATE</button>
        </div>
        <div className={styles.movieContainer}>


            {
                state.data && !sort && state.data.map((e, i) => {
                    return <div key={e.imdbID} >
                        <Link to={`/details/${e.imdbID}`}>
                            <img src={e.Poster} alt="poster" onClick={() => showDetails(e.Title)} />
                        </Link>
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