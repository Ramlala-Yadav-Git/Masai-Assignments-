import { useEffect } from "react"

import axios from "axios"

export function Axios(params) {
    const baseReq = axios.create({
        baseURL: "url",
        headers: {
            Authorization: "toke"
        }
    })

    const handle = () => {
        const res1 = axios.get()
        const res2 = axios.get()
        const res3 = axios.get()
        const res4 = baseReq.get("/2", {
            params: {

            }
        })

        Promise.all([res1, res2, res3]).then((e) => {
            console.log(e);
        })
    }

    return (
        <>
            <div>
                <h1>Hi</h1>
            </div>
        </>
    )
}