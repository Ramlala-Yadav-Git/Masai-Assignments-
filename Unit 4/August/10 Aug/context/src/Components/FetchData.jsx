
import { useFetch } from "../Hooks/useFetch"
import { useState } from 'react';

function FetchData() {

    const [page, setPage] = useState(1)
    const [loading, error, data] = useFetch(`https://json-server-mocker-masai.herokuapp.com/users?_page=${page}&_limit=3`)
    if (loading) {
        return <h4>Loading....</h4>
    }
    if (error) {
        return <h4>Something went wrong</h4>
    }
    return (
        <div className="App">
            <h1>useContext</h1>

            <ul style={{ listStyle: "none" }}>
                {
                    data.map((e) => {
                        return <li key={e.id}>
                            {e.name}
                        </li>
                    })
                }
            </ul>
            <button disabled={page === 1} onClick={() => setPage(page - 1)}>Prev</button>

            <button disabled={page === 3} onClick={() => setPage(page + 1)}>Next</button>
        </div>
    );
}

export default FetchData;
