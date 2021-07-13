import { useEffect, useState, } from "react"

function We2(params) {
    const [Counter, setCounter] = useState(0)
    useEffect(() => {

    }, [])

    const [hide, setHide] = useState(false)

    setInterval(() => {

        setCounter((e) => {
            if (e === 10) { return clearInterval() }
            else
                return e + 1;
        })
    }, 3000)



    const handleHide = () => {
        setHide(!hide)
    }
    return (
        <>
            {hide ? <>
                <h3>Counter :{Counter}</h3>
                <button onClick={handleHide}>hide</button> </> : <div>
                <button onClick={handleHide}>Show</button>
            </div>
            }

        </>
    )

}
export { We2 }
