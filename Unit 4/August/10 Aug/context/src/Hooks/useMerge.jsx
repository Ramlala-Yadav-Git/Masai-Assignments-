import { useEffect, useState } from "react"



export function useMerge(payload) {


    const [data, setData] = useState(payload)


    useEffect(() => {

        setData(payload);

    }, [])

    return [data]
}