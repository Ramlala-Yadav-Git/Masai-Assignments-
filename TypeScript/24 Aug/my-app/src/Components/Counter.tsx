import { useState } from "react"
import styles from "./Counter.module.css"

export const Counter = () => {

    const [count, setCount] = useState(0)
    const handleClick = (payload: number) => {
        setCount((prev) => {
            return prev + payload
        })
    }
    return <>
        <div className={styles.counter}>
            <h1>Counter App</h1>

            <h3>{count}</h3>
            <button onClick={() => handleClick(-1)}>-</button>
            <button onClick={() => handleClick(1)}>+</button>

        </div>

    </>
}