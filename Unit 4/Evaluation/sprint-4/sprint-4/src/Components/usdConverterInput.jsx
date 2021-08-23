import { useState } from "react"


export function UsdConverter() {

    const [input, setInput] = useState("");
    const [currency, setCurrency] = ("")
    const [data, setData] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(input);
        console.log(currency);
        setInput("")

    }

    return (<>
        <form onSubmit={handleSubmit}>
            <input type="number" placeholder="Enter ₹" onChange={(e) => setInput(e.target.value)} value={input} />
            <select onChange={(e) => setCurrency(e.target.value)}>
                <option value="rupee">₹</option>
                <option value="dolar">$</option>
            </select>
            <input type="submit" value="Submit" />
        </form>
        <div>
            { }
        </div>
    </>)
}