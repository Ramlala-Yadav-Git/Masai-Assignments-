import { useEffect, useState } from "react";



export function useGithubFetch(url) {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const [error, setError] = useState(false)
    console.log(url);
    useEffect(() => {

        setLoading(true)
        fetch(url).then((res) => res.json()).then((res) => {
            setData(res);

            setLoading(false);
        }).catch((err) => {
            setError(true);
            setLoading(false)
        })
    }, [url])

    return [loading, error, data]

}