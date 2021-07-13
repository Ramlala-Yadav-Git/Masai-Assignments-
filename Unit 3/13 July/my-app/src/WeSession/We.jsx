import { useState } from "react"

function We(params) {

    const [counter, setCounter] = useState(0);
    const handleCounter = () => {
        setTimeout(() => {
            setCounter((c) => { // c will refer the value on the setCounter on that time
                c = c * 2 + 1
                return document.title = c;
            })
        }, 1000)
    }

    return (
        <>
            <h1>Hi from we session</h1>
            <h1>{counter}</h1>
            <button onClick={handleCounter}>Increase Counter</button>
        </>
    )

}
export { We }
