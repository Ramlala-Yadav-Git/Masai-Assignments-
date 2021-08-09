import { useSelector, useDispatch } from "react-redux"
import { movieList } from "../../Reducers/DashBoardReducer/action";

export const Dashboard = () => {
    const state = useSelector(state => state.Dash)
    console.log("front", state);
    const dispatch = useDispatch()
    const handleSearch = () => {
        dispatch(movieList("avenger"))
        console.log(state.data.data.Search);
    }

    return <>
        <h1>Hi THis is Dashboard</h1>
        <button onClick={handleSearch}>Search</button>

    </>
}