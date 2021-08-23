import { useState } from "react"
import styles from "./usdConverter.module.css"

export function UsdConverter() {

    const [input, setInput] = useState("");
    const [curr, setCurr] = useState("rupee")
    const [data, setData] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        if (curr === "rupee") {
            let currentValue = (Number(input) * (74.5)).toFixed(2);

            setData(currentValue)

        }
        else {
            let currentValue = (Number(input) / (74.5)).toFixed(2);

            setData(currentValue)

        }

        setInput("")

    }
    const handleSelect = (e) => {
        setCurr(e.target.value)
    }

    return (<>
        <div className={styles.usdConverter}>
            <form onSubmit={handleSubmit}>
                <input type="number" placeholder="Enter ₹" onChange={(e) => setInput(e.target.value)} value={input} />
                <select onChange={(e) => handleSelect(e)}>
                    <option value="rupee">₹</option>
                    <option value="dolar">$</option>
                </select>
                <input type="submit" value="Submit" />
            </form>
            <div>
                <h1>{data}</h1>
            </div>
        </div>
    </>)
}