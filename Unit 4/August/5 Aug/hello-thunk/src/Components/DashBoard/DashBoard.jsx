import { useState } from "react"

import { useSelector, useDispatch } from "react-redux"
import { Redirect } from "react-router-dom"
import { searchReq } from "../../Store/Dashboard/action"

export const DashBoard = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.Dash)
    const [search, setSearch] = useState("")

    const handleSearch = () => {
        const payload = {
            search
        }

        dispatch(searchReq(payload))
        setSearch("")
    }

    if (state.isLoading) {
        return <h4>Loading data ...</h4>
    }
    if (state.isError) {
        return <h4>Something Went Wrong</h4>
    }
    // if (!state.isAuth) {
    //     return <Redirect to="/login" />
    // }
    return (
        <>
            <h4>WELCOME TO DASHBOARD</h4>
            <div>

                <input type="text" name="search" placeholder="Enter Search Query.." onChange={e => setSearch(e.target.value)} value={search} />
                <br />
                <br />
                <button onClick={handleSearch}>Search</button>
                <br />
                <br />
                <br />
            </div>

            {
                state.data.map((e) => {
                    return <div key={e.id}>

                        user: <h4 style={{ display: "inline-block" }}>{e.login}</h4>

                        <img style={{ display: "inline-block", borderRadius: 10, marginBottom: -15, marginLeft: 10 }} width="40" src={e.avatar_url} alt="im" />

                    </div>
                })
            }
        </>
    )
}