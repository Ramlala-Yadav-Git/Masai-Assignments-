import { useEffect, useRef, useState } from "react"
import { StopWatch } from "./StopWatch"
import styles from "./StopWatch.module.css"

export function Timer() {

    const [display, setDisplay] = useState(true)
    const [second, setSecond] = useState(0)
    const [data, setData] = useState(5)
    const ref = useRef()
    const ref2 = useRef()

    useEffect(() => {
        // handleTimer()
    }, [])

    const handleSubmit = () => {
        ref.current = setInterval(() => {
            setSecond(59)
            setData((m) => {
                if (m === 0) {
                    clearInterval(ref.current)
                    setSecond(0)
                    return 0;
                }

                ref2.current = setInterval(() => {

                    setSecond((prev) => {
                        if (prev === 0) {
                            clearInterval()

                            return 0;
                        }

                        return prev - 1;
                    })
                }, 100);

                return m - 1;
            })


        }, 1000);



    }

    const handleReset = () => {
        setData(5)
        setSecond(0)
        clearInterval(ref.current)
        return () => clearInterval(ref2.current)
    }
    const handleStop = () => {
        clearInterval(ref.current)
        return () => clearInterval(ref2.current)
    }
    const handleDisplay = () => {
        setDisplay(!display)
    }





    return (

        <div className={styles.main}>
            <div className={styles.header}>
                <div>
                    <h1 onClick={() => handleDisplay()}>Timer</h1>

                </div>
                <div>
                    <h1 onClick={() => handleDisplay()}>Stopwatch </h1>

                </div>
            </div>

            {display ? <div>
                <div>

                </div>

                {
                    <div className={styles.show}>
                        <p>{data} : {second} </p>

                    </div>
                }
                <div>
                    <button onClick={() => handleSubmit()}>Start</button>
                    <button onClick={() => handleReset()}>Reset</button>
                    <button onClick={() => handleStop()}>Stop</button>
                </div>
            </div> :

                <div>
                    <div className={styles.show}>
                        <StopWatch />
                    </div>
                </div>}
        </div>
    )
}